from fastapi import FastAPI, Body
from pydantic import BaseModel, validator
from nameko.standalone.rpc import ClusterRpcProxy
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CONFIG = {"AMQP_URI": "pyamqp://guest:guest@localhost"}

class Question_mcq(BaseModel):
    subject: str
    question_type: str
    question_text: str
    options: List[str]
    correct_option: str
    weightage: int

    @validator('options')
    def validate_options(cls, v):
        if len(v) < 2:
            raise ValueError("At least two options are required.")
        return v

    @validator('correct_option')
    def validate_correct_option(cls, v, values):
        if 'options' in values and v not in values['options']:
            raise ValueError("Correct option must be one of the provided options.")
        return v

class Question_descriptive(BaseModel):
    subject: str
    question_type: str
    question_text: str
    ideal_keywords: List[str]
    weights: Optional[List[int]] = None

class EvaluateAnswerRequest(BaseModel):
    user_answer: str

@app.post("/add-question-mcq/")
def add_question_mcq(question: Question_mcq):
    try:
        with ClusterRpcProxy(CONFIG) as rpc:
            question_id = rpc.question_service.add_mcq_question(
                question.subject,
                question.question_text,
                question.options,
                question.correct_option,
                question.weightage
            )
        return {"message": "MCQ question added successfully!", "id": question_id}
    except Exception as e:
        return {"error": f"Failed to add MCQ question: {str(e)}"}, 500

@app.post("/add-question-descriptive/")
def add_question_descriptive(question: Question_descriptive):
    try:
        with ClusterRpcProxy(CONFIG) as rpc:
            question_id = rpc.question_service.add_descriptive_question(
                question.subject,
                question.question_text,
                question.ideal_keywords,
                question.weights
            )
        return {"message": "Descriptive question added successfully!", "id": question_id}
    except Exception as e:
        return {"error": f"Failed to add descriptive question: {str(e)}"}, 500

@app.post("/evaluate-answer/{question_id}")
def evaluate_answer(question_id: str, request: EvaluateAnswerRequest):
    user_answer = request.user_answer
    try:
        with ClusterRpcProxy(CONFIG) as rpc:
            result = rpc.question_service.evaluate_descriptive_answer(question_id, user_answer)
        return result
    except Exception as e:
        return {"error": f"Failed to evaluate answer: {str(e)}"}, 500
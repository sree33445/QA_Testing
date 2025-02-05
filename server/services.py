from nameko.rpc import rpc
from pymongo import MongoClient
from typing import List, Dict, Optional

class QuestionService:
    name = "question_service"

    def __init__(self):
        # Connect to MongoDB
        self.client = MongoClient("mongodb+srv://shabeebmuhammedk98:root@cluster0.r0y4m.mongodb.net/")  # Update URI if needed
        self.db = self.client["exam_db"]  # Database name
        self.questions_collection = self.db["questions"]  # Collection for questions

    @rpc
    def add_mcq_question(self, subject: str, question_text: str, options: List[str], correct_option: str, weightage: int) -> int:
        # Insert MCQ question into MongoDB
        question_data = {
            "subject": subject,
            "question_type": "mcq",
            "question_text": question_text,
            "options": options,
            "correct_option": correct_option,
            "weightage": weightage
        }
        result = self.questions_collection.insert_one(question_data)
        return str(result.inserted_id)  # Return the MongoDB-generated ID as a string

    @rpc
    def add_descriptive_question(self, subject: str, question_text: str, ideal_keywords: List[str], weights: Optional[List[int]]) -> int:
        # Insert descriptive question into MongoDB
        question_data = {
            "subject": subject,
            "question_type": "descriptive",
            "question_text": question_text,
            "ideal_keywords": ideal_keywords,
            "weights": weights if weights else [1] * len(ideal_keywords)
        }
        result = self.questions_collection.insert_one(question_data)
        return str(result.inserted_id)  # Return the MongoDB-generated ID as a string

    @rpc
    def get_question(self, question_id: str) -> Dict:
        # Retrieve a question by its MongoDB ID
        try:
            question = self.questions_collection.find_one({"_id": self._parse_object_id(question_id)})
            if question:
                question["_id"] = str(question["_id"])  # Convert ObjectId to string for JSON serialization
            return question or {}
        except Exception as e:
            print(f"Error retrieving question: {e}")
            return {}

    @rpc
    def evaluate_descriptive_answer(self, question_id: str, user_answer: str) -> Dict:
        # Fetch the question from MongoDB
        question_data = self.get_question(question_id)
        if not question_data:
            return {"error": "Question not found"}, 404

        ideal_keywords = question_data.get("ideal_keywords", [])
        weights = question_data.get("weights", [1] * len(ideal_keywords))

        # Evaluate the answer using keyword matching
        score = self.keyword_matching_with_partial_credit(user_answer, ideal_keywords, weights)

        # Determine result based on a threshold (e.g., 70%)
        passing_threshold = 0.7
        result = "Correct" if score >= passing_threshold else "Partially Correct" if score >= 0.5 else "Incorrect"

        return {
            "result": result,
            "score": f"{score * 100:.2f}%",
            "feedback": {
                "matched_keywords": [kw for kw in ideal_keywords if kw.lower() in user_answer.lower()],
                "missing_keywords": [kw for kw in ideal_keywords if kw.lower() not in user_answer.lower()]
            }
        }

    def keyword_matching_with_partial_credit(self, user_answer: str, ideal_keywords: List[str], weights: List[int]) -> float:
        user_answer = user_answer.lower()
        ideal_keywords = [keyword.lower() for keyword in ideal_keywords]

        total_score = sum(weights)
        matched_score = 0

        for i, keyword in enumerate(ideal_keywords):
            if keyword in user_answer:
                matched_score += weights[i]

        return matched_score / total_score

    @staticmethod
    def _parse_object_id(object_id: str):
        """Helper method to parse a string into an ObjectId."""
        from bson.objectid import ObjectId
        try:
            return ObjectId(object_id)
        except Exception as e:
            raise ValueError(f"Invalid ObjectId: {object_id}") from e
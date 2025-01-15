/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/signup/route";
exports.ids = ["app/api/signup/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_QA_Testing_client_app_api_signup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/signup/route.js */ \"(rsc)/./app/api/signup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/signup/route\",\n        pathname: \"/api/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/signup/route\"\n    },\n    resolvedPagePath: \"D:\\\\QA_Testing\\\\client\\\\app\\\\api\\\\signup\\\\route.js\",\n    nextConfigOutput,\n    userland: D_QA_Testing_client_app_api_signup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzaWdudXAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNpZ251cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNpZ251cCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUUFfVGVzdGluZyU1Q2NsaWVudCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1FBX1Rlc3RpbmclNUNjbGllbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz8xNzE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxRQV9UZXN0aW5nXFxcXGNsaWVudFxcXFxhcHBcXFxcYXBpXFxcXHNpZ251cFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxRQV9UZXN0aW5nXFxcXGNsaWVudFxcXFxhcHBcXFxcYXBpXFxcXHNpZ251cFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/signup/route.js":
/*!*********************************!*\
  !*** ./app/api/signup/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n\n// Named export for POST method\nasync function POST(req) {\n    try {\n        // Parse the JSON body\n        const data = await req.json();\n        const { name, email, password, role } = data;\n        // Validate the request body\n        if (!name || !email || !password || !role) {\n            return new Response(JSON.stringify({\n                message: 'All fields are required'\n            }), {\n                status: 400,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n        // Connect to the database\n        const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const usersCollection = db.collection('userinfo'); // Replace with your collection name\n        // Insert the user data\n        const result = await usersCollection.insertOne({\n            name,\n            email,\n            password,\n            role,\n            createdAt: new Date()\n        });\n        // Respond with the created user's ID\n        return new Response(JSON.stringify({\n            message: 'User created successfully',\n            userId: result.insertedId\n        }), {\n            status: 201,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error(error);\n        return new Response(JSON.stringify({\n            message: 'An error occurred. Please try again.'\n        }), {\n            status: 500,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NpZ251cC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5RDtBQUV6RCwrQkFBK0I7QUFDeEIsZUFBZUMsS0FBS0MsR0FBRztJQUMxQixJQUFJO1FBQ0Esc0JBQXNCO1FBQ3RCLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUUzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRSxHQUFHTDtRQUd4Qyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxNQUFNO1lBQ3ZDLE9BQU8sSUFBSUMsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQTBCLElBQ3BEO2dCQUFFQyxRQUFRO2dCQUFLQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFBRTtRQUV2RTtRQUVBLDBCQUEwQjtRQUMxQixNQUFNQyxLQUFLLE1BQU1mLCtEQUFpQkE7UUFDbEMsTUFBTWdCLGtCQUFrQkQsR0FBR0UsVUFBVSxDQUFDLGFBQWEsb0NBQW9DO1FBRXZGLHVCQUF1QjtRQUN2QixNQUFNQyxTQUFTLE1BQU1GLGdCQUFnQkcsU0FBUyxDQUFDO1lBQzNDZDtZQUNBQztZQUNBQztZQUNBQztZQUNBWSxXQUFXLElBQUlDO1FBQ25CO1FBRUEscUNBQXFDO1FBQ3JDLE9BQU8sSUFBSVosU0FDUEMsS0FBS0MsU0FBUyxDQUFDO1lBQ1hDLFNBQVM7WUFDVFUsUUFBUUosT0FBT0ssVUFBVTtRQUM3QixJQUNBO1lBQUVWLFFBQVE7WUFBS0MsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFBRTtJQUV2RSxFQUFFLE9BQU9VLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU8sSUFBSWYsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBdUMsSUFDakU7WUFBRUMsUUFBUTtZQUFLQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUFFO0lBRXZFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpL3NpZ251cC9yb3V0ZS5qcz9jMTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xyXG5cclxuLy8gTmFtZWQgZXhwb3J0IGZvciBQT1NUIG1ldGhvZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUGFyc2UgdGhlIEpTT04gYm9keVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcm9sZSB9ID0gZGF0YTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgdGhlIHJlcXVlc3QgYm9keVxyXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcgfSksXHJcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCd1c2VyaW5mbycpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uIG5hbWVcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHRoZSB1c2VyIGRhdGFcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLCAvLyBFbnN1cmUgeW91IGhhc2ggdGhlIHBhc3N3b3JkIGluIHByb2R1Y3Rpb24hXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVzcG9uZCB3aXRoIHRoZSBjcmVhdGVkIHVzZXIncyBJRFxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVzdWx0Lmluc2VydGVkSWQsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7IHN0YXR1czogMjAxLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uJyB9KSxcclxuICAgICAgICAgICAgeyBzdGF0dXM6IDUwMCwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiUE9TVCIsInJlcSIsImRhdGEiLCJqc29uIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsImhlYWRlcnMiLCJkYiIsInVzZXJzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjcmVhdGVkQXQiLCJEYXRlIiwidXNlcklkIiwiaW5zZXJ0ZWRJZCIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/signup/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// Global variable to reuse MongoDB client in development\nlet client;\nlet clientPromise;\nconst uri = process.env.MONGODB_URI; // MongoDB connection string\nconst options = {};\nif (!process.env.MONGODB_URI) {\n    throw new Error('Please add your MongoDB URI to .env.local');\n}\nif (true) {\n    // In development mode, use a global variable to preserve the client\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\nasync function connectToDatabase() {\n    const client = await clientPromise;\n    const db = client.db(process.env.MONGODB_DB); // Replace with your database name\n    return db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMseURBQXlEO0FBQ3pELElBQUlDO0FBQ0osSUFBSUM7QUFFSixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRSw0QkFBNEI7QUFDakUsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUksQ0FBQ0gsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDMUIsTUFBTSxJQUFJRSxNQUFNO0FBQ3BCO0FBRUEsSUFBSUosSUFBc0MsRUFBRTtJQUN4QyxvRUFBb0U7SUFDcEUsSUFBSSxDQUFDSyxPQUFPQyxtQkFBbUIsRUFBRTtRQUM3QlQsU0FBUyxJQUFJRCxnREFBV0EsQ0FBQ0csS0FBS0k7UUFDOUJFLE9BQU9DLG1CQUFtQixHQUFHVCxPQUFPVSxPQUFPO0lBQy9DO0lBQ0FULGdCQUFnQk8sT0FBT0MsbUJBQW1CO0FBQzlDLE9BQU8sRUFJTjtBQUVNLGVBQWVFO0lBQ2xCLE1BQU1YLFNBQVMsTUFBTUM7SUFDckIsTUFBTVcsS0FBS1osT0FBT1ksRUFBRSxDQUFDVCxRQUFRQyxHQUFHLENBQUNTLFVBQVUsR0FBRyxrQ0FBa0M7SUFDaEYsT0FBT0Q7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbi8vIEdsb2JhbCB2YXJpYWJsZSB0byByZXVzZSBNb25nb0RCIGNsaWVudCBpbiBkZXZlbG9wbWVudFxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJOyAvLyBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGFkZCB5b3VyIE1vbmdvREIgVVJJIHRvIC5lbnYubG9jYWwnKTtcclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgdG8gcHJlc2VydmUgdGhlIGNsaWVudFxyXG4gICAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuICAgIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgY3JlYXRlIGEgbmV3IGNsaWVudFxyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52Lk1PTkdPREJfREIpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBkYXRhYmFzZSBuYW1lXHJcbiAgICByZXR1cm4gZGI7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJkYiIsIk1PTkdPREJfREIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
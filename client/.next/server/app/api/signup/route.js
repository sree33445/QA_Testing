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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_sreeraj_s_QA_Testing_client_app_api_signup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/signup/route.js */ \"(rsc)/./app/api/signup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/signup/route\",\n        pathname: \"/api/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/signup/route\"\n    },\n    resolvedPagePath: \"/home/sreeraj-s/QA_Testing/client/app/api/signup/route.js\",\n    nextConfigOutput,\n    userland: _home_sreeraj_s_QA_Testing_client_app_api_signup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzaWdudXAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNpZ251cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNpZ251cCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGc3JlZXJhai1zJTJGUUFfVGVzdGluZyUyRmNsaWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNyZWVyYWotcyUyRlFBX1Rlc3RpbmclMkZjbGllbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1M7QUFDdEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz85NDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zcmVlcmFqLXMvUUFfVGVzdGluZy9jbGllbnQvYXBwL2FwaS9zaWdudXAvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NpZ251cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NpZ251cFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2lnbnVwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc3JlZXJhai1zL1FBX1Rlc3RpbmcvY2xpZW50L2FwcC9hcGkvc2lnbnVwL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n\n// Named export for POST method\nasync function POST(req) {\n    try {\n        // Parse the JSON body\n        const data = await req.json();\n        const { name, email, password, role } = data;\n        // Validate the request body\n        if (!name || !email || !password || !role) {\n            return new Response(JSON.stringify({\n                message: 'All fields are required'\n            }), {\n                status: 400,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n        // Connect to the database\n        const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const usersCollection = db.collection('userinfo'); // Replace with your collection name\n        // Insert the user data\n        const result = await usersCollection.insertOne({\n            name,\n            email,\n            password,\n            role,\n            createdAt: new Date()\n        });\n        // Respond with the created user's ID\n        return new Response(JSON.stringify({\n            message: 'User created successfully',\n            userId: result.insertedId\n        }), {\n            status: 201,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error(error);\n        return new Response(JSON.stringify({\n            message: 'An error occurred. Please try again.'\n        }), {\n            status: 500,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NpZ251cC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5RDtBQUV6RCwrQkFBK0I7QUFDeEIsZUFBZUMsS0FBS0MsR0FBRztJQUMxQixJQUFJO1FBQ0Esc0JBQXNCO1FBQ3RCLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUUzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRSxHQUFHTDtRQUd4Qyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxNQUFNO1lBQ3ZDLE9BQU8sSUFBSUMsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQTBCLElBQ3BEO2dCQUFFQyxRQUFRO2dCQUFLQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFBRTtRQUV2RTtRQUVBLDBCQUEwQjtRQUMxQixNQUFNQyxLQUFLLE1BQU1mLCtEQUFpQkE7UUFDbEMsTUFBTWdCLGtCQUFrQkQsR0FBR0UsVUFBVSxDQUFDLGFBQWEsb0NBQW9DO1FBRXZGLHVCQUF1QjtRQUN2QixNQUFNQyxTQUFTLE1BQU1GLGdCQUFnQkcsU0FBUyxDQUFDO1lBQzNDZDtZQUNBQztZQUNBQztZQUNBQztZQUNBWSxXQUFXLElBQUlDO1FBQ25CO1FBRUEscUNBQXFDO1FBQ3JDLE9BQU8sSUFBSVosU0FDUEMsS0FBS0MsU0FBUyxDQUFDO1lBQ1hDLFNBQVM7WUFDVFUsUUFBUUosT0FBT0ssVUFBVTtRQUM3QixJQUNBO1lBQUVWLFFBQVE7WUFBS0MsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFBRTtJQUV2RSxFQUFFLE9BQU9VLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU8sSUFBSWYsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBdUMsSUFDakU7WUFBRUMsUUFBUTtZQUFLQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUFFO0lBRXZFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpL3NpZ251cC9yb3V0ZS5qcz9jMTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xuXG4vLyBOYW1lZCBleHBvcnQgZm9yIFBPU1QgbWV0aG9kXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgSlNPTiBib2R5XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSBkYXRhO1xuICAgICAgICBcblxuICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgcmVxdWVzdCBib2R5XG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyB9KSxcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCd1c2VyaW5mbycpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uIG5hbWVcblxuICAgICAgICAvLyBJbnNlcnQgdGhlIHVzZXIgZGF0YVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkLCAvLyBFbnN1cmUgeW91IGhhc2ggdGhlIHBhc3N3b3JkIGluIHByb2R1Y3Rpb24hXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNwb25kIHdpdGggdGhlIGNyZWF0ZWQgdXNlcidzIElEXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVzdWx0Lmluc2VydGVkSWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiAyMDEsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH1cbiAgICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLicgfSksXG4gICAgICAgICAgICB7IHN0YXR1czogNTAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiUE9TVCIsInJlcSIsImRhdGEiLCJqc29uIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsImhlYWRlcnMiLCJkYiIsInVzZXJzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjcmVhdGVkQXQiLCJEYXRlIiwidXNlcklkIiwiaW5zZXJ0ZWRJZCIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/signup/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// Global variable to reuse MongoDB client in development\nlet client;\nlet clientPromise;\nconst uri = process.env.MONGODB_URI; // MongoDB connection string\nconst options = {};\nif (!process.env.MONGODB_URI) {\n    throw new Error('Please add your MongoDB URI to .env.local');\n}\nif (true) {\n    // In development mode, use a global variable to preserve the client\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\nasync function connectToDatabase() {\n    const client = await clientPromise;\n    const db = client.db(process.env.MONGODB_DB); // Replace with your database name\n    return db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMseURBQXlEO0FBQ3pELElBQUlDO0FBQ0osSUFBSUM7QUFFSixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRSw0QkFBNEI7QUFDakUsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUksQ0FBQ0gsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDMUIsTUFBTSxJQUFJRSxNQUFNO0FBQ3BCO0FBRUEsSUFBSUosSUFBc0MsRUFBRTtJQUN4QyxvRUFBb0U7SUFDcEUsSUFBSSxDQUFDSyxPQUFPQyxtQkFBbUIsRUFBRTtRQUM3QlQsU0FBUyxJQUFJRCxnREFBV0EsQ0FBQ0csS0FBS0k7UUFDOUJFLE9BQU9DLG1CQUFtQixHQUFHVCxPQUFPVSxPQUFPO0lBQy9DO0lBQ0FULGdCQUFnQk8sT0FBT0MsbUJBQW1CO0FBQzlDLE9BQU8sRUFJTjtBQUVNLGVBQWVFO0lBQ2xCLE1BQU1YLFNBQVMsTUFBTUM7SUFDckIsTUFBTVcsS0FBS1osT0FBT1ksRUFBRSxDQUFDVCxRQUFRQyxHQUFHLENBQUNTLFVBQVUsR0FBRyxrQ0FBa0M7SUFDaEYsT0FBT0Q7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuLy8gR2xvYmFsIHZhcmlhYmxlIHRvIHJldXNlIE1vbmdvREIgY2xpZW50IGluIGRldmVsb3BtZW50XG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U7XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJOyAvLyBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXG5jb25zdCBvcHRpb25zID0ge307XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nb0RCIFVSSSB0byAuZW52LmxvY2FsJyk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSB0byBwcmVzZXJ2ZSB0aGUgY2xpZW50XG4gICAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgICAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICAgIH1cbiAgICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICAgIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgY3JlYXRlIGEgbmV3IGNsaWVudFxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihwcm9jZXNzLmVudi5NT05HT0RCX0RCKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgZGF0YWJhc2UgbmFtZVxuICAgIHJldHVybiBkYjtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiZGIiLCJNT05HT0RCX0RCIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsreeraj-s%2FQA_Testing%2Fclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
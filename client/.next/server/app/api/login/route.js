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
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_QA_Testing_client_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.js */ \"(rsc)/./app/api/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\QA_Testing\\\\client\\\\app\\\\api\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: D_QA_Testing_client_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUUFfVGVzdGluZyU1Q2NsaWVudCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1FBX1Rlc3RpbmclNUNjbGllbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz9mODk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxRQV9UZXN0aW5nXFxcXGNsaWVudFxcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFFBX1Rlc3RpbmdcXFxcY2xpZW50XFxcXGFwcFxcXFxhcGlcXFxcbG9naW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/login/route.js":
/*!********************************!*\
  !*** ./app/api/login/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        // const { name, email, password } = data;\n        const { email, password } = data;\n        // Validate that all fields are provided\n        // if (!name || !email || !password) {\n        if (!email || !password) {\n            return new Response(JSON.stringify({\n                message: 'email, and password are required'\n            }), {\n                status: 400,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n        // Connect to the database\n        const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const usersCollection = db.collection('userdata');\n        // Find the user in the database\n        const user = await usersCollection.findOne({\n            email\n        });\n        // Validate user existence and credentials\n        if (!user || user.password !== password) {\n            return new Response(JSON.stringify({\n                message: 'Invalid email, or password'\n            }), {\n                status: 401,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n        // Successful login\n        return new Response(JSON.stringify({\n            message: 'Login successful',\n            user: {\n                name: user.name,\n                email: user.email,\n                role: user.role\n            }\n        }), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error('Error in login:', error);\n        return new Response(JSON.stringify({\n            message: 'Internal Server Error'\n        }), {\n            status: 500,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlEO0FBRWxELGVBQWVDLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNBLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQiwwQ0FBMEM7UUFDMUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUc1Qix3Q0FBd0M7UUFDeEMsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxVQUFVO1lBRXJCLE9BQU8sSUFBSUMsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQW1DLElBQzdEO2dCQUFFQyxRQUFRO2dCQUFLQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFBRTtRQUV2RTtRQUVBLDBCQUEwQjtRQUMxQixNQUFNQyxLQUFLLE1BQU1iLCtEQUFpQkE7UUFDbEMsTUFBTWMsa0JBQWtCRCxHQUFHRSxVQUFVLENBQUM7UUFFdEMsZ0NBQWdDO1FBQ2hDLE1BQU1DLE9BQU8sTUFBTUYsZ0JBQWdCRyxPQUFPLENBQUM7WUFBRVo7UUFBTTtRQUVuRCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDVyxRQUFRQSxLQUFLVixRQUFRLEtBQUtBLFVBQVU7WUFDckMsT0FBTyxJQUFJQyxTQUNQQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBNkIsSUFDdkQ7Z0JBQUVDLFFBQVE7Z0JBQUtDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUFFO1FBRXZFO1FBRUEsbUJBQW1CO1FBQ25CLE9BQU8sSUFBSUwsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO1lBQ1hDLFNBQVM7WUFDVE0sTUFBTTtnQkFBRUUsTUFBTUYsS0FBS0UsSUFBSTtnQkFBRWIsT0FBT1csS0FBS1gsS0FBSztnQkFBRWMsTUFBTUgsS0FBS0csSUFBSTtZQUFDO1FBQ2hFLElBQ0E7WUFBRVIsUUFBUTtZQUFLQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUFFO0lBRXZFLEVBQUUsT0FBT1EsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsbUJBQW1CQTtRQUNqQyxPQUFPLElBQUliLFNBQ1BDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQXdCLElBQ2xEO1lBQUVDLFFBQVE7WUFBS0MsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFBRTtJQUV2RTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9sb2dpbi9yb3V0ZS5qcz83YThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIC8vIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xyXG5cclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgdGhhdCBhbGwgZmllbGRzIGFyZSBwcm92aWRlZFxyXG4gICAgICAgIC8vIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdlbWFpbCwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZCcgfSksXHJcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCd1c2VyZGF0YScpO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSB1c2VyIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7IGVtYWlsIH0pO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGF0ZSB1c2VyIGV4aXN0ZW5jZSBhbmQgY3JlZGVudGlhbHNcclxuICAgICAgICBpZiAoIXVzZXIgfHwgdXNlci5wYXNzd29yZCAhPT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwsIG9yIHBhc3N3b3JkJyB9KSxcclxuICAgICAgICAgICAgICAgIHsgc3RhdHVzOiA0MDEsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB7IG5hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWwsIHJvbGU6IHVzZXIucm9sZSB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7IHN0YXR1czogMjAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gbG9naW46JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSksXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsIlBPU1QiLCJyZXEiLCJkYXRhIiwianNvbiIsImVtYWlsIiwicGFzc3dvcmQiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiaGVhZGVycyIsImRiIiwidXNlcnNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInVzZXIiLCJmaW5kT25lIiwibmFtZSIsInJvbGUiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CQA_Testing%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CQA_Testing%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
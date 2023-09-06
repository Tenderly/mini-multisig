"use strict";
(() => {
var exports = {};
exports.id = 7995;
exports.ids = [7995];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 37506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/multisig/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: ./app/api/multisig/route.ts


async function POST(request) {
    const req = await request.json();
    if (t.filter((multiSig)=>multiSig.address == req.address).length == 0) {
        console.log("Adding MultiSig", req);
        t.push(req);
        (0,external_child_process_namespaceObject.exec)(`cd ../hardhat-2.14 && npx hardhat verifyExistingMS --network tenderly --address ${req.address}`, function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        });
    } else {
        console.log("Already existing Multisig!");
    }
    console.log("Verifying MultiSig at:", req.address);
    return next_response/* default */.Z.json({
        message: "OK"
    });
}
const t = [];
async function GET() {
    return next_response/* default */.Z.json(t);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fmultisig%2Froute&name=app%2Fapi%2Fmultisig%2Froute&pagePath=private-next-app-dir%2Fapi%2Fmultisig%2Froute.ts&appDir=%2FUsers%2Fnenad%2FProjects%2Fdevelopment%2Fmini-safe%2Fpackages%2Ffrontend%2Fapp&appPaths=%2Fapi%2Fmultisig%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/multisig/route",
        pathname: "/api/multisig",
        filename: "route",
        bundlePath: "app/api/multisig/route"
    },
    resolvedPagePath: "/Users/nenad/Projects/development/mini-safe/packages/frontend/app/api/multisig/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/multisig/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,5501,9335], () => (__webpack_exec__(37506)));
module.exports = __webpack_exports__;

})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const job_route_1 = require("../modules/jobs/job.route");
const router = (0, express_1.Router)();
const routeArray = [
    {
        path: "/jobs",
        route: job_route_1.jobRouter,
    },
    {
        path: "/auth",
        route: auth_route_1.authRouter,
    },
];
routeArray.forEach((item) => {
    router.use(item.path, item.route);
});
exports.MainRouter = router;

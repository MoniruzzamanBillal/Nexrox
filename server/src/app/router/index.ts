import { Router } from "express";

import { authRouter } from "../modules/auth/auth.route";
import { jobRouter } from "../modules/jobs/job.route";

const router = Router();

const routeArray = [
  {
    path: "/jobs",
    route: jobRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;

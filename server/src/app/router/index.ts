import { Router } from "express";

import { jobRouter } from "../modules/jobs/job.route";

const router = Router();

const routeArray = [
  {
    path: "/jobs",
    route: jobRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;

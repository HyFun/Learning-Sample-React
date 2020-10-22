import { lazy } from "react";
export default [
  {
    path: "/",
    component: lazy(() => import("@/view/home/Home")),
  },
  {
    path: "/random",
    component: lazy(() => import("@/view/random/Random")),
  },
];

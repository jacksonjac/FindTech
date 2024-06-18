import express from "express";
import UserRouter from "./userRouters/UserRouter";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  console.log("router index page");

  routes.use("/user", UserRouter(dependencies));

  // routes.use('/admin',UserRouter(dependencies))

  return routes;
};

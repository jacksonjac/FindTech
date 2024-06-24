import express from "express";
import UserRouter from "./userRouters/UserRouter";
import technicianRouter from "./technicianRouters/technicianRouter";
import adminRouters from "./adminRouters/adminRouters";


export const routes = (dependencies: any) => {
  const routes = express.Router();

  console.log("router index page");

  routes.use("/user", UserRouter(dependencies));
  routes.use("/technician",technicianRouter(dependencies))
  routes.use("/admin",adminRouters(dependencies))


  // routes.use('/admin',UserRouter(dependencies))

  return routes;
};

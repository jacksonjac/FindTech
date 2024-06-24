import express from "express";
import UserControllers from "../../Controllers/UserControllers";

export default (dependencies: any) => {
  const { RegisterUserController,
           loginUserController,
           GoogleRegisterController
                 } = UserControllers(dependencies);

  
  const router = express.Router();

  router.post("/newUser", RegisterUserController);
  router.post("/newLogin", loginUserController);
  router.post("/GoogleRegister",GoogleRegisterController)

  return router;
};

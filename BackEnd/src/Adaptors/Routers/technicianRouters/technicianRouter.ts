import express from "express";

import techniciansControllers from "../../Controllers/techniciansCtrl";
export default (dependencies: any) => {
  const { 
           RegisterTechController,LogintechinicianController
                 } = techniciansControllers(dependencies);
                 
  console.log("this is technician router")
  
  const router = express.Router();

  router.post("/newTech", RegisterTechController);
  router.post('/newTechlogin',LogintechinicianController)
  

  return router;
};

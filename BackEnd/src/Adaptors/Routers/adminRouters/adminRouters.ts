import express from "express";
import AdminControllers from "../../Controllers/AdminControllers";

export default (dependencies: any) => {
  const {loginAdminCtrl,Userlistcontroller,blockUsercontroller,UnblockUsercontroller} = AdminControllers(dependencies);
                 
  console.log("this is admin router")
  
  const router = express.Router();

  router.post('/blockuser', blockUsercontroller); 
  router.post('/Adminlogin', loginAdminCtrl);
  router.get('/userlist', Userlistcontroller);
  router.post('/Unblockuser', UnblockUsercontroller); 
  
  

  return router;
};

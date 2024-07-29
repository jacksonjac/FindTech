import technicianRegisterController from './technicianRegisterController'
import logintechinician from './logintechinicianController'



export default (dependencies:any)=>{

 return {
    RegisterTechController:technicianRegisterController(dependencies),
    LogintechinicianController:logintechinician(dependencies)
    
    
   
    
 }

}
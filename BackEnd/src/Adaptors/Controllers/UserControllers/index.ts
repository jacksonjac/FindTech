
import RegisterUserController from './RegisterUserController'
import loginUserController from './loginUserController'
import GoogleRegisterController from './GoogleRegisterController'

export default (dependencies:any)=>{

 return {
    RegisterUserController:RegisterUserController(dependencies),
    loginUserController:loginUserController(dependencies),
    GoogleRegisterController:GoogleRegisterController(dependencies)
    
   
    
 }

}
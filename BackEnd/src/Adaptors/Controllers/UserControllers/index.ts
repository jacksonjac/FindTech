import RegisterUserController from './RegisterUserController'
import loginUserController from './loginUserController'

export default (dependencies:any)=>{

 return {
    RegisterUserController:RegisterUserController(dependencies),
    loginUserController:loginUserController(dependencies)
   
    
 }

}
import {RegisterNewUser} from '../../Application'
import { loginNewUser } from '../../Application'
import { LogTechRepo, RegisterNewUserRepo, blockUserRepo, googlenewUserRepo} from '../MongoDb/Repository'
import { loginNewUserRepo} from '../MongoDb/Repository'
import { GoogleRegister } from '../../Application'
import { RegisterNewTech } from '../../Application'
import {RegisterNewTechRepo} from '../MongoDb/Repository'
import { loginNewAdmin } from '../../Application'
import {logAdminRepo} from '../MongoDb/Repository'
import { Adminuserlist } from '../../Application'
import {AdUserlistRepo} from '../MongoDb/Repository'
import { AdminBlockUser } from '../../Application'
import { loginNewTech } from '../../Application'
import { AdminUnBlockUser } from '../../Application'
import {UnblockUserRepo} from "../MongoDb/Repository"


//This is Our All Dependencies Functions

const useCase:any={
    RegisterNewUser,
    loginNewUser,
    GoogleRegister,
    RegisterNewTech,
    loginNewAdmin,
    Adminuserlist,
    AdminBlockUser,
    loginNewTech,
    AdminUnBlockUser,
    
   
    
}

//This is Our All Repositary Functions
const repositery:any={
   RegisterNewUserRepo,
   loginNewUserRepo,
   googlenewUserRepo,
   RegisterNewTechRepo,
   LogTechRepo,
   logAdminRepo,
   AdUserlistRepo,
   blockUserRepo,
   UnblockUserRepo
}


export default {
    useCase,repositery
}
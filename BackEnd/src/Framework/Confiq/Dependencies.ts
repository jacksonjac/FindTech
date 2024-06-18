import {RegisterNewUser} from '../../Application'
import { loginNewUser } from '../../Application'
import { RegisterNewUserRepo} from '../MongoDb/Repository'
import { loginNewUserRepo} from '../MongoDb/Repository'

//This is Our All Dependencies Functions

const useCase:any={
    RegisterNewUser,
    loginNewUser
}

//This is Our All Repositary Functions
const repositery:any={
   RegisterNewUserRepo,
   loginNewUserRepo
}


export default {
    useCase,repositery
}
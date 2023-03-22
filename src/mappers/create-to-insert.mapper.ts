import { CreateUserDTO } from "src/dtos/create-user.dto";
import { InsertUserDTO } from "src/dtos/insert-user.dto";

export class UserMapper {

    public static createToInsertMapper(createUserDTO: CreateUserDTO): InsertUserDTO{
        
        return {
            email: createUserDTO.email,
            username: createUserDTO.email,
            firstname: createUserDTO.firstname,
            lastname: createUserDTO.lastname,
            mobilephone: createUserDTO.mobilephone,
            portalloginpassword: createUserDTO.password,
        }
    }
}
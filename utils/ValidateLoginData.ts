import { loginUserDataSchema } from "../schemes";
import { LoginDataProps } from "../@types/auth";

export default function(data: LoginDataProps) {
    const { error } = loginUserDataSchema.validate(data);
    if(error)
        return error.details[0].message;
    return null;
}

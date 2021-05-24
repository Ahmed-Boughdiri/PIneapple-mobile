import { registerUserDataSchema } from "../schemes";
import { RegisterDataProps } from "../@types/auth";

export default function(
    data: RegisterDataProps
) {
    const { error } = registerUserDataSchema.validate(data);
    if(error)
        return error.details[0].message;
    else
        if(data.password !== data.confirmPassword)
            return "Password And Confirm Password Does Not Match";
    return null;
}

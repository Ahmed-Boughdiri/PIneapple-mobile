import Joi from "react-native-joi";

export default Joi.object({
    username: 
        Joi
        .string()
        .min(3)
        .max(25),
    email: 
        Joi
        .string()
        .required()
        .email(),
    password: 
        Joi
        .string()
        .required()
        .min(8)
        .max(25),
    confirmPassword:
        Joi
        .string()
        .required()
        .min(8)
        .max(25)
});

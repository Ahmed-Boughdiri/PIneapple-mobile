import Joi from "react-native-joi";

export default Joi.object({
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
        .max(25)
})

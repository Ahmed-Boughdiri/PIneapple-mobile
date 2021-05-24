import { 
    callAPI, 
    validateRegisterData,
    saveUserData
} from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const useRegisterUser = (
    username: String | undefined,
    email: String,
    password: String,
    confirmPassword: String
) =>{
    const [registerError, setRegisterError] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleRegisterUser = async() => {
        const dataError = validateRegisterData({
            username,
            email,
            password,
            confirmPassword
        });
        if(dataError)
            return setRegisterError(dataError as string);
        const { data, error } = await callAPI(
            "/auth/register",
            "POST",
            {
                username,
                email,
                password
            }
        );
        if(error)
            return setRegisterError(error as string);
        const saveError = await saveUserData({
            username,
            email,
            password,
            confirmPassword
        });
        if(saveError)
            return setRegisterError(saveError as string);
        
        dispatch({
            type: "STORE_USER_DATA",
            payload: data
        });
        navigation.navigate("main");
    }
    return { error: registerError, handleRegisterUser }
}

export default useRegisterUser;

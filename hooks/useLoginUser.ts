import { useState } from "react";
import { 
    callAPI, 
    saveUserData,
    validateLoginData
} from "../utils";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const useLoginUser = (
    email: String,
    password: String
) =>{
    const [loginError, setLoginError] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleLogin = async() =>{
        const dataError = validateLoginData({
            email,
            password
        });
        if(dataError)
            return setLoginError(dataError as string);
        const { error, data } = await callAPI(
            "/auth/login",
            "POST",
            {
                email,
                password
            }
        );
        if(error)
            return setLoginError(error as string);
        const saveError = await saveUserData({
            email,
            username: data.username,
            token: data.token
        });
        if(saveError)
            return setLoginError(saveError as string);
        dispatch({
            type: "STORE_USER_DATA",
            payload: data
        });
        setLoginError("");
        navigation.navigate("main");
    }
    return {
        error: loginError,
        handleLogin
    }
}

export default useLoginUser;

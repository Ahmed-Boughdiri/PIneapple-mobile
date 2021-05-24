import { useState, useEffect } from "react";
import { callAPI, getUserStoredCredentials } from "../utils";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const useCheckUserLogged = () =>{
    const [loginError, setLoginError] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleUserLogin = async() =>{
        setShowLoader(true);
        const { data, error } = await getUserStoredCredentials();
        if(error) {
            setShowLoader(false);
            return setLoginError(error as string);
        }
        else if(!data) {
            setShowLoader(false);
            return
        }
        console.log("Token: ", data)
        const { data: _, error: apiError } = await callAPI(
            "/auth/token",
            "POST",
            {
                token: data.token
            }
        );
        if(apiError) {
            setShowLoader(false);
            return setLoginError(apiError as string);
        }
        dispatch({
            type: "STORE_USER_DATA",
            payload: data
        });
        setShowLoader(false);
        return navigation.navigate("main");
    }
    useEffect(() =>{
        handleUserLogin();
    }, []);
    return { loginError, showLoader }
}

export default useCheckUserLogged;

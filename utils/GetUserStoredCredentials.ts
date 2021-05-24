import asyncStorage from "@react-native-async-storage/async-storage";

export default async function() {
    try {
        const userCredentials = await asyncStorage.getItem("PINEAPPLE_USER_DATA");
        if(userCredentials)
            return {
                data: JSON.parse(userCredentials),
                error: null
            }
        else
            return {
                data: null,
                error: null
            }
    } catch {
        return {
            data: null,
            error: "An Error Has Occured While Getting User Stored Credentials"
        }
    }
}

import asyncStorage from "@react-native-async-storage/async-storage";

export default async function (data: unknown) {
    try {
        await asyncStorage.setItem("PINEAPPLE_USER_DATA", JSON.stringify(data));
        return null;
    } catch(err) {
        return "An Error Has Occured While Saving User Data Please Try Again"
    }
}

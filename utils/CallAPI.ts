import Axios from "../global/Axios";

type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

function getCallMethod(method: Methods) {
    switch(method) {
        case "GET":
            return Axios.get;
        case "POST":
            return Axios.post;
        case "DELETE":
            return Axios.delete;
        case "PUT":
            return Axios.put;
        case "PATCH":
            return Axios.patch;
    }
}

interface ReturnProps {
    data: any | null,
    error: String | null
}

export default async function(
    endpoint: String,
    method: Methods,
    data: unknown
): Promise<ReturnProps> {
    try {
        const call = getCallMethod(method);
        const req = await call(endpoint as string, data);
        const res = await req.data;
        console.log(res)
        return {
            data: res,
            error: null
        }
    } catch(err) {
        return {
            data: null,
            error: err.response?.data.err ||
                "An Error Has Occured Please Check Your Internet Connection And Try Again"
        }
    }
}


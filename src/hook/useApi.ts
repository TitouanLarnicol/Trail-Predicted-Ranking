import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export function useApi(apiCall: Promise<AxiosResponse<any, any>>) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchApi = () => {
        apiCall.then((response) => {
            setLoading(false);
            setData(response.data)
        })
    }

    useEffect(() => {
        fetchApi()
    }, []);

    return { loading, data};
}
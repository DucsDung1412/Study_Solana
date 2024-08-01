import { useRouter } from "next/router";
import { EndpointTypes } from "../models/types";
import cluster from "cluster";

export default function useQuerycontext() {
    const router = useRouter();
    const { cluster } = router.query;

    const endpoint = cluster ? (cluster as EndpointTypes) : "mainnet";
    const hasClusterOption = endpoint !== "mainnet";

    const fmtUrlWithCluster = (url) => {
        if(hasClusterOption) {
            const mark = url.includes("?") ? "&" : "?";
            return decodeURIComponent(`${url}${mark}cluster=${endpoint}`);
        }
        return url;
    }

    return {
        fmtUrlWithCluster,
    };
}
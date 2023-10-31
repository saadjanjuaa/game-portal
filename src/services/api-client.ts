import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7a45a085d8734d138f4cdb72655a7926",
    },
});

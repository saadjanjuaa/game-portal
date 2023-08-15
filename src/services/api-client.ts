import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ddb13b78c6794ea799cd848f6f562a7f",
    },
});

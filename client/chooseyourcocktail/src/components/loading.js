import React from "react";
import { Image } from "react-bootstrap"
const loadingImg =
    "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
    <div className="spinner">
        <Image src={loadingImg} alt="Loading..." />
    </div>
);

export default Loading;
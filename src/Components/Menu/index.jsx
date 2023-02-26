import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./style.scss";
import LottiePlayer from "@lottiefiles/lottie-player";
import { Button } from "@mui/material";

const Menu = ({
    children,
    display = "block",
    styleCustom = {},
    classNameCustom,
    onClick = (e) => {},
}) => {
    return (
        <div
            className={`wrapper_menu ${classNameCustom} `}
            style={{
                ...styleCustom,
                display: display,
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
export default Menu;

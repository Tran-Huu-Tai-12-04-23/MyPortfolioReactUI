import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import "./style.scss";
import { Button } from "@mui/material";

import { TiTickOutline } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { BiMessageAltError, BiError } from "react-icons/bi";

const Alert = ({
    styleCustom = {},
    type = "err",
    nameAlert = "",
    className,
    id,
    alerts,
    setAlerts,
}) => {
    const [color, setColor] = useState("#03C988");
    const [icon, setIcon] = useState("");
    const removeAlert = () => {
        if (alerts) {
            setAlerts((prev) => {
                return prev.filter((alert) => alert.id !== id);
            });
        }
    };
    useEffect(() => {
        if (type === "success") {
            setColor("#03C988");
            setIcon(
                <TiTickOutline
                    style={{
                        marginRight: "2rem",
                        fontSize: "3rem",
                        color: color,
                    }}
                />
            );
        } else if (type === "warn") {
            setColor("#F9F54B");
            setIcon(
                <BiMessageAltError
                    style={{
                        marginRight: "2rem",
                        fontSize: "3rem",
                        color: "#F9F54B",
                    }}
                />
            );
        } else if (type === "err") {
            setColor("#EB1D36");
            setIcon(
                <BiError
                    style={{
                        marginRight: "2rem",
                        fontSize: "3rem",
                        color: "#EB1D36",
                    }}
                />
            );
        }
    }, [type]);
    useEffect(() => {
        setTimeout(() => {
            removeAlert();
        }, 2000);
    }, []);
    return (
        <Button
            className={`wrapper_alert ${className} de-flex justify-content-start align-items-center `}
            style={{
                minWidth: "40rem",
                ...styleCustom,
                overflow: "hidden",
                zIndex: "100",
            }}
        >
            {icon}
            <span
                style={{
                    fontSize: "1.4rem",
                }}
            >
                {nameAlert}
            </span>
            <div
                className='w-100 position-absolute animation_loading'
                style={{
                    height: ".2rem",
                    width: "100%",
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderRadius: ".2rem",
                    background: color,
                }}
            ></div>
            <CgClose
                className='hover_close'
                style={{
                    fontSize: "2.5rem",
                    float: "right",
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)",
                }}
                onClick={removeAlert}
            />
        </Button>
    );
};
export default Alert;

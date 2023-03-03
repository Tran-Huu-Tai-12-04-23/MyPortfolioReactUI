import { useState, useLayoutEffect } from "react";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";

const Range = ({ rate, name, theme, icon, reload }) => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count < rate && reload) {
            setTimeout(() => {
                setCount(count + 1);
            }, 30);
        }
    }, [{ count }]);
    return (
        <div
            className='skill'
            style={{
                width: "100%",
                borderRadius: "1rem",
                border: `1px solid var(--bg-third-theme-${theme})`,
                height: "2rem",
                position: "relative",
                padding: "0.2rem",
            }}
        >
            <div
                className='inter-range'
                style={{
                    "--width": `${rate}%`,
                    background: `linear-gradient(90deg, ${`var(--bt-primary-theme-${theme})`} 59%, ${`var(--bt-secondary-theme-${theme})`} 83%)`,
                }}
            ></div>
            <div className='information w-100 d-flex justify-content-between align-items-center mt-4'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h1
                        style={{
                            color: `var(--bt-primary-theme-${theme})`,
                            fontSize: "1.8rem",
                            marginRight: "1rem",
                        }}
                    >
                        {name}
                    </h1>
                    {icon}
                </div>
                <span
                    style={{
                        color: "#757575",
                        fontSize: "1.8rem",
                    }}
                >
                    {count}%
                </span>
            </div>
        </div>
    );
};

export default Range;

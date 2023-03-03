import { useState, useLayoutEffect } from "react";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";

const Circle = ({ rate, name, theme, icon, reload }) => {
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
                "--stroke": 450 - (450 / 100) * rate,
            }}
        >
            <div className='outer'>
                <div className='inner'>
                    <div
                        id='number'
                        style={{
                            color: "#757575",
                        }}
                    >
                        {count}%
                    </div>
                </div>
            </div>

            <svg
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                width='160px'
                height='160px'
            >
                <defs>
                    <linearGradient id='GradientColor'>
                        <stop
                            offset='0%'
                            stopColor={`var(--bt-primary-theme-${theme})`}
                        />
                        <stop
                            offset='100%'
                            stopColor={`var(--bt-secondary-theme-${theme})`}
                        />
                    </linearGradient>
                </defs>
                <circle cx='80' cy='80' r='70' strokeLinecap='round' />
            </svg>
            <div
                className='name d-flex justify-content-evenly align-items-center'
                style={{
                    color: `var(--bt-primary-theme-${theme})`,
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    margin: "0 auto",
                    width: "100%",
                    textAlign: "center",
                    marginTop: "1rem",
                }}
            >
                <span>{name}</span>
                {icon}
            </div>
        </div>
    );
};

export default Circle;

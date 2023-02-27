import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./style.scss";

const Input = ({
    onChange = (e) => {},
    styleCustom,
    backgroundLabel = "",
    label = "",
    icon,
    positionIcon,
    color = "#fff",
}) => {
    return (
        <div
            className='wrapper_input'
            style={{
                ...styleCustom,
                "--bd-primary": backgroundLabel,
                "--cl-primary": color,
            }}
        >
            <label className='d-flex justify-content-start align-items-center'>
                <span
                    style={{
                        fontSize: "1.4rem",
                        marginRight: "1.2rem",
                        marginBottom: ".2rem",
                    }}
                >
                    {label}
                </span>
                {icon}
            </label>
            <input
                type='text'
                id='username2'
                placeholder={"Enter " + label}
                onChange={onChange}
            />
        </div>
    );
};
export default Input;

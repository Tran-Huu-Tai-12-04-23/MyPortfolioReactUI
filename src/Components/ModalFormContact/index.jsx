import { useContext } from "react";
import "./style.scss";

import { Button } from "@mui/material";
import Me from "../../assets/image/Me.png";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import { ThemeApp } from "../../Context";
const ModalFormContact = ({ display = "none", setModalDetailMe }) => {
    const [Theme, setTheme] = useContext(ThemeApp);

    return (
        <>
            <div
                className='position-fixed'
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 100,
                    backdropFilter: "blur(.5rem)",
                    display: display,
                }}
                onClick={(e) => setModalDetailMe(false)}
            >
                <div
                    className='position-absolute d-flex justify-content-between align-items-center animation_modal'
                    style={{
                        top: "50%",
                        left: "50%",
                        minHeight: "10rem",
                        minWidth: "40%",
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                        borderRadius: "1rem",
                        padding: "1rem",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Button
                        style={{
                            padding: "1rem",
                            backgroundColor: `var(--bg-third-theme-${Theme})`,
                            borderRadius: "1rem",
                        }}
                    >
                        <img
                            className='mr-2'
                            src={Me}
                            style={{
                                width: "4rem",
                                height: "4rem",
                                borderRadius: "1rem",
                            }}
                        ></img>
                        <div
                            className='d-flex flex-column justify-content-center align-items-start'
                            style={{
                                color: `var(--cl-text-theme-${Theme})`,
                                paddingLeft: "2rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.2rem",
                                    margin: 0,
                                }}
                            >
                                HuuTai
                            </span>
                            <span
                                style={{
                                    margin: 0,
                                    fontSize: ".8rem",
                                }}
                            >
                                FullStacks Developer
                            </span>
                        </div>
                        <div
                            className=''
                            style={{
                                marginLeft: "2rem",
                                color: `var(--cl-text-theme-${Theme})`,
                            }}
                        >
                            <SlArrowLeft />
                            <SlArrowRight />
                        </div>
                    </Button>
                    <Button
                        className='button btn-animation '
                        style={{
                            "--body-bg": `var(--bt-primary-theme-${Theme})`,
                            "--primary_color": `var(--bt-primary-theme-${Theme})`,
                            "--bg": `var(--bg-third-theme-${Theme})`,
                            border: `1px solid var(--bt-primary-theme-${Theme}`,
                            borderRadius: ".8rem",
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Hire Me</span>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ModalFormContact;

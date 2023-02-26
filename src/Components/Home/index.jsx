import { v4 as uuid } from "uuid";
import { useState, useContext } from "react";
import "./style.scss";
import LottiePlayer from "@lottiefiles/lottie-player";
import { Button } from "@mui/material";
import { ThemeApp } from "../../Context";

import Home1 from "../../assets/image/Home1.jpg";
import Me from "../../assets/image/Me.png";

import { CgArrowsScrollV } from "react-icons/cg";

const Home = () => {
    const [Theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className='wrapper_about  d-flex flex-justify-content-center align-items-center '
            style={{
                height: "100vh",
                background: "",
            }}
        >
            <div className='container-fluid'>
                <div className='row p-5 d-flex flex-justify-content-center align-items-center position-relative'>
                    <div className='col-lg-6 col-xl-6 '>
                        <div
                            className='typed-animation d-flex flex-column '
                            style={{
                                color: "var(--cl-text-theme-1)",
                                width: "47rem",
                                // overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: "18rem",
                                }}
                            >
                                <h1
                                    className='typed-out'
                                    style={{
                                        color: `var(--bt-primary-theme-${Theme})`,
                                    }}
                                >
                                    I'm Huu Tai
                                </h1>
                            </div>

                            <h5
                                className='typed-out mt-2'
                                style={{
                                    fontSize: "1.8rem",
                                    color: `var(--cl-text-theme-${Theme})`,
                                }}
                            >
                                Hello! I'm glad you took some time to visit my
                                website
                            </h5>
                        </div>
                        <div className='mt-2'>
                            <h5
                                style={{
                                    color: `var(--cl-text-secondary-theme-${Theme})`,
                                }}
                            >
                                I'm FullStacks Developer
                            </h5>
                            <h5
                                style={{
                                    color: `var(--cl-text-secondary-theme-${Theme})`,
                                }}
                            >
                                I really enjoy studying things related to
                                websites, software, and games.
                            </h5>
                        </div>
                        <div className='w-100 mt-5'>
                            <Button
                                variant='outlined'
                                style={{
                                    height: "4rem",
                                    width: "16rem",
                                    fontSize: "1.6rem",
                                    color: `var(--cl-text-theme-${Theme})`,
                                    border: `1px solid var(--bt-primary-theme-${Theme})`,
                                }}
                            >
                                Contact Me
                            </Button>
                        </div>
                    </div>
                    <div
                        className=' col-lg-6 col-xl-6 position-absolute '
                        style={{
                            left: "50%",
                            borderTopRightRadius: "4rem",
                            borderBottomLeftRadius: "4rem",
                        }}
                    >
                        <div
                            className='position-absolute avatar'
                            style={{
                                left: "50%",
                                top: "50%",
                                transform: "translate(-55%, -52%)",
                                zIndex: "3",
                            }}
                        >
                            <div
                                className='main_avatar'
                                style={{
                                    width: "40rem",
                                    height: "50rem",
                                }}
                            >
                                <img
                                    src={Me}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "(0, 0)",
                                        cursor: "pointer",
                                        borderTopRightRadius: "4rem",
                                        borderBottomLeftRadius: "4rem",
                                        objectFit: "cover",
                                        border: `4px outset var(--bt-primary-theme-${Theme})`,
                                    }}
                                ></img>
                            </div>
                            <div
                                className='umbrella'
                                style={{
                                    "--secondary_color": `var(--bg-secondary-theme-${Theme})`,
                                    "--primary_color": `var(--bg-third-theme-${Theme})`,
                                }}
                            ></div>
                            <div
                                className='div position-absolute detail_me d-flex -justify-content-center align-items-center w-100 wrapper_information'
                                style={{
                                    bottom: "0",
                                    left: "0%",
                                    zIndex: 5,
                                }}
                            >
                                <Button
                                    className='w-100'
                                    style={{
                                        backgroundColor: `rgba(0,0,0,.5)`,
                                        color: "#fff",
                                        cursor: "pointer",
                                        margin: "0 auto",
                                        borderBottomLeftRadius: "4rem",
                                    }}
                                >
                                    <CgArrowsScrollV
                                        style={{
                                            fontSize: "3rem",
                                        }}
                                    />
                                    <label
                                        style={{
                                            fontSize: "1.4rem",
                                        }}
                                    >
                                        Detail About Me
                                    </label>
                                </Button>
                            </div>
                        </div>
                        <img
                            className='position-absolute'
                            src={Home1}
                            style={{
                                width: "40rem",
                                height: "50rem",
                                borderRadius: "var(--bd-primary)",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 1,
                                filter: "blur(.6rem)",
                            }}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
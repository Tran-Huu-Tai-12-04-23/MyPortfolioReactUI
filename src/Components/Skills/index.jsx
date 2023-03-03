import { useState, useContext, useEffect } from "react";
import { Button, Hidden } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";

import { ThemeApp } from "../../Context";
import Circle from "../Circle";
import Range from "../Range";

import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = ({}) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [scrollY, setScrollY] = useState(0);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 2300 && !reload) {
                setReload(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                minHeight: "60vh",
            }}
        >
            <div className='container-fluid'>
                <div className='row'>
                    <div
                        className='col-lg-12 col-xl-12 d-flex justify-content-start '
                        style={{
                            fontSize: "2rem",
                            color: `var(--cl-text-theme-${Theme})`,
                            marginBottom: "2rem",
                            overflow: "hidden",
                        }}
                    >
                        <Slide direction='up' triggerOnce={true}>
                            <div className='position-relative'>
                                <h1
                                    style={{
                                        fontSize: "2rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                        marginBottom: "2rem",
                                    }}
                                >
                                    My Skills
                                </h1>
                                <div
                                    className=' position-absolute '
                                    style={{
                                        bottom: "-.4rem",
                                        left: 0,
                                        height: ".2rem",
                                        borderRadius: "1rem",
                                        width: "4rem",
                                        background: `linear-gradient(90deg, var(--bt-primary-theme-${Theme}) 59%, #fff 83%)`,
                                    }}
                                ></div>
                            </div>
                        </Slide>
                    </div>
                    <div className='col-lg-3 col-xl-3 '>
                        <Slide
                            triggerOnce={true}
                            direction='up'
                            className='d-fex justify-content-center'
                            style={{
                                display: "flex",
                            }}
                        >
                            <Circle
                                rate={50}
                                name={"JQuery"}
                                theme={Theme}
                                icon={
                                    <IoLogoJavascript
                                        style={{
                                            fontSize: "3rem",
                                            color: "#FEF5AC",
                                        }}
                                    />
                                }
                                reload={reload}
                            />
                        </Slide>
                    </div>
                    <div className='col-lg-3 col-xl-3'>
                        <Slide
                            triggerOnce={true}
                            direction='up'
                            className=' justify-content-center'
                            style={{
                                display: "flex",
                            }}
                        >
                            <Circle
                                rate={65}
                                name={"Bootstrap"}
                                theme={Theme}
                                icon={
                                    <FaBootstrap
                                        style={{
                                            fontSize: "3rem",
                                            color: "#8b12fc",
                                        }}
                                    />
                                }
                                reload={reload}
                            />
                        </Slide>
                    </div>
                    <div className='col-lg-3 col-xl-3 '>
                        <Slide
                            triggerOnce={true}
                            direction='up'
                            className='justify-content-center'
                            style={{
                                display: "flex",
                            }}
                        >
                            <Circle
                                rate={80}
                                name={"ReactJS"}
                                theme={Theme}
                                icon={
                                    <FaReact
                                        style={{
                                            fontSize: "3rem",
                                            color: "#338FFF ",
                                        }}
                                    />
                                }
                                reload={reload}
                            />
                        </Slide>
                    </div>
                    <div className='col-lg-3 col-xl-3 '>
                        <Slide
                            triggerOnce={true}
                            direction='up'
                            className='justify-content-center'
                            style={{
                                display: "flex",
                            }}
                        >
                            <Circle
                                rate={55}
                                name={"Figma"}
                                theme={Theme}
                                reload={reload}
                                icon={
                                    <img
                                        src={
                                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/800px-Figma-logo.svg.png"
                                        }
                                        style={{
                                            height: "2rem",
                                            width: "1.5rem",
                                        }}
                                    ></img>
                                }
                            />
                        </Slide>
                    </div>
                    <div
                        className='col-12'
                        style={{
                            marginTop: "10rem",
                        }}
                    >
                        <Slide triggerOnce={true} direction='up'>
                            <Range
                                rate={55}
                                name={"Nodejs"}
                                theme={Theme}
                                reload={reload}
                                icon={
                                    <FaNodeJs
                                        style={{
                                            fontSize: "3rem",
                                            color: "#609966",
                                        }}
                                    />
                                }
                            />
                        </Slide>
                    </div>
                    <div
                        className='col-12'
                        style={{
                            marginTop: "10rem",
                        }}
                    >
                        <Slide triggerOnce={true} direction='up'>
                            <Range
                                rate={60}
                                name={"Sql, Mysql, Mongoose,.."}
                                theme={Theme}
                                reload={reload}
                                icon={
                                    <AiOutlineConsoleSql
                                        style={{
                                            fontSize: "3rem",
                                            color: "#FDD36A",
                                        }}
                                    />
                                }
                            />
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

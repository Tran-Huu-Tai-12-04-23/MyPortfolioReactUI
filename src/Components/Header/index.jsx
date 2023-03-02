import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { useState, useContext, memo, useEffect, useLayoutEffect } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { Slide, Roll, Flip } from "react-awesome-reveal";

import { ThemeApp } from "../../Context";

import my_logo from "../../assets/image/my_logo.png";
const Header = ({ setModalDetailMe }) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [myService, setMyService] = useState([
        {
            name: "Home",
            data: "",
            id: uuid(),
            des: "",
        },
        {
            name: "About",
            data: "",
            id: uuid(),
            des: "",
        },
        {
            name: "My Timelines",
            data: "",
            id: uuid(),
            des: "",
        },
        {
            name: "My Projects",
            data: "",
            id: uuid(),
            des: "",
        },
        {
            name: "My Skills",
            data: "",
            id: uuid(),
            des: "",
        },
        {
            name: "My Hobbies",
            data: "",
            id: uuid(),
            des: "",
        },
        {
            name: "The End",
            data: "",
            id: uuid(),
            des: "",
        },
    ]);

    const [active, setActive] = useState(0);
    const renderService = () => {
        return myService.map((ser, index) => {
            return (
                <Slide
                    className='d-fex justify-content-center '
                    key={index}
                    direction='up'
                    fraction={0}
                    triggerOnce={true}
                >
                    <Button
                        key={ser.id}
                        style={{
                            color: "#fff",
                            minWidth: "10rem",
                            width: "100%",
                            height: "4rem",
                            fontSize: "1.4rem",
                            border: "1px solid transparent",
                            marginBottom: "1rem",
                        }}
                        variant='text'
                        onClick={(e) => {
                            e.stopPropagation();
                            window.scrollTo(0, index * 800);
                        }}
                    >
                        {ser.name}
                    </Button>
                </Slide>
            );
        });
    };

    const handleScroll = (e) => {
        if (window.scrollY < 300) {
            setActive(0);
        } else if (window.scrollY >= 500 && window.scrollY < 1000) {
            setActive(1);
        } else if (window.scrollY >= 1000 && window.scrollY < 1500) {
            setActive(2);
        } else if (window.scrollY >= 1800) {
            setActive(3);
        }
    };
    useLayoutEffect(() => {
        handleScroll();
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className='wrapper_header position-fixed  p-5 col-lg-2'
            style={{
                top: 0,
                left: 0,
                bottom: 0,
                height: "100vh",
                backgroundColor: `var( --bg-secondary-theme-${Theme})`,
                backdropFilter: "blur(1rem)",
                overflow: "hidden",
            }}
        >
            <div className='container-fluid '>
                <div className='row d-flex justify-content-center align-items-center flex-column'>
                    <div className='col-lg-12 col-xl-12 mb-5 d-flex justify-content-center'>
                        <Slide triggerOnce={true} direction='down' fraction={0}>
                            <img
                                src={my_logo}
                                style={{
                                    height: "4rem",
                                    width: "10rem",
                                }}
                            ></img>
                        </Slide>
                    </div>
                    <div className='col-lg-12 relative col-xl-12 justify-content-end d-flex flex-column mb-5 position-relative'>
                        {renderService()}
                        <div
                            className='action rounded position-absolute'
                            style={{
                                border: `1px solid var(--bt-primary-theme-${Theme})`,
                                height: "4rem",
                                // width: "100%",
                                top: `${active * 5}rem`,
                                left: 0,
                                right: 0,
                                transition: ".4s",
                                zIndex: 0,
                            }}
                        ></div>
                    </div>
                    <div className='col-lg-12  col-xl-12 d-flex justify-content-center align-item-center flex-column '>
                        <Button
                            className='w-50 rounded-circle'
                            style={{
                                margin: "0 auto",
                                border: `1px solid var(--bt-primary-theme-${Theme})`,
                            }}
                            onClick={(e) => {
                                setModalDetailMe(true);
                            }}
                        >
                            <Roll triggerOnce={true} direction='up'>
                                <img
                                    style={{
                                        width: "4rem",
                                        height: "12rem",
                                    }}
                                    className='rounded-circle w-100'
                                    src='https://i.ibb.co/CzVCLmj/inbound7901888872878807321.png'
                                    alt="It's me"
                                />
                            </Roll>
                        </Button>
                        <Button
                            className='mt-5 button btn-animation'
                            style={{
                                fontSize: "1.4rem",
                                height: "4rem",
                                color: `var(--bt-primary-theme-${Theme})`,
                                "--body-bg": `var(--bt-primary-theme-${Theme})`,
                                "--primary_color": `var(--bt-primary-theme-${Theme})`,
                                "--bg": `var(--bg-third-theme-${Theme})`,
                                "--bg-secondary": `var(--bg-primary-theme-${Theme})`,
                                border: `1px solid var(--bt-primary-theme-${Theme}`,
                            }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span
                                style={{
                                    fontSize: "1.4rem",
                                }}
                            >
                                My CV
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Header);

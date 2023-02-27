import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";

import { AiOutlineSetting } from "react-icons/ai";
import Menu from "../Menu";
import { ThemeApp } from "../../Context";

import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Setting = ({ setAlerts, alertss }) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [menu, setMenu] = useState(false);
    const [darkThemes, setDarkTheme] = useState([
        {
            theme: 1,
            primaryColor: "var(--bg-primary-theme-1)",
            secondaryColor: "var(--bt-primary-theme-1)",
        },
        {
            theme: 2,
            primaryColor: "var(--bg-primary-theme-2)",
            secondaryColor: "var(--bt-primary-theme-2)",
        },
        {
            theme: 3,
            primaryColor: "var(--bg-primary-theme-3)",
            secondaryColor: "var(--bt-primary-theme-3)",
        },
    ]);
    const [lightTheme, setLightTheme] = useState([
        {
            theme: 4,
            primaryColor: "var(--bg-primary-theme-4)",
            secondaryColor: "var(--bt-primary-theme-4)",
        },
        {
            theme: 5,
            primaryColor: "var(--bg-primary-theme-5)",
            secondaryColor: "var(--bt-primary-theme-5)",
        },
        {
            theme: 6,
            primaryColor: "var(--bg-primary-theme-6)",
            secondaryColor: "var(--bt-primary-theme-6)",
        },
    ]);

    const renderDarkTheme = () => {
        return darkThemes.map((darkTheme) => {
            return (
                <Button
                    className='d-flex justify-content-center align-items-center'
                    key={uuid()}
                    style={{
                        height: "4rem",
                        width: "100%",
                        borderRadius: "var(--bd-primary)",
                        overflow: "hidden",
                    }}
                    onClick={(e) => {
                        setTheme(darkTheme.theme);
                        if (Theme !== darkTheme.theme) {
                            setAlerts((prev) => {
                                return [
                                    ...prev,
                                    {
                                        id: uuid(),
                                        type: "success",
                                        message: "Change Dark Theme!!",
                                    },
                                ];
                            });
                        } else {
                            setAlerts((prev) => {
                                return [
                                    ...prev,
                                    {
                                        id: uuid(),
                                        type: "warn",
                                        message:
                                            "Choose Same Theme Successfully!!",
                                    },
                                ];
                            });
                        }
                    }}
                >
                    <div
                        className='w-50 h-100'
                        style={{
                            borderTopLeftRadius: "var(--bd-primary)",
                            borderBottomLeftRadius: "var(--bd-primary)",
                            backgroundColor: darkTheme.primaryColor,
                        }}
                    ></div>
                    <div
                        className='w-50 h-100'
                        style={{
                            borderTopRightRadius: "var(--bd-primary)",
                            borderBottomRightRadius: "var(--bd-primary)",
                            backgroundColor: darkTheme.secondaryColor,
                        }}
                    ></div>
                </Button>
            );
        });
    };
    const renderLightTheme = () => {
        return lightTheme.map((lightTheme) => {
            return (
                <Button
                    className='d-flex justify-content-center align-items-center'
                    key={uuid()}
                    style={{
                        height: "4rem",
                        width: "100%",
                        borderRadius: "var(--bd-primary)",
                        overflow: "hidden",
                    }}
                    onClick={(e) => {
                        setTheme(lightTheme.theme);
                        if (Theme !== lightTheme.theme) {
                            setAlerts((prev) => {
                                return [
                                    ...prev,
                                    {
                                        id: uuid(),
                                        type: "success",
                                        message:
                                            "Change Light Theme Successfully!!",
                                    },
                                ];
                            });
                        } else {
                            setAlerts((prev) => {
                                return [
                                    ...prev,
                                    {
                                        id: uuid(),
                                        type: "warn",
                                        message: "Choose Same Theme!!",
                                    },
                                ];
                            });
                        }
                    }}
                >
                    <div
                        className='w-50 h-100'
                        style={{
                            borderTopLeftRadius: "var(--bd-primary)",
                            borderBottomLeftRadius: "var(--bd-primary)",
                            backgroundColor: lightTheme.primaryColor,
                        }}
                    ></div>
                    <div
                        className='w-50 h-100'
                        style={{
                            borderTopRightRadius: "var(--bd-primary)",
                            borderBottomRightRadius: "var(--bd-primary)",
                            backgroundColor: lightTheme.secondaryColor,
                        }}
                    ></div>
                </Button>
            );
        });
    };
    return (
        <>
            <Slide
                direction='right'
                fraction={0}
                className='position-fixed '
                style={{
                    bottom: "2rem",
                    right: "2rem",
                }}
            >
                <Button
                    variant='text'
                    className='setting rounded-circle d-flex justify-content-center align-items-center 
            '
                    id='setting'
                    style={{
                        zIndex: 3,
                        width: "6rem",
                        height: "6rem",
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                        cursor: "pointer",
                        border: "none",
                        backdropFilter: "blur(.2rem)",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenu(!menu);
                    }}
                >
                    <AiOutlineSetting
                        style={{
                            color: "#ffff",
                            fontSize: "3rem",
                            animation: "heartBeat .5s ease infinite alternate",
                        }}
                    />
                </Button>
            </Slide>
            <Menu
                classNameCustom='position-fixed'
                display={menu ? "block" : "none"}
                styleCustom={{
                    zIndex: 4,
                    color: "#fff",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    top: 0,
                    backdropFilter: "blur(.2rem)",
                }}
                onClick={(e) => setMenu(!menu)}
            >
                <Menu
                    classNameCustom='position-absolute'
                    styleCustom={{
                        // minWidth: "40rem",
                        width: "40rem",
                        bottom: "5rem",
                        right: "5rem",
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                        borderRadius: "var(--bd-primary)",
                        border: `1px solid var(--bt-primary-theme-${Theme})`,
                        padding: "1rem",
                        animation: "showMenuUp .4s ease ",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Button
                        variant='outlined'
                        className='d-flex justify-content-center align-items-center  w-100'
                        style={{
                            borderRadius: "var(--bd-primary)",
                            border: `1px solid var(--bt-primary-theme-${Theme})`,
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1.4rem",
                                color: "#fff",
                            }}
                        >
                            Choose Layout
                        </span>
                        <MdOutlineKeyboardArrowLeft
                            style={{
                                fontSize: "3rem",
                                transform: "translateX(1rem)",
                                color: "#fff",
                            }}
                        />
                        <MdOutlineKeyboardArrowRight
                            style={{
                                fontSize: "3rem",
                                transform: "translateX(-1rem)",
                                color: "#fff",
                            }}
                        />
                    </Button>
                    <Menu
                        classNameCustom='d-flex justify-content-between align-items-center flex-wrap'
                        styleCustom={{
                            width: "100%",
                        }}
                    >
                        <div
                            className='  mt-4 p-4'
                            style={{
                                borderRadius: "var(--bd-primary)",
                                border: `1px solid var(--bt-primary-theme-${Theme})`,
                                width: "100%",
                            }}
                        >
                            <h1
                                className='pb-2'
                                style={{
                                    fontSize: "1.4rem",
                                    textAlign: "center",
                                    borderBottom: `1px solid var(--bt-primary-theme-${Theme})`,
                                }}
                            >
                                Theme Default
                            </h1>
                            <Button
                                className='d-flex justify-content-center align-items-center'
                                key={uuid()}
                                style={{
                                    height: "4rem",
                                    width: "100%",
                                    borderRadius: "var(--bd-primary)",
                                    overflow: "hidden",
                                }}
                                onClick={(e) => {
                                    setTheme("default");
                                    setAlerts((prev) => {
                                        return [
                                            ...prev,
                                            {
                                                id: uuid(),
                                                type: "success",
                                                message:
                                                    "Change Default Theme Successfully!!",
                                            },
                                        ];
                                    });
                                }}
                            >
                                <div
                                    className='w-50 h-100'
                                    style={{
                                        borderTopLeftRadius:
                                            "var(--bd-primary)",
                                        borderBottomLeftRadius:
                                            "var(--bd-primary)",
                                        backgroundColor:
                                            "var(--bg-primary-theme-default)",
                                    }}
                                ></div>
                                <div
                                    className='w-50 h-100'
                                    style={{
                                        borderTopRightRadius:
                                            "var(--bd-primary)",
                                        borderBottomRightRadius:
                                            "var(--bd-primary)",
                                        backgroundColor:
                                            "var(--bt-primary-theme-default)",
                                    }}
                                ></div>
                            </Button>
                        </div>
                        <div
                            className='  mt-4 p-4'
                            style={{
                                borderRadius: "var(--bd-primary)",
                                border: `1px solid var(--bt-primary-theme-${Theme})`,
                                width: "48%",
                            }}
                        >
                            <h1
                                className='pb-2'
                                style={{
                                    fontSize: "1.4rem",
                                    textAlign: "center",
                                    borderBottom: `1px solid var(--bt-primary-theme-${Theme})`,
                                }}
                            >
                                Dark Theme
                            </h1>
                            {renderDarkTheme()}
                        </div>
                        <div
                            className='  mt-4 p-4'
                            style={{
                                borderRadius: "var(--bd-primary)",
                                border: `1px solid var(--bt-primary-theme-${Theme})`,
                                width: "48%",
                            }}
                        >
                            <h1
                                className='pb-2'
                                style={{
                                    fontSize: "1.4rem",
                                    textAlign: "center",
                                    borderBottom: `1px solid var(--bt-primary-theme-${Theme})`,
                                }}
                            >
                                Light Theme
                            </h1>
                            {renderLightTheme()}
                        </div>
                    </Menu>
                </Menu>
            </Menu>
        </>
    );
};

export default Setting;

import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { useState, useContext, memo } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { Slide, Roll, Flip } from "react-awesome-reveal";

import { FaFacebookSquare, FaThemeco, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { ThemeApp } from "../../Context";

import my_logo from "../../assets/image/my_logo.png";
const Header = () => {
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
    const [social, setSocial] = useState([
        {
            name: "Facebook",
            icon: <FaFacebookSquare />,
            link: "https://www.facebook.com/profile.php?id=100037828690010",
            id: uuid(),
        },
        {
            name: "TikTok",
            icon: <FaTiktok />,
            link: "",
            id: uuid(),
        },
        {
            name: "Instagram ",
            icon: <AiOutlineInstagram />,
            link: "",
            id: uuid(),
        },
        {
            name: "Git Hub",
            icon: <BsGithub />,
            link: "https://github.com/Tran-Huu-Tai-12-04-23",
            id: uuid(),
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
                            setActive(index);
                        }}
                    >
                        {ser.name}
                    </Button>
                </Slide>
            );
        });
    };
    const renderSocial = () => {
        return social.map((soc, index) => {
            return (
                <a
                    key={soc.id}
                    style={{
                        fontSize: "3.5rem",
                        color: `var(--bt-primary-theme-${Theme})`,
                    }}
                    target={"_blank"}
                    href={soc.link}
                >
                    <Roll
                        direction='up'
                        triggerOnce={true}
                        delay={index * 500}
                        fraction={0}
                    >
                        {soc.icon}
                    </Roll>
                </a>
            );
        });
    };
    return (
        <div
            className='wrapper_header position-static p-5'
            style={{
                top: 0,
                left: 0,
                bottom: 0,
                width: "100%",
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
                                animation:
                                    "heartBeat .5s ease infinite alternate",
                            }}
                        >
                            <Roll triggerOnce={true} direction='up'>
                                <img
                                    className='rounded-circle w-100'
                                    src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/326957191_3354159448170060_8217260670468642730_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IxN3wIURwqIAX91c-RM&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAFnUdS4qJh_lPVPuzVt4G0gF49qX-_HLEM_yBMnelHvQ&oe=63FFED56'
                                    alt="It's me"
                                />
                            </Roll>
                        </Button>
                        <Button
                            className='mt-5'
                            style={{
                                fontSize: "1.4rem",
                                height: "4rem",
                                color: `var(--bt-primary-theme-${Theme})`,
                            }}
                        >
                            Follow Me
                        </Button>
                        <div className='w-100 d-flex justify-content-between align-items-center mt-2 flex-wrap'>
                            {renderSocial()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Header);

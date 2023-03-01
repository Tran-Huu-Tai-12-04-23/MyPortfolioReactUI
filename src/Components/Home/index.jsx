import { v4 as uuid } from "uuid";
import { useState, useContext } from "react";
import "./style.scss";
import LottiePlayer from "@lottiefiles/lottie-player";
import { Button } from "@mui/material";
import { ThemeApp } from "../../Context";

import { Slide, Roll, Flip } from "react-awesome-reveal";

import Home1 from "../../assets/image/Home1.jpg";
import Me from "../../assets/image/Me.png";

import { CgArrowsScrollV } from "react-icons/cg";
import { FaFacebookSquare, FaThemeco, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Home = ({ setModalDetailMe }) => {
    const [Theme, setTheme] = useContext(ThemeApp);
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
    const renderSocial = () => {
        return social.map((soc, index) => {
            return (
                <a
                    key={soc.id}
                    className='hover_bd d-flex justify-content-center align-items-center'
                    style={{
                        "--bd-cl": `var(--bt-primary-theme-${Theme})`,
                        fontSize: "3.5rem",
                        color: `var(--bt-primary-theme-${Theme})`,
                        marginLeft: index !== 0 ? "4rem" : "",
                        border: "1px solid transparent",
                        height: "4rem",
                        width: "4rem",
                        borderRadius: "50%",
                        transition: ".4s",
                    }}
                    target={"_blank"}
                    href={soc.link}
                >
                    <Roll
                        direction='up'
                        triggerOnce={true}
                        delay={index * 500}
                        fraction={0}
                        style={{
                            marginBottom: ".2rem",
                        }}
                    >
                        {soc.icon}
                    </Roll>
                </a>
            );
        });
    };
    return (
        <div
            className='wrapper_about  d-flex flex-justify-content-center align-items-center '
            style={{
                height: "100vh",
                background: "",
                overflowX: "hidden",
            }}
        >
            <div className='container-fluid h-100'>
                <div className='row d-flex flex-justify-content-center align-items-center position-relative h-100  overflow-hidden'>
                    <div className='col-lg-8 col-xl-8 '>
                        <div
                            className='d-flex flex-column w-100 '
                            style={{
                                color: "var(--cl-text-theme-1)",
                                width: "47rem",
                                // overflow: "hidden",
                            }}
                        >
                            <div className='w-100'>
                                <Slide triggerOnce={true} direction='up'>
                                    <h1 style={{ fontWeight: "bold" }}>
                                        Hello, It's Me
                                    </h1>
                                </Slide>
                                <Slide
                                    triggerOnce={true}
                                    direction='up'
                                    className='w-100'
                                >
                                    <h1
                                        style={{
                                            fontSize: "4.5rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Tran Huu Tai
                                    </h1>
                                    <div className='d-flex justify-content-start align-items-center w-100'>
                                        <h1
                                            style={{
                                                fontSize: "4rem",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            And I'm a
                                        </h1>
                                        <div className='typed-animation'>
                                            <h1
                                                style={{
                                                    fontSize: "4rem",
                                                    fontWeight: "bold",
                                                    color: `var(--bt-primary-theme-${Theme})`,
                                                    marginLeft: "2rem",
                                                }}
                                                className='typed-out'
                                            >
                                                FullStacks Developer
                                            </h1>
                                        </div>
                                    </div>
                                </Slide>
                            </div>

                            <Slide triggerOnce={true} direction={"up"}>
                                <h5
                                    className=' mt-2'
                                    style={{
                                        fontSize: "1.8rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                    }}
                                >
                                    Hello! I'm glad you took some time to visit
                                    my website
                                </h5>
                            </Slide>
                        </div>
                        <div className='mt-2'>
                            <Slide triggerOnce={true} direction={"up"}>
                                <h5
                                    style={{
                                        color: `var(--cl-text-secondary-theme-${Theme})`,
                                    }}
                                >
                                    I really enjoy studying things related to
                                    websites, software, and games.
                                </h5>
                            </Slide>
                        </div>
                        <div className='w-100 d-flex justify-content-start align-items-center mt-2 flex-wrap mt-4'>
                            {renderSocial()}
                        </div>
                        <div className='w-100 mt-4'>
                            <Slide triggerOnce={true} direction='up'>
                                <Button
                                    variant='outlined '
                                    className='hover_bg'
                                    style={{
                                        "--bg-cl": `var(--bg-third-theme-${Theme})`,
                                        height: "4rem",
                                        width: "16rem",
                                        fontSize: "1.4rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                        border: `1px solid var(--bt-primary-theme-${Theme})`,
                                    }}
                                    onClick={(e) => {
                                        setModalDetailMe(true);
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Slide>
                        </div>
                    </div>
                    <div
                        className=' col-lg-4 col-xl-4 d-flex justify-content-center h-75 overflow-hidden'
                        style={{
                            transform: "scale(1.4)",
                            borderTopRightRadius: "4rem",
                            borderBottomLeftRadius: "4rem",
                        }}
                    >
                        <Slide
                            triggerOnce={true}
                            direction='right'
                            delay={500}
                            className='w-100 h-100'
                            style={{
                                position: "relative",
                            }}
                        >
                            <div
                                className='hexagon position-absolute'
                                style={{
                                    "--bg-cl": `var(--bg-third-theme-${Theme})`,
                                    bottom: "50%",
                                    transform: "translateY(50%)",
                                }}
                            >
                                <img
                                    className='position-absolute'
                                    src={Me}
                                    style={{
                                        zIndex: "2",
                                        top: "-50%",
                                        left: "50%",
                                        width: "30rem",
                                        transform: "translateX(-50%)",
                                        height: "30rem",
                                        backgroundPosition: "cover",
                                    }}
                                ></img>
                            </div>
                            <img
                                className='position-absolute'
                                src={Me}
                                style={{
                                    zIndex: "2",
                                    top: "65%",
                                    left: "-60%",
                                    width: "30rem",
                                    transform: "translate(-50%, -50%)",
                                    height: "4rem",
                                    backgroundPosition: "cover",
                                    filter: "blur(.5rem)",
                                }}
                            ></img>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;

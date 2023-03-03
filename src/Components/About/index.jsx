import { v4 as uuid } from "uuid";
import { useState, useContext, memo } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { ThemeApp } from "../../Context";

import LottiePlayer from "@lottiefiles/lottie-player";
import { Slide, Roll, Flip } from "react-awesome-reveal";
import about from "../../assets/image/about.png";

const About = ({ setModalDetailMe }) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [textAbout, setTextAbout] = useState([
        {
            text: "My name is Tran Huu Tai and I come from Binh Dinh, ",
            tagOp: "<h1>",
            tagCl: "</h1>",
        },
        {
            text: "That is a beautiful coastal province in Vietnam.",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "I am currently a student at Ton Duc Thang University, ",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "Majoring in web design, game design, and other technology-related subjects.",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "I have a great passion for collecting tech gadgets ",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "And keeping up with the latest technological advancements.",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "I take great pride in my work and strive to complete tasks efficiently.",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "I enjoy communicating through code in seeing my work come to life.",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "I aspire to become a full-stack developer with a focus on creating innovative.",
            tagOp: "<h5>",
            tagCl: "</h5>",
        },
        {
            text: "I am excited about the endless possibilities in the tech industry ",
            tagOp: "<h6>",
            tagCl: "</h6>",
        },
        {
            text: "And am eager to continue learning and growing as a developer.",
            tagOp: "<h6>",
            tagCl: "</h6>",
        },
    ]);

    const handleMouseMoveImage = (e) => {
        const xItem =
            ((e.clientX - e.target.parentElement.getBoundingClientRect().left) /
                e.target.parentElement.offsetWidth) *
                100 +
            "%";
        const yItem =
            ((e.clientY - e.target.parentElement.getBoundingClientRect().top) /
                e.target.parentElement.offsetHeight) *
                100 +
            "%";
        e.target.parentElement
            .querySelector("#zoom")
            .style.setProperty("--x", xItem);
        e.target.parentElement
            .querySelector("#zoom")
            .style.setProperty("--y", yItem);

        e.target.parentElement.querySelector("#zoom").style.opacity = 1;
    };
    const handleMouseOutImage = (e) => {
        e.target.parentElement.querySelector("#zoom").style.opacity = 0;
    };
    const renderAbout = () => {
        return textAbout.map((text, index) => {
            return (
                <h1
                    key={uuid()}
                    className='typed-out-2'
                    style={{
                        animation: `typing2 2s steps(${text.text.length})`,
                        fontSize: "1.4rem",
                        width: "unset",
                        animationDelay: `${index * 2 + 0.1 * index}s`,
                    }}
                >
                    <span>{text.tagOp}</span>
                    {text.text}
                    <span>{text.tagCl}</span>
                </h1>
            );
        });
    };
    return (
        <div
            className='wrapper_about'
            style={{
                height: "100vh",
                width: "100%",
                overflowX: "hidden",
            }}
        >
            <div className='container-fluid h-100'>
                <div className='row h-100'>
                    <div className='col-xl-6 col-lg-6 h-100 overflow-hidden  d-flex align-items-start flex-column justify-content-center'>
                        <Slide direction='up' triggerOnce={true}>
                            <div className='position-relative'>
                                <h1
                                    style={{
                                        fontSize: "2rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                        marginBottom: "2rem",
                                    }}
                                >
                                    About Me
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
                        <Slide
                            direction='up'
                            triggerOnce={true}
                            style={{
                                height: "80%",
                                width: "80%",
                            }}
                        >
                            <div
                                style={{
                                    height: "60%",
                                    width: "100%",
                                    backgroundColor: `var(--bg-third-theme-${Theme})`,
                                    borderRadius: "1rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    padding: "1rem",
                                    boxShadow: `5px 3px 10px 5px var(--bg-third-theme-${Theme})`,
                                }}
                            >
                                <div
                                    className='nav_ios position-absolute'
                                    style={{
                                        height: "2rem",
                                        width: "50%",
                                        top: "1rem",
                                        left: "1rem",
                                    }}
                                >
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='list_number-line'>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                </div>
                                <div className='text_about'>
                                    <div
                                        className='typed-animation-2'
                                        style={{
                                            overflow: "hidden",
                                            height: `${
                                                textAbout.length * 3
                                            }rem`,
                                            "--sum-height": `${
                                                textAbout.length * 3
                                            }rem`,
                                            animation: `jump ${
                                                (textAbout.length - 1) * 2.1
                                            }s steps(${textAbout.length - 1})`,
                                        }}
                                    >
                                        {renderAbout()}
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div
                        className='col-lg-6 col-xl-6 d-flex align-items-center flex-wrap flex-column '
                        style={{
                            marginTop: "5%",
                        }}
                    >
                        <Slide triggerOnce={true} direction={"right"}>
                            <div
                                className='flex about-image'
                                style={{
                                    border: `1px solid  var(--bt-primary-theme-${Theme})`,
                                    marginTop: "5rem",
                                    borderRadius: "50%",
                                    height: "30rem",
                                    width: "30rem",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    className='img'
                                    onMouseMove={handleMouseMoveImage}
                                    onMouseOut={handleMouseOutImage}
                                    src={about}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "1rem",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                        zIndex: 2,
                                    }}
                                ></img>
                                <img
                                    className='img-zoom'
                                    id='zoom'
                                    src={about}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "1rem",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                        transform: "scale(2)",
                                        width: "100%",
                                        zIndex: 2,
                                        clipPath: `circle(6rem at var(--x) var(--y))`,
                                    }}
                                ></img>
                            </div>
                        </Slide>
                        <Slide
                            triggerOnce={true}
                            direction='up'
                            className='w-100 d-flex justify-content-center align-items-center mt-5'
                            style={{}}
                        >
                            <Button
                                className='hover_bg d-flex justify-content-center align-items-center'
                                variant='text'
                                style={{
                                    color: `var(--cl-text-theme-${Theme})`,
                                    border: `1px solid var(--bt-primary-theme-${Theme})`,
                                    width: "15rem",
                                    height: "4rem",
                                    fontSize: "1.4rem",
                                    "--bg-cl": `var(--bg-third-theme-${Theme})`,
                                }}
                            >
                                Read More
                            </Button>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(About);

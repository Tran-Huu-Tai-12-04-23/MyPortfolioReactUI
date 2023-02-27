import { v4 as uuid } from "uuid";
import { useState, useContext } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { ThemeApp } from "../../Context";

import { Slide, Roll, Flip } from "react-awesome-reveal";

import Home1 from "../../assets/image/Home1.jpg";

const About = ({ setModalDetailMe }) => {
    const [Theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className='wrapper_about'
            style={{
                height: "100vh",
                width: "100%",
                overflowX: "hidden",
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
                    height: "48%",
                    width: "48%",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                        borderRadius: "1rem",
                        position: "relative",
                        overflow: "hidden",
                        padding: "1rem",
                        boxShadow: `5px 3px 50px 5px var(--bg-third-theme-${Theme})`,
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
                            }}
                        >
                            <h1
                                className='typed-out-2'
                                style={{
                                    animation: `typing 2s steps(${
                                        "<span><I'm Huu Tai</h1>".length
                                    })`,
                                    fontSize: "1.8rem",
                                }}
                            >
                                <span>{"<h1>"}</span>
                                I'm Huu Tai
                                <span>{"</h1>"}</span>
                            </h1>
                            <h1
                                className='typed-out-2'
                                style={{
                                    animation: `typing 2s steps(${
                                        `<h5>I'm second year of university.</h5>`
                                            .length
                                    })`,
                                    animationDelay: "2.1s",
                                }}
                            >
                                <span>{"<h5>"}</span>
                                I'm second year of university.
                                <span>{"</h5>"}</span>
                            </h1>
                            <h1
                                className='typed-out-2'
                                style={{
                                    animation: `typing 2s steps(${
                                        `<h5>I'm learning information technology at Ton Duc Thang
                                    University.</h5>`.length
                                    })`,
                                    animationDelay: "4.2s",
                                }}
                            >
                                <span>{"<h5>"}</span>
                                I'm learning information technology at Ton Duc
                                Thang University.
                                <span>{"</h5>"}</span>
                            </h1>
                            <h1
                                className='typed-out-2'
                                style={{
                                    fontSize: "1.4rem",
                                    color: "#fff",
                                    animation: `typing 2s steps(${
                                        `<span>Mình thích viết Blog, làm video Youtube, Tiktok để
                                    chia sẻ kiến thức.</span>`.length
                                    })`,
                                    animationDelay: "6.4s",
                                }}
                            >
                                <span>{`<span>`}</span>
                                Mình thích viết Blog, làm video Youtube, Tiktok
                                để chia sẻ kiến thức.
                                <span>{`</span>`}</span>
                            </h1>
                            <h1
                                className='typed-out-2'
                                style={{
                                    fontSize: "1.4rem",
                                    color: "#fff",
                                    animation: `typing 2s steps(${
                                        `<span>Đặc biệt, mình còn có các khóa học về lập trình.</span>`
                                            .length
                                    })`,
                                    animationDelay: "8.6s",
                                }}
                            >
                                <span>{`<span>`}</span>
                                Đặc biệt, mình còn có các khóa học về lập trình.
                                <span>{`</span>`}</span>
                            </h1>
                            <h1
                                className='typed-out-2'
                                style={{
                                    fontSize: "1.4rem",
                                    color: "#fff",
                                    animation: `typing 2s steps(${
                                        `<span>Nếu bạn muốn trở thành lập trình viên Front-end thì
                                    đừng ngại.</span>`.length
                                    }`,
                                    animationDelay: "10.8s",
                                }}
                            >
                                <span>{`<span>`}</span>
                                Nếu bạn muốn trở thành lập trình viên Front-end
                                thì đừng ngại
                                <span>{`</span>`}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};
export default About;

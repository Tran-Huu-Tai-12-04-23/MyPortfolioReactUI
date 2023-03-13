import { useState, useContext } from "react";
import { Button, Hidden } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";

import { ThemeApp } from "../../Context";

const TimeLine = ({}) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [times, setTimes] = useState(["2021", "2022", "2023", "2023+"]);
    const [timeActive, setTimeActive] = useState(0);
    const [images, setImages] = useState([
        {
            link: "https://1.bp.blogspot.com/-bDxfpjbA08Y/XvLIuQkBnPI/AAAAAAAAgGQ/3oNFt81Z234nBCAKiUaF4QZM1fpqcCAeQCNcBGAsYHQ/s1600/cfacfaafc8f624a18701e7decd364fc4.jpg",
            des: "Tổng hợp hơn 50 hình nền phong cảnh thiên nhiên, cảnh đường phố tuyệt đẹp do taoanhdep.com sưu tầm. Tổng hợp những hình ảnh cảnh đẹp để các bạn đặt làm hình nền điện thoại của mình.",
            title: "2021",
        },
        {
            link: "https://1.bp.blogspot.com/-P5JJVa6jGkQ/XvLIuTgJjXI/AAAAAAAAgGM/v5G9vqPFsM03JklbAB9QnsUCLC4gXw_fQCNcBGAsYHQ/s1600/fd68f08b99db1aff07322ffadd62a1d5.jpg",
            des: "Tổng hợp hơn 50 hình nền phong cảnh thiên nhiên, cảnh đường phố tuyệt đẹp do taoanhdep.com sưu tầm. Tổng hợp những hình ảnh cảnh đẹp để các bạn đặt làm hình nền điện thoại của mình.",
            title: "2021",
        },
        {
            link: "https://1.bp.blogspot.com/-mvZrLtXTb2I/XvRCSK8z_BI/AAAAAAAAgGs/GzXAr5Gv1uYtEdcWcy9Ftq4wqv4nZJEtQCNcBGAsYHQ/s1600/4a65ccf083c1babeab058e964f067487.jpg",
            des: "Tổng hợp hơn 50 hình nền phong cảnh thiên nhiên, cảnh đường phố tuyệt đẹp do taoanhdep.com sưu tầm. Tổng hợp những hình ảnh cảnh đẹp để các bạn đặt làm hình nền điện thoại của mình.",
            title: "2021",
        },
        {
            link: "https://3.bp.blogspot.com/-wX9xwHHF6Tk/XvRCS0CtRBI/AAAAAAAAgG0/ne_JT8aDcjsUp3Yq0L-mkWzOa1Ob_jUIgCNcBGAsYHQ/s1600/4c097e220bc9c5282104314931e1b594.jpg",
            des: "Tổng hợp hơn 50 hình nền phong cảnh thiên nhiên, cảnh đường phố tuyệt đẹp do taoanhdep.com sưu tầm. Tổng hợp những hình ảnh cảnh đẹp để các bạn đặt làm hình nền điện thoại của mình.",
            title: "2021",
        },
    ]);
    const renderTimes = () => {
        return times.map((time, index) => {
            return (
                <div
                    className='col-12 d-flex justify-content-start  align-items-center'
                    key={uuid()}
                    style={{
                        height: "6rem",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setTimeActive(index);
                    }}
                >
                    <div
                        className={`note_time m-0  p-0  `}
                        style={{
                            height: "3rem",
                            width: "3rem",
                            borderRadius: "50%",
                            background: `var(--bg-third-theme-${Theme})`,
                            "--note-time-cl":
                                timeActive === index
                                    ? `var(--bt-primary-theme-${Theme})`
                                    : `rgba(255, 255, 255, 0.5)`,
                            "--display": index == 0 ? "none" : "block",
                        }}
                    ></div>
                    <div
                        style={{
                            fontSize: "1.4rem",
                            marginLeft: "4rem",
                            minWidth: "5rem",
                            color:
                                timeActive === index
                                    ? `var(--bt-primary-theme-${Theme})`
                                    : `var(--cl-text-theme-${Theme})`,
                            fontWeight: "bold",
                        }}
                    >
                        {time}
                    </div>
                </div>
            );
        });
    };
    const renderImage = () => {
        return images.map((item, index) => {
            return (
                <div
                    key={uuid()}
                    className='  justify-content-center align-items-center '
                    style={{
                        display: timeActive === index ? "flex" : "none",
                        width: "90%",
                        height: "80%",
                        minHeight: "40rem",
                        maxHeight: "50rem",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                    }}
                >
                    <div className='p-5'>
                        <h1
                            style={{
                                color: "#fff",
                            }}
                        >
                            {item.title}
                        </h1>
                        <p
                            className='mt-5'
                            style={{
                                color: "#757575",
                                fontSize: "2rem",
                            }}
                        >
                            {item.des}
                        </p>
                    </div>
                    <div
                        className='position-relative'
                        style={{
                            height: "100%",
                            width: "80%",
                            minWidth: "30rem",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            className='hover_img'
                            src={item.link}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                        ></img>
                    </div>
                </div>
            );
        });
    };

    return (
        <div
            className='wrapper_timeline'
            style={{
                height: "70rem",
                zIndex: "10",
            }}
        >
            <Slide triggerOnce={true} direction='up'>
                <div className='container-fluid  '>
                    <div className='row '>
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
                                        TimeLine
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
                        <div className='col-xl-9 col-lg-9'>{renderImage()}</div>
                        <div className='col-xl-3 col-lg-3'>{renderTimes()}</div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default TimeLine;

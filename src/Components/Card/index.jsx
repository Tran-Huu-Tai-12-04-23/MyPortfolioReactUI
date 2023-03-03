import { useState, useContext, useRef, useEffect } from "react";
import { Button, Hidden } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";

import { ThemeApp } from "../../Context";

import {
    MdOutlineArrowForwardIos,
    MdOutlineArrowBackIosNew,
} from "react-icons/md";
const Card = ({ linkImg = [], des }) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [imgActive, setImgActive] = useState(0);
    const [wayDrag, setWayDrag] = useState();
    const wrapperImg = useRef();
    const renderImage = () => {
        return linkImg.map((img) => {
            return (
                <img
                    src={img}
                    key={uuid()}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></img>
            );
        });
    };

    const handleMouseDown = (e) => {
        setWayDrag(e.pageX);
    };
    const handleMouseUp = (e) => {
        setWayDrag((prev) => e.pageX - prev);
    };

    useEffect(() => {
        if (wrapperImg) {
            if (wrapperImg.current) {
                wrapperImg.current.style.transform = `translateX(${
                    -imgActive * wrapperImg.current.offsetWidth
                }px)`;
            }
        }
        console.log(imgActive);
    }, [imgActive]);
    return (
        <div
            className=' wrapper_card position-relative hover_bd'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
                width: "100%",
                height: "30rem",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid transparent",
                "--bd-cl": `var(--bt-primary-theme-${Theme})`,
            }}
        >
            <div
                className='wrapper_card d-flex justify-content-start '
                ref={wrapperImg}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                    transition: ".4s",
                }}
            >
                {renderImage()}
            </div>
            <div
                className='hover position-absolute d-flex justify-content-between align-items-center'
                style={{
                    bottom: "0",
                    padding: "1rem",
                    left: 0,
                    width: "100%",
                    height: "4rem",
                    backgroundColor: `rgba(0,0,0, .4)`,
                    color: "#fff",
                    transform: "translateY(100%)",
                    cursor: "pointer",
                    "--cl": `var(--bt-primary-theme-${Theme})`,
                }}
            >
                <Button
                    className='hover_bg'
                    style={{
                        color: "rgba(255,255,255, 1)",
                        border: `1px solid var(--bt-primary-theme-${Theme})`,
                        "--bg-cl": `var(--bg-third-theme-${Theme})`,
                    }}
                >
                    Read More
                </Button>
                <div>
                    <MdOutlineArrowBackIosNew
                        className='hover_cl'
                        onClick={(e) =>
                            setImgActive((prev) => {
                                if (imgActive > 0) {
                                    return prev - 1;
                                }
                                return prev;
                            })
                        }
                    />
                    <MdOutlineArrowForwardIos
                        className='hover_cl'
                        onClick={(e) =>
                            setImgActive((prev) => {
                                if (imgActive < linkImg.length - 1) {
                                    return prev + 1;
                                }
                                return prev;
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;

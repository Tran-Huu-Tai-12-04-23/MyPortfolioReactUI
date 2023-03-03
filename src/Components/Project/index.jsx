import { useState, useContext } from "react";
import { Button, Hidden } from "@mui/material";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";

import Card from "../Card";

import { ThemeApp } from "../../Context";

const Project = ({}) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [projects, setProjects] = useState([
        {
            name: "Web Economic",
            linkImage: [
                "https://st.quantrimang.com/photos/image/2019/05/10/img-html.gif",
                "https://xuanthulab.net/images/post/the-img-chen-anh-vao-html-1143.jpg",
                "https://www.iloveimg.com/img/homepage-product-2.png",
            ],
            des: "Khi truy cập trang web, bạn sẽ thường xuyên thấy rất nhiều hình ảnh đủ mọi kích thước và vị trí trên trang. Hình ảnh trong trang web HTML sẽ giúp nội dung phong phú hơn cũng như tăng tính thẩm mỹ cho trang.",
        },
        {
            name: "Web Economic",
            linkImage: [
                "https://st.quantrimang.com/photos/image/2019/05/10/img-html.gif",
                "https://xuanthulab.net/images/post/the-img-chen-anh-vao-html-1143.jpg",
                "https://www.iloveimg.com/img/homepage-product-2.png",
            ],
            des: "Khi truy cập trang web, bạn sẽ thường xuyên thấy rất nhiều hình ảnh đủ mọi kích thước và vị trí trên trang. Hình ảnh trong trang web HTML sẽ giúp nội dung phong phú hơn cũng như tăng tính thẩm mỹ cho trang.",
        },
    ]);

    const renderProject = () => {
        return projects.map((project) => {
            return (
                <div className='col-lg-3 col-xl-3' key={uuid()}>
                    <Card linkImg={project.linkImage} des={project.des}></Card>
                </div>
            );
        });
    };

    return (
        <div
            className='wrapper_project'
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
                                    Projects
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
                    {renderProject()}
                </div>
            </div>
        </div>
    );
};

export default Project;

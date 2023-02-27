import { useContext, useState } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";

import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import Input from "../../Components/Input";

import Me from "../../assets/image/Me.png";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { BiPaste, BiSend } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import { ThemeApp } from "../../Context";
const ModalFormContact = ({
    display = "none",
    setModalDetailMe,
    alerts,
    setAlerts,
}) => {
    const [Theme, setTheme] = useContext(ThemeApp);
    const [phone, setPhone] = useState("0376100548");
    const [email, setEmail] = useState("huutaitran201@gmail.com");
    const [copyPhone, setCopyPhone] = useState(false);
    const [copyEmail, setCopyEmail] = useState(false);
    const [modalContact, setModalContact] = useState(false);
    const [age, setAge] = useState(0);

    const resetCopy = () => {
        setTimeout(() => {
            console.log("reset");
            setCopyPhone(false);
            setCopyEmail(false);
        }, 1000);
    };
    const handleCopyPhone = (e) => {
        e.stopPropagation();
        resetCopy();
        setCopyPhone(!copyPhone);
        navigator.clipboard.writeText(phone);
    };
    const handleCopyEmail = (e) => {
        e.stopPropagation();
        resetCopy();
        setCopyEmail(!copyEmail);
        navigator.clipboard.writeText(email);
    };
    const handleChange = (e) => {
        e.stopPropagation();
        setAge(e.target.value);
    };

    return (
        <>
            <div
                className='position-fixed'
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 100,
                    backdropFilter: "blur(.5rem)",
                    display: display,
                }}
                onClick={(e) => {
                    setModalDetailMe(false);
                    setModalContact(false);
                }}
            >
                <div
                    className='position-absolute d-flex justify-content-between align-items-center animation_modal flex-column'
                    style={{
                        top: "50%",
                        left: "50%",
                        minHeight: "10rem",
                        minWidth: "40%",
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                        borderRadius: "1rem",
                        padding: "1rem",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div
                        className='w-100'
                        style={{
                            display: !modalContact ? "block" : "none",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='d-flex justify-content-between align-items-center w-100 '>
                            <Button
                                style={{
                                    padding: "1rem",
                                    backgroundColor: `var(--bg-third-theme-${Theme})`,
                                    borderRadius: "1rem",
                                }}
                            >
                                <img
                                    className='mr-2'
                                    src={Me}
                                    style={{
                                        width: "4rem",
                                        height: "4rem",
                                        borderRadius: "1rem",
                                    }}
                                ></img>
                                <div
                                    className='d-flex flex-column justify-content-center align-items-start'
                                    style={{
                                        color: `var(--cl-text-theme-${Theme})`,
                                        paddingLeft: "2rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "1.2rem",
                                            margin: 0,
                                        }}
                                    >
                                        HuuTai
                                    </span>
                                    <span
                                        style={{
                                            margin: 0,
                                            fontSize: ".8rem",
                                        }}
                                    >
                                        FullStacks Developer
                                    </span>
                                </div>
                                <div
                                    className=''
                                    style={{
                                        marginLeft: "2rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                    }}
                                >
                                    <SlArrowLeft />
                                    <SlArrowRight />
                                </div>
                            </Button>
                            <Button
                                className='button btn-animation '
                                style={{
                                    "--body-bg": `var(--bt-primary-theme-${Theme})`,
                                    "--primary_color": `var(--bt-primary-theme-${Theme})`,
                                    "--bg": `var(--bg-third-theme-${Theme})`,
                                    border: `1px solid var(--bt-primary-theme-${Theme}`,
                                    borderRadius: ".8rem",
                                    height: "5rem",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setModalContact(!modalContact);
                                }}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>Hire Me</span>
                            </Button>
                        </div>
                        <Button
                            className='w-100 mt-4'
                            style={{
                                color: `var(--bt-primary-theme-${Theme})`,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.2rem",
                                    marginRight: "1.2rem",
                                    color: `var(--cl-text-theme-${Theme})`,
                                }}
                            >
                                I'm student at TON DUC THANG university
                            </span>
                            <FaBookOpen
                                style={{
                                    fontSize: "2rem",
                                }}
                            ></FaBookOpen>
                        </Button>
                        <Button
                            className='w-100 mt-4'
                            style={{
                                color: `var(--bt-primary-theme-${Theme})`,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.2rem",
                                    marginRight: "1.2rem",
                                    color: `var(--cl-text-theme-${Theme})`,
                                }}
                            >
                                I'm FullStacks Developer
                            </span>
                            <IoLogoWebComponent
                                style={{
                                    fontSize: "2rem",
                                }}
                            ></IoLogoWebComponent>
                        </Button>
                        <div className='mt-4 w-100 d-flex justify-content-between align-items-center '>
                            <div
                                className='position-relative hover_flex d-flex justify-content-center align-items-center'
                                variant='outlined'
                                style={{
                                    color: `var(--bt-primary-theme-${Theme})`,
                                    width: "48%",
                                    minWidth: "10rem",
                                    borderColor: `var(--bt-primary-theme-${Theme})`,
                                    borderRadius: "1rem",
                                    backgroundColor: `rgbA(0,0,0, .1)`,
                                    height: "4rem",
                                }}
                            >
                                <span
                                    className='ml-2'
                                    style={{
                                        fontSize: "1rem",
                                        marginRight: "1rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                    }}
                                >
                                    {phone}
                                </span>
                                <AiOutlinePhone
                                    style={{
                                        fontSize: "2rem",
                                    }}
                                />
                                {!copyPhone && (
                                    <Button
                                        className='child_hover'
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "0rem",
                                            transform: "translateY(-50%)",
                                            color: `var(--cl-text-theme-${Theme})`,
                                        }}
                                        onClick={handleCopyPhone}
                                    >
                                        <FiCopy
                                            style={{
                                                fontSize: "2rem",
                                            }}
                                        />
                                    </Button>
                                )}
                                {copyPhone && (
                                    <Button
                                        className=''
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "0rem",
                                            height: "100%",
                                            transform: "translateY(-50%)",
                                            color: `var(--cl-text-theme-${Theme})`,
                                        }}
                                    >
                                        <BiPaste
                                            style={{
                                                fontSize: "2.5rem",
                                            }}
                                        />
                                    </Button>
                                )}
                            </div>
                            <div
                                className='position-relative hover_flex d-flex justify-content-center align-items-center'
                                variant='outlined'
                                style={{
                                    color: `var(--bt-primary-theme-${Theme})`,
                                    width: "48%",
                                    minWidth: "10rem",
                                    borderColor: `var(--bt-primary-theme-${Theme})`,
                                    borderRadius: "1rem",
                                    backgroundColor: `rgbA(0,0,0, .1)`,
                                    height: "4rem",
                                }}
                            >
                                <span
                                    className='ml-2'
                                    style={{
                                        fontSize: "1rem",
                                        color: `var(--cl-text-theme-${Theme})`,
                                        marginRight: "1rem",
                                    }}
                                >
                                    {email}
                                </span>
                                <MdOutlineEmail
                                    style={{
                                        fontSize: "2rem",
                                    }}
                                />
                                {!copyEmail && (
                                    <Button
                                        className='child_hover'
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "0rem",
                                            transform: "translateY(-50%)",
                                            color: `var(--cl-text-theme-${Theme})`,
                                        }}
                                        onClick={handleCopyEmail}
                                    >
                                        <FiCopy
                                            style={{
                                                fontSize: "2.5rem",
                                            }}
                                        />
                                    </Button>
                                )}
                                {copyEmail && (
                                    <Button
                                        className=''
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "0rem",
                                            height: "100%",
                                            transform: "translateY(-50%)",
                                            color: `var(--cl-text-theme-${Theme})`,
                                        }}
                                    >
                                        <BiPaste
                                            style={{
                                                fontSize: "2rem",
                                            }}
                                        />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className='w-100  flex-column align-items-center'
                        style={{
                            display: modalContact ? "flex" : "none",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button
                            className='w-100'
                            style={{
                                height: "4rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.4rem",
                                    color: `var(--cl-text-theme-${Theme})`,
                                }}
                            >
                                Send For Me
                            </span>
                        </Button>
                        <Input
                            label='Email'
                            backgroundLabel={`var(--bt-primary-theme-${Theme})`}
                            styleCustom={{
                                backdropFilter: "blur(10rem)",
                                width: "100%",
                            }}
                            icon={<MdOutlineEmail />}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                        <Input
                            label='Your Name'
                            backgroundLabel={`var(--bt-primary-theme-${Theme})`}
                            styleCustom={{
                                backdropFilter: "blur(10rem)",
                                marginTop: "2rem",
                                width: "100%",
                            }}
                            icon={<HiOutlineUser />}
                        ></Input>
                        <Input
                            label='Your Phone'
                            backgroundLabel={`var(--bt-primary-theme-${Theme})`}
                            styleCustom={{
                                backdropFilter: "blur(10rem)",
                                marginTop: "2rem",
                                width: "100%",
                            }}
                            icon={<AiOutlinePhone />}
                        ></Input>
                        <Button
                            className='w-50 mt-5'
                            style={{
                                margin: "0 auto",
                                height: "4rem",
                                fontSize: "1.4rem",
                                borderRadius: "1rem",
                                color: `var(--cl-text-theme-${Theme})`,
                                backgroundColor: `var(--bt-primary-theme-${Theme})`,
                            }}
                            onClick={(e) => {
                                setAlerts((prev) => {
                                    return [
                                        ...prev,
                                        {
                                            id: uuid(),
                                            type: "success",
                                            message: "Send Successfully!!",
                                        },
                                    ];
                                });
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.4rem",
                                }}
                            >
                                Send
                            </span>
                            <BiSend
                                style={{
                                    fontSize: "3rem",
                                    marginLeft: "1.2rem",
                                }}
                            ></BiSend>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalFormContact;

import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import Setting from "../../Components/Setting";
import ModalFormContact from "../../Components/ModalFormContact";
import Alert from "../../Components/Alert";
import About from "../../Components/About";
import TimeLine from "../../Components/TimeLine";
import Project from "../../Components/Project";
import Skills from "../../Components/Skills";

import { ThemeApp } from "../../Context";

const HomeLayout = () => {
    const [modelDetailMe, setModalDetailMe] = useState(false);
    const [Theme, setTheme] = useContext(ThemeApp);
    const [alerts, setAlerts] = useState([]);

    const renderAlerts = () => {
        return alerts.map((alert) => {
            return (
                <Alert
                    className={"animation_alert"}
                    key={alert.id}
                    type={alert.type}
                    nameAlert={alert.message}
                    styleCustom={{
                        backgroundColor: `var(--bg-third-theme-${Theme})`,
                        color: `var(--cl-text-theme-${Theme}`,
                        height: "4rem",
                        marginBottom: "2rem",
                    }}
                    id={alert.id}
                    alerts={alerts}
                    setAlerts={setAlerts}
                ></Alert>
            );
        });
    };
    return (
        <>
            <div
                style={{
                    with: "100vw",
                }}
            >
                <Setting alerts={alerts} setAlerts={setAlerts} />
                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-lg-2 col-xl-2 g-0'>
                            <Header setModalDetailMe={setModalDetailMe} />
                        </div>
                        <div className='col-lg-10 col-xl-10 g-0 p-5'>
                            <Home setModalDetailMe={setModalDetailMe}></Home>
                            <About />
                            <TimeLine />
                            <Project />
                            <Skills />
                        </div>
                    </div>
                </div>
                <ModalFormContact
                    alerts={alerts}
                    setAlerts={setAlerts}
                    display={modelDetailMe ? "block" : "none"}
                    setModalDetailMe={setModalDetailMe}
                />
            </div>
            {alerts && (
                <div
                    className='position-fixed d-flex justify-content-center align-items-center flex-column'
                    style={{
                        top: "2rem",
                        right: "2rem",
                    }}
                >
                    {renderAlerts()}
                </div>
            )}
        </>
    );
};
export default HomeLayout;

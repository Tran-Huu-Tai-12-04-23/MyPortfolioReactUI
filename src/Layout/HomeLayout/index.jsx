import { useState } from "react";
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import Setting from "../../Components/Setting";
import ModalFormContact from "../../Components/ModalFormContact";

const HomeLayout = () => {
    const [modelDetailMe, setModalDetailMe] = useState(false);

    return (
        <div
            style={{
                with: "100vw",
            }}
        >
            <Setting />
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-lg-2 col-xl-2 g-0'>
                        <Header setModalDetailMe={setModalDetailMe} />
                    </div>
                    <div className='col-lg-10 col-xl-10 g-0'>
                        <Home setModalDetailMe={setModalDetailMe}></Home>
                    </div>
                </div>
            </div>
            <ModalFormContact
                display={modelDetailMe ? "block" : "none"}
                setModalDetailMe={setModalDetailMe}
            />
        </div>
    );
};
export default HomeLayout;

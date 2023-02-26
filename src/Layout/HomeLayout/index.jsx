import Header from "../../Components/Header";
import Home from "../../Components/Home";
import Setting from "../../Components/Setting";

const HomeLayout = () => {
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
                        <Header />
                    </div>
                    <div className='col-lg-10 col-xl-10 g-0'>
                        <Home></Home>
                    </div>
                </div>
            </div>
            {/* <Home /> */}
        </div>
    );
};
export default HomeLayout;

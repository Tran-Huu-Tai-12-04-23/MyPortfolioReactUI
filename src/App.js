import { useState, useEffect } from "react";
import HomeLayout from "./Layout/HomeLayout";
import { ThemeApp } from "./Context";
import Loader from "./Components/Loader";

function App() {
    const [Theme, setTheme] = useState(1);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const handleLoad = (e) => {
            setLoader(false);
        };
        window.addEventListener("load", handleLoad);
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: `var(--bg-primary-theme-${Theme})`,
                }}
            >
                <Loader show={loader} />
                {!loader && (
                    <ThemeApp.Provider value={[Theme, setTheme]}>
                        <HomeLayout />
                    </ThemeApp.Provider>
                )}
            </div>
        </>
    );
}

export default App;

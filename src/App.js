import { useState } from "react";
import HomeLayout from "./Layout/HomeLayout";
import { ThemeApp } from "./Context";

function App() {
    const [Theme, setTheme] = useState(1);
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: `var(--bg-primary-theme-${Theme})`,
            }}
        >
            <ThemeApp.Provider value={[Theme, setTheme]}>
                <HomeLayout />
            </ThemeApp.Provider>
        </div>
    );
}

export default App;

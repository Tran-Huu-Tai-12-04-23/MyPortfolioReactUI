import "./style.scss";

const Loader = ({ show = "false" }) => {
    return (
        <div
            className='wrapper_loader position-fixed d-flex justify-content-center align-items-center'
            style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            <div
                className='dashed-loading'
                style={{
                    display: show ? "block" : "none",
                }}
            ></div>
        </div>
    );
};
export default Loader;

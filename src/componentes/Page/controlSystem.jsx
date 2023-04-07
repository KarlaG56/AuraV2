import Header from "../controlSystem/Header";
import Nav from "../controlSystem/Nav";
import Body_Employee from "../controlSystem/Employee/Body_Employee";
import "../../assets/styles/Control_System.css";

function controlSystem() {
    return (
        <>
            <Header />
            <Nav />
            <Body_Employee/>
        </>
    )
}

export default controlSystem;
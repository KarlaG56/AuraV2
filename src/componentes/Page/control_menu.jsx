import Header from "../controlSystem/Header";
import Nav from "../controlSystem/Nav";
import Body_Menu from "../controlSystem/Body_Menu";
import "../../assets/styles/Control_System.css";

function control_menu() {
    return (
        <>
            <Header />
            <Nav />
            <Body_Menu/>
        </>
    )
}

export default control_menu;
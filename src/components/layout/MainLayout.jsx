import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    );
};

export default MainLayout;
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Card from "../Card/Card.jsx";
import data from "../../data/breakfast.json"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Main>
                {data.breakfasts.map(item => (
                    <Card
                        key={item.id}
                        name={item.name}
                        source={item.source}
                    />
                ))}
            </Main>
        </>
    );
};

export default MainLayout;
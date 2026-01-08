import MainLayout from "../../components/layout/MainLayout.jsx";
import data from "../../data/breakfast.json";
import Card from "../../components/Card/Card.jsx";

const HomePage = () => {
    return (
        <>
           <MainLayout>
               {data.breakfasts.map(item => (
                   <Card
                       key={item.id}
                       name={item.name}
                       source={item.source}
                   />
               ))}
           </MainLayout>
        </>
    );
};

export default HomePage;
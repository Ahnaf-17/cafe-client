import Category from "../Category/Category";
import Banner from "../Shared/Banner/Banner";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;
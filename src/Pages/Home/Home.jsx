import Category from "../Category/Category";
import Banner from "../Shared/Banner/Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
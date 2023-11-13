import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Banner from "../Shared/Banner/Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fusion Cafe | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
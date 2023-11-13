import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import PopularMenu from '../Home/PopularMenu';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Cafe | menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle 
            subHeading={'Don`t miss'} heading={"Todays offer"}
            ></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
            {/* Pizza */}
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>



            {/* <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our menu"></Cover>
            <PopularMenu></PopularMenu> */}
        </div>
    );
};

export default Menu;
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderCoverImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../Hooks/useMenu';
import OrderTab from '../../components/OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Cafe | Order food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                {/* <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel> */}
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
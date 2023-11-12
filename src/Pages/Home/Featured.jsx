import SectionTitle from "../../components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './css/Featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading={'check it out'}
            heading={'Featured Item'}
            > </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-600 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ullam illo omnis molestias ea incidunt assumenda eaque iste sequi eius, temporibus ipsam repellendus! Perferendis error corrupti nobis itaque asperiores molestias impedit odit illo odio facere ipsum adipisci, excepturi eius rerum et! Quae itaque quasi corporis, adipisci quisquam ratione recusandae ut!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured; 
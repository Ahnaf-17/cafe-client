/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const FoodCard = ({item}) => {
    const  location = useLocation()
    const navigate = useNavigate()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {name,recipe,image,price,_id} = item;
    const handleCart = food => {
        // console.log(food,user.email);
        if(user && user.email){
            // send cart to database 
            console.log(user.email,food);
            const cartItem = {
                menuId: _id,
                email: user.email,name,image,price
            }

            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });  
                }
            })
        }
        else{
            Swal.fire({
                title: "Need to login",
                text: "login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body  flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleCart(item)}
                     className="btn btn-outline border-0 bg-slate-100 border-b-4 mt-4 uppercase border-orange-400">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
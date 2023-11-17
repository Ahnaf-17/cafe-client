import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = id =>{

    }
    return (
        <div>
            <div className="flex justify-evenly mb-10">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <button className="btn btn-neutral">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index) => <tr key={item._id}>
                                <th>
                                   {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                                <th>
                                    <button 
                                    onClick={()=>handleDelete(item._id)}
                                    className="btn btn-ghost text-red-500">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }
                        

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;
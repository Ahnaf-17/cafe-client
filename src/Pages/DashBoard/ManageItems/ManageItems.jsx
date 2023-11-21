import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";

const ManageItems = () => {
    const handleDeleteItem = item =>{

    }
    const [menu] = useMenu()
    return (
        <div>
            <SectionTitle heading='manage all items' subHeading='hurry up'></SectionTitle>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index) => <tr key={item._id}>
            <td>
                {index+1}
            </td>
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
            <td className="text-right">
                ${item.price}
            </td>
            <td>
              <button className="btn btn-sm btn-ghost  bg-orange-500">
                <FaEdit className="text-white "></FaEdit>
             </button>
            </td>
            <td>
            <button
             onClick={() => handleDeleteItem(item)}className="btn btn-ghost text-red-500"><FaTrash></FaTrash>
             </button>
            </td>
          </tr>)
      }
      
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;
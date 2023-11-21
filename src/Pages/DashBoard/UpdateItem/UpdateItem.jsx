import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {name,price,category,recipe,_id} = useLoaderData();
    // const item = useLoaderData();
    const { register, handleSubmit,reset} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()



    console.log(name,price,category,recipe);
    // console.log(item);
    
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //use axios secure
            const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                //show success
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "item updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with img url',res.data);
    }

    
    return (
        <div>
            <SectionTitle heading='update item'
            subHeading='refresh info'
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input
                        defaultValue={name}
                            {...register("name",{required:true})}
                            type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue={category} {...register("category",{required:true})}
                                className="select select-bordered w-full ">
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                            defaultValue={price}
                                {...register("price",{required:true})}
                                type="number" placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe",{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                    <input {...register("image",{required:true})} type="file" className="file-input w-full max-w-xs" />
                    </div>


                    <button className="btn btn-neutral">
                        Update <FaUtensils className="ml-1"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
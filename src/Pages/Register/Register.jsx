import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const {createUser} = useContext(AuthContext)



    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })

    }
    // console.log(watch("example"))
    return (
       <>
       <Helmet>
                <title>Fusion Cafe | Register</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name",{ required: true })} type="text" placeholder="name"
                            name="name"
                            className="input input-bordered"  />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" 
                            name="email"
                            {...register("email",{ required: true })}
                            className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" 
                            name="password"
                            {...register("password",{ required: true,  minLength: 6, 
                            maxLength: 20, 
                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                        })}
                            className="input input-bordered" />


                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}

                            {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters</span>}
                            
                            {errors.password?.type === 'maxLength' && (<p className="text-red-500">Password must be less than 20</p>)}
                            {errors.password?.type === 'pattern' && (<p className="text-red-500">One uppercase , One lowercase ,One number & one special character</p>)}

                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p><small>Have and account? <Link to='/login'>Log in</Link></small></p>
                </div>
            </div>
        </div>
       </>
    );
};

export default Register;
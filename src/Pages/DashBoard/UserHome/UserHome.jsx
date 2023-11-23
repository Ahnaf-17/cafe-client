import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className="text-2xl">
            <h2>
                <span>Hi,Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>
        </div>
    );
};

export default UserHome;
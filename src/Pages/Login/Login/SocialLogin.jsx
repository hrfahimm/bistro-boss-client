import { useContext } from "react";
import google from "../../../assets/google.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = ({ text }) => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
            const LoggedUser = result.user;
            console.log(LoggedUser);
            const saveUser = { name: LoggedUser.displayName, email: LoggedUser.email };

            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(saveUser),
            })
                .then((res) => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                });

            console.log("user profile update");
        });
    };

    return (
        <div className='text-center  pb-4 '>
            <div className='divider'> </div>
            <button
                onClick={handleGoogleSignIn}
                className=' btn btn-circle btn-link   '>
                <img src={google} alt='logo'/>
            </button>
            <p>{text} With Google</p>
        </div>
    );
};

export default SocialLogin;

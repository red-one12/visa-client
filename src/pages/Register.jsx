import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigateToHome = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const { createNewUser, setUser } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigateToHome('/');
      })
      .catch((error) => {
        console.error('Error', error);
        setError(error.message);
        setUser(null);
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);  // Use the setUser from AuthContext
        navigateToHome('/');
      })
      .catch((error) => {
        console.error('error', error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Registration</h1>
      <div className="text-center">
        <p>Registration with</p>
        <button onClick={handleGoogleRegister} className="btn bg-blue-500">
          <FaGoogle />
        </button>
      </div>
      <div className="divider">OR</div>
      <div className="">
        <form onSubmit={handleRegistration} className="card-body">
          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

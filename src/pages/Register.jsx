import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigateToHome = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const { createNewUser, setUser } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [isManual, setIsManual] = useState(true);

  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigateToHome('/');
        setIsManual(false);
      })
      .catch((error) => {
        console.error('Error', error);
        setErrorMessage(error.message);
        setUser(null);
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password.length < 6) {
      setErrorMessage('Password should be 6 characters or more!');
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
      return;
    }
    setErrorMessage('');

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          setUser(user);
          navigateToHome('/');
        });
      })
      .catch((error) => {
        console.error('Error', error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Registration</h1>
      <div className="text-center">
        <p>Register with</p>
        <button onClick={handleGoogleRegister} className="btn bg-blue-500">
          <FaGoogle />
        </button>
      </div>
      <div className="divider">OR</div>
      <div className="">
        <form onSubmit={handleRegistration} className="card-body">
          
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
          {isManual && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
            </div>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          </div>
          {errorMessage && <p className="text-red-500 text-[12px]">{errorMessage}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className='text-gray-500 text-sm text-end'>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;

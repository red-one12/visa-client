import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const navigateToHome = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        setUser(result.user);
        navigateToHome('/');
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Welcome to Visa Hub</h1>
      <div className="">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <p className='text-gray-500 text-sm text-end'>Don't have any account? <Link to='/register' className='text-blue-500'>Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

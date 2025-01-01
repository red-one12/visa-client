

const Register = () => {


  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log(name, email, photoURL, password);
    
  }
  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Registration</h1>



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



        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Name" name="photoURL" className="input input-bordered" required />
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
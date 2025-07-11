import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import loginimg from '/Assets/loginimg.jpg';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import Social from './Social';


const Register = () => {
  const { signup, user, setUser } = useContext(AuthContext);
  const [emailExists, setEmailExists] = useState(false); // fake email check
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    setEmailExists(false);
    if (data.email === 'existing@example.com') {
      setEmailExists(true); // simulate existing email
      return;
    }

    const { email, password, name, photo,role } = data;
    try {
    const newUser = await signup(email, password, name, photo);
    setUser(...newUser,role);

    
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Welcome to the platform 🎉',
      confirmButtonColor: '#0ea5e9',
    });

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.message || 'Something went wrong',
    });
  }
};
  return (
    <div style={{ backgroundColor: '#ccf5ef' }}>
      <section className="w-[95%] lg:w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen p-6">
        {/* Left image */}
        <div className="lg:max-w-[400px] hidden  lg:flex lg:w-1/2  lg:mb-0">
          <img
            src={loginimg}
            alt="Task Image"
            className="w-full  h-[710px] object-cover"
          />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-xl lg:max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Invalid email format',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
              {emailExists && (
                <p className="text-red-500 text-sm mt-1">Email already exists</p>
              )}
            </div>

            {/* Profile Picture URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Profile Picture URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                {...register('photo', { required: 'Profile picture URL is required' })}
              />
              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                    message: 'Include at least 1 capital letter & 1 special character',
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Role Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Select Role</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register('role', { required: 'Please select a role' })}
              >
                <option value="">-- Choose Role --</option>
                <option value="Worker">Worker</option>
                <option value="Buyer">Buyer</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="form-control">
              <button type="submit" className="btn bg-accent text-white w-full">
                Register
              </button>
             
            </div>
          </form>
<div className="divider">OR</div>
          <Social></Social>
          <p className="text-center mt-4 text-sm">
            Already have an account?{' '}
            <a className="text-blue-600 hover:underline" href="/login">
              Login
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;

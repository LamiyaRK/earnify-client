import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosinstance from '../../Sharedpages/axiosinstance';
import { AuthContext } from '../../../Context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router';

const PostTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const { user,setUser } = use(AuthContext);
  const navigate=useNavigate()
  const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    setUploading(true);
    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.data.display_url);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = (data) => {
    if (!user?.email) return;
    const tamount=data.payable_amount*data.required_workers
    if(user?.coin<tamount)
    {
      toast.error("Not available Coin.  Purchase Coin")
     return navigate('/dashboard/purchasecoin')

    }

    const taskData = {
      ...data,
      task_image_url: imageUrl,
      user_email: user?.email,
    };

    axiosinstance.post('/tasks', taskData)
      .then(res => {
         axiosinstance.patch('/users',{
          email:user?.email,
          addcoin:-tamount}).then(res1=>{
            Swal.fire({
          icon: 'success',
          title: 'Task Posted!',
          text: 'Your task has been successfully added.',
          timer: 2000,
          showConfirmButton: false
        });
        setUser(prev=>({
          ...prev,
          coin:prev.coin-tamount
         }))
        reset();
        setImageUrl('');

          })
        
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while posting the task!',
        });
        console.error(err);
      });
  };

  return (
    <div className='bg-secondary w-full h-full pb-20'>
      <h1 className='text-3xl font-semibold text-center py-20'>Add Task</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 grid lg:grid-cols-2 gap-6 w-5/6 mx-auto bg-white p-10 rounded-lg"
      >
        {/* Task Title */}
        <div className="lg:col-span-2">
          <label className="block mb-1 font-medium">
            Task Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('task_title', { required: true })}
            placeholder="e.g. Watch my YouTube video and comment"
            className="input input-bordered w-full h-12 bg-secondary text-base"
          />
        </div>

        {/* Task Detail */}
        <div className="lg:col-span-2">
          <label className="block mb-1 font-medium">
            Task Details 
          </label>
          <textarea
            {...register('task_detail', { required: false })}
            placeholder="Detailed description of the task"
            className="textarea textarea-bordered w-full h-24 bg-secondary text-base"
          ></textarea>
        </div>

        {/* Required Workers */}
        <div>
          <label className="block mb-1 font-medium">
            Required Workers <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register('required_workers', { required: true,min:1 })}
            placeholder="e.g. 100"
            className="input input-bordered w-full h-12 bg-secondary text-base"
          />
        </div>

        {/* Payable Amount */}
        <div>
          <label className="block mb-1 font-medium">
            Payable Amount per Worker <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register('payable_amount', { required: true,min:1 })}
            placeholder="e.g. 10"
            className="input input-bordered w-full h-12 bg-secondary text-base"
          />
        </div>

        {/* Completion Date */}
        <div>
          <label className="block mb-1 font-medium">
            Completion Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register('completion_date', { required: true })}
            className="input input-bordered w-full h-12 bg-secondary text-base"
          />
        </div>

        {/* Submission Info */}
        <div>
          <label className="block mb-1 font-medium">
            Submission Info 
          </label>
          <input
            type="text"
            {...register('submission_info', { required: false })}
            placeholder="e.g. Screenshot or proof"
            className="input input-bordered w-full h-12 bg-secondary text-base"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block mb-1 font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register('category', { required: true })}
            className="select select-bordered w-full h-12 bg-secondary text-base"
          >
           <option value="Video Engagement">Video Engagement</option>
  <option value="Content Writing">Content Writing</option>
  <option value="Translation">Translation</option>
  <option value="Image Handling">Image Handling</option>
  <option value="App & Website Testing">App & Website Testing</option>
  <option value="Creative Design">Creative Design</option>
  <option value="Data Entry">Data Entry</option>
  <option value="SEO & Marketing">SEO & Marketing</option>
  <option value="Survey & Feedback">Survey & Feedback</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="lg:col-span-2">
          <label className="block mb-1 font-medium">
            Upload Task Image 
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full h-12 bg-secondary text-base"
          />
          {uploading && <p className="text-blue-500 mt-2">Uploading image...</p>}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded Preview"
              className="w-40 h-40 object-cover mt-3 rounded-lg border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full lg:col-span-2 h-12 bg-accent text-white text-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default PostTask;

import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axiosinstance from '../../Sharedpages/axiosinstance';
import { AuthContext } from '../../../Context/AuthContext';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const { user } = useContext(AuthContext);
  const imgbbKey = import.meta.env.VITE_IMGBB_KEY;
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosinstance.get(`/tasks?id=${id}`)
      .then(res => {
        const fetchedData = res.data;
        setData(fetchedData);
        reset(fetchedData); // set default values in form
        setImageUrl(fetchedData.task_image_url);
      })
      .catch(err => {
        console.log("Data not fetched");
      });
  }, [id, reset]);

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

  const onSubmit = (formData) => {
    if (!user?.email) return;
const { _id, ...rest } = formData;
    const taskData = {
      ...rest,
      task_image_url: imageUrl,
      email: user?.email
    };

    axiosinstance.put(`/tasks?id=${id}`, taskData)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Task Updated!',
          text: 'The task was successfully updated.',
          timer: 2000,
          showConfirmButton: false
        });
        navigate('/dashboard/mytasks');
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Could not update the task. Please try again later.'
        });
        console.log(err);
      });
  };

  return (
    <div className='bg-secondary w-full h-full pb-20'>
      <h1 className='text-3xl font-semibold text-center py-20'>Update Task</h1>
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
            Task Details <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('task_detail', { required: true })}
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
            {...register('required_workers', { required: true })}
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
            {...register('payable_amount', { required: true })}
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
            Submission Info <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('submission_info', { required: true })}
            placeholder="e.g. Screenshot or proof"
            className="input input-bordered w-full h-12 bg-secondary text-base"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register('category', { required: true })}
            className="select select-bordered w-full h-12 bg-secondary text-base"
          >
            <option value="">-- Select Category --</option>
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
            Upload Task Image <span className="text-red-500">*</span>
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/UseAuxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Additem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("aftr posting new menu Item ", data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: " center",
                icon: "success",
                title: "Menu Item Added",
                showConfirmButton: false,
                timer: 1000,
              });
              reset();
            }
          });
        }
      });
    console.log(data);
  };
  //console.log(img_hosting_token);
  //console.log(errors);

  return (
    <div className='w-full px-10'>
      <SectionTitle
        heading='Add an Item'
        subHeading="what's New"></SectionTitle>
      <div>
        <form
          className='p-8 '
          action=''
          onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control  w-full max-w-auto  my-4 '>
            <label className='label label-text font-semibold uppercase '>Rasipy Name</label>
            <input
              type='text'
              placeholder='Name'
              className='input  input-lg  input-bordered w-full max-w-auto'
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className='flex justify-between my-4 gap-2'>
            <div className='form-control w-full max-w-xs'>
              <label className='label label-text uppercase '>Catagory</label>
              <select
                defaultValue='Pick One'
                {...register("category", { required: true })}
                className='select select-bordered font-semibold  input-lg'>
                <option disabled>Pick one</option>
                <option>Pizza</option>
                <option>soup</option>
                <option>Salad</option>
                <option>Drinks</option>
                <option>Dessaut</option>
                <option>Dashi</option>
              </select>
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label label-text font-semibold uppercase '>Price *</label>
              <input
                type='number'
                placeholder='Price'
                className='input input-bordered w-full max-w-xs input-lg'
                {...register("price", { required: true, minLength: 0, maxLength: 100 })}
              />
            </div>
          </div>
          <div className='form-control my-4 '>
            <label className='label lable-text uppercase   '>Recipy Details</label>
            <textarea
              {...register("recipe", { required: true })}
              className='textarea textarea-border input-bordered h-40'
              placeholder='Bio'></textarea>
          </div>
          <div className='flex items-center justify-between mt-8'>
            <div className='form-control w-full max-w-xs'>
              <label className='label label-text uppercase '>Item Image*</label>
              <input
                type='file'
                className='file-input file-input-bordered w-full max-w-xs'
                {...register("image", { required: true })}
              />
            </div>
            <input
              className='btn-xl   btn btn-accent mt-10 '
              type='submit'
              value='Add Item'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additem;

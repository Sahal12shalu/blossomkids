'use client'
import React, { useRef, useState } from 'react'
import AdminNav from '../AdminNav/page'
import Image from 'next/image';
import { TbXboxXFilled } from "react-icons/tb";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './page.css'

function Addproduct() {

  const [formData, SetformData] = useState({
    name: '', category: '', stock: '', description: '', firstprize: '', lastprize: '', discount: ''
  })
  const [image, setImage] = useState([]);
  const [loading, Setloading] = useState(false)
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const [showImageSection, setShowImageSection] = useState(false);
  const [imagePreview, setSelectedImage] = useState(null);
  const MAX_IMAGES = 5;
  const MIN_IMAGES = 0

  const Handlesubmit = (e) => {
    e.preventDefault()
    Setloading(true)
    const finalFormData = {
      ...formData,
      images: image,
      offer: showImageSection,
      offerimage: imagePreview
    };

    axios.post('/api/product/crud', finalFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.data.data === 'success') {
        setTimeout(() => {
          Setloading(false)
          toast('product Added successfull', {
            style: {
              background: '#000',
              color: '#fff',
              borderBottom: '3px solid black',
              width: '270px',
              height: '40px'
            },
          })
          SetformData({
            name: '',
            category: '',
            stock: '',
            description: '',
            firstprize: '',
            lastprize: '',
            discount: '',
          });
          setImage([]);
          setShowImageSection(false)
          setSelectedImage(null)
        }, 1000);
      }
    });
  }

  const handleImageChange2 = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

  const handleRemoveImage2 =() =>{
    setSelectedImage(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetformData((prev) => ({ ...prev, [name]: value }));
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = MAX_IMAGES - image.length;

    const validFiles = files.slice(0, remainingSlots);

    validFiles.forEach((file) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    });
    e.target.value = '';
  };

  const handleButtonClick = () => {
    if (image.length < MAX_IMAGES) {
      fileInputRef.current.click();
    }
  };

   const handleButtonClick2 = () => {
    fileInputRef2.current.click();
  };


  const handleRemoveImage = (indexToRemove) => {
    setImage((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const isMaxReached = image.length >= MAX_IMAGES;
  const isMinReached = image.length === MIN_IMAGES;

  return (
    <div className='pt-8 bg-white'>
      <ToastContainer />
      {loading && (
        <div className='fixed inset-0 bg-black/10 bg-opacity-20 z-50 flex items-center justify-center'>
          <div className='w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}

      <AdminNav />
      <div className='mt-23 w-full h-full flex justify-center'>
        <div className='w-6xl max-md:m-2 p-4 md:p-6 shadow-[0px_0px_48px_5px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white'>
          <form onSubmit={Handlesubmit}>
            <h1 className='text-black/80 font-honeybabe text-[20px] '>Add-product Informations</h1>
            <div className='w-full border-t-1 border-black my-2'></div>
            <div className='md:flex w-full h-full pb-4'>
              <div className='md:w-[50%] max-md:w-full '>
                <div className='flex flex-col w-full pt-4'>
                  <label className='font-semibold font-sans text-black'>Product Name</label>
                  <input onChange={handleChange} name='name' value={formData.name} type='text' className='pl-2 border-1 border-black/60 w-[95%] h-9 rounded-md' placeholder='Product name...' required />
                </div>

                <div className='flex w-full pt-4'>
                  <div className='w-[50%] flex flex-col'>
                    <label className='font-semibold font-sans text-black'>Category</label>
                    <select name='category' onChange={handleChange} value={formData.category} className='border-1 border-black/60 w-[95%] h-9 rounded-md' required>
                      <option value=''>-- select category --</option>
                      <option value='toys'>Toys</option>
                      <option value='dress'>Dress</option>
                      <option value='bags'>Bags</option>
                      <option value='bottle'>Bottle</option>
                      <option value='books'>Books</option>
                    </select>
                  </div>

                  <div className='w-[50%] flex flex-col'>
                    <label className='font-semibold font-sans text-black'>Stock</label>
                    <select name='stock' onChange={handleChange} value={formData.stock} className='border-1 border-black/60 w-[90%] h-9 rounded-md' required>
                      <option value=''>-- select option --</option>
                      <option value='stock'>Stock</option>
                      <option value='no-stock'>No Stock</option>
                    </select>
                  </div>
                </div>

                <div className='flex flex-col w-full pt-4'>
                  <label className='font-semibold font-sans text-black'>Description</label>
                  <textarea name='description' onChange={handleChange} value={formData.description} type='text' className='pl-2 border-1 border-black/60 w-[95%] h-20 rounded-md pt-1' placeholder='Write about the product ...' required />
                </div>

                <div className='flex w-full pt-4'>
                  <div className='w-[33%]'>
                    <label className='font-semibold font-sans text-black'>First Rate</label>
                    <input name='firstprize' onChange={handleChange} value={formData.firstprize} type='number' className='pl-2 border-1 border-black/60 w-[95%] h-9 rounded-md' />
                  </div>

                  <div className='w-[33%]'>
                    <label className='font-semibold font-sans text-black'>Last Rate</label>
                    <input name='lastprize' onChange={handleChange} value={formData.lastprize} type='number' className='pl-2 border-1 border-black/60 w-[95%] h-9 rounded-md' required />
                  </div>

                  <div className='w-[33%]'>
                    <label className='font-semibold font-sans text-black'>Discount (in%)</label>
                    <input name='discount' onChange={handleChange} value={formData.discount} type='number' className='pl-2 border-1 border-black/60 w-[90%] h-9 rounded-md' placeholder='eg:20' />
                  </div>
                </div>
              </div>

              <div className='md:w-[50%] pt-8 md:pt-4 flex flex-col relative'>
                <h1 className='text-[18px] font-semibold font-sans text-center'>Image Section</h1>
                <div className='flex flex-wrap items-center justify-center mt-2 gap-5'>
                  {image.map((imgSrc, index) => (
                    <div key={index} className='w-22 h-22 border-1 border-black rounded-md relative'>
                      <Image src={imgSrc} alt='image' width={100} height={100} className='object-fit w-full h-full' />
                      <TbXboxXFilled onClick={() => handleRemoveImage(index)} className='absolute top-0 right-0' />
                    </div>
                  ))}
                </div>
                <div className='flex flex-col justify-center items-center border-b-1 border-black/30 pb-3 w-full'>
                  {
                    isMinReached ?
                      <p className='pt-3 text-red-500 text-[14px] font-semibold'>Add image</p>
                      : ''
                  }
                  {
                    isMaxReached ?
                      <p className='pt-3 text-red-500 text-[14px] font-semibold'>Max Image Reached</p>
                      : ''}
                  <input
                    type="file"
                    name='image'
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                  />
                  <button type='button' onClick={handleButtonClick}
                    className={`w-[90%] md:w-[60%] h-9 ${isMaxReached ? 'bg-gray-500 mt-0' : 'bg-black mt-4 hover:bg-black/80'} text-white font-sans font-semibold rounded-lg`}>Add Image</button>

                  <p className='text-black/80 text-[13px] font-semibold font-sans'>NB : Max: 5 image -- Min: 1 image</p>
                </div>

                <div className='flex flex-col justify-center pt-8 pb-4 md:pt-5 w-full border-b-1 border-black/30'>
                  <h1 className='text-[18px] font-semibold font-sans text-center'>Additional information</h1>
                  <label className='pl-5 font-semibold font-sans text-center text-black'>Make offer</label>
                  <div className='md:w-[70%] flex'>
                    <div className="checkbox-apple w-[30%] flex">

                      <input
                        className="yep"
                        id="check-apple"
                        type="checkbox"
                        checked={showImageSection}
                        onChange={(e) => setShowImageSection(e.target.checked)}
                        />
                      <label htmlFor="check-apple"></label>
                    </div>
                    {showImageSection && (
                      <div className='md:w-[60%] w-[40%] flex flex-col items-center pt-4'>
                        {imagePreview && (
                          <div className='w-20 h-20 relative'>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className=
                            "w-20 h-20 object-cover rounded border"
                          />
                          <TbXboxXFilled onClick={handleRemoveImage2} className='absolute top-0 right-0' />
                            </div>
                        )}
                        <input
                          type="file"
                          name='image'
                          accept="image/*"
                          className="hidden"
                          ref={fileInputRef2}
                          onChange={handleImageChange2}
                        />
                        <button type='button' onClick={handleButtonClick2}
                          className={`w-[90%] md:w-[80%] h-9 bg-black mt-4 hover:bg-black/80 text-white font-sans font-semibold rounded-lg`}>Add Image</button>

                      </div>
                    )}
                  </div>
                </div>

                <div className='flex w-full items-end justify-end pt-4 pr-4'>
                  {isMinReached ?
                    <button type='button' className='bg-gray-300 rounded-md text-black font-semibold w-40 h-9 max-md:mt-5  bottom-8 right-3'>Submit</button>
                    :
                    <button type='submit' className='bg-blue-500 transition-transform active:scale-95 duration-100 hover:bg-blue-600 rounded-md text-white font-semibold w-40 h-9 max-md:mt-5 bottom-8 right-3'>Submit</button>
                  }
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addproduct
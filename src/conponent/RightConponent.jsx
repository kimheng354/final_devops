import React from 'react'
import img8 from '../Images/lachlan.jpg'
import img01 from '../Images/notification.png'
import img02 from '../Images/comment.png'
import img9 from '../Images/raamin.jpg'
import img10 from '../Images/nonamesontheway.jpg'
import img03 from '../Images/christina.jpg'

export default function RightConponent() {
  return (
    <div className=' bg-img  bg-cover  bg-center   rounded-l-xl  sticky top-0  h-screen '>
      <div className='justify-end flex text-end space-x-4 p-5 pr-10'>
        <div className='mt-9  '>
          <img className='w-9 h-9 rounded-full text-right' src={img01} alt="" />
        </div>
        <div className='mt-9  '>
          <img className='w-9 h-9  text-right' src={img02} alt="" />
        </div>
        <div className='mt-9  '>
          <img className='w-9 h-9 rounded-full text-right' src={img8} alt="" />
        </div>
      </div>
      <div className='text-right pr-10 '>
        <button className="h-[40px]  bg-gray-100 w-[200px]   rounded-lg uppercase font-mono translate-x-3 ">my amazing trip</button>
      </div>
      <div className='font-bold text-xl text-gray-900 text-justify  p-6 mt-10'>
        <p>i like laying down on
          the sand and looking at the moon</p>
      </div>
      <div className='text-lg justify-start text-start pl-8 font-medium text-red-700'>
        <p>27 people going to  this trip</p>
      </div>
      <div className='justify-start flex text-start space-x-4 p-8 '>
        <div className="avatar">
          <div className="w-9 rounded-full  ">
            <img src={img8} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2">
            <img src={img9} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img10} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img03} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-9 rounded-full outline-dashed bg-yellow-600 pl-2 pt-1">
            <span>23+</span>
          </div>
        </div>
      </div>
    </div>




  )
}

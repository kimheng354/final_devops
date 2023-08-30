import React from 'react'
import img from '../Images/category_icon.png'
import img1 from '../Images/cube.png'
import img2 from '../Images/list.png'
import img3 from '../Images/messenger.png'
import img4 from '../Images/list.png'
import img5 from '../Images/success.png'
import img6 from '../Images/security.png'
import img7 from '../Images/users.png'
import img8 from '../Images/lachlan.jpg'
import img9 from '../Images/raamin.jpg'
import img10 from '../Images/nonamesontheway.jpg'
import img11 from '../Images/plus.png'



export default function LeftConponent() {
    return (
        <div className='bg-slate-200  sticky top-0 h-screen'>

            <div className='w-7  mx-auto mt-4  '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className=' mt-7  '>
                    <img src={img1} alt="" />
                </div>
                <div className='mt-5'>
                    <div class="relative  text-end">
                        <div class="absolute  bg-blue-600  top-0  h-2 w-2 right-0 rounded-full"></div>
                    </div>
                    <img src={img2} alt="" />
                </div>
                <div className='mt-5 '>
                    <div class="relative  text-
                end">
                        <div class="absolute  bg-blue-600  top-0  h-2 w-2 right-0 rounded-full"></div>
                    </div>
                    <img src={img3} alt=" " />
                </div>
                <div className='mt-5'>
                    <img src={img4} alt="" />
                </div>
                <div className='mt-9'>
                    <img src={img5} alt="" />
                </div>
                <div className='mt-5'>
                    <img src={img6} alt="" />
                </div>
                <div className='mt-5'>
                    <img src={img7} alt="" />
                </div>
                <div className='mt-9'>
                    <img className='w-10 h-8 rounded-[50%]' src={img8} alt="" />
                </div>
                <div className='mt-5'>
                    <img className='w-10 h-8 rounded-[50%]' src={img9} alt="" />
                </div>
                <div className='mt-5  '>
                    <img className='w-10 h-8 rounded-[50%]' src={img10} alt="" />
                </div>
                <div className='mt-5 '>
                    <img src={img11} alt="" />
                </div>

            </div>

        </div>


    )

}

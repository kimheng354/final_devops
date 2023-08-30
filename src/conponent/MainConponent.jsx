import React from 'react'
import CenterConponent from './CenterConponent'
import LeftConponent from './LeftConponent'
import RightConponent from './RightConponent'



export default function MainConponent({data,setdata}) {
  // const {data}=props
  return (
    <div className='grid grid-cols-12'>
            <div className='grid col-span-1 '>
                <LeftConponent/>
            </div> 

            <div className=' grid col-span-8  '>
                <CenterConponent data={data} setdata ={setdata}/>
            </div>
            
            <div className='grid col-span-3  '>
                <RightConponent/>
            </div>
    </div>
  )
}

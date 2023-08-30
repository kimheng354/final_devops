
import React, { useState } from 'react'
import InputConponent from './InputConponent';


export default function CenterConponent({ data, setdata }) {
  const [read, setread] = useState([]);
  const [color, setcolors] = useState(false)
  const handleSubmit = (id) => {
    data.map((item) => {
      if (item.id === id) {
        if (item.status === "beach") {
          item.status = "mountain"
        } else if (item.status === "mountain") {
          item.status = "forest"
        } else if (item.status === "forest") {

          item.status = "beach"
        }
      }
    })
    setdata([...data])

  }
  const handldeChangeColors = (id) => {
    setcolors(!color)
  }
  return (
    <div>

      <div className='flex justify-between p-5 mb-4'>
        <h1 className='mt-6 ml-4 text-2xl font-bold text-start '>Good Evening Team !!</h1>
        <div className='pr-3'>
          <label htmlFor="my-modal-3" className="mt-6 ml-4 font-bold uppercase btn bg-grey">add new trip</label>
        </div>

      </div>


      <div className='grid justify-around grid-cols-12 gap-4 mt-4  p-7'>
        {data.map((item) => (
          <div className="grid col-span-4 text-left  card bg-neutral text-neutral-content">
            <div className="card-body ">
              <h2 className="text-2xl font-bold uppercase card-title">{item.title}</h2>
              <p className='line-clamp-3 '>{item.description}</p>
              <div className=''>
                <p>People Going
                  <br />{item.peopleGoing}</p>
              </div>
              <div className="card-actions ">
                <button onClick={handldeChangeColors} className={`btn font-mono ${item.status === "beach"
                  ? 'bg-purple-400 '
                  : item.status === "forest"
                    ? 'bg-pink-500'
                    : 'bg-red-500'
                  }`} >
                  <span onClick={() => handleSubmit(item.id)}>{item.status}</span></button>
                <div>
                  {/* The button to open modal */}
                  <label onClick={() => setread(item)} htmlFor="my-modal-4" className="font-mono uppercase btn bg-stone-600"> read details</label>
                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                  <div className="modal">
                    <div htmlFor="my-modal-4" className="relative modal-box bg-grey">
                      <label htmlFor="my-modal-4" className="absolute btn btn-sm right-2 top-2">X</label>
                      <h3 className="text-lg font-bold text-gray-700"><span className='text-purple-800'>ID :</span> {read.id}</h3>
                      <h3 className="text-lg font-bold text-gray-700 uppercase"><span className='text-purple-800'>Provice :</span> {read.title}</h3>
                      <div className="text-lg font-bold text-gray-700 "> {read.description}</div><br /><br />
                      <h3 className="text-lg font-bold text-gray-700"> <span className='text-purple-800'>Around :</span> {read.peopleGoing} People Going There .</h3>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <InputConponent data={data} setdata={setdata} />
      </div>
    </div>

  )
}

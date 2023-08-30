import React, { useState } from 'react'

export default function InputConponent({ data, setdata }) {
  const [person, setPerson] = useState({});
  const handleInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setdata([...daxta, { id: data.length + 1, ...person }]);

  }
  return (
    <div>
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className='text-left font-mono mt-4'>Title</h3>
            <input type="text" placeholder="Kandal" name="title" onChange={handleInputChange} className="input input-bordered input-md w-full text-base font-mono" />
            <h3 className='text-left font-mono   mt-4'>Description</h3>
            <input type="text" name="description" onChange={handleInputChange} placeholder="Happy place with Beatiful beach" className="input input-bordered input-md w-full text-base font-mono " />
            <h3 className='text-left font-mono   mt-5'>People Going</h3>
            <input type="number" name="peopleGoing" onChange={handleInputChange} placeholder="2000" className="input input-bordered input-md w-full text-base font-mono" />
            <h3 className='text-left font-mono   mt-4'>Type Of Adventure</h3>
            <select onChange={handleInputChange} name="status" className="  select select-info w-full ">
              <option select-ghost className='rounded-xl' >---- Choose Any Option ----</option>
              <option value="beach">Beach</option>
              <option value="forest">Forest</option>
              <option value="mountain">Mountain</option>
            </select>
            <div htmlFor="my-modal-3" className='  text-left mt-5'>
              <button onClick={handleSubmit} type="submit" className="btn bg-slate-500">Button</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

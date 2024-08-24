import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrment, incrment, rst } from '../redux/counterSlice';

function Counter() {
    //compoent can acsses the state by useSlector hook
    const counterValue= useSelector((state)=>state.counter.value)
    const[range,setRange]=useState(1)
    //use dispatch() is hook used to call in action to update the state
    const dispatch= useDispatch();
    console.log(range);
    
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-3'>
        <h2 style={{fontSize:'44px',color:'black'}}>{counterValue}</h2>
        <div className='mt-5'>
            <button className='btn btn-warning p-2' onClick={()=>dispatch(decrment(Number(range)))}>DECREMENT</button>
            <button className='btn btn-success p-2 ms-3' onClick={()=>dispatch(incrment(Number(range)))}>INCREMENT</button>
            <button className='btn btn-danger p-2 ms-3' style={{width:'120px'}} onClick={()=>dispatch(rst())}>RESET</button>
        </div>

    </div>
    <div>
        <input type="text" className='form-control mt-3 w-100' style={{borderColor:'blue'}} placeholder='Enter the Range' onChange={(e)=>setRange(e.target.value)}/>
    </div>
    </>
  )
}

export default Counter
import React from 'react'
import "../App.css"
import { useSelector,useDispatch } from 'react-redux'
import { Minus, Plus } from '../Actions/actions'

const MyCounter = () => {

    const InitialValue = useSelector((state)=> state.AllReducers.MyReducer.counter)
    const dispatch = useDispatch()
   

    return (
        <div className="container">
            <div className="counter">

                <div className="odometer" id="odometer">{InitialValue}</div>
                <button className='btn minus' onClick={()=>{dispatch(Minus())}}>MINUS</button>
                <button className='btn plus' onClick={()=>{dispatch(Plus())}}>PLUS</button>
               
            </div>
        </div>

    )
}

export default MyCounter
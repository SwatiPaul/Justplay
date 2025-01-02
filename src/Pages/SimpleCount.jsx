import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';


const SimpleCount = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state=>state.count.number)

  return (
    <>
    <div className="d-grid">
    <div className="py-2">
        <h2>Counter: {counter}</h2>

        <div className="d-flex gap-3 justify-content-center py-3">
            <button className='btn btn-warning' onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button className='btn btn-warning' onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
            <button className='btn btn-warning' onClick={()=>dispatch({type:'INCREMENT_TEN'})}>+10</button>
            <button className='btn btn-warning' onClick={()=>dispatch({type:'DECREMENT_TEN'})}>-10</button>
            <button className='btn btn-warning' onClick={()=>dispatch({type:'INCREMENT_TWICE'})}>* 2</button>
        </div>

    </div>

    <TodoItem/>

    </div>
    </>
  )
}

export default SimpleCount;
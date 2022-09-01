import React from 'react'
import { useDispatch } from "react-redux/";
import { deleteComment} from '../../redux/modules/comments';
import { useState } from 'react';
import Commentmodal from '../commentmodal/Commentmodal'
const Com = ({ment}) => {
    const dispatch = useDispatch();
    let [modal, setModal] = useState(false);
    const close=()=>{
        setModal(false);
      }
    return (
        
    <>
    {modal?<Commentmodal ment = {ment} close={close}/>:null}
        <div className='list' key={ment.id}>
            <h4>{ment.name}</h4>
            <p>{ment.comm}</p>
            <button onClick={()=>{
            }}>수정하기</button>
            <button onClick={()=>{
              dispatch(deleteComment(ment.id))
              console.log(ment.id)
            }}>
            삭제하기</button>
        </div>
    </>
    )
}

export default Com
import React, { useState } from 'react'
import styled from 'styled-components'
import nextId from "react-id-generator";
import { useDispatch, useSelector } from 'react-redux'
import {addComment} from '../../redux/modules/comments'
import Com from './Com'

const Comment = () => {
    const dispatch = useDispatch();
    // const [addcommen,setAddcommmen] = useState("")
    // const [addname,setAddName] = useState("")
    const reviews = useSelector((state) => state.commen.comments);
        
    const initialState = {
          id:0,
          name:'',
          comm:''  
      };
      
      const [review,setReview] = useState(initialState)
      
    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setReview({...review,id:nextId(), [name]:value})
    }
    // let commentList = reviews.filter((comment)=>{
    //     return String(comment.post) === id;
    // })
    
  return (
    <CommentLayout>
        <h1>눌러서 댓글보기</h1>
        <CommentContainer>
            
            <InputStyle type="text" name='name' value={review.name} onChange={onChangeHandler}/>
            <InputStyle type="text" name='comm' value={review.comm} onChange = {onChangeHandler}/>
            
            <button onClick={()=>{
                dispatch(addComment(review))
            }}>댓글 남기기</button>
        </CommentContainer>
        <div>{reviews.map((commet)=>{

            return(
               <Com key={commet.id} ment ={commet}/>
            )
        })} 
        </div>
    </CommentLayout>
  )
}

export default Comment

const CommentLayout = styled.div`
    border-top:1px solid #eee;
    padding: 30px;
`
const CommentContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
    width: 100%;
    padding: 0px 12px;
    margin-bottom: 30px;
`
const InputStyle = styled.input`
    box-sizing: border-box;
    height: 46px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(238, 238, 238);
`
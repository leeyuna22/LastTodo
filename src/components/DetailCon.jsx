import React from 'react'
import styled from 'styled-components'

const DetailCon = () => {
  return (
    <DetailContainer>
        <DetailIdBox>
            <DetailId>id</DetailId>
            <DetailBack>이전으로</DetailBack>
        </DetailIdBox>
        <div>
            <DetailTit>Title</DetailTit>
            <DetailDesc>안녕하세요</DetailDesc>
        </div>
    </DetailContainer>
  )
}

export default DetailCon


const DetailContainer = styled.div`
    padding: 30px;
`
const DetailIdBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`
const DetailId = styled.h1`
    font-size: 24px;
`
const DetailBack = styled.div`
    font-size: 26px;
    border: 1px solid #eee;
    width: 150px;
    height: 40px;
    text-align: center;
    padding: 5px;
`
const DetailTit = styled.h1`
    font-size: 26px;
    margin-bottom: 20px;
`
const DetailDesc = styled.p`
    font-size: 16px;
`
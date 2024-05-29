import React from 'react'
import styled from 'styled-components'
const CardBody = styled.div`
    max-width: 240px;
    background-color: salmon;
`
const Heading1 = styled.div`
    width: 80%;
    color: white;
    font-size: 20px;
    padding: 4rem;
    border-radius: 20px;
    text-align: center;
`
const Cards = () => {
  return (
    <>
      <CardBody>
        <Heading1>Talha</Heading1>
      </CardBody>
    </>
  )
}

export default Cards
import React from 'react'

const Card = ({title}) => {
  return (
    <>
    <div>
      {title}
    </div>
      <button>Delete</button>
      <button>Edit</button>
    </>
  )
}

export default Card

import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="w-50 bg-primary text-light inline-block p-5 text-center rounded mb-5">
            <h1 className='mb-4'>{props.name}</h1>
            <h2>{props.city},, {props.age},, {props.profession}</h2>
            <button className='bg-danger mt-5 btn btn-lg text-danger-emphasis'>Add friend</button>
        </div>
    </>
  )
}

export default Card
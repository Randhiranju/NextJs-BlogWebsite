import React from 'react'
// this component is just to demonstrate style jsx global
const Dummy = () => {
  return (
    <>
    <style jsx global>
        {`
            .dummy{
                background-color:yellow;
            }
        `}
    </style>
    <div className='dummy'>
       I am Dummy
    </div>
    </>
  )
}

export default Dummy

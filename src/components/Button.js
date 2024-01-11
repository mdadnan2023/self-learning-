import React from 'react'

function Button({menuItems}) {
  return (
    <div className='flex gap-8'>

      {
        menuItems.map(val =>(
            <button>{val}</button>
        ))
      }
    </div>
  )
}

export default Button

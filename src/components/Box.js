import React from 'react'

function Box({ handleInput }) {
  return (
    <section className="Searchbox-wrap">
        <input
         type="text" 
         placeholder="Search Movie..." 
         className="Searchbox" 
         onChange={handleInput}/>
    </section>
    
  )

}

export default Box;
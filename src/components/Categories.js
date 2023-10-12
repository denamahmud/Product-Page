import React, { useState } from 'react'

function Categories({products, setActiveId, setFilter, activeId, setFilteredProducts}) {
 

          const makeFilter = (category) => {

                    const data = products.filter(product => product.category == category)
                    setFilteredProducts(data) 
                    setFilter(true) 
          }
          
          const handleClick = id => {
               setActiveId(id);
          };
  return (
  
    <div className=' capitalize absolute top-[269px] left-[142px] w-[1155px] h-[56px] rounded-[10px] flex flex-row justify-between items-center font-poppins'>

       
          {
            products.map((product) => {
                   
              return(
                <div key={product.id} onClick={() => handleClick(product.id)}> 
                    <div className={`p-5 rounded-[10px] transition ease-in-out delay-150 cursor-pointer ${product.id === activeId ? "text-white shadow-xl bg-black" : 'bg-white2 text-lightgray'}`} onClick={() => makeFilter(product.category)}>{product.category}</div>
                </div>
              )
            })
          }
      </div>
 
  )
}

export default Categories
import { useState } from 'react'   
import Card from '@/components/Card'; 
import Categories from '@/components/Categories'; 

export default function Home({ products }) {

  // states

  const [filteredProducts, setFilteredProducts] = useState('')
  const [filter, setFilter] = useState(false)
  const [stars, setStars] = useState([1,2,3,4,5])
  const [activeId, setActiveId] = useState(null)


 


  return (
   <> 
      <div className='w-[614px] h-[105px] absolute top-[88px] left-[413px]'>

          <h1 className='font-volkhov text-[46px] text-darkgray text-center capitalize'>miswag new arrivals</h1>
          <p className='text-lightgray text-center font-poppins'>Stay Ahead of the Curve with Miswag's Fresh Arrivals</p>
      </div>



      {/* Categories */}

       <Categories products={products} setActiveId={setActiveId} setFilter={setFilter} activeId={activeId} setFilteredProducts={setFilteredProducts}/>
     
      <div>

      <div className=' w-[1345px] h-[838px] absolute top-[367px] left-[48px] rounded-[10px] grid grid-cols-5'> 

     
      {
          (filteredProducts && filteredProducts || []).map((product, index) => (

              // Products
              
              <div key={product.id}>
                  
                   <Card product={product} stars={stars}/>
              </div>
            ))
             
       }  
            
       </div> 
      </div>
   </>
  )
}



export async function getStaticProps() {
      const res = await fetch('https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/63e6d4c9-1412-45e9-903a-f139e889bc5d/dataset.json?id=b435b37b-cba5-4374-875f-332e895a872c&table=block&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1697205600000&signature=SjO14SKraEacfc-wFH7pPi0dSgVWLr_aLQzJe7BDLdE&downloadName=dataset.json')
      const products = await res.json()
      return { props: { products } }
}
 

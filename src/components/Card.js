import Image from 'next/image'
import { BsFillStarFill } from 'react-icons/bs'

const Card = ({ product, stars }) => {
  return (
    
           <div key={product.id} className='shadow-2xl w-[257px] h-[409px] p-5 bg-white mx-5 rounded-[10px] font-poppins'>
           <Image
                    src={product.image}
                    alt="Landscape picture"
                    width={800}
                    height={500}
                    /> 
          <h1 className='text-darkgray text-[20px] font-bold my-3 truncate '>
              {product.title.EN}
          </h1>
          <div className='flex'>
            <p className='text-[12px]'>{product.brand}</p>
            <div className='flex flex-row ml-auto'>
              {stars.map((_, index) => {
                
                return( 

                  <BsFillStarFill color={`${index < product.rating ? '#FCA120' : '#8A8A8A'} `} size={20}/>

                  
                )
                    

                })}

            </div>
          </div>

          <p className='line-through text-customred text-[16px]'>{product.price.original_value}{product.price.currency}</p>  


          <div className='flex justify-between'>
               <p className='text-darkgray text-[24px]'>{product.price.value}{product.price.currency}</p> 
              <div className='flex flex-row-reverse   '>
               {
                 !product.colors[0] == "" && <div className='relative -left-4 text-[12px] mt-1'>+9</div>
               }  
            
                { 
                    
                    product.colors.toSpliced(3, 3).map((item, i) => {
                        
                          return(
                             
                              <div className='w-[25px] h-[25px] rounded-full -mx-[6px]' style={{  backgroundColor : item}}></div>

                          )
                        } 
                   
                  
                  
                    ) 

                    
                 } 
              </div>
             
          </div>
           </div> 
  )
}

export default Card
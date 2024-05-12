import { Image, PencilRuler, Shield } from 'lucide-react'
import React, { useState } from 'react'

export default function SideNav() {
    
    const menulist=[
        {
         id:1,
         name:"Icon",
         icon: PencilRuler   
        },
        {
         id:2,
        name:"Background", 
        icon: Image   

        },
        {
        id:3,
        name:"Upgrade",   
        icon: Shield 

        }
    ]


     const [activeIndex,setActiveIndex]=useState(0)

  return (
    <div className='border shadow-sm h-screen'>
        <div>
            {menulist.map((menu,index)=>(

              <h2 className={`flex gap-2 items-center p-3 text-lg px-7 text-gray-500 my-2 
               cursor-pointer hover:bg-primary hover:text-white
               ${activeIndex==index && 'bg-primary text-white'}`}
               key={index}   onClick={()=>setActiveIndex(index)}  >

                <menu.icon/>
                {menu.name}
                </h2>

            ))}
        </div>
    </div>
  )
}

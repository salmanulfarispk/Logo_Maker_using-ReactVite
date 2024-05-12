import React, { useEffect, useState } from 'react'

export default function LogoPreview() {

    const [storagevalue,setStoredValue]=useState()

    useEffect(()=>{
    const storageData=JSON.parse(localStorage.getItem("value"))
     setStoredValue(storageData)
     
    },[storagevalue])
    

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='h-[400px] w-[400px] bg-gray-200 
        outline-dotted outline-gray-300'>
          
         <div className='h-full w-full'
           style={{
            borderRadius:storagevalue?.bgRounded,
            background: storagevalue?.bgColor,
           }}
         >
          

         </div>

        </div>
    </div>
  )
}

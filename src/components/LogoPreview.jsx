import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import { icons } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'

export default function LogoPreview() {

    const [storagevalue,setStoredValue]=useState()
    const {updateStorage,setUpdateStorage}=useContext(UpdateStorageContext)

    useEffect(()=>{
    const storageData=JSON.parse(localStorage.getItem("value"))
     setStoredValue(storageData)
     
    },[updateStorage])
    

  const Icon=({name,color,size,rotate})=>{
    const LucidIcon=icons[name];
    if(!LucidIcon){
        return ;
    }
    return <LucidIcon color={color} size={size} 
      style={{transform:`rotate(${rotate}deg)`}}
    />
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='h-[400px] w-[400px] bg-gray-200 
        outline-dotted outline-gray-300' style={{padding:storagevalue?.bgPadding}}>
          
         <div className='h-full w-full flex items-center justify-center'
           style={{
            borderRadius:storagevalue?.bgRounded,
            background: storagevalue?.bgColor,
            
           }}
         >
           <Icon name={storagevalue?.icon} color={storagevalue?.iconColor} 
           size={storagevalue?.iconSize} rotate={storagevalue?.iconRotate}/>
            
         </div>

        </div>
    </div>
  )
}

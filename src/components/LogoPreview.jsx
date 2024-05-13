import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import html2canvas from 'html2canvas'
import { icons } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'


export default function LogoPreview({downloadIcon}) {

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


  useEffect(()=>{
    if(downloadIcon){
      downloadPngIcon();
    }
  },[downloadIcon])


  const downloadPngIcon=()=>{
        const downloadLogoDiv=document.getElementById('downloadLogodiv')
        html2canvas(downloadLogoDiv,{
          backgroundColor:null
        }).then(canvas=>{
           const pngImg=canvas.toDataURL('image/png');
           const downloadLink=document.createElement('a');
           downloadLink.href=pngImg;
           downloadLink.download='Logo_Express.png';
           downloadLink.click();
        })
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='h-[400px] w-[400px] bg-gray-200 
        outline-dotted outline-gray-300' style={{padding:storagevalue?.bgPadding}}>
          
         <div id='downloadLogodiv' className='h-full w-full flex items-center justify-center'
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

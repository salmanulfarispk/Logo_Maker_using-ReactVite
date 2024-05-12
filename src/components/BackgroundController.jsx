import React, { useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerController from './ColorPickerController'

export default function BackgroundController() {

  const [rounded,setRounded]=useState(0)
  const [padding,setPadding]=useState(0)
  const [color,setColor]=useState("#000")


  const storageVlaue=JSON.parse(localStorage.getItem('value'))

     useEffect(()=>{
        const updatedvalue={
            ...storageVlaue,
            bgRound: rounded,
            bgPadding: padding,
            bgColor: color,
            
        }
         localStorage.setItem("value",JSON.stringify(updatedvalue))

     },[rounded,padding,color])
    


  return (
    <div>
     
     <div className='py-2 '>
                <lable className='py-2 flex justify-between items-center'>Rounded <span>{rounded} px</span></lable>
            <Slider defaultValue={[0]} max={512} step={1}
             onValueChange={(event)=>{
                setRounded(event[0])
             }}
            />
            </div>

            <div className='py-2 '>
                <lable className='py-2 flex justify-between items-center'>Padding <span>{padding} px</span></lable>
            <Slider defaultValue={[40]} max={100} step={1}
             onValueChange={(event)=>{
                setPadding(event[0])
             }}
            />
            </div>


            <div className='py-2 '>
                <lable className='py-2 flex justify-between items-center'>Background color</lable>
                 <ColorPickerController hideController={false}
                  selectedColor={(color)=>{
                      setColor(color)
                  }}
                 />
            </div>


    </div>
  )
}

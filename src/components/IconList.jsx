import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { AlignCenter} from 'lucide-react'
import { icons } from 'lucide-react'
import { iconsList } from '@/constants/icons'
  

export default function IconList({SelectedIcon}) {

    const storageValue=JSON.parse(localStorage.getItem('value'))
    const [icon,setIcon]=useState(storageValue?storageValue?.icon:'AlignCenter')

    const [openDialog,setopenDialog]=useState(false)

  const Icon=({name,color,size})=>{
    const LucidIcon=icons[name];
    if(!LucidIcon){
        return ;
    }
    return <LucidIcon color={color} size={size} 
    />
  }

  return (
    <div>
        <div>
        <label>Icon</label>
            <div className='p-3 cursor-pointer bg-gray-200 rounded-md  w-[50px] h-[50px] 
            flex items-center justify-center' onClick={()=>{setopenDialog(true)}}>
                
               <Icon name={icon} color={"#000"} size={20}/>
                
            </div>
        </div>
        <Dialog open={openDialog} onOpenChange={setopenDialog}>
    <DialogContent>
    <DialogHeader>
      <DialogTitle>Pick your Icon</DialogTitle>
      <DialogDescription>
         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
            {iconsList.map((icon,index)=>(
                <div key={index} className='p-3 border flex rounded-sm items-center 
                justify-center cursor-pointer' onClick={()=>{ 
                    SelectedIcon(icon);
                    setopenDialog(false);
                    setIcon(icon)
                }}>
                    <Icon name={icon} color={"#000"} size={20}/>
                </div>
            ))}
         </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

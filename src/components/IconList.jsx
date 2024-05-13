import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { icons } from 'lucide-react'
import { iconsList } from '@/constants/icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from 'axios'

  
// const BASE_URL="https://logoexpress.tubeguruji.com/getIcons.php"
 const BASE_URL="https://logoexpress.tubeguruji.com"

export default function IconList({SelectedIcon}) {

    const storageValue=JSON.parse(localStorage.getItem('value'))
    const [icon,setIcon]=useState(storageValue?storageValue?.icon:'AlignCenter')
    const [openDialog,setopenDialog]=useState(false)
    const [pngIconList,setpngIconList]=useState([])

  const Icon=({name,color,size})=>{
    const LucidIcon=icons[name];
    if(!LucidIcon){
        return ;
    }
    return <LucidIcon color={color} size={size} 
    />
  }

   useEffect(()=>{
    getPngicons()
   },[])
  const getPngicons=()=>{
    axios.get(BASE_URL+'/getIcons.php').then(res=>
      setpngIconList(res.data)
    )
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

      <Tabs defaultValue="icon" className="w-[400px]">
       <TabsList>
    <TabsTrigger value="icon">Icons</TabsTrigger>
    <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
  </TabsList>
  <TabsContent value="icon">
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
  </TabsContent>
  <TabsContent value="color-icon">
  <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
            {pngIconList.map((icon,index)=>(
                <div key={index} className='p-3 border flex rounded-sm items-center 
                justify-center cursor-pointer' onClick={()=>{ 
                    SelectedIcon(icon);
                    setopenDialog(false);
                    setIcon(icon)
                }}>
                    <img src={BASE_URL+"/png/"+icon}/>
                </div>
            ))}
         </div>

  </TabsContent>
   </Tabs>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

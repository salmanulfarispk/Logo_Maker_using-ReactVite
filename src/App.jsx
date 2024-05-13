import { useState } from 'react'
import BackgroundController from './components/BackgroundController'
import Header from './components/Header'
import IconController from './components/IconController'
import SideNav from './components/SideNav'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'




function App() {
 
  const [selectedIndex,setSelectedIndex]=useState(0);
  const [updateStorage,setUpdateStorage]=useState({});


    
  return (
        
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>

    <div>
        
        <Header/>
        <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>
          setSelectedIndex(value)
        }/>
        </div>

        <div className='ml-64 grid grid-cols-1 md:grid-cols-6 fixed'>

           <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
            {selectedIndex==0?
              <IconController/> :
              <BackgroundController/>
            }
           </div>
           <div className='md:col-span-3'>
             <LogoPreview/> 
           </div>
           <div className=''>
              adsss  cmmc 
           </div>
        </div>
        
    </div>
    </UpdateStorageContext.Provider>
  )
}

export default App

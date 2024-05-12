import Header from './components/Header'
import SideNav from './components/SideNav'
import { Button } from './components/ui/button'


function App() {
 

  return (
    <>
        <Header/>
        <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>
          console.log(value)
        }/>
        </div>

        <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
           <div className='md:col-span-2'>
              control panel
           </div>
           <div className='md:col-span-3'>
             icon preview
           </div>
           <div className=''>
              ads banner
           </div>
        </div>
        
        
        
    </>
  )
}

export default App

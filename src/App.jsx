import Header from './components/Header'
import SideNav from './components/SideNav'
import { Button } from './components/ui/button'


function App() {
 

  return (
    <>
        <Header/>
        <div className='w-64 fixed'>
        <SideNav/>
        </div>

        <div className='ml-64'>
           body
        </div>
        
        
        
    </>
  )
}

export default App

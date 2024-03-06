import './App.css'
import Sidebar from './components/Sidebar'
import Areachart from './charts/Areachart'
import health from './assets/health.svg'
import activity from './assets/activity.svg'
import toggle from './assets/toggle.svg'
import search from './assets/search.svg'
import DetailedView from './components/firewall_details/DetailedView'

function Firewall_Details() {

  return (

<>
<div className="m-5 grid grid-cols-12 grid-rows-12 gap-4">

 
  <div className='col-start-1 col-span-3'>
  <Sidebar  />
  </div>

  <div className='col-start-4 col-span-8'>
       
          <div className="row-start-1">
            <div className="justify-end items-end">
              <img className='pr-5'src={search} alt="" />
            </div>
            <DetailedView />
          </div>

      </div>



</div>

</>
  )
}

export default Firewall_Details;

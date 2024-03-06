import search from '../../assets/search.svg'
import activity_data from '../../data/Activity'

import details from '../../assets/details.svg'


function Activity() {
  

  return (
    <>
    <div className="w-[790px] h-[390px] bg-[#121429] rounded-3xl p-10">
            
            <div className="flex flex-row justify-between items-start">
              <div className="text-xl text-[#ffffff]">Firewall Activity</div>
              <img className='pr-5'src={search} alt="" />
            </div>

<div className="grid grid-cols-8 mt-5 justify-center items-center text-center text-slate-400">
    <div className="col-start-1 text-left">
        Network
    </div>
    <div className="col-start-2 col-span-2">
        Contract Address
    </div>
    <div className="col-start-4">
        Parameter
    </div>
    <div className="col-start-5 col-span-2">
        Liquidity Affected
    </div>
    <div className="col-start-7">
        Date
    </div>
    <div className="col-start-8">
        Details
    </div>

</div>

<ul className=''>
<li>
    <div className="grid grid-cols-8 mt-5 justify-center items-center text-center text-slate-400">

    <div className="col-start-1">
        <img className='' src={activity_data[0].network_logo} alt="" />
    </div>
    <div className="col-start-2 col-span-2">
        {activity_data[0].contract_address}
    </div>
    <div className="col-start-4">
    <img className='' src={activity_data[0].Parameter} alt="" />
    </div>
    <div className="col-start-5 col-span-2">
        {activity_data[0].liquidity_affected}
    </div>
    <div className="col-start-7 text-left">
        {activity_data[0].date}
    </div>
    <div className="col-start-8">
        <a href="/Firewall_Details">
        <img src={details} alt="" />
        </a>
    </div>
</div>
</li>

<li>
<div className="grid grid-cols-8 mt-5 justify-center items-center text-center text-slate-400">

    <div className="col-start-1">
    <img className='' src={activity_data[1].network_logo} alt="" />
    </div>
    <div className="col-start-2 col-span-2">
        {activity_data[1].contract_address}
    </div>
    <div className="col-start-4">
    <img className='' src={activity_data[1].Parameter} alt="" />
    </div>
    <div className="col-start-5 col-span-2">
        {activity_data[1].liquidity_affected}
    </div>
    <div className="col-start-7 text-left">
        {activity_data[1].date}
    </div>
    <div className="col-start-8">
        <a href="/Firewall_Details">
        <img src={details} alt="" />
        </a>
    </div>
</div>

</li>

<li>
<div className="grid grid-cols-8 mt-5 justify-center items-center text-center text-slate-400">

<div className="col-start-1">
<img className='' src={activity_data[2].network_logo} alt="" />
</div>
<div className="col-start-2 col-span-2">
    {activity_data[2].contract_address}
</div>
<div className="col-start-4">
<img className='' src={activity_data[2].Parameter} alt="" />
</div>
<div className="col-start-5 col-span-2">
    {activity_data[2].liquidity_affected}
</div>
<div className="col-start-7 text-left">
    {activity_data[2].date}
</div>
<div className="col-start-8">
        <a href="/Firewall_Details">
        <img src={details} alt="" />
        </a>
</div>
</div>


</li>

</ul>
            {/* <div className="flex flex-col justify-between flex-1 pl-7">
                <ul className=" pr-7 list-none">
                    <li>
                        <a className="px-2 py-2 my-2 flex items-center text-white active:bg-blue-500 hover:bg-blue-900 rounded-md cursor-pointer">
                            <span className="ml-2">Firewall Activity</span>
                        </a>
                    </li>
                    <li>
                        <a className="px-2 py-2 my-2 flex items-center text-white active:bg-blue-500 hover:bg-blue-900 rounded-md cursor-pointer">
                            <span className="ml-2">Firewall Activity</span>
                        </a>
                    </li>
                    <li>
                        <a className="px-2 py-2 my-2 flex items-center text-white active:bg-blue-500 hover:bg-blue-900 rounded-md cursor-pointer">
                            <span className="ml-2">Firewall Activity</span>
                        </a>
                    </li>
                   
                </ul>
                </div> */}

        

    </div>
    </>
  )
}

export default Activity;
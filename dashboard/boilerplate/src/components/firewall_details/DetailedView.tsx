import search from '../../assets/search.svg'
import activity_data from '../../data/Activity'

import details from '../../assets/details.svg'
import transaction from '../../assets/Transaction.svg'
import trigger from '../../assets/Trigger.svg'


function DetailedView() {
  

  return (
    <>
    <div className="w-[1173px] h-[888px] bg-[#121429] rounded-3xl p-10">
        <div className='flex flex-row justify-between'>

            <div className="flex flex-col justify-between items-start">
                <div className='text-lg text-[#AEABD8]'>{activity_data[0].contract_address}</div>
                <div className="text-3xl font-bold text-[#ffffff]">Pool XYZ</div>
                
                <div className="flex flex-row gap-5 mt-5">
                    <img src={transaction} alt="" />
                    <img src={trigger} alt="" />
                </div>

            
              <div className="flex flex-col gap-5 mt-5">
                General

                <div className="grid grid-cols-4 gap-5">

                    <div className="col-start-1">
                    <div className='text-lg text-[#AEABD8]'>
                        Liquidity Affected
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                        {activity_data[0].liquidity_affected}
                    </div>
                    </div>



                    <div className="col-start-2 flex flex-col items-center justify-center text-center">
                    <div className='text-lg text-[#AEABD8]'>
                        Firewall Trigger
                    </div>
                    <img className="w-[98px] mt-1" src={activity_data[0].Parameter} alt="" />
                    </div>





                    <div className="col-start-3 items-center justify-center">

                    <div className='text-lg text-[#AEABD8] flex flex-col'>
                        Action taken
                        <div className='w-[98px] h-[35] bg-slate-800 rounded-lg text-center mt-1'>
                            {activity_data[0].Firewall.action_taken_emoji}
                        </div>
                    </div>
                    </div>
                </div>

                

              </div>

              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl font-bold">
                    Firewall information
                </div>
                

                <div className="grid grid-cols-4 gap-5">

                    <div className="col-start-1">
                    
                    <div className="flex flex-col">
                    <div>
                    <div className='text-lg text-[#AEABD8]'>
                        Threshold Reached
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                        {activity_data[0].Firewall.threshold} %
                    </div>
                    </div>
                    <div>
                    <div className='text-lg text-[#AEABD8] mt-5'>
                        Threshold Reachedx xxx
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                        {activity_data[0].Firewall.reached} %
                    </div>
                    </div>

                    </div>
                    </div>



                    <div className="col-start-2">
                    
                    <div className="flex flex-col">
                    <div>
                    <div className='text-lg text-[#AEABD8]'>
                        Firewall time-window
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                        {activity_data[0].Firewall.time_window} blocks
                    </div>
                    </div>
                    <div>
                    <div className='text-lg text-[#AEABD8] mt-5'>
                        Threshold Reachedx xxx
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                        {activity_data[0].Firewall.time_to_limit} block
                    </div>
                    </div>

                    </div>
                    </div>

                    {/* <div className="col-start-3 items-center justify-center">

                    <div className='text-lg text-[#AEABD8] flex flex-col'>
                        Action taken
                        <div className='w-[98px] h-[35] bg-slate-800 rounded-lg text-center mt-1'>
                            {activity_data[0].Firewall.action_taken_emoji}
                        </div>
                    </div>
                    </div> */}
                </div>

                

                    </div>

                    <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl font-bold">
                    Funds information
                </div>
                

                <div className="grid grid-cols-4 gap-12">

                    <div className="col-start-1">
                    
                    <div className="flex flex-col">
                    <div>
                    <div className='text-lg text-[#AEABD8]'>
                        Amount frozen
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                       $ {activity_data[0].liquidity_affected}
                    </div>
                    </div>

                    </div>
                    </div>



                    <div className="col-start-2">
                    
                    <div className="flex flex-col">
                    <div>
                    <div className='text-lg text-[#AEABD8]'>
                        Firewall efficiancy
                    </div>
                    <div className='text-3xl font-extrabold text-[#ffffff]'>
                        {activity_data[0].Firewall.efficiency} %
                    </div>
                    </div>
                    

                    </div>
                    </div>

                    <div className="col-start-3 items-center justify-center">

                    <div className='text-lg text-[#AEABD8] flex flex-col'>
                        Location
                        <div className='text-3xl font-extrabold text-[#ffffff] mt-1'>
                            {activity_data[0].Firewall.location}
                        </div>
                    </div>
                    </div>
                </div>

                

                    </div>
                
                </div>
            


                <div className="text-right">
                <img className="" src={activity_data[0].network_logo} alt="" />
                </div>


</div>
            

            </div>

    </>
  )
}

export default DetailedView;
import  matic from '../assets/networks/matic.svg';
import  eth from '../assets/networks/eth.svg';
import  avax from '../assets/networks/avax.svg';

import Oracle  from '../assets/parameter/Oracle.svg';
import AMM  from '../assets/parameter/AMM.svg';
import TVL  from '../assets/parameter/TVL.svg';

const activity_data = [
    
    {
        contract_address: "0x162...f28",
        network: "Polygon",
        network_logo: matic,
        Parameter: Oracle,
        liquidity_affected: 10000000,
        date: "01.09.21",

        Firewall:
        {
                action_taken_emoji: "❄️",
                action_taken: "Freeze",
                threshold: 5,
                reached: 8,
                time_window: 10,
                time_to_limit: 1,
                efficiency: 100,
                location: "Vault1",
        },
            
    
    },
    {
        contract_address: "0x163...f28",
        network: "Mainnet",
        network_logo: eth,
        Parameter: AMM,
        liquidity_affected: 0,
        date: "01.09.21",

        Firewall:
        {
                action_taken_emoji: "❄️",
                action_taken: "Freeze",
                threshold: 5,
                reached: 8,
                time_window: 10,
                time_to_limit: 1,
                efficiency: 100,
                location: "Vault1",
        },
            
    
    },
    {
        contract_address: "0x162...f28",
        network: "Avalanche",
        network_logo: avax,
        Parameter: TVL,
        liquidity_affected: 0,
        date: "01.09.21",

        Firewall:
        {
                action_taken_emoji: "❄️",
                action_taken: "Freeze",
                threshold: 5,
                reached: 8,
                time_window: 10,
                time_to_limit: 1,
                efficiency: 100,
                location: "Vault1",
        },
            
    
    },


    ];

    export default activity_data;


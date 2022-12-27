import { TravelDestinationState } from "@@types/apiTypes"
import { useEffect, useState } from "react";

export const useGetTravelDestination = () => {
    const [travelDestination , setTravelDestination] = useState<TravelDestinationState[]>([]);
    
    const fetchTravelDestination = async () => {
        const response = await fetch('api/travelDestination')
        
        if(response.ok){
            const travelDestination : TravelDestinationState[] = await response.json()
            setTravelDestination(travelDestination);
        }
    }

    useEffect(()=>{
        fetchTravelDestination();
    },[]);

    return travelDestination;
}
import { TravelDestinationState } from "@@types/apiTypes"
import { useEffect, useState } from "react";

export const useGetTravelDestination = () => {
    const ON_GITHUB_PAGES = process.env.NODE_ENV === "production";
    const [travelDestination , setTravelDestination] = useState<TravelDestinationState[]>([]);
    
    const fetchTravelDestination = async () => {
        const response = await fetch(`${ON_GITHUB_PAGES ? `${process.env.NEXT_PUBLIC_FAVICON}/`: ""}api/travelDestination`)
        
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
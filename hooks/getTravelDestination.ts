import { TravelDestinationState } from "@@types/apiTypes"

export const fetchTravelDestination = async () => {
        const response = await fetch('api/travelDestination')

        if(response.ok){
            const travelDestination : TravelDestinationState[] = await response.json()
            return travelDestination
        }
    }
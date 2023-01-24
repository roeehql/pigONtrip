import Spinner from "@components/atomic/Spinner";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { IoLocate } from "react-icons/io5";

const MyMap = () => {
  const [userCurrentLocate, setUserCurrentLocate] = useState({
    lat: 0,
    lng: 0,
  });
  const [markerList, setMarkerList] = useState<{ lat: number; lng: number }[]>(
    []
  );
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const MY_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY
    ? process.env.NEXT_PUBLIC_MAP_API_KEY
    : "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCurrentLocate({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <LoadScript onLoad={() => <Spinner />} googleMapsApiKey={MY_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userCurrentLocate}
        zoom={18}
      >
        {markerList.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
        <button className="absolute bottom-200 right-0 m-4 p-4 bg-white shadow">
          <IoLocate />
        </button>
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;

import * as Location from "expo-location";
import { useEffect, useState } from "react";

type LocationType = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export const useMap = () => {
  const [locationName, setLocationName] = useState<string>("");
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      const loc = await getCurrentLocation();
      if (loc) {
        setLocation(loc);
        const [address] = await Location.reverseGeocodeAsync({
          latitude: loc.latitude,
          longitude: loc.longitude,
        });
        if (address) {
          const name = `${address.city || address.subregion}, ${
            address.region || address.country
          }`;

          setLocationName(name);
        }
      }
    };
    fetchLocation();
  }, []);

  const getCurrentLocation = async (): Promise<LocationType | null> => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permiso para acceder a la ubicación denegado");
        return null;
      }
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      return { latitude, longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 };
    } catch (error) {
      console.error("Error obteniendo ubicación:", error);
      return null;
    }
  };

  const onClickExpanded = () => {
    setExpanded(!expanded);
  };

  return {
    //* Variables
    location,
    locationName,
    expanded,

    //* Functions
    onClickExpanded,
  };
};

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

import { settings } from "@/config";

const center = {
  lat: -3.745,
  lng: -38.523,
};

// eslint-disable-next-line react/display-name
export const Map = React.memo(() => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: settings.googleMapsApiKey,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%",
      }}
      center={center}
      zoom={10}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
});

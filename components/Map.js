import { useState } from "react";
import ReactMapGl from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  // transform searchResults into {latitude:52,longitude:13} object
  const cordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(cordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/mercy551/cksdcjgp6ii3518nxd6go9gge"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    ></ReactMapGl>
  );
}

export default Map;

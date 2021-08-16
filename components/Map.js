import { useState } from "react";
import ReactMapGl from "react-map-gl";
function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
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

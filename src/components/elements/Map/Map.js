import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  OverlayView as OverlayViewComponent,
} from "@react-google-maps/api";
import env from "../../../resources/env";

const OverlayView = (props) => {
  return (
    <OverlayViewComponent
      mapPaneName={OverlayViewComponent.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(w, h) => ({ x: -(w / 2), y: -(h / 2) })}
      position={props.position}
    >
      {props.children}
    </OverlayViewComponent>
  );
};
/**
 * @props { rightLabel = "left", label, index, color, position }
 */
const MarkerWithLabel = (props) => {
  let { rightLabel = false, label, index, color, position } = props; //
  return (
    <OverlayView position={position}>
      <div className={styles["google-maps-markerwithlabel"]}>
        <p d={rightLabel ? "right" : "left"}>{label}</p>
        <span>{index}</span>
        <img
          src={`${env.apiDomain}/media/i/google-map-marker/${color || "fff-287dfa"
            }`}
          alt={"marker"}
        />
      </div>
    </OverlayView>
  );
};
const Map = ({ datas, selectedPickPoints, selectedDroppOfPoints }) => {
  const [points, setPoints] = useState([]);

  const letters = ["A", "B", "C", "D", "E"];
  const dispacth = useDispatch();
  const onLoad = (infoWindow) => {
    console.log("infoWindow: ", infoWindow);
  };

  const containerStyle = {
    width: "100%",
    // minHeight: "100%",
    minHeight: `280px`,
    borderRadius: "5px",
  };

  let polyOptions = datas?.polylinePath?.map((poly) => {
    return { lat: poly[0], lng: poly[1] };
  });

  let pathOptions = datas?.markerPoints?.map((poly) => {
    return { lat: poly[0], lng: poly[1] };
  });

  const options = {
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "black",
    fillOpacity: 0.35,
    clickable: false,
    draggable: true,
    editable: false,
    visible: true,
    radius: 30000,
    paths: polyOptions,
    zIndex: 1,
  };

  useEffect(() => {
    let points = [...selectedPickPoints, ...selectedDroppOfPoints];
    setPoints(points);
  }, [selectedPickPoints, selectedDroppOfPoints]);
  // useEffect(() => {
  //   dispacth(getAppData());
  // }, []);

  return (
    //AIzaSyDj4vvK0JOc18G40y4QUrrVcaMJzkV1jH4
    <div className={styles.google_map}>
      {datas?.markerPoints && (
        //AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8
        //me=>AIzaSyBsqCWrKvPDmCDO8I0WiJbx0nvHL_0m9-Y
        <LoadScript googleMapsApiKey={process.env.mapApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            className={styles.map_container}
            center={{
              lat: datas?.markerPoints[0][0],
              lng: datas?.markerPoints[0][1],
            }}
            zoom={10}
          >
            <>
              <Polyline onLoad={onLoad} path={polyOptions} options={options} />
              {pathOptions.map((coord, index) => {
                return (
                  <MarkerWithLabel
                    key={index}
                    position={coord}
                    index={letters[index]}
                    label={
                      index % 2 === 0
                        ? points[index]?.address
                        : points[index]?.address
                    }
                  />
                );
              })}
            </>
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;

import { makeStyles } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { clinicApi } from "../services/clinic";
//import Clinics from "./clinics";
import MapPoint from "./MapPoint";
import OverlayContainer from "./OverlayContainer";

import ClinicType from '../Types/ClinicType';

type MapProps = {
  center: google.maps.LatLngLiteral
  zoom: number
}

type GetClinicsResponse = {
  data: ClinicType
}

const useStyles = makeStyles({
  map: {
    width: '50',
    height: '60vh'
  }
})

function Map({ center, zoom }: MapProps) {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map<Element> | null>(null)
  const [Clinics, setClinic] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (ref.current) { 
      let createdMap = new window.google.maps.Map(
        ref.current,
        {
          center,
          zoom,
          disableDefaultUI: true,
          clickableIcons: false
        }
      );
      setMap(createdMap)
    }
  }, [center, zoom]);

  clinicApi.getAllClinics<GetClinicsResponse>()
    .then((response: any) => {
      let allClinics = response.data.Clinics;
      console.log(allClinics);
      setClinic(allClinics);
      return setClinic(allClinics);
    })
    .catch((err: Error) => {
      console.log(err);
    });

    console.log("\nvalue: " + JSON.stringify(Clinics) +
    "\ntypeof: " + typeof Clinics);
  

    return <div ref={ref} id="map" className={classes.map}>
    {Clinics.map((clinic : ClinicType) => (
      <OverlayContainer
        map={map}
        position={{
          lat: clinic.coordinate.latitude,
          lng: clinic.coordinate.longitude
        }}
        key={clinic.clinicId}
      >
        <MapPoint
          name={clinic.name}
          dentists={clinic.dentists}
          address={clinic.address}
          city={clinic.city}
        />
      </OverlayContainer>
    ))}
  </div>;

}

export default Map
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

  useEffect(() => {
    clinicApi.getAllClinics<GetClinicsResponse>()
    .then((response: any) => {
      let allClinics = response.data.Clinics;
      setClinic(allClinics);
      return setClinic(allClinics);
    });
  }, [ref])

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
          clinicId={clinic.clinicId}
          name={clinic.name}
          address={clinic.address}
          dentists={clinic.dentists}
          city={clinic.city}
          openinghours={clinic.openinghours}
          coordinate={clinic.coordinate}
          owner={clinic.owner}
        />
      </OverlayContainer>
    ))}
  </div>;

}

export default Map
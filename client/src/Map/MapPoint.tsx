import { useEffect, useRef, useState } from "react"
import ClinicCard from "./ClinicCard"
import ClinicPoint from "./ClinicPoint"
import Overview from '../Home/Overview'

import ClinicType from '../Types/ClinicType'

type MapPointProps = {
  name: string
  dentists: number
  address: string
  city: string
}

const MapPoint = (props: MapPointProps) => {
  const [opened, setIsOpened] = useState<boolean>(false)
  const handleOnOpen = () => setIsOpened(true)
  const handleOnClose = () => setIsOpened(false)
  const containerRef = useRef<HTMLDivElement>(null)

  if (opened) {
    console.log(props.name);
  } else {
    console.log(props)
  }
  
  /**
   * useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpened(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);
   * 
   */

  useEffect(() => {
    if (opened){
      localStorage.setItem('clinic', JSON.stringify([props.name, props.dentists, props.address, props.city]));
    } else {
      localStorage.setItem('clinic', '')
    }
  }, [opened])

  return (<div ref={containerRef}>
    {opened ?
      <ClinicCard
        name={props.name}
        dentists={props.dentists}
        address={props.address}
        city={props.city}
        handleClose={handleOnClose}
      /> :
      <ClinicPoint
        name={props.name}
        onClick={handleOnOpen}
      />}
  </div>)
}

export default MapPoint

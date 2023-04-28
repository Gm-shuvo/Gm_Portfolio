import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import {getRandomColor} from '../../components/utils/LoaderColor'
export default function Loader() {
  const [primary, setPrimary] = useState('')
  const [secondary, setSecondary] = useState('')
  console.log(primary, secondary)
  useEffect(() => {
    setPrimary(getRandomColor())
    setSecondary(getRandomColor())
  },[])
  
  return (
    <div className="absolute -top-10 right-0 left-0">
      <div className="flex justify-center items-center h-screen">
        <lord-icon
          src="https://cdn.lordicon.com/dtgezzsi.json"
          trigger="loop"
          delay="200"
          colors={`primary:${primary},secondary:${secondary}`}
          stroke="50"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
      </div>
     </div>
  );
}

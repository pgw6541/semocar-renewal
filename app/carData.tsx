'use client'

import { useCarData } from "@/hook/useData"
import { useEffect } from "react"
import Image from 'next/image'

export default function Car() {

  const carData = useCarData();
  console.log(carData)

  return (
    <div style={{width:"100%", display: "flex", flexWrap :"wrap"}}>
      {
        carData.map((car, i)=>(
          <div key={car.id}>
            <h3>{car.name.kr}</h3>
            <Image
            src="https://raw.githubusercontent.com/pgw6541/CarSite/main/src/images/hyundai/Casper.png"
            width={350}
            height={200}
            alt={car.name.en}
            />
          </div>
        ))
      }
    </div>  
  )
} 


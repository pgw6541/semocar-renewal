'use client'

import { useEffect, useState } from 'react';
import { fetchCarData } from '@/pages/api/getCarData';
import * as types from '@/types/types'

export const useCarData = () => {

  const [carData, setCarData] = useState<types.Car[]>([]);

  const carDataUrl = 'https://gist.githubusercontent.com/pgw6541/3bec1be58457d14aab3e04fea8434458/raw/489ee75632f5d987cbc6e423bacce6ec8af481d6/CarData.json'

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const data = await fetchCarData(carDataUrl);
        setCarData(data)
        
      } catch(error){
        throw console.error('Error', error)
      }
    };
    fetchData();
  }, [])

  return carData;
}
'use client'

import search from './search.module.scss'
import { useState, useEffect } from "react";
import { useCarData } from "@/hook/useData"
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { setBrand, setSegment, setFuelType } from '@/redux/slice/selectedCar';

// Components
import Modal from './modal'

export default function Category() {
  const carData = useCarData(); // 자동차DB
  const [selectedCar, dispatch] = [useAppSelector(state => state.selectedCar), useAppDispatch()]; // redux
  const [brands, setBrands] = useState<string[]>() 
  const [segments, setSegments] = useState<string[]>()
  const fuelTypeList = ['가솔린', '디젤',  'LPG', '하이브리드', '전기'];

  // const [modalShow, setModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(true);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const brand = Array.from( new Set(carData.map(e => e.brand.kr))).slice(0, 6);
    const seg = Array.from( new Set(carData.map(e => e.segment)));

    setBrands(brand)
    setSegments(seg)
  
  }, [carData])
  
  const selectHandler = (brand: string) => {
    console.log('변경: ' + brand)
    dispatch(setBrand(brand))
  }

  const openModal = (content: string) => {
    setModalContent(content);
    setModalShow(true);
  }
  const closeModal = () => {
    setModalShow(false);
  }

  return(
    <div className={search.container}>
      {/* Modal */}
      <Modal show={modalShow} onClose={closeModal}>
        { modalContent === 'brand' &&
          <div>Brand</div>
        }
        { modalContent === 'segment' &&
          <div>Segment</div>
        }
        { modalContent === 'fuelType' &&
          <div>FuelType</div>
        }
      </Modal>
      {/* 검색창 */}
      <div className={search.searchBar}>
        <input id='search-input' type="text" placeholder="검색어를 입력하시오" />
      </div>
      {/* 옵션 카테고리 */}
      <ul>
        {/* 제조사 Brand */}
        <li className={search.li}>
          <div onClick={()=>{openModal('brand')}}>
            <div  className={search.title}><span>제조사</span></div>
            <div className={search.selected}>{selectedCar.brand}</div>
          </div>
        </li>
        {/* 차급 Segment */}
        <li className={search.li}>
          <div onClick={()=>{openModal('segment')}}>
            <div className={search.title}><span>차급</span></div>
            <div className={search.selected}>{selectedCar.segment}</div>
          </div>
        </li>
        {/* 연료 FuelType */}
        <li className={search.li}>
          <div onClick={()=>{openModal('fuelType')}}>
            <div className={search.title}><span>연료</span></div>
            <div className={search.selected}>{selectedCar.fuelType}</div>
          </div>
        </li>
      </ul>

      {/* 선택완료 버튼 */}
      <div className={search.btns}>
        <button className={search.reset}>초기화</button>
        <button className={search.complete}>선택완료</button>
      </div>

      
    </div>
  )
}
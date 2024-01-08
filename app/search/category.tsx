'use client'

import { useState, useEffect } from "react";
import { useCarData } from "@/hook/useData"
import search from './search.module.scss'

export default function Category() {
  const carData = useCarData();
  const [brands, setBrands] = useState<string[]>()
  const [segments, setSegments] = useState<string[]>()
  const fuleTypeList = ['가솔린', '디젤',  'LPG', '하이브리드', '전기'];

  useEffect(() => {
    const brand = Array.from( new Set(carData.map(e => e.brand.kr ))).slice(0, 6);
    const seg = Array.from( new Set(carData.map(e => e.segment)));

    setBrands(brand)
    setSegments(seg)
  
  }, [carData])

  // 선택한 옵션
  const [selected, setSelect] = useState(['','','']);

  return(
    <div className={search.container}>
      {/* 검색창 */}
      <div className={search.searchBar}>
        <input id='search-input' type="text" placeholder="검색어를 입력하시오" />
      </div>
      <ul>
        {/* 제조사 Brand */}
        <li className={search.li}>
          <div>
            <div className={search.title}><span>제조사</span></div>
            <div className={search.selected}>{selected[0]}</div>
          </div>
        </li>
        {/* 차급 Segment */}
        <li className={search.li}>
          <div>
            <div className={search.title}><span>차급</span></div>
            <div className={search.selected}>{selected[1]}</div>
          </div>
        </li>
        {/* 연료 FuleType */}
        <li className={search.li}>
          <div>
            <div className={search.title}><span>연료</span></div>
            <div className={search.selected}>{selected[2]}</div>
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
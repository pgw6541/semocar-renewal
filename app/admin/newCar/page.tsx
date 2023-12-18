export default function Admin(){
  return (
    <>
      <h4>자동차DB 전송</h4>
      <form action="/api/post/newCar" method="POST">
        <label>브랜드 : </label>
        <input name="brand" />
        <br />

        <label>이름 : </label>
        <input name="name" />
        <br />

        <label>차급 : </label>
        <input name="segment" />
        <br />

        <label>연료 : </label>
        <input name="fuelType" />
        <br />

        <label>연비 : </label>
        <input name="gasMileage" />
        <br />

        <label>출력 : </label>
        <input name="power" />
        <br />

        <label>엔진 : </label>
        <input name="engine" />
        <br />

        <button type="submit">전송</button>
        
      </form>
    </>
  )
}
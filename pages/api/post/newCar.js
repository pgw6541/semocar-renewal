import { connectDB } from '../database';

export default async function handler(req, res){
  console.log('요청 들어옴')
  console.log(req.body)

  // 자동차 데이터 DB에 저장하기
  if(req.method === "POST"){
    const db = (await connectDB).db("carData");
    db.collection("cars").insertOne(req.body);
  }

  return res.status(200).json('전송완료')
}
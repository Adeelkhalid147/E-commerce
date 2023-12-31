import Image from 'next/image'
import Hero from "../app/components/views/Hero"
import ProductType from './components/ProductType'
import BASE_PATH_FORAPI from './components/shared/Wrapper/BasePath'
import ProductCarousel from './components/views/ProductCarousel'





async function fetchAllProductsData(){
  let res= await fetch(`${BASE_PATH_FORAPI}/api/products`)
  if (!res.ok){
    throw new Error("Failed to fetch")
  }
  return res.json()
}


export default async function Home() {
  let {response} = await fetchAllProductsData()
  console.log("response : ",response)
  return (
   <div>
    <Hero/>
    <ProductType/>
    <ProductCarousel ProductData={response}/>
   </div>
  )
}

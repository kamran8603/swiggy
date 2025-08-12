import React, { useEffect, useState } from 'react'
import { swigyUrl } from './utils/constants'
const baseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"


function Home() {
    const   [value, setValue ]= useState([])
      const [input, setInput]= useState("")
    const   [orignal, setOriginal]= useState([])
    function inputt(e){
    e.preventDefault()
    console.log(input)
    const filtered = orignal.filter((items)=>{
        return items.info.name.toLowerCase().includes(input.toLowerCase())
    })
    setOriginal(filtered)
    }
    async function fetching(){
        const req = await fetch(swigyUrl)
        const res = await req.json()
        const restro = res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(restro)
        setValue(restro)
        setOriginal(restro)
        console.log(restro)
        // console.log(res?.data?.cards?.card?.gridElements?.infoWithStyle?.restaurents)
    }
    useEffect(()=>{
        fetching()
    },[])
  return (
    <div>
        <div style={{width:"100%",height:"200vh", border:"1px solid black", display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
            <div>
                 <input value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={inputt}> serach</button>
            </div>
           

       
    {

        orignal.map((items)=>(
            <div style={{width:"70%",height:"50vh", border:"1px solid black", borderRadius:"10px"}}>
           
            <img style={{width:"100%", borderRadius:"10px"}} src={baseURL+items.info.cloudinaryImageId} alt=''/>
             <h3>{items.info.name}</h3>
             <p>{items.info.costForTwo}</p>
             <p>Rating : {items.info.avgRating}</p>
            </div>
        ))
    }  
    </div>
    </div>
  )
}

export default Home

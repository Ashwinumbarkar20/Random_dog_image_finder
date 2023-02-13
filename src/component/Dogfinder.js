import React,{ useState,useEffect } from 'react';
import axios from 'axios';

export default function Dogfinder() {
  const [url, setUrl] = useState("");
  const [breed, setBreed] = useState("random");
  
   useEffect(() => {
    document.getElementById("imageholder").style.backgroundImage = `url(${url})`;
  });
const handlenextpicture=()=>{
  
  let selection = document.getElementById("breedselector").value;
  let finalurl="";
    
    if(selection=="random")
    {
      axios
      .get("https://dog.ceo/api/breeds/image/random ")
      .then((res)=>{
        finalurl=res.data.message;
        setUrl(finalurl)
      })
      .catch((err)=>{
        console.log("in Random"+ err)
      });
    }
    else{
      let breedurl=`https://dog.ceo/api/breed/${selection}/images/random`;
      console.log(breedurl)
      axios
      .get(breedurl)
      .then((res)=>{
        
        finalurl=res.data.message;
        setUrl(finalurl)
      })
      .catch((err)=>{
        console.log("in else"+err)
      });

    }}

  const getdata=(e)=>{
    let finalurl="";
    let selection=e.target.value;
    if(selection=="random")
    {
      axios
      .get("https://dog.ceo/api/breeds/image/random ")
      .then((res)=>{
        finalurl=res.data.message;
        setUrl(finalurl)
      })
      .catch((err)=>{
        console.log("in Random"+ err)
      });
    }
    else{
      let breedurl=`https://dog.ceo/api/breed/${selection}/images/random`;
      console.log(breedurl)
      axios
      .get(breedurl)
      .then((res)=>{
        
        finalurl=res.data.message;
        setUrl(finalurl)
      })
      .catch((err)=>{
        console.log("in else"+err)
      });

    }
  }
  return (
          <div>
        <>
      <label htmlFor="breedselector">Select your favriote Breed </label>
      <select name="breedselector" id="breedselector" onChange={getdata}>
        <option value="random" defaultValue="Random">Random</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="husky">Husky</option>
      </select>
      <div className="imageholder" id="imageholder"></div>
      <button className="nextpicture" id="nextpicture" onClick={handlenextpicture}>Next Picture</button>
      </>
    </div>
  )
}

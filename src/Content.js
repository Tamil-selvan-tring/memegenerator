import React, { useState } from "react";
import memesData from "./memesdata";
var input1="Tamil";
var input2="Bye";
export default function Content()
{
    const [memeurl,setMemeImage]= useState("");
    console.log(input1);
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
         input1=document.getElementById("input1").value;
         input2=document.getElementById("input2").value;
    }
    return(
        <div className="Data">
        <h4>Input data:</h4>
        <input type="text" placeholder="Top text" className="Inputs" id="input1"></input>
        <input type="text" placeholder="Bottom text" className="Inputs" id="input2"></input>
        <button type="button" className="btn" onClick={getMemeImage}>Get a new meme image</button>
        {memeurl &&
        (<div className="memeimage">
            <img src={memeurl} alt="Memeimage" className="img"/>
            <div className="Topttext">{input1}</div>
            <div className="Bottomtext">{input2}</div>
            </div>)}
        </div>
    )
}
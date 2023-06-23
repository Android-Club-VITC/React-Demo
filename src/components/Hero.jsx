import React from 'react'
import {useState} from 'react'
import useFetch from '../hooks/useFetch'
import Card from './Card'
import Navbar from './Navbar'
const Hero = () => {
  const obj=[]
  const spiderObject=useFetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&limit=50&apikey=8df57aba1175788cd6300b530f7b298b")
  
  

  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-wrap">
        {spiderObject.map((obj)=>{
            return(
                <Card name={obj.name} thumbnail={obj.thumbnail.path} format={obj.thumbnail.extension}></Card>
            )
        })}
    </div>
    </>
  )
}

export default Hero
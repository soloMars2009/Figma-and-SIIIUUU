import React from "react";
import Card from "./components/Card";
import MyNvbar from "./components/MyNavbar";
import Shop from "./components/Shop";
import "./style.css"




export default function App(){
    return(
        <>
        
        <MyNvbar />
        <Card />
        <Shop />
        </>
    )
}
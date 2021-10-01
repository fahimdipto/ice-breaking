import React,{useState,useEffect} from 'react';
import "./cards.css"
import TinderCard from "react-tinder-card";
import axios from '../api/axios.js';
import {Typography} from "@material-ui/core";

const Cards =(props)=> {
    const [people,setPeople]=useState([
    ]);
    useEffect( ()=>{
         const fetchData=async ()=>{
            const req = await axios.get('/cards');
            setPeople(req.data);
        }
        fetchData();
    },[])
    const swiped= (direction, nameToDelete)=>{
        console.log("removing: "+ nameToDelete);
    }
    const outOfFrame = (name) => {
      console.log(name+" left the screen!")
    }
    return (
        <div className="tinderCards">
            <div className= "tinderCards_cardContainer" >
                {people.map((person)=>(
                    <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir, person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}>
                        <div
                            style={{backgroundImage:`url(${person.imgUrl})`, display: "flex",
                                justifyContent: "center"}} className="card"
                        >

                            <Typography  variant="h3"  style={{ fontFamily: "cursive",position: "absolute",  bottom: "0", margin: "10px", color: "#ffffff",
                                 }}> {person.name}</Typography>

                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default Cards;
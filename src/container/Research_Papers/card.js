import React from 'react';
import Heading from "../../common/Header/Heading";
import Card from '../../common/research/research';
import './card.css';
import classes from "../Blog_section/BlogPage.module.css";

export default function Card1(props){
  return (

  
    <>
    <div className={classes.blogPage}>
      <Heading title="BLOGS" subTitle="blogs" color="#E95D76" />
      
    </div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <br></br>
    <br></br>
    
    
    
          <div className="wrapper"><div className="card1"><Card 
      href="https://sakshamguptadtu.me/"
      img='https://picsum.photos/id/54/400/300'
      title='Human Pose Detection'
      author='Nancy Wheeler' /></div>
      <div className="card12"><Card 
      href="https://sakshamguptadtu.me/"
      img='https://picsum.photos/id/54/400/300'
      title='Human Pose Detection'
      author='Nancy Wheeler' /></div>
        <div className="card3"><Card 
      href="https://sakshamguptadtu.me/"
      img='https://picsum.photos/id/54/400/300'
      title='Human Pose Detection'
      author='Nancy Wheeler' /></div></div>
          <div className="wrapper"><div className="card4"><Card 
      href="https://sakshamguptadtu.me/"
      img='https://picsum.photos/id/54/400/300'
      title='Human Pose Detection'
      author='Nancy Wheeler' /></div><div className="card5"><Card 
      href="https://sakshamguptadtu.me/"
      img='https://picsum.photos/id/54/400/300'
      title='Human Pose Detection'
      author='Nancy Wheeler' /></div>
        <div className="card6"><Card 
      href="https://sakshamguptadtu.me/"
      img='https://picsum.photos/id/54/400/300'
      title='Human Pose Detection'
      author='Nancy Wheeler' /></div></div></>
      
    
  )
}
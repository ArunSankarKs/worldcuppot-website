// import React, {Component} from "react";
import OctofeatherImage from '../../../assets/images/Overview.png';
import token from '../../../assets/images/game.png';

import React, { Component } from "react";
import Slider from "react-slick";


export default class Tokenomics extends React.Component {
  render() {
    const settings = {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "20%",
      speed: 500,
      arrows: false,
      dots: true,       
      responsive: [{
        breakpoint:1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0%",
          arrows: true,
          dots: false,   
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0%",
          arrows: true,
          dots: false, 
        }
      }]
    };

    return (
      <div className='container-fluid'>
      <div className="section-effect">
          <div className="pb-5 mb-1">
               
	<div class="tokenomic-wrap">
		<div class="container">
		      <div class="section-heading">
						<h2 class="title">Tokenomics</h2>
					</div>
        <div class="tokenomics">          
        <div class="row">
				<div class="col-md-6">
         <ul className='tokenomics-list'>
            <li>
             <a href="javascript::">0% No Buy Tax</a>
          </li>
          <li>
             <a href="javascript::">11% Sell Tax from which</a>
          </li>
          <li>
             <a href="javascript::">Jackpot Next Winner(s) Balance Pot : 0.08575 BNB</a>
          </li>
          <li>
             <a href="javascript::">0% No Buy Tax</a>
          </li>
          <li>
             <a href="javascript::">11% Sell Tax from which</a>
          </li>
          <li>
             <a href="javascript::">Jackpot Next Winner(s) Balance Pot : 0.08575 BNB</a>
          </li>
          </ul>
					</div>
          <div class="col-md-6">
            <div className=''></div>
            <img src={token} className='img-fluid'/>
          </div>
				</div>        
			</div>
		</div>
	</div>
              </div>
          </div>
     </div>
    );
  }
}

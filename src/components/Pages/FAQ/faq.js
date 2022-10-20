// import React, {Component} from "react";

import React, { Component } from "react";
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';


export default class Faq extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
      <div className="section-effect">
          <div className="pb-5 mb-1">
               
	<div class="tokenomic-wrap">
		<div class="container">    
        <div class="">          
        <div class="row align-items-center">
				<div class="col-md-6">
        <div className='title-style mb-4'>
            <h2>FAQ</h2>
        </div>
         <div className="pr-lg-5">Frequently asked questions can be found below however if you didn’t find the answer you were hunting for, Reach out to our team directly at Email and we’ll get back to you as soon as possible!</div>
					</div>
           <div class="col-md-6">
            <div className=''>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What’s an NFT?</Accordion.Header>
                  <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Morbi rutrum leo eget ligula vestibulum, ac auctor tortor vulputate. 
                  Phasellus fringilla tincidunt mi non tempor. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What makes JPEG ARMY special?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>When does minting begin?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Who can mint one?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
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

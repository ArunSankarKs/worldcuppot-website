// import React, {Component} from "react";
// import React, {Component} from "react";
import team1 from '../../../assets/images/teams/team1.png';
import team2 from '../../../assets/images/teams/team2.png';
import React, { Component } from "react";
import Slider from "react-slick";

// const Overview = () => {
//   return(     
    
//   )
// }


export default class Teams extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      centerPadding: "10%",
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='container-fluid'>
      <div className="container">
          <div className="section-effect overview-sec">
          <div className='title-style pb-1 mb-0 text-center'>
            <h2>TEAM</h2>
        </div>
        <div className='text-center title-sub-txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum leo eget ligula vestibulum, ac auctor tortor vulputate. 
        </div>
          <div className='row slider-section'>
            <div className='col-12'>
            <div className='inner-section'>
                  <div class="slider">
                      <div class="slide">
                        <div class="child-element">
                        <Slider {...settings}>
                          <div>
                           <div className='d-flex justify-content-between'>
                            <div className='mr-lg-5'>
                            <div className='img-circle'>
                              <img src={team1}  className="img-fluid"/>
                            </div>
                            </div>                           
                            <div className='pr-lg-5'>
                              <div className='name mb-2'>Jeffry Brown</div>
                              <div className='destination mb-3'>creative leader</div>
                              <div className='mb-3 desc'>Quisque aliquam eleifend purus, mattis scelerisque dolor sodales eget. Nulla orci tortor, posuere nec imperdiet id, molestie ac magna.</div>
                              <ul className='d-flex socials-icon'>
                                <li><a href='javascript:;'><i className="fa fa-twitter fa-1x mr-3"/></a></li>
                                <li><a href='javascript:;'><i className="fa fa-twitter fa-1x mr-3"/></a></li>
                                <li><a href='javascript:;'><i className="fa fa-telegram fa-1x mr-3"/></a></li>
                              </ul>
                            </div>
                           </div>
                          </div>
                          <div>
                          <div className='d-flex'>
                            <div className='mr-lg-5'>
                            <div className='img-circle'>
                              <img src={team2}  className="img-fluid"/>
                            </div>
                            </div>
                           
                            <div>
                              <div className='name mb-2'>Jeffry Greev</div>
                              <div className='destination mb-3'>creative leader</div>
                              <div className='mb-3 desc'>Quisque aliquam eleifend purus, mattis scelerisque dolor sodales eget. Nulla orci tortor, posuere nec imperdiet id, molestie ac magna.</div>
                              <ul className='d-flex socials-icon'>
                                <li><a href='javascript:;'><i className="fa fa-twitter fa-1x mr-3"/></a></li>
                                <li><a href='javascript:;'><i className="fa fa-twitter fa-1x mr-3"/></a></li>
                                <li><a href='javascript:;'><i className="fa fa-telegram fa-1x mr-3"/></a></li>
                              </ul>
                            </div>
                           </div>
                          </div>
                          <div>
                            <h3>3</h3>
                          </div>
                          <div>
                            <h3>4</h3>
                          </div>
                          <div>
                            <h3>5</h3>
                          </div>
                          <div>
                            <h3>6</h3>
                          </div>
                          <div>
                            <h3>7</h3>
                          </div>
                          <div>
                            <h3>8</h3>
                          </div>
                        </Slider>
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
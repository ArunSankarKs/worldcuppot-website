import React, { useState } from 'react';
// import Logo from '../../../assets/images/marble-prix-logo.png';
import $ from 'jquery';


const Banner = props => {
  
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
 
  
  
  

  return(
  <div className="banner pb-5">
    <div className="container">
        <div className="position-relative">
        <div className='banner-txt'>
           <div className="mt-4 welcome-txt">   
                 WELCOME TO
            </div>
            <div className='title-txt'>
               WORLD CUP POT
            </div>
            <div>
              <p>WORLD CUP POT is for all the soccer loving degens out there!</p>
              <p>Collect soccer players NFTS then get $WCP airdrops if your players win in the daily simulation matches powered by Chainlink's VRF and our soccer simulator engine.</p>
              <p>You can also bet BUSD on each match. </p>
            </div>
          <div className="pt-4 launch-btn">
              <a href="javascript:;" className="btn btn-outline lp-btn primary-btn mr-3">
              Buy packs
              </a>
              <a href="javascript:;" className="btn btn-outline lp-btn secondary-btn">
              Buy $WCP
              </a>
          </div>
          </div>
        </div> 


        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        
        {/* <div className='w-100'>
    <div class="bulb-holder">
        <div class="bulb">
            <div class="light"></div>
        </div>
    </div>

    <div class="bulb-holder" id="b1">
        <div class="bulb">
            <div class="light"></div>
        </div>
    </div>
    <div class="bulb-holder" id="b2">
        <div class="bulb">
            <div class="light"></div>
        </div>
    </div>
    </div> */}
    </div>

 
    {/* <div className='anim-wrapper'> 
          <div class="fish_wrap">
                <div class="fred">
                    <div class="top_fin"></div>
                    <div class="tail_fin"></div>
                    <div class="fish_body">
                        <div class="eye"></div>
                        <div class="scale_1"></div>
                        <div class="scale_2"></div>
                        <div class="scale_3"></div>
                        <div class="scale_4"></div>
                    </div>                                        
                </div>
            </div>
            <div className='drop-wrapper'>
            <div class="drop"></div>
            <div class="pool"></div>

            <div class="drop2"></div>
            <div class="pool2"></div>
            </div>
          
            
   </div>  */}
  </div> 

 
  )
}

export default Banner;

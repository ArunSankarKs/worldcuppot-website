import React from 'react';
import game12 from '../../../assets/images/game12.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import $ from 'jquery';
const Ecosystem = () => {
  $(window).on("load",function() {
    $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    
    $(".fade").each(function() {
    /* Check the location of each desired element */
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    
    /* If the element is completely within bounds of the window, fade it in */
    if (objectBottom < windowBottom) { //object comes into view (scrolling down)
    if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);
    
    }
    } else { //object goes out of view (scrolling up)
    if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
    }
    
    });
    }).scroll(); //invoke scroll-handler on page-load
    });
    
    
    const inViewport = (entries, observer) => {
    entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
    };
    
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};
    
    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
    });
    
    if ('IntersectionObserver' in window)  {
    // Recommended: make this selector more specific with a `data-animate-on-visible`
    let elements = document.querySelectorAll("svg");
    let observer = new IntersectionObserver(entries => {
    // quit early if users wants Reduced Motion
    let mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if(!mediaQuery.matches) {
    return;
    }
    for(let entry of entries) {
    if(!entry.isIntersecting) {
      continue;
    }
    // Look for <animate> or <animateTransform> that need JS to start
    let beginElements = entry.target.querySelectorAll(`:scope [begin="indefinite"]`);
    for(let beginEl of beginElements) {
      beginEl.beginElement();
      // Unobserve so we don’t re-animate the dead
      // observer.unobserve(entry.target);
    }
    }
    },
    {    threshold: .5
    // 50% of element must be visible
    });
    for(let elem of elements) {
    // console.log(elem);
    observer.observe(elem);
    }
    }
  return(    
    
    <div className="container-fluid px-0">
  <div className="container">
          <div className="section-effect">
        	{/* <div class="section-wrapper col-12 color ss-style-multitriangles"> */}
          <div className='title-style title-style-sm pb-1 mb-4'>
            <h2>SOCCER MATCHES</h2>
        </div>
        <div className="row align-items-center">       
        <div className="col-lg-12 mt-lg-0 pt-lg-0" data-animated="0">
        <Tabs defaultActiveKey="game12"  id="tab-example"  className="mb-3" >
      <Tab eventKey="game12" title={
        <React.Fragment>
          Game 12 
          <span className='ml-3'>starts in 4h: 30m: 3s</span>
        </React.Fragment>
       }>
       <div className="third-about-img text-right d-flex justify-content-center pt-5 pb-5">
        <img src={game12} data-inviewport="slide-up-particle" className="img-fluid"/>
        </div>
      </Tab>
      <Tab eventKey="game11" title="Game 11">
      Game 11
      </Tab>
      <Tab eventKey="game10" title="Game 10">
       Game 10
      </Tab>
      <Tab eventKey="game9" title="Game 9">
        Game 9
      </Tab>
      <Tab eventKey="game8" title="Game 8">
      Game 8
      </Tab>
    </Tabs>
      </div> 
      {/* <div className="col-lg-6">
          <div className="third-about-img text-right d-flex justify-content-center justify-content-lg-end pb-5">
             <img src={OctofeatherImage} data-inviewport="slide-up-particle" className="img-fluid rounded-circle" alt="Cinque Terre" width="500" height="500"/>
          </div>
        </div> */}
      </div>  
    </div>
        
      </div>   

</div>
  )
}

export default Ecosystem;

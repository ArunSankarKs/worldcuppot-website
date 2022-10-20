import React , { useState, useEffect } from 'react';
import './App.scss';
import Banner from './components/Pages/Banner/banner';
import Partner from './components/Pages/Partner/partner';
import Roadmap from './components/Pages/Roadmap/roadmap'
import Ecosystem from './components/Pages/Ecosystem/ecosystem';
import Teams from './components/Pages/Teams/teams';
import Faq from './components/Pages/FAQ/faq';




// import Footer from './components/Pages/Footer/Footer';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => { 

  const [scrollingLock, setScrollingLock] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollingLock(true);
    } else if (window.scrollY < 0) {
      setScrollingLock(false);
    }
  }
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 

      // var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      //   target: '.navbar-nav',
      //   offset: 200
      // })

    });
  }); 
  (function() {
  
    function initOnLoad() {
      console.log('Dom loaded');
    };
    
    window.addEventListener('load', initOnLoad);
  })();

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
  
  return (
<div>
<div>
       <nav className="navbar navbar-expand-lg navbar-inverse navbar-fixed-top w-100 justify-content-center" id="navbar_top" style={{position: scrollingLock ? "fixed" : "fixed"}}>
          <div className="container-fluid">
          <div className="navbar-header">
              {/* <a className="navbar-brand d-lg-none" href="#"> </a>      */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span class="close"></span>
              </button>
          </div>
        <div className="collapse navbar-collapse" id="navbarToggle">
         <a className="navbar-brand d-none d-lg-block" href="#">
         WORLD CUP POT
          </a> 

          <ul className="navbar-nav mx-auto">
          <li class="nav-item">
              <a className="nav-link" href="#ecosystem">WELCOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmap">ROADMAP</a>
            </li>         
            <li className="nav-item">
              <a className="nav-link"  href="#tokenomics">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
            <a href="javascript:;" className="btn lp-btn lp-btn-sm primary-btn">
            Connect Wallet
              </a>
            </li>

           
          </ul>
        </div>
        </div>
      </nav>  
      </div>
   
    
    <div class="container-fluid px-0">
    <section id="home" className="position-relative p-0 m-0">
    <Banner></Banner>
    </section>
    <section id="ecosystem" className="position-relative">
    <div class='bg-image remove-border'>
         <div className='inner-section remove-border'>
          <Ecosystem></Ecosystem>
          </div>
          </div>
      </section> 
      
      <section id="partner" className="position-relative">
        <div className='inner-section pb-0'>
          <Partner></Partner>
          </div>
      </section>  
      <section id="team" className="position-relative">
      <div class='bg-image'>
      <div className='inner-section'>
           <Teams></Teams> 
        </div>
        </div>
      </section> 
      <section id="roadmap" className="position-relative">
        <div class='bg-image'>
      <div className='inner-section'>  
          <Roadmap></Roadmap>
          </div>
          </div>   
      </section>      
      <section id="faq" className="position-relative">
      <div class='bg-image'>
          <div className='inner-section'>
          <Faq></Faq> 
          </div>
          </div>
      </section> 
    </div>


    <footer>
            <div class="footer-top footer-bg">
                <div class="container custom-container">
                    <div class="row justify-content-center justify-content-md-between">
                        <div class="col-lg-5 col-md-5">
                            <div class="footer-widget mb-50">
                                <div class="mb-35">
                                   <h1 className='footer-logo-txt mb-4'>WORLD CUP POT</h1>
                                </div>
                                <div class="fw-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum leo eget ligula vestibulum, ac auctor tortor vulputate. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum leo eget ligula vestibulum, ac auctor tortor vulputate. Phasellus fringilla tincidunt mi non tempor. Praesent hendrerit eros sed ante ultricies, in scelerisque ex laoreet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-5">
                            <div class="footer-widget mb-50 d-flex flex-column justify-content-center justify-content-md-end">
                                <div class="fw-title mb-4">
                                    <h3>Socials</h3>
                                </div>
                                <div class="fw-quick-link">
                                    <ul>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">Telegram</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">Twitter</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="javascript:;">Youtube</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-5">
                            <div class="footer-widget mb-50 d-flex flex-column justify-content-center justify-content-md-end">
                                <div class="fw-title mb-4">
                                    <h3>Blockchain</h3>
                                </div>
                                <div class="fw-quick-link">
                                    <ul>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">CoinMarketGap</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">CoinGecko</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="javascript:;">Opensea</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">BSCScan</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="javascript:;">Pancakeswap</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-5">
                            <div class="footer-widget mb-50 d-flex flex-column justify-content-center justify-content-md-end">
                                <div class="fw-title mb-4">
                                    <h3>Useful Links</h3>
                                </div>
                                <div class="fw-quick-link">
                                    <ul>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">Contract</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="javascript:;">Pooppaper</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="javascript:;">Contact</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="copyright-wrap third-copyright-wrap">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="copyright-text">
                                <p>Copyright © 2022 <a href="#">WORLD CUP POT</a> All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-none d-md-block">
                            
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>   
  </div>
  );
}

export default App;

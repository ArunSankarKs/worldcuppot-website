import React from 'react';
// import marbleBg from '../../../assets/images/roadmap-bg.jpg';
// import icons1 from '../../../assets/images/marble-icons/1.png';
// import icons2 from '../../../assets/images/marble-icons/2.png';
// import icons3 from '../../../assets/images/marble-icons/3.png';
// import icons4 from '../../../assets/images/marble-icons/4.png';
// import icons5 from '../../../assets/images/marble-icons/5.png';
// import icons6 from '../../../assets/images/marble-icons/6.png';
// import icons7 from '../../../assets/images/marble-icons/7.png';
// import icons8 from '../../../assets/images/marble-icons/8.png';
// import icons9 from '../../../assets/images/marble-icons/9.png';
// import icons10 from '../../../assets/images/marble-icons/10.png';
// import icons11 from '../../../assets/images/marble-icons/11.png';
// import icons12 from '../../../assets/images/marble-icons/12.png';

const Roadmap = () => {
    (function () {
        "use strict";
        var items = document.querySelectorAll(".timeline li");

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    })();

    return (
  <div className="container-fluid px-0">
  <div class="timeline2">
      <div className='title-style text-center pb-1 mb-0'>
          <h2>ROADMAP</h2>
      </div>
      <div className='text-center title-sub-txt mb-4'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum leo eget ligula vestibulum, ac auctor tortor vulputate. 
    </div>
    <div className='roadmap'>
    <div className='container'>     
      <div class="timeline pt-4">
<div1 class="circle-container">
<section class="tl no-border"></section>
<section class="tr no-border"></section>
<div class="flex">
  <span class="circle">2022</span>
</div>
<section class="bl"></section>
<section class="br"></section>
</div1>
<section class="info no-border">
<h2>Q1</h2>
<ul className='list'>
    <li>Private sale</li>
    <li>IDO</li>
    <li>Origin series IGO</li>
    <li>NFT Marketplace</li>
</ul>
</section>
<section></section>

<section></section>
<section class="info">
<h2>Q2</h2>
<ul className='list-2'>
    <li>Private sale</li>
    <li>IDO</li>
    <li>Origin series IGO</li>
    <li>NFT Marketplace</li>
</ul>
</section>
<div1 class="circle-container">
<section class="tl"></section>
<section class="tr"></section>
<div class="flex">
  <span class="circle">2022</span>
</div>
<section class="bl"></section>
<section class="br"></section>
</div1>
<div1 class="circle-container">
<section class="tl"></section>
<section class="tr"></section>
<div class="flex">
  <span class="circle">2022</span>
</div>
<section class="bl"></section>
<section class="br"></section>
</div1>
<section class="info">
<h2>Q3</h2>
<ul className='list'>
    <li>Private sale</li>
    <li>IDO</li>
    <li>Origin series IGO</li>
    <li>NFT Marketplace</li>
</ul>
</section>
<section></section>

<section></section>
<section class="info">
<h2>Q4</h2>
<ul className='list-2'>
    <li>Private sale</li>
    <li>IDO</li>
    <li>Origin series IGO</li>
    <li>NFT Marketplace</li>
</ul>
</section>
<div1 class="circle-container">
<section class="tl"></section>
<section class="tr"></section>
<div class="flex">
  <span class="circle">2022</span>
</div>
<section class="bl no-border"></section>
<section class="br no-border"></section>
</div1>
    </div>
    </div>
    </div>
</div>
 </div>
    )
}

export default Roadmap;

import React from 'react';
const Contactus = () => {
  return(
  
    <div className="container-fluid">
         <div className='text-center pb-1 mb-5'>
          <div className='title-style pb-1'><h2>Contact Us </h2></div>
            <ul className='pt-2'>
                <li><span>Email :</span> admin@World Cup Pot.io</li>
                {/* <li><span>Phone :</span> + 97 325 6254 324</li> */}
            </ul>
    </div>
         <div class="contact-area">
                <div id="contactus" class="container custom-container pb-5">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6">
                            <form action="#" class="third-contact-form">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Your Phone"/>
                                    </div>
                                </div>
                                <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
                                <div className="pt-4 text-center">
                                    <a href="javascript:;" className="btn btn-outline lp-btn">
                                        <span>submit </span>
                                    </a>
                                </div> 
                                {/* <button class="btn rotated-btn">submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contactus;

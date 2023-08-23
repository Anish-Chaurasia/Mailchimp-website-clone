import './App.css';
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineLine, AiOutlineArrowRight, AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import offerdata1 from './offerdata1';
import offerdata2 from './offerdata2';
import offerdata3 from './offerdata3';
import offerdata4 from './offerdata4';

import data1 from './data1';
import { useState } from 'react';
import data2 from './data2'
import data3 from './data3'

function App() {
  const [ImageData, setImgdata] = useState(data1);
  const [data3list, setData3list] = useState(data3)
  const [showimg, setShowimg] = useState(data1[0].image)


  function handleshow(index) {

    const updatedata = ImageData.map((item, id) => {
      if (id == index) {
        item.show = true
        setShowimg(item.image)

      }
      else {
        item.show = false

      }
      return item
    })
    setImgdata(updatedata)

  }

  function handlenotshow(index) {
    const updatedata = ImageData.map((item, id) => {
      if (id == index) {
        item.show = false;
      }
      return item
    })
    setImgdata(updatedata)
  }



  function handledata3show(index) {
    const updatedata = data3list.map((item, id) => {
      if (id == index) {
        item.show = true


      }
      else {
        item.show = false

      }
      return item
    })
    setData3list(updatedata)
  }

  function handledata3notshow(index) {
    const updatedata = data3list.map((item, id) => {
      if (id == index) {
        item.show = false;
      }
      return item
    })
    setData3list(updatedata)

  }



  return (
    <div className="container">
      <div className='item' id='header'>
        <img src='./textlogo.png' width="60rem" />
        <p> turbotax</p>
        <p> creditkarma</p>
        <p>mint</p>
        <p> quickbooks</p>
        <p> mailchimp</p>
      </div>

      <div className='item' id='discount'>
        <p >Save 50% for 12 months</p>
        <p>- limited time offer. <span>Get started today</span></p>
      </div>

      <div className='item' id='nav'>
        <div className='navdiv' id='navdiv_left'>
          <img src='./logo.png' height="100%" />
          <button className='notshow'> <p>Solutions and Services</p><span id='btnicon'><HiChevronDown /></span></button>
          <button className='notshow'><p>Resources</p><span id='btnicon'><HiChevronDown /> </span></button>
          <button><p>Pricing</p></button>

        </div>

        <div className='navdiv' id='navdiv_right'>
          <p  id="srch"><FiSearch /></p>
          <p className='notshow' id='globe'><CiGlobe /> <p>EN</p> </p>
          <p className='notshow'>Sales: <strong>+1 (800) 315-5939</strong></p>
          <div className='btndiv'> <button id='loginbtndiv'>Log In</button></div>
          <div className='btndiv'>  <button id='signupbtndiv'>Sign Up</button></div>
        </div>
      </div>

      <div className='item4'>
        <div className='item4_inneritem1'>

          <div id='inneritem1_left'>
            <div >
              <p id='a' >LANDING PAGE CREATOR</p>
              <p id='b' >Create must click landing pages</p>
              <p id='c'>With Mailchimp's landing page builder, it takes just a few minutes to design beautiful landing pages that make visitors want to join your audience or buy your stuff. </p>
              <div className='dbtn'><button> Start Buillding</button></div>

            </div>
          </div>

          <div>
            <img src='./item4img1.avif' />
          </div>

        </div>

        <div className='item4_inneritem2' >

          <div id='inneritem2_left'><img src='./item4img2.avif' /></div>
          <div id='inneritem2_right'>
            <div>
              <p id='d' >Your landing page starts with the right domain. Claim yours today</p>
              <p id='e'>Start with a custom domain and get your business online now. Bring your free website and landing pages under one domain to keep your brand in harmony. </p>
              <div id='f'><button> Find your domain</button></div>
            </div>
          </div>
        </div>

        <div className='item4_inneritem3' >
          <div id='inneritem3_left'>
            <div id='inneritem3_left_div1'>
              <p id='g'>Landing page templates that work hard for you</p>
              <div id='h'>
                {
                  ImageData.map((item, index) => {
                    return (
                      <div id='mapdiv'>
                        <div id='mapitem1'>
                          <p id='qstn'>{item.qstn}</p>
                          {item.show === false ? <button key={index} onClick={() => handleshow(index)}><HiChevronDown /></button> : <button key={index} onClick={() => handlenotshow(index)}><HiChevronUp /></button>}
                        </div>
                        {item.show === true ? <p id='ans'>{item.ans}</p> : ""}
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
          <div id='inneritem3_right'>< img src={showimg} /></div>

        </div>


      </div>


      <div className='item5'>
        <p id='limitedoffer'>Limited Time Offer</p>
        <p id='offer'>Save <span>50%</span> for 12 months</p>
        <div id='item5_div1'>
          <div id='item5_div1_div'>
            <div>
              <p id='premium'>Premium</p>
              <p id='premium_txt'>Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.</p>
              <p id='start'>Starts at</p>
              <p id='price'>$137.63</p>
              <p id='valadity'>/month for 12 months based on 10,000 contacts*</p>
              <div id='item5_outermapdiv'>
                {
                  offerdata1.map(item => {

                    return (
                      <div >
                        <p id='sign'>  {item.sign}</p>
                        <p id='txt'>{item.txt}</p>

                      </div>
                    )
                  })
                }
              </div>

            </div>


            <div>
              <p id='premium'>Standard</p>
              <p id='premium_txt'>Sell even more with personalization, optimization tools, and enhanced automations.</p>
              <p id='start'>Starts at</p>
              <p id='price'>$6.88</p>
              <p id='valadity'>/month for 12 months based on 500 contacts*</p>
              <div id='item5_outermapdiv'>
                {
                  offerdata2.map(item => {

                    return (
                      <div >
                        <p id='sign'>  {item.sign}</p>
                        <p id='txt'>{item.txt}</p>

                      </div>
                    )
                  })
                }
              </div>

            </div>
            <div>
              <p id='premium'>Essentials</p>
              <p id='premium_txt'>Send the right content at the right time with testing and scheduling features.</p>
              <p id='start'>Starts at</p>
              <p id='price'>$4.61</p>
              <p id='valadity'>/month for 12 months based on 500 contacts*</p>
              <div id='item5_outermapdiv'>
                {
                  offerdata3.map(item => {

                    return (
                      <div >
                        <p id='sign'>  {item.sign}</p>
                        <p id='txt'>{item.txt}</p>

                      </div>
                    )
                  })
                }
              </div>

            </div>
            <div>
              <p id='premium'>Free</p>
              <p id='premium_txt'>Easily create email campaigns and learn more about your customers.</p>
              <p id='start'>Starts at</p>
              <p id='price'>$0</p>
              <p id='valadity'>/month for 12 months based on 500 contacts*</p>
              <div id='item5_outermapdiv'>
                {
                  offerdata4.map(item => {

                    return (
                      <div >
                        <p id='sign'>  {item.sign}</p>
                        <p id='txt'>{item.txt}</p>

                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>

        </div>
        <p id='seeoffer+'>*SeeOffer Terms Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</p>
        <div id='offer_btn'>
          <button>See all plan details</button>
        </div>


      </div>


      <div className='item6'>
        <div id='item6_div1'>


          {
            data2.map(item => {
              return (
                <div id='data2_mapdiv'>
                  <div id='data2_mapdiv_left'>
                    <div>
                      <p id='data2_head'>{item.head}</p>
                      <p id='data2_para'>{item.para}</p></div>
                  </div>
                  <div id='data2_mapdiv_right'><img src={item.image} /> </div>
                </div>
              )
            })
          }

        </div>

        <div id='item6_div2'>

          <p id='item6_div2_left'>FAQs</p>
          <div id="item6_div2_right">
            {
              data3.map((item, index) => {
                return (
                  <div id='data3_mapdiv'>
                    <div id='data3_head_btn'>
                      <p>{item.head}</p>
                      {item.show === false ? <button key={index} onClick={() => handledata3show(index)}><AiOutlinePlus /></button> : <button key={index} onClick={() => handledata3notshow(index)}><AiOutlineLine /></button>}
                    </div>
                    <div id='data3_para'>
                      {item.show === true ? <p>{item.para}</p> : ""}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


      </div>


      <footer>
        <div id="footer_div1">
          <p>Related Links:</p>
          <a href='#'>Landing Page</a>
          <a href='#'>Build emails and landing pages in minutes</a>
          <a href='#'>Third Pieces Landing Page Recipe</a>
        </div>
        <div id="footer_div2">
          <div id='ftr_div2_inner'>
            <div className='footer_div2_innerdiv'>
              <p>Resources</p>
              <ul>
                <li><a href='#'> Why Mailchimp?</a></li>
                <li><a href='#'>Product Updates</a></li>
                <li><a href='#'>Email Marketing</a></li>
                <li><a href='#'>Websites</a></li>
                <li><a href='#'>Transactional Email</a></li>
                <li><a href='#'>How We Compare</a></li>
                <li><a href='#'>GDPR Compliance</a></li>
                <li><a href='#'>Security</a></li>
                <li><a href='#'>Status</a></li>
                <li><a href='#'>Mobile App</a></li>
              </ul>
            </div>

            <div className='footer_div2_innerdiv'>
              <p>Community</p>
              <ul>
                <li> <a href="#"> Marketing Library </a></li>
                <li> <a href="#">"Free Marketing Tools"</a></li>
                <li> <a href="#">Marketing Glossary</a></li>
                <li> <a href="#">Integrations Directo</a></li>
              </ul>
            </div>
            <div className='footer_div2_innerdiv'>
              <p>Company</p>
              <ul>
                <li><a href="#"> Our Story</a></li>
                <li><a href="#"> Newsroom</a></li>
                <li>  <a href="#"> Give Where You Live</a></li>
                <li><a href="#"> Careers</a></li>
                <li> <a href="#"> Accessibility</a></li>

              </ul>
            </div>
            <div className='footer_div2_innerdiv'>
              <p>Help</p>
              <ul>
                <li><a href="#"> Hire an Expert</a>
                  <li><a href="#"> Contact Us</a></li>
                  <li><a href="#"> Help Center</a></li>
                  <li><a href="#"> Talk to Sales</a></li></li>



              </ul>
            </div>
            <div className='footer_div2_innerdiv' id='ftrinnerdiv2'>
              <div id='ftr1'>
                <img src='./ftrimage1.svg'></img>
                <p>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
                <span><p>Check it out</p> <button><AiOutlineArrowRight /></button></span>
              </div>
              <div id='ftr2'>
                <img src='./ftrimage2.svg'></img>
                <p>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</p>
                <span><p>Check it out</p> <button><AiOutlineArrowRight /></button></span>
              </div>
            </div></div>

        </div>
        <div className='ftr_div3'>
          <div id='ftr_div3_item1'>
            <h1>INTUIT</h1>
            <p> turbotax</p>
            <p> creditkarma</p>
            <p>mint</p>
            <p> quickbooks</p>
            <p> mailchimp</p>
          </div>
          <div id='socialmedia'>
            <img src='./apstore.svg' ></img>
            <img src='./gstore.svg' ></img>
            <p><AiFillFacebook /></p>
            <p><AiFillTwitterSquare /></p>
            <p><AiFillLinkedin /></p>
            <p><AiOutlineTwitter /></p>
            <p><AiFillYoutube /></p>
            <p><BsPinterest /></p>
            <img src='./ftren.svg' />
          </div>
          <div id='copyright'>
            <p>
              ©2001-2023 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. Privacy | Terms | Legal | Cookie Preferences</p>
          </div>
        </div>


      </footer>


    </div>
  );
}

export default App;

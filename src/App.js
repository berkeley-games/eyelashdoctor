import React, { Component } from 'react';
import './App.css';
import videoWEBM from '../videos/lashes.webm';
import videoMP4 from '../videos/lashes.mp4';
import videoPoster from "../images/poster.jpg"
import logo from '../images/logo.png';
import divider from '../images/divider.png';
import cassie from '../images/cassie.png';

class App extends Component
{

  loadCall()
  {
    window.location.href = 'tel:+19258589788';
  }

  loadMap()
  {
    window.open("https://www.google.com/maps/place/Eyelash+Dr./@37.8800021,-122.0824561,15z/data=!4m5!3m4!1s0x0:0x643abf9ae5d9c2f8!8m2!3d37.880036!4d-122.075418");
  }

  loadYelp()
  {
    window.open("https://www.yelp.com/biz/eyelash-dr-walnut-creek-3");
  }

  render()
  {
    return (

      <div className="Application">

          <div className="WhiteHeader">
            <div className="Globe" onClick={this.loadMap}></div>
            <div className="Location">Walnut Creek, CA</div>

            <div className="Phone" onClick={this.loadCall}></div>
            <div className="PhoneNumber">(925) 858-9788</div>
          </div>

          <img className="Logo" src={logo} alt="logo"></img>

          <video className="Video" poster={videoPoster} playsInline autoPlay muted loop>
            <source src={videoMP4} type="video/mp4"/>
            <source src={videoWEBM} type="video/webm"/>
          </video>

          <div className="ContentContainer">

            <div className="PricingContainer">
              <div className="PricingTitle">Professionally Applied Eyelash Extensions at an Affordable Price</div>
              <div className="PriceList">
                <div className="Prices">
                  <div className="Price">
                    <div className="PriceBold">$60</div><p/>Two Week
                  </div>
                  <div className="VerticalDivider"></div>
                  <div className="Price">
                    <div className="PriceBold">$75</div><p/>Three Week
                  </div>
                  <div className="VerticalDivider"></div>
                  <div className="Price">
                    <div className="PriceBold">$95</div><p/>Four Week
                  </div>
                  <div className="VerticalDivider"></div>
                  <div className="Price">
                    <div className="PriceBold">$140</div><p/>&nbsp;Full Set&nbsp;
                  </div>
                </div>
              </div>
            </div>

            {/* <img className="Divider" src={divider} alt="divider"></img> */}

            <div className="AppointmentContainer">
              <iframe src='https://www.timetap.com/emb/305975#SERVICE' frameBorder='0' width='100%' height='100%'></iframe>
            </div>

            <img className="Divider" src={divider} alt="divider"></img>

            <div className="LocationHoursContainer">
              <div className="MapContainer" onClick={this.loadMap}>
                <iframe className="MapFrame" width="300" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.07664489746095%2C37.878795535627624%2C-122.07327604293825%2C37.882161644642565&amp;layer=mapnik&amp;marker=37.88048072641502%2C-122.07496047019958"></iframe>
              </div>
              <div className="HoursContainer">
                <div className="Days">
                  Sunday<br/>
                  Monday<br/>
                  Tuesday<br/>
                  Wednesday<br/>
                  Thursday<br/>
                  Friday<br/>
                  Saturday<br/>
                </div>
                <div className="Hours">
                  <font color="red">Closed</font><br/>
                  10:00 am - 7:00 pm<br/>
                  10:00 am - 7:00 pm<br/>
                  <font color="red">Closed</font><br/>
                  10:00 am - 7:00 pm<br/>
                  10:00 am - 7:00 pm<br/>
                  <font color="red">Closed</font><br/>
                </div>
              </div>
            </div>

            <img className="Divider" src={divider} alt="divider"></img>

            <div className="AboutContainer">
              <div className="About">
                <img className="Cassie" src={cassie} alt="cassie" width="100px" height="100px"></img>
                <div className="CassieText">
                  I'm Cassie. I've worked at other salons in the past, but I wanted something to call my own. I take pride in my work and am a bit of a perfectionist. Each extension is placed on an individual lash to ensure that no damage is done to your natural lashes. I have been applying eyelash extensions for over 5 years, but I still look forward to coming to work, and I enjoy what I do!
                </div>
              </div>
            </div>

            <div className="FooterContainer">
              <div className="Copyright">(925) 858-9788</div>
              <div className="Yelp" onClick={this.loadYelp}></div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Head from 'next/head';
import '../public/styles/css/app.css'
import '../public/styles/css/home.css'
import '../public/styles/css/about.css'
import '../public/styles/css/kathy.css'
import Viewer from '../components/viewer'
import Contact from '../components/contact'
import {Header} from '../components/header';
import {Slider} from '../components/slider';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display:'none',
      counter:0,
    }
  }

  render(){
    return (
      <div className='page' id='kathyPage'>

        <Head> <link rel="stylesheet" href="https://use.typekit.net/ice5yhp.css"/> <title>Perfect Touch Studio</title> </Head>
          
        <Header />
        
        <div id='profile'>
          <div id='imageOfKathy'></div>
          <div id='about-kathy-text_div'>
            <p id='name'>Kathy Jackson</p>
            <p id='title'>FOUNDER & CREATIVE DIRECTOR</p>
            <p id='description'>Kathy’s expertise lies in designing attractive ad campaigns that captivate target audiences. A lifelong artist, she entered the graphic design field after receiving a BFA in illustration from Moore College of Art in Philadelphia. She went on to create graphics for iconic organizations such as Campbell’s Soup and the Franklin Mint...</p>
          </div>
        </div>
        
        {/* <div id='page-layout'> */}
          
          
          <div id='portfolio'>
            <div className='illustration' style={{backgroundImage: 'url(/assets/images/port4.jpeg)'}}></div>
            <div className='illustration' style={{backgroundImage: 'url(/assets/images/port6.jpg)'}}></div>
            <div className='illustration' style={{backgroundImage: 'url(/assets/images/port5.jpg)'}}></div>
            <div className='illustration' style={{backgroundImage: 'url(/assets/images/port1.jpeg)'}}></div>
            <div className='illustration' style={{backgroundImage: 'url(/assets/images/port2.jpeg)'}}></div>
            <div className='illustration' style={{backgroundImage: 'url(/assets/images/port3.jpeg)'}}></div>
          </div>
          {/* <Slider image1={'/assets/images/port1.jpg'} image2={'/assets/images/port2.jpg'}/> */}
        {/* </div> */}
        <Contact headline={'Contact Kathy.'} subtext={'Whether you have a question about our space and it’s availability, or about our services, our team is read to answer all your questions.'}/>
      
      </div>

    )
  }

  componentDidMount(){
    window.addEventListener('wheel', (e)=>{e.preventDefault()})
  }

}

export default About

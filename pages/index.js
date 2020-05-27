import React from 'react'
import Head from 'next/head';
import Contact from '../components/contact'
import {Header} from '../components/header'
import {Tab} from '../components/tab'
import '../public/styles/app.css'
import '../public/styles/css/home.css'
import '../public/styles/css/contact.css';


class Home extends React.Component{
  constructor(){
    super();
    this.state={
      load: 'no',
      test: 1,
    }
  }
  
  render(){  
    return (
        <div className='layout'>
          {/* <div style={{display:(this.state.load ==='no')?'flex':'none',width:'100vw', height:'100vh', position:'fixed', backgroundColor:'white'}}></div> */}
          <Head> <link rel="stylesheet" href="https://use.typekit.net/ice5yhp.css"/> <title>Perfect Touch Studio</title> <link rel="icon" href="../favicon.ico"></link> <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script></Head>
          {/* <div id='chromebar'></div> */}
          <Header/>
    
          <div id='above-fold_home'>
            <div id='image_home' onLoad={()=>{this.setState({load:'yea'})}}></div>
            
            <div id='cover-text-background_home'>
                <p className='cover-text_home' id='cover-text-A_home'>A</p>
                <p className='cover-text_home'><span style={{color:'#B30000'}}>C</span><span style={{color:'#B39800'}}>R</span><span style={{color:'#38B304'}}>E</span><span style={{color:'#02B363'}}>A</span><span style={{color:'#046DB3'}}>T</span><span style={{color:'#3300B3'}}>I</span><span style={{color:'#B30095'}}>V</span><span style={{color:'#FF0000'}}>E</span></p>
                <p className='cover-text_home'>SPACE</p>
                <p className='cover-text_home'>FOR</p>
                <p className='cover-text_home'>EVERYONE</p>
              </div>
            </div>
          
          <div id='page-layout'>
    
            <div id='tab-section_home'>
              <Tab id={'spaces-tab'} preText={'rent our'} tabText={'spaces'} image={'/assets/images/spaces.jpeg'} link={'/spaces'}/>
              <Tab id={'services-tab'} preText={'view our'} tabText={'services'} image={'/assets/images/music-video.jpeg'} link={'/services'}/>
              <Tab preText={'meet our'} id={'kathy-tab_home'} tabText={'creative director'} classes={'kathyTab_contact'} image={'/assets/images/KatFraming.jpg'} marginTop={{marginTop:100, backgroundColor:'rgba(0,0,0, .61)'}} backgroundColor={{backgroundColor:'rgba(0,0,0, .41)'}} link={'/kathy'}/>
            </div>
    
          </div>
          <Contact headline={'GET IN TOUCH'} subtext={'Whether you have a question about our space and it’s availability, or about our services, our team is read to answer all your questions.'}/>
        </div>
      )
    
    
  }
  componentDidMount(){
    document.body.addEventListener('load', ()=>{this.setState({load: 'yea'})})
    window.addEventListener('resize', ()=>{this.setState({test: this.state.test + 1})})
    
    window.addEventListener('scroll', ()=>{
      const spacesTab = document.getElementById('spaces-tab');
      if(window.scrollY > spacesTab.offsetTop - (window.innerHeight - 150)){
        spacesTab.style.opacity = 1;
      }
    })

    function appear(idName){
      window.addEventListener('scroll', ()=>{
        const vaName = document.getElementById(idName);
        if(window.scrollY > vaName.offsetTop - (window.innerHeight - 150)){
          vaName.style.opacity = 1;
          vaName.style.opacity = 1;
        }
      })
    }
    appear('services-tab');
    appear('kathy-tab_home');
    
    
  }
  
}

export default Home;

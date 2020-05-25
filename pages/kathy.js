import React from 'react';
import Head from 'next/head';
import '../public/styles/app.css'
import '../public/styles/css/home.css'
import '../public/styles/about.css'
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
      <div className='layout'>

        <Head> <link rel="stylesheet" href="https://use.typekit.net/ice5yhp.css"/> <title>Perfect Touch Studio</title> </Head>
          <div id='chromebar'></div>
        <Header />
        
        <div id='image_kathy'></div>
        <div id='page-layout'>
          <p id='name_kathy'>Kathy Jackson</p>
          <p id='title_kathy'>FOUNDER & CREATIVE DIRECTOR</p>
          <p id='description_kathy'>Kathy’s expertise lies in designing attractive ad campaigns that captivate target audiences. A lifelong artist, she entered the graphic design field after receiving a BFA in illustration from Moore College of Art in Philadelphia. She went on to create graphics for iconic organizations such as Campbell’s Soup and the Franklin Mint...</p>
          
          <div id='portfolio-div_kathy'>
            <div className='portfolio-image-div_kathy'><img src='/assets/images/port2.jpeg'/></div>
            <div className='portfolio-image-div_kathy'><img src='/assets/images/port1.jpeg'/></div>
            
            <div className='portfolio-image-div_kathy'><img src='/assets/images/port1.jpeg'/></div>
            <div className='portfolio-image-div_kathy'><img src='/assets/images/port2.jpeg'/></div>
          </div>
          {/* <Slider image1={'/assets/images/port1.jpg'} image2={'/assets/images/port2.jpg'}/> */}
        </div>
        <Contact headline={'Contact Kathy.'} subtext={'Whether you have a question about our space and it’s availability, or about our services, our team is read to answer all your questions.'}/>
      
      </div>

      //   <div className='header'>
      //     <div id='header-content'>
      //       <p className='header-item'>About</p>
      //       <a href='/'><img src='/logo3.png' id='header_logo'/></a>
      //       <a href='mailto:webmaster@example.com' className='header-item'>Contact</a>
      //     </div>
      //   </div>

      //   <div id='kathy_info_div'>
      //     <div id='kathy_img_div'><img id='kathy_img' src='/kathy.jpeg'/></div>
      //     <div id='kathy_info_text_div'>
      //       <p id='kathy_name'>Kathy Jackson</p>
      //       <p id='kathy_title'> Graphic Designer & Creative Consultant</p>
      //       <p id='kathy_description'>Kathy’s expertise lies in designing attractive ad campaigns that captivate target audiences. A lifelong artist, she entered the graphic design field after receiving a BFA in illustration from Moore College of Art in Philadelphia. She went on to create graphics for iconic organizations such as Campbell’s Soup and the Franklin Mint...</p>
      //     </div>
      //   </div>



      //   <div id='portfolio_div' className='section'>
      //     <p className='section_title'>Portfolio</p>
      //     <Viewer display={this.state.display} counter={this.state.counter} off={()=>{this.setState({display: 'none'})}} key={this.state.counter}/>
      //     <div id='artwork_div'>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:0, display:'flex'})}}><img className='port_img' src='/port1.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:1, display:'flex'})}}><img className='port_img' src='/port2.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:2, display:'flex'})}}><img className='port_img' src='/port3.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:3, display:'flex'})}}><img className='port_img' src='/port4.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:4, display:'flex'})}}><img className='port_img' src='/port5.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:5, display:'flex'})}}><img className='port_img' src='/port6.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:6, display:'flex'})}}><img className='port_img' src='/consult.jpeg'/></div>
      //       <div className='port_img_div' onClick={()=>{this.setState({counter:7, display:'flex'})}}><img className='port_img' src='/meeting_space.jpeg'/></div>
      //     </div>

      //     <div id='client_div'>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_campbells.png'/></div>
      //       <div className='client_logo_div' style={{justifyContent: 'center'}}><img style={{width:'49%'}} className='client_logo' src='/client_daily.jpeg'/></div>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_glaxo.png'/></div>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_franklin.png'/></div>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_spiro.png'/></div>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_pepboys.jpeg'/></div>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_elkman.png'/></div>
      //       <div className='client_logo_div'><img className='client_logo' src='/client_pir.png'/></div>
      //     </div>
      //   </div>

      //   <div id='skills_div' className='section'>
      //     <p className='section_title'>Skills</p>
      //     <div id='skill_list_div'>
      //       <div className='skill_div'><p className='skill'>Photo Editing</p></div>
      //       <div className='skill_div'><p className='skill'>Prepress</p></div>
      //       <div className='skill_div'><p className='skill'>Typography</p></div>
      //       <div className='skill_div'><p className='skill'>Conception</p></div>
      //       <div className='skill_div'><p className='skill'>Photography</p></div>
      //       <div className='skill_div'><p className='skill'>Copywriting</p></div>
      //       <div className='skill_div'><p className='skill'>Illustration</p></div>
      //       <div className='skill_div'><p className='skill'>Logo Design</p></div>
      //     </div>

      //     <div id='application_div'>
      //       <div className='app_logo_div'><img className='app_logo' src='/app_illustrator.jpg'/></div>
      //       <div className='app_logo_div'><img className='app_logo' src='/app_word.png' title='Word'/></div>
      //       <div className='app_logo_div'><img className='app_logo' src='/app_indesign.jpg'/></div>
      //       <div className='app_logo_div'><img className='app_logo' src='/app_excel.png'/></div>
      //       <div className='app_logo_div'><img className='app_logo' src='/app_photoshop.png'/></div>
      //       <div className='app_logo_div'><img className='app_logo' src='/app_powerpoint.png'/></div>
      //     </div>
      //   </div>

      //   <Contact main_text="Contact Kathy." sub_text={'Whether you have a question about our space or our services, our team is ready to answer all your questions'}/>
      // </div>
    )
  }

  componentDidMount(){
    window.addEventListener('wheel', (e)=>{e.preventDefault()})
  }

}

export default About

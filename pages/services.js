import React from 'react';
import Head from 'next/head';
import {Header} from '../components/header';
import {Module, ModuleDesktop, ModuleReverse} from '../components/module';
import '../public/styles/spaces.css';
import Contact from '../components/contact';


export default class Services extends React.Component{
    constructor(){
        super();
        this.state = {
            window: 'mobile'
        }
    }
    render(){
        if (this.state.window === 'mobile'){
            return(
                <div className='layout'>
                    <Head> <link rel="stylesheet" href="https://use.typekit.net/ice5yhp.css"/> <title>Perfect Touch Studio</title> <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script></Head>
                    {/* <div id='chromebar'></div> */}
                    <Header />
                    <div id='image_spaces' style={{backgroundImage:`url(/assets/images/music-video.jpeg)`, opacity:1}}>
                        <p id='cover-text_spaces' style={{color:'white'}}>Services</p>
                    </div>
                    <div id='page-layout'>
                    
                    <div id='aboveFold-bottomHalf_spaces'>
                        <p id='statement_spaces'>We’re ready to work with you. Let us know how we can help.</p>
                        <div id='arrow_spaces'></div>
                    </div>
                    
                    <Module title={'Digital Imaging'} image1={'/assets/images/camera.jpg'} image2={'/assets/images/workshop3.jpeg'} item1={'Retouching'} item2={'Photoshop'} item3={'Enhancement'} item4={'UX Design'} description={'Photo retouching, editing and finishing is a speciality of ours. We can edit photos you’ve taken in our studio, or work on files that you provide us. You’d be surprised at the extent to which we can restore beloved old photos. Just give us a try.'}/>
    
                    <hr className='separator_spaces'/>
    
                    <Module title={'Strategy & Design'} image1={'/assets/images/meeting_space.jpeg'} item1={'Art Direction'} item2={'Visual Design'} item3={'Web & UI Design'} item4={'UX Design'} description={'We can help you plan your next project. Our creatives have expertise in several areas of design and strategy, and are ready to help you make important decisions, or just brainstorm. We create documents like pitch decks, design briefs and wireframes to suit your needs.'}/>
    
                    <hr className='separator_spaces'/>
    
                    <Module title={'Custom Framing'} image1={'/assets/images/workshop4.jpeg'} item1={'Matting'} item2={'Framing'} item3={'Large Surfaces'} item4={'Customization'} description={'Perfect Touch started out as a custom framing shop, and over the years we’ve become expert at what we do. Elevate your walls with pieces framed and matted just to your specification. We can handle all kinds of shapes, sizes and depths.'}/>
                    
                    </div>
                    <Contact headline={'Interested in a space?'} subtext={'Whether you have a question about our space and it’s availability, or about our services, our team is read to answer all your questions.'}/>
                </div>
            )
        }
        else{
            return(
                <div className='layout'>
                    <Head> <link rel="stylesheet" href="https://use.typekit.net/ice5yhp.css"/> <title>Perfect Touch Studio</title> <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script></Head>
                    {/* <div id='chromebar'></div> */}
                    <Header />
                    <div id='image_spaces' style={{backgroundImage:`url(/assets/images/music-video.jpeg)`, opacity:1}}>
                        <p id='cover-text_spaces' style={{color:'white'}}>Services</p>
                    </div>
                    
                    <div id='page-layout'>
                    
                    
                    <ModuleDesktop title={'Digital Imaging'} image1={'/assets/images/photo2.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'Retouching'} item2={'Photoshop'} item3={'Enhancement'} marginTop={0} description={'Photo retouching, editing and finishing is a speciality of ours. We can edit photos you’ve taken in our studio, or work on files that you provide us. You’d be surprised at the extent to which we can restore beloved old photos. Just give us a try.'}/>

    
                    <ModuleReverse title={'Strategy & Design'} image1={'/assets/images/meeting_space.jpeg'} image2={'/assets/images/event1.jpeg'} item1={'Art Direction'} item2={'Visual Design'} item3={'Web & UI Design'} description={'We can help you plan your next project. Our creatives have expertise in several areas of design and strategy, and are ready to help you make important decisions, or just brainstorm. We create documents like pitch decks, design briefs and wireframes to suit your needs.'}/>

    
                    <ModuleDesktop title={'Custom Framing'} image1={'/assets/images/workshop4.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'Matting'} item2={'Framing'} item3={'Customization'} description={'Perfect Touch started out as a custom framing shop, and over the years we’ve become expert at what we do. Elevate your walls with pieces framed and matted just to your specification. We can handle all kinds of shapes, sizes and depths.'}/>
                    
                    </div>
                    <Contact headline={'Interested in a space?'} subtext={'Whether you have a question about our space and it’s availability, or about our services, our team is read to answer all your questions.'}/>
                </div>
            )
        }
        
    }

    componentDidMount(){
        (window.innerWidth < 769)?this.setState({window:'mobile'}):this.setState({window:'desktop'})
        
        window.addEventListener('resize', ()=>{
            if (window.innerWidth > 768){
                this.setState({window: 'desktop'})
            }
            else{
                this.setState({window: 'mobile'})
            }
            console.log(this.state.window)
        })
    }
}
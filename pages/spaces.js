import React from 'react';
import Head from 'next/head';
import {Header} from '../components/header';
import {Module, ModuleDesktop, ModuleReverse} from '../components/module';
import '../public/styles/spaces.css';
import Contact from '../components/contact';



export default class Spaces extends React.Component{
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
                    
                    <Header />
                    <div id='image_spaces'>
                        <p id='cover-text_spaces'>Spaces</p>
                    </div>
                    
                    <div id='page-layout'>
                    
                    <div id='aboveFold-bottomHalf_spaces'>
                        <p id='statement_spaces'>Designed to bring out your inner creative.</p>
                        <div id='arrow_spaces'></div>
                    </div>
                    
                    <Module title={'Creative Workshop'} image1={'/assets/images/workshop2.jpeg'} image2={'/assets/images/workshop3.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'} marginTop={0} />
    
                    <hr className='separator_spaces'/>
    
                    <Module title={'Event Space'} image1={'/assets/images/event2.jpeg'} image2={'/assets/images/event1.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'}/>
    
                    <hr className='separator_spaces'/>
    
                    <Module title={'Photo Studio'} image1={'/assets/images/photo1.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'}/>
                    
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
                    <div id='image_spaces'>
                        <p id='cover-text_spaces'>Spaces</p>
                    </div>
                    
                    <div id='page-layout'>
                    
                    
                    
                    <ModuleDesktop title={'Photo Studio'} image1={'/assets/images/photo1.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'DSLR Cameras'} item2={'Lighting'} item3={'Shadowing'} marginTop={0} />

    
                    <ModuleReverse title={'Event Space'} image1={'/assets/images/event2.jpeg'} image2={'/assets/images/event1.jpeg'} item1={'Tools'} item2={'Art Supplies'} item3={'Large Surfaces'}/>

    
                    <ModuleDesktop title={'Creative Workshop'} image1={'/assets/images/photo1.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'}/>
                    
                    </div>
                    <Contact headline={'Interested in a space?'} subtext={'Whether you have a question about our space and it’s availability, or about our services, our team is read to answer all your questions.'}/>
                </div>
            )
        }  
        
    }
    componentDidMount(){
        (window.innerWidth < 840)?this.setState({window:'mobile'}):this.setState({window:'desktop'})
        
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
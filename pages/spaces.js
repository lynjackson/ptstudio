import React from 'react';
import Head from 'next/head';
import {Header} from '../components/header';
import {Module, ModuleDesktop, ModuleReverse} from '../components/module';
import '../public/styles/css/spaces.css';
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
                    
                    <Module title={'Creative Workshop'} image1={'/assets/images/workshop2.jpeg'} image2={'/assets/images/workshop3.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'} marginTop={0} description={'Whether building it up or breaking it down, our workshop has the tools and equipment you need to get it done. With concrete floors and several high/large surfaces, you’ll always have enough space and will never have to worry about making a mess.'}/>
    
                    <hr className='separator_spaces'/>
    
                    <Module title={'Event Space'} image1={'/assets/images/event2.jpeg'} image2={'/assets/images/event1.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'} description={'Need a place to hold your next meetup? Our space can host up to 50 people. We have a great setup for presentations and lectures, including tables, chairs and creative lighting. Our spaces can also be split into two parts if that suits your needs. '}/>
    
                    <hr className='separator_spaces'/>
    
                    <Module title={'Photo Studio'} image1={'/assets/images/photo1.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'Tools & Supplies'} description={'Our state of the art photo studio has everything you need to capture the moment perfectly. We have cameras, lighting and seating equipment for your help. Take your own photos or use our on staff photographer for your next project.'}/>
                    
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
                    
                    
                    
                    <ModuleDesktop title={'Photo Studio'} image1={'/assets/images/photo1.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'DSLR Cameras'} item2={'Lighting'} item3={'Shadowing'} marginTop={0} description={'Our state of the art photo studio has everything you need to capture the moment perfectly. We have cameras, lighting and seating equipment for your help. Take your own photos or use our on staff photographer for your next project.'}/>

    
                    <ModuleReverse title={'Event Space'} image1={'/assets/images/event2.jpeg'} image2={'/assets/images/event1.jpeg'} item1={'Tools'} item2={'Art Supplies'} item3={'Large Surfaces'} description={'Need a place to hold your next meetup? Our space can host up to 50 people. We have a great setup for presentations and lectures, including tables, chairs and creative lighting. Our spaces can also be split into two parts if that suits your needs. '}/>

    
                    <ModuleDesktop title={'Creative Workshop'} image1={'/assets/images/photo1.jpeg'} image2={'/assets/images/photo2.jpeg'} item1={'Tools & Supplies'} item2={'Wood working'} item3={'Large Surfaces'} description={'Whether building it up or breaking it down, our workshop has the tools and equipment you need to get it done. With concrete floors and several high/large surfaces, you’ll always have enough space and will never have to worry about making a mess.'}/>
                    
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
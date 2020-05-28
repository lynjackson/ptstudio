import React from 'react';
import '../public/styles/css/spaces.css';

export class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            image: this.props.image1,
            images: [this.props.image1, this.props.image2, this.props.image3,],
            counter:0
        }      
    }
    
    render(){
        return(
            <div className='image_module' style={{backgroundImage:`url(${this.state.images[this.state.counter]})`}}>
                <div className='imageChanger_module'>
                    <div className='tab_module' id='prevTab_module' onClick={()=>{this.setState({counter: this.state.counter - 1})}}>
                        <img className='tabArrow_module' src='/assets/icons/arrow-left.svg'/>
                    </div>
                    <div className='tab_module' id='nextTab_module' onClick={()=>{this.setState({counter: this.state.counter + 1})}}>
                        <img className='tabArrow_module' src='/assets/icons/arrow-right.svg'/>
                    </div>
                </div>
            </div>
        )
    }
}


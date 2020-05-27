import React from 'react';

export class Module extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            image: this.props.image1,
            images: [this.props.image1, this.props.image2, this.props.image3,],
            counter:0,
        }      
    }
    render(){
        return (
            <div className='module'>
                    <p className='title_module'>{this.props.title}</p>
                    
                    
                    <div className='image_module' style={{backgroundImage:`url(${this.state.images[this.state.counter]})`}}>
                        <div className='imageChanger_module'>
                                {/* <img className='tabArrow_module' src='/assets/icons/arrow-left.svg' onClick={()=>{if (this.state.counter > 0){this.setState({counter: this.state.counter - 1})}}}/>
                                <img className='tabArrow_module' src='/assets/icons/arrow-right.svg' onClick={()=>{if (this.state.counter < 1){this.setState({counter: this.state.counter + 1})}}}/> */}
                        </div>
                    </div>
                    
                    
                    {/* <img className='image_module' src='/assets/images/workshop2.jpeg'/> */}
                    {/* <div className='dots_module'>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===0)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===1)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===2)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                    </div> */}
                    
                    
                    <div className='text-div_module'>
                        <div className='items_module'>
                            <p className='item_module' style={{marginTop:this.props.marginTop}}>{this.props.item1}</p>
                            <p className='item_module'>{this.props.item2}</p>
                            <p className='item_module'>{this.props.item3}</p>
                        </div>
                        {/* <div className='vertical-line_module'></div> */}
                        
                        <p className='description_module'>Whether building it up or breaking it down, our workshop has the tools and equipment you need to get it done. With concrete floors and several high/large surfaces, you’ll always have enough space and will never have to worry about making a mess.</p>
                    </div>
                </div>
        )
    }
}

export class ModuleDesktop extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            image: this.props.image1,
            images: [this.props.image1, this.props.image2, this.props.image3,],
            counter:0,
        }      
    }
    render(){
        return (
            <div className='module'>
                
                <div className='image_module' style={{backgroundImage:`url(${this.state.images[this.state.counter]})`}}>
                        <div className='imageChanger_module'>
                                {/* <img className='tabArrow_module' src='/assets/icons/arrow-left.svg' onClick={()=>{if (this.state.counter > 0){this.setState({counter: this.state.counter - 1})}}}/>
                                <img className='tabArrow_module' src='/assets/icons/arrow-right.svg' onClick={()=>{if (this.state.counter < 1){this.setState({counter: this.state.counter + 1})}}}/> */}
                        </div>

                        {/* <div className='dots_module'>
                            <div className='dot_module' style={{backgroundColor:(this.state.counter===0)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                            <div className='dot_module' style={{backgroundColor:(this.state.counter===1)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                            <div className='dot_module' style={{backgroundColor:(this.state.counter===2)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        </div> */}
                </div>
                    

                <div className='text-side_module'>
                    
                    <p className='title_module'>{this.props.title}</p>

                    {/* <img className='image_module' src='/assets/images/workshop2.jpeg'/> */}
                    {/* <div className='dots_module'>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===0)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===1)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===2)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                    </div> */}
                    
                    
                    <div className='text-div_module'>
                        <p className='description_module'>Whether building it up or breaking it down, our workshop has the tools and equipment you need to get it done. With concrete floors and several high/large surfaces, you’ll always have enough space and will never have to worry about making a mess.</p>
                        
                        <div className='items_module'>
                            <p className='item_module' style={{marginTop:this.props.marginTop}}>{this.props.item1}</p>
                            <p className='item_module'>{this.props.item2}</p>
                            <p className='item_module'>{this.props.item3}</p>
                        </div>
                        
                        {/* <div className='vertical-line_module'></div> */}
                        {/* <hr id='line_module'/> */}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export class ModuleReverse extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            image: this.props.image1,
            images: [this.props.image1, this.props.image2, this.props.image3,],
            counter:0,
        }      
    }
    render(){
        return (
            <div className='module reverse_module'>
                
                <div className='image_module' style={{backgroundImage:`url(${this.state.images[this.state.counter]})`}}>
                        <div className='imageChanger_module'>
                                {/* <img className='tabArrow_module' src='/assets/icons/arrow-left.svg' onClick={()=>{if (this.state.counter > 0){this.setState({counter: this.state.counter - 1})}}}/>
                                <img className='tabArrow_module' src='/assets/icons/arrow-right.svg' onClick={()=>{if (this.state.counter < 1){this.setState({counter: this.state.counter + 1})}}}/> */}
                        </div>
                        
                        {/* <div className='dots_module'>
                            <div className='dot_module' style={{backgroundColor:(this.state.counter===0)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                            <div className='dot_module' style={{backgroundColor:(this.state.counter===1)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                            <div className='dot_module' style={{backgroundColor:(this.state.counter===2)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        </div> */}
                </div>
                
                    

                <div className='text-side_module'>
                    
                    <p className='title_module'>{this.props.title}</p>

                    {/* <img className='image_module' src='/assets/images/workshop2.jpeg'/> */}
                    {/* <div className='dots_module'>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===0)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===1)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                        <div className='dot_module' style={{backgroundColor:(this.state.counter===2)?'rgba(0,0,0,1)':'rgba(0,0,0,0)'}}></div>
                    </div> */}
                    
                    
                    <div className='text-div_module text-div-reverse_module'>
                        <p className='description_module'>Whether building it up or breaking it down, our workshop has the tools and equipment you need to get it done. With concrete floors and several high/large surfaces, you’ll always have enough space and will never have to worry about making a mess.</p>
                        
                        <div className='items_module items-reverse_module'>
                            <p className='item_module' style={{marginTop:this.props.marginTop}}>{this.props.item1}</p>
                            <p className='item_module'>{this.props.item2}</p>
                            <p className='item_module'>{this.props.item3}</p>
                        </div>
                        
                        {/* <div className='vertical-line_module'></div> */}
                        {/* <hr id='line_module'/> */}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
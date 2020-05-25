import React from 'react';

class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      counter: this.props.counter,
      img: ['/port1.jpg', 'port2.jpg', 'port3.jpg', 'port4.jpg', 'port5.jpg', 'port6.jpg',],

    }
  }

  render(){

    return (
        <div id='viewer_div' style={{zIndex: 50, display: this.props.display}}>
          <div id='viewer_img_div' key={this.state.counter}><img id='viewer_img' src={this.state.img[this.state.counter]}/></div>
          <div id='viewer_bottom_half'>
            <div id='viewer_description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p></div>
            <div id='viewer_counter'><p>{this.state.counter + 1} of {'6'}</p></div>
            <div id='viewer_buttons'>
              <img className='viewer_button' src='/arrow-back.svg' onClick={()=>{this.setState({counter: this.state.counter - 1})}}/>
              <img className='viewer_button' src='/close.svg' onClick={()=>{this.props.off()}}/>
              <img className='viewer_button' src='/arrow-forward.svg' onClick={()=>{this.setState({counter: this.state.counter + 1})}}/>
            </div>
          </div>

        </div>

    )
  }
  componentDidMount(){
    document.getElementById('viewer_div').addEventListener('scroll', (event)=>{event.preventDefault()})
  }

}

export default Viewer;

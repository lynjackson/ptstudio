import React from 'react';
import '../public/styles/app.css'
import '../public/styles/header.css'

export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      home: 1,
      spaces: {opacity: .56},
      services: {opacity: .56},
      kathy: {opacity: .56},
      current: 5
    }
  }
  render(){
    return(
      <div id='header'>
        <div id='header-content'>
          <a id='logo-link_header' href='/'><div id='pt-logo'></div></a>
          <div id='header-links'>
            <a href='/spaces' className='header-link' style={this.state.spaces}>spaces</a>
            <a href='/services' className='header-link' style={{opacity: this.state.services.opacity}}>services</a>
            <a href='/kathy' className='header-link' style={this.state.kathy}>people</a>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    if(window.location.pathname === '/spaces'){
      this.setState({spaces: {opacity: 1, borderBottom: '1px solid', borderBottomWidth:1}});
    }
    else if(window.location.pathname === '/kathy'){
      this.setState({kathy: {opacity: 1, borderBottom: '1px solid', borderBottomWidth:1}});
    }
  }
  
}

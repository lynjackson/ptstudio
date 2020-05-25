import React from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

export const Tab = (props)=>{
  return (
    <div  className={`tab_home ${props.classes}`} id={props.id} style={{backgroundImage: `url(${props.image})`}}>
      <p className='cover-text_home pre-text_home' id='rent-our' style={{fontSize:27.89}, props.marginTop}>{props.preText}</p>
      <p className='cover-text_home tab-text_home' id='' style={{fontSize:48}, props.backgroundColor}>{props.tabText}</p>
    </div>
  )
}

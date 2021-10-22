import React from 'react';

export default function Logo ({ type }){
    
    let src = './images/logo.svg';
    
    if (type === 'muted') {
        src = './images/logo-muted.svg';
    };
    
    return (
        <img src={src}/>
    );
}

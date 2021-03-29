import React from "react";
import './News.css';

export default function News (props) {

    return( <div className = 'news'>
            <div className='news-name'>{`«${props.name}»`}</div>
            <div className='news-info'>{props.info}</div>
        </div>
    );
}
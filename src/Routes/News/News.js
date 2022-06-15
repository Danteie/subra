import React from "react";
//Home
import Logo from '../../Component/Logo/Logo'
import Menu from '../../Component/Menu/Menu'
//News
import Articles from '../../Component/Articles/Articles'

function News() {
    return(
        <div>
          <div className='header'>
            <Logo/>
            <Menu/>
        </div>
          <Articles/>
        </div>
    );
}

export default News;
import React from "react";
import './Images.css'
import image1 from './s1.jpeg'
import image2 from './s2.jpg'
import image3 from './s3.jpg'
import image4 from './s4.jpg'

function Images() {
    return (
        <div className="images-bottom">
            <div className="images-bottom1"><img src={image1} alt="milk" className="fit"/></div>
            <div className="images-bottom2"><img src={image2} alt="orange"  className="fit"/></div>
            <div className="images-bottom3"><img src={image3} alt="cone"  className="fit"/></div>
            <div className="images-bottom4"><img src={image4} alt="sugar"  className="fit"/></div>
        </div>
    );
}

export default Images;
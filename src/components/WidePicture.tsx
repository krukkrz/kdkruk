import * as React from "react"
import {getSrc} from "gatsby-plugin-image";

const WidePicture = ({image}) => {
    const imageSource = getSrc(image) || image;

    return <img src={imageSource} alt=''/>
}

export default WidePicture
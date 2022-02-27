import {getSrc} from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as React from "react";
import WidePicture from "../../components/WidePicture";

const IndexPageTemplate = ({ image, title, bannerImage }) => {
    const imageSource = getSrc(image) || image;
    const bannerImageSource = getSrc(bannerImage) || bannerImage;
    return (
        <>
            <WidePicture image={bannerImageSource}/>
            <h1>{title}</h1>
            <img src={imageSource} alt=''/>
        </>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
};

export default IndexPageTemplate
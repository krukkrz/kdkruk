import {getSrc} from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as React from "react";

const IndexPageTemplate = ({ image, title }) => {
    const imageSource = getSrc(image) || image;
    return (
        <>
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
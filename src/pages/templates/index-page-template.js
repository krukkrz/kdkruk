import {getSrc} from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as React from "react";
import Layout from "../../components/layout/layout";
import Banner from "../../components/Banner";

const IndexPageTemplate = ({ image, title, bannerImage, bannerStrongText, bannerText }) => {
    const imageSource = getSrc(image) || image;
    const bannerImageSource = getSrc(bannerImage) || bannerImage;
    return (
        <Layout>
            <Banner
                image={bannerImageSource}
                strongText={bannerStrongText}
                text={bannerText}
            />
            <h1>{title}</h1>
            <img src={imageSource} alt=''/>
        </Layout>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
};

export default IndexPageTemplate
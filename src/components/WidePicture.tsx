import * as React from "react"
import {getSrc} from "gatsby-plugin-image";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
`

const WidePicture = ({image}) => {
    const imageSource = getSrc(image) || image;

    return <Wrapper>
        <Image src={imageSource} alt=''/>
    </Wrapper>
}

export default WidePicture
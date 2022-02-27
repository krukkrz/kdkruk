import * as React from "react";
import WidePicture from "./WidePicture";
import styled from "styled-components";

const Wrapper = styled.div`
    color: white;
    position: relative;
    text-align: center;
`

const Centered = styled.div`
    z-index: 1;
    text-align: center;
  
    //centering text vertically
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Background = styled.div`
    width:100%;
`

const TopLeft = styled.div`
    position: absolute;
    top: 8px;
    left: 16px;
`

const TopRight = styled.div`
    position: absolute;
    top: 8px;
    right: 16px;
`

type BannerProps = {
    image: string
    strongText: string
    text: string
}

const Banner = (props: BannerProps) => {
    return (
        <Wrapper>
            <Background>
                <WidePicture image={props.image}/>
            </Background>
            <TopLeft>KD KRUK</TopLeft>
            <TopRight>telefon i mail</TopRight>
            <Centered>
                <p>
                    <strong>{props.strongText}</strong>
                    <br/>
                    {props.text}
                </p>
            </Centered>
        </Wrapper>
    )
}

export default Banner
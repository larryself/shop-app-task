import React from 'react';
import RangeSlider from "../rangeSlider/rangeSlider";
import styled from "styled-components";

const Section = styled.section`
  max-width: 302px;
  width: 100%;`
const TypeBar = () => {
    return (
        <Section>
            <div style={{paddingBottom: '25px'}}>
                <h4>Price Range</h4>
                <RangeSlider min={0} max={100} value={[10, 23]}/>
            </div>
            <div>
                <h4>Rating range</h4>
                <RangeSlider min={0} max={5} value={[3, 4]}/>
            </div>
        </Section>
    );
};

export default TypeBar;
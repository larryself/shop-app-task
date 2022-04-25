import React, { FC, useEffect, useState } from 'react';
import { useAction } from 'hooks/useAction';
import { Range, getTrackBackground } from 'react-range';
import { Container, Inner, Track, Thumb, ThumbValue } from 'components/rangeSlider/style';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';

interface RangeSliderProps {
  min: number,
  max: number,
  value: number[],
  onFinalChange: (value: number[]) => void
}

export const RangeSlider: FC<RangeSliderProps> = ({min, max, value, onFinalChange}) => {
  const [values, setValues] = useState<number[]>([]);
  const {setLoading} = useAction();
  useEffect(() => {
    setValues(value);
  }, [value])
  const renderThumb = ({index, props}: IRenderThumbParams) => (
    <Thumb {...props} style={{...props.style}}>
      <ThumbValue>
        {values[index]}
      </ThumbValue>
    </Thumb>
  )
  const renderTrack = ({props, children}: IRenderTrackParams) => (
    <Inner>
      <Track
        ref={props.ref}
        style={{
          background: getTrackBackground({
            values,
            colors: ['#ccc', '#000', '#ccc'],
            min,
            max,
          }),
        }}
      >
        {children}
      </Track>
    </Inner>
  )

  return (
      <Container>
        <Range
          step={0.5}
          min={min}
          max={max}
          values={values}
          onFinalChange={(values) => {
            setLoading(true)
            onFinalChange(values)
          }}
          onChange={(values) => setValues(values)}
          renderTrack={renderTrack}
          renderThumb={renderThumb}
        />
      </Container>
  );
};

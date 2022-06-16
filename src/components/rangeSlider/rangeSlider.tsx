import React, { FC, useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Container, Inner, Track, Thumb, ThumbValue } from 'components/rangeSlider/style';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { useStore } from 'store/store';

interface RangeSliderProps {
  min: number,
  max: number,
  value: number[],
  onFinalChange: (values: number[]) => void
}

export const RangeSlider: FC<RangeSliderProps> = ({ min, max, value, onFinalChange }) => {
  const [values, setValues] = useState<number[]>([]);
  const { productStore } = useStore();
  useEffect(() => {
    setValues(value);
  }, [value]);
  const handleRange = (values: number[]) => {
    productStore.setLoading(true);
    onFinalChange(values);
  };
  const renderThumb = ({ index, props }: IRenderThumbParams) => (
    <Thumb {...props} style={{ ...props.style }}>
      <ThumbValue>
        {values[index]}
      </ThumbValue>
    </Thumb>
  );
  const renderTrack = ({ props, children }: IRenderTrackParams) => (
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
  );

  return (
    <Container>
      <Range
        step={0.5}
        min={min}
        max={max}
        values={values}
        onFinalChange={handleRange}
        onChange={(values) => setValues(values)}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
      />
    </Container>
  );
};

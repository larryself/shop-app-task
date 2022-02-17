import React from 'react';
import {Range,getTrackBackground} from 'react-range';

const RangeSlider = ({min, max,value}: any) => {
    const [values, setValues] = React.useState(value);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
            <Range
                step={0.1}
                min={min}
                max={max}
                values={values}
                onFinalChange={(values)=>console.log('finalValues',values)}
                onChange={(values) => setValues(values)}
                renderTrack={({props, children}) =>(
                    <div
                        style={{
                            ...props.style,
                            height: '16px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '2px',
                                width: '100%',
                                borderRadius: '5px',
                                alignSelf: 'center',
                                background: getTrackBackground({
                                    values,
                                    colors: ['#ccc', '#000', '#ccc'],
                                    min: min,
                                    max: max,
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                    )}
                renderThumb={({ index, props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '12px',
                            width: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#000',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '12px',
                                color: '#000',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                padding: '4px',
                                borderRadius: '4px',
                                backgroundColor: 'transparent'
                            }}
                        >
                            {values[index]}
                        </div>

                    </div>
                )}
            />
            </div>
        </>
    );
};

export default RangeSlider;
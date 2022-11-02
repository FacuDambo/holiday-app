import React from 'react'
import * as Animatable from "react-native-animatable";
import styles from '../scripts/styles';

const AnimatedLoader = () => {
    const zoomOut = {
        0: {
            opacity: 1,
            transform: [
                {rotate: "0deg"}
            ]
        },
        0.5: {
            opacity: 0.8,
            transform: [
                {rotate: "180deg"}
            ]
        },
        1: {
            opacity: 1,
            transform: [
                {rotate: "360deg"}
            ]
        },
    };
    
    return (
        <Animatable.View style={styles.loaderView}>
            <Animatable.Text
                animation={zoomOut}
                iterationCount={"infinite"}
                direction="normal"
                easing="linear"
                style={styles.loaderTitle}
            >
                🌎
            </Animatable.Text>
        </Animatable.View>
    )
}

export default AnimatedLoader
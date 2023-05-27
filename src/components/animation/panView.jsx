import { StyleSheet, Dimensions } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import { useCallback, useImperativeHandle, forwardRef, createRef, useRef } from "react";
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"


const PanView = forwardRef((props, ref) => {

    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination) => {
        'worklet';
        active.value = destination !== 0;

        translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const isActive = useCallback(() => {
        return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
        scrollTo,
        isActive,
    ]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            if (translateY.value > -height / 4) {
                scrollTo(0);
            } else if (translateY.value < -height / 1.5) {
                scrollTo(MAX_TRANSLATE_Y);
            }
        });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateY: translateY.value }],
        };
    });


    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.root, rBottomSheetStyle]} >
                {props.children}
                
            </Animated.View>
        </GestureDetector>
    )

})

export default PanView


const { width, height } = Dimensions.get('window')

const MAX_TRANSLATE_Y = -height + height * 0.75;

const styles = StyleSheet.create({

    root: {
        overflow:"hidden",
        width,
        height:height * 0.9,
        position: "absolute",
        zIndex: 3,
        top: "50%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:"rgba(31, 29, 71,0.9)"
    }
})


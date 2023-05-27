import Lottie from "lottie-react-native";
import { View, Dimensions } from "react-native"

const {width,height} = Dimensions.get("screen")
const size = height *.5

const Loading = () => {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Lottie
                source={{ uri: "https://assets4.lottiefiles.com/packages/lf20_mwnl7iyc.json" }}
                autoPlay
                loop
                style={{
                    width: size,
                    height: size
                }}

            />
        </View>
    )
}

export default Loading

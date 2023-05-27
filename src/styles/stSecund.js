import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export const stCoords = StyleSheet.create({
    textTemp: {
        fontSize: width * .2,
        color: "white",
        fontWeight: "bold"
    },
    img: {
        width: width * 0.3,
        height: width * 0.24
    },
    name: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        width: "35%",
        textAlign: "center"
    }
})




import { StyleSheet, SafeAreaView } from "react-native";

export default function AreaView({ children, style }) {

    return (
        <SafeAreaView style={[styles.root, style]}>
            {children}
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: "rgb(46, 51, 90)"
    }

})
import { View, Text } from "react-native"
import { FontAwesome5 } from "react-native-vector-icons"


import { stContainer1 } from "../styles/stHome"



const Etiqueta = ({ label, numero }) => {

    return (
        <View style={[stContainer1.viewG, { gap: 1 }]}>
            <Text style={stContainer1.etiqTex}>{label}:</Text>
            <Text style={stContainer1.etiqTex}> {numero}</Text>
            <FontAwesome5 name="circle" size={5} color="white" style={{ top: 3, left: 2 }} />

        </View>
    )

}

export default Etiqueta
import {View,Text,StyleSheet} from "react-native"

const RowDetalle = ({label,numer})=>{

    return(
        <View style={{flexDirection:"row",alignItems:"center",gap:9}}>
            <Text style={{color:"white"}}>{label}</Text>
            <Text style={{color:"white"}}>{numer}</Text>
        </View>
    )

}

export default RowDetalle
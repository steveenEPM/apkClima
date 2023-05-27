import { View, Text, Image } from "react-native"

import { getTime,getJornada } from "../utils/dates"
import ImgDia from "../../assets/dia.png"
import ImgNoche from "../../assets/noche.png"
import { stContainer2,ItemsFlat } from "../styles/stHome"

const ItemView = ({ times , temp}) => {

    return (
        <View style={ItemsFlat.root}>
            <Text style={ItemsFlat.text}>{getTime(times)}:00</Text>
            {
                getJornada(times) ? <Image source={ImgDia} style={ItemsFlat.imagen}/> : <Image source={ImgNoche} style={ItemsFlat.imagen}/> 
            }
            <Text style={ItemsFlat.text}>{temp}</Text>
        </View>
    )

}

export default ItemView
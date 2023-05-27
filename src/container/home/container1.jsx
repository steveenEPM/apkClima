import { ImageBackground, Dimensions, Text, View, Image } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons"


import ImagenNo from "../../../assets/fondoNoche.jpg"
import { LinearGradient } from "expo-linear-gradient";
import Etiqueta from "../../components/etiquet";
import { stContainer1 } from "../../styles/stHome";


export default function Container1({ city, temperatura, humedad, aprox }) {



    return (
        <ImageBackground source={ImagenNo} style={{ flex: 1, zIndex: 1,paddingTop:"15%" }}>

            <View aria-label="Datos" style={stContainer1.informacion}>
                <Text style={stContainer1.cityT}>{city}</Text>
                <View style={[stContainer1.viewG]}>
                    <Text style={stContainer1.temperatura}>
                        {temperatura}
                    </Text>
                    <FontAwesome5 name="circle" size={15} color="white" style={{ top: 30 }} />
                </View>
                <View style={{ flexDirection: "row", gap: 50 }}>
                    <Etiqueta label={"H"} numero={humedad} />
                    <Etiqueta label={"L"} numero={aprox} />
                </View>
            </View>

            <LinearGradient colors={["transparent", "white", "white"]} style={stContainer1.gradiant}>
                <Image source={require("../../../assets/city.png")} style={stContainer1.city} />
            </LinearGradient>
        </ImageBackground>
    )

}
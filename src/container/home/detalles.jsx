import { useContext } from "react"
import { View, Text } from "react-native"

import { contextHome } from "../../context/home"
import { stDetalles } from "../../styles/stHome"
import RowDetalle from "../../components/rowDetalle"


export default function Detalles() {

    const { data } = useContext(contextHome)

    const { sea_level } = data.main

    const { speed, deg, gust } = data.wind


    return (
        <View style={{gap:20,paddingHorizontal:"4%"}}>
            {
                data &&
                <>
                    <View style={{flexDirection:"row",alignItems:"center",gap:7}}>
                        <Text style={[stDetalles.Text,{fontSize:20}]}>Nivel del mar </Text>
                        <Text style={stDetalles.Text}>{sea_level}</Text>
                    </View>
                    <View style={{gap:6}}>
                        <Text style={[stDetalles.Text,{fontSize:20}]}>Viento</Text>
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                            <RowDetalle label={"Velocidad"} numer={speed}/>
                            <RowDetalle label={"Grado"} numer={deg}/>
                            <RowDetalle label={"Rafaga"} numer={gust}/>
                                                   </View>
                    </View>
                </>
            }

        </View>
    )

}
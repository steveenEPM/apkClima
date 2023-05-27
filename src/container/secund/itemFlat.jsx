import { Pressable, Text, Image } from "react-native"
import { useState, useMemo, useEffect } from "react"
import { View } from "react-native-animatable"
import { FontAwesome5 } from "react-native-vector-icons"

import ImgDia from '../../../assets/dia.png'
import Etiqueta from "../../components/etiquet"
import { getRandomInt } from "../../utils/ramdom"
import { stCoords } from "../../styles/stSecund"

export default function ItemCoord({ item, callback, index }) {

    const [state, setState] = useState(undefined)

    useMemo(() => {

        const effect = async () => {
            try {
                const respons = await weathrApi(`weather?lat=${item.latitud}&lon=${item.longitud}`).then(e => {
                    let name = e.data.name
                    let temp = e.data.main.temp
                    let humidity = e.data.main.humidity
                    let all = e.data.clouds.all
                    return { name, temp, humidity, all }
                })

                setState(respons)

            } catch (error) {
                const json = {
                    name: item.names,
                    temp: getRandomInt(250),
                    humidity: getRandomInt(100),
                    all: getRandomInt(100)
                }
                setState(json)
            }
        }

        effect()

    }, [])

    return (

        <View>
            {
                state && <View animation="fadeIn" delay={index * 500}>
                    <Pressable style={{ paddingHorizontal: "4%" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={stCoords.textTemp}>{state.temp}</Text>
                                <FontAwesome5 name="circle" size={10} color="white" style={{ left: 12, top: 31 }} />
                            </View>
                            <Image source={ImgDia} style={stCoords.img} />
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <View style={{ flexDirection: "row", gap: 6 }}>
                                <Etiqueta label={"H"} numero={state.humidity} />
                                <Etiqueta label={"L"} numero={state.all} />
                            </View>
                            <Text style={stCoords.name}>{state.name}</Text>
                        </View>

                    </Pressable>
                </View>
            }

        </View>

    )

}
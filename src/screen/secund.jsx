import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";
import { useMemo, useCallback } from "react";


import AreaView from "../components/SafeArea";
import ItemCoord from "../container/secund/itemFlat";
import { cordenadasL } from "../utils/lista";
import weathrApi from "../api/weathermap";
import { getRandomInt } from "../utils/ramdom";
import { getHeadingAsync } from "expo-location";
import { useNavigation } from "@react-navigation/native";


export default function Secund() {

    const navigation = useNavigation()

    const calback = useCallback(async (index,setState) => {
        try {
            const respons = await weathrApi(`weather?lat=${index.latitud}&lon=${index.longitud}`).then(e => {
                let name = e.data.name
                let temp = e.data.main.temp
                let humidity = e.data.main.humidity
                let all = e.data.clouds.all
                return { name, temp, humidity, all }
            })

            setState(respons)

        } catch (error) {
            const json = {
                name:index.names,
                temp:250,
                humidity:100,
                all: 100
            }
            console.log("d");
            setState(json)
        }

    }, [])


    return (
        <AreaView>
            <LinearGradient
                style={{ flex: 1 }}
                colors={['black', 'black', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <FlatList
                    contentContainerStyle={{gap:12}}
                    data={cordenadasL}
                    renderItem={({ item, index }) => <ItemCoord item={item} callback={calback} index={index}/>}
                />
            </LinearGradient>
        </AreaView>
    )

}
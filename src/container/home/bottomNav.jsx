import { Pressable, Linking, Platform } from "react-native";
import { View } from "react-native-animatable";
import { stNavBottom } from "../../styles/stHome";
import { useRef, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Entypo, FontAwesome5 } from "react-native-vector-icons"
import { contextHome } from "../../context/home";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NavBottom() {

    const navigation = useNavigation()
    /**Ref */
    const refButt1 = useRef()
    const refButt2 = useRef()
    const refButt3 = useRef()

    /**contex */
    const { coord , data} = useContext(contextHome)

    /**Eventos */
    const onPress1 = () => {
        refButt1.current.bounceIn()
         const { latitude, longitude } = coord


        //const label = "New York, USA";
        const label =`${data.name},${data.sys.country}`
        const url = Platform.select({
            ios: "maps:" + latitude + "," + longitude + "?q=" + label,
            android: "geo:" + latitude + "," + longitude + "?q=" + label
        });
        Linking.openURL(url);
    }

    const onPress2 = () => {
        refButt2.current.bounceIn()
    }

    const onPress3 = () => {
        refButt3.current.bounceIn()
        navigation.navigate('secund')
    }

    return (
        <View style={stNavBottom.root} >
            <View ref={refButt1}>
                <Pressable onPress={onPress1} style={stNavBottom.press}>
                    <Entypo name="location" size={25} color="white" />
                </Pressable>
            </View>
            <View ref={refButt2}>
                <Pressable onPress={onPress2} style={stNavBottom.pressCent}>
                    <Entypo name="plus" size={35} color="rgba(0,0,255,1)" />
                </Pressable>
            </View>
            <View ref={refButt3}>
                <Pressable onPress={onPress3} style={stNavBottom.press}>
                    <FontAwesome5 name="list-ul" size={25} color="white" />
                </Pressable>
            </View>
        </View>
    )

}
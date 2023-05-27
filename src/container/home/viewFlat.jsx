import { useContext } from "react";
import {View,Dimensions} from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { contextHome } from "../../context/home";

import ItemView from "../../components/flatItem";

export default function ViewFlat() {

    const { clima } = useContext(contextHome)

    return (
        <View style={{marginVertical:"4%"}}>
            {
                clima &&
                <FlatList
                    data={clima}
                    showsHorizontalScrollIndicator ={false}
                    contentContainerStyle={{
                        gap:12,
                        paddingHorizontal:"3%"
                    }}
                    horizontal
                    decelerationRate={1}
                    snapToInterval={width * 0.4}
                    renderItem={({item,index})=>  <ItemView times={item.dt_txt} temp={item.main.temp}/>}
                />
            }
        </View>
    )

}

const {width} = Dimensions.get("window")
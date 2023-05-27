import { View , Text} from "react-native";

import ViewFlat from "./viewFlat";
import { stContainer2 } from "../../styles/stHome";
import PanView from "../../components/animation/panView";
import Detalles from "./detalles";
export default function Container2() {

    return (
        <PanView>
            <View style={stContainer2.root}>
                <ViewFlat/>
                <Detalles/>
            </View>
        </PanView>

    )

}
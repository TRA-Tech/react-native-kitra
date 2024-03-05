import { View } from "react-native"
import Text from "./Text"
import { useTheme } from "@tra-tech/react-native-kitra"

const Divider = ({ label ,style,header}) => {
    const {theme}= useTheme()
    if (label)
        return (
            <View style={[{ flexDirection: 'row', alignItems: 'center', columnGap: 10, marginTop: 30, marginBottom: 15 },style]}>
                <View style={{ flex: 0.05, height: 1, backgroundColor: "lightgray" }} />
                <Text style={{ fontSize:header?16: 11,fontWeight:header?'900':'500', color:theme.primary}} >{label}</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: "lightgray" }} />
            </View>
        )
    return (
        <View style={[{ width: "100%", height: 1, backgroundColor: "lightgray" },style]} />
    )
}

export default Divider;
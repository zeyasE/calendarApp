import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { MyProvider } from "../../provider";

const Header = ({ title }) => {

    const { increaseMonth, decreaseMonth } = useContext(MyProvider);

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={decreaseMonth}>
                <View>
                    <Text>
                        - 1
                    </Text>
                </View>
            </TouchableOpacity>
            <Text>
                {title}
            </Text>
            <TouchableOpacity onPress={increaseMonth}>
                <View>
                    <Text>
                        + 1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        width: "95%",
        justifyContent: "space-between",
    }
})
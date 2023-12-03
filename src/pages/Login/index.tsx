import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../routes";

const Login = () =>{
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={ layout.container }>
            <View style={ custom.boxTitle }></View>
            <View style={ layout.subContainer }>
                <Text style={ custom.title }>Login</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Timer")}
                >
                    <View style={ custom.button }>
                        <Text style={ layout.Text }>Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={ custom.button }>
                        <Text style={ layout.Text }>Apple</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={ custom.button }>
                        <Text style={ layout.Text }>Facebook</Text>
                    </View>
                </TouchableOpacity>
                <Text style={ layout.TextMid }>Leia os nossos termos</Text>
            </View>
        </View>
    );   
}

const layout = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
    },
    subContainer: {
        padding: 35,
        flexGrow: 2,
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    Text: {
        fontSize: 21,
        fontWeight: "bold"
    },
    TextMid: {
        fontSize: 17,
        fontWeight: "bold"
    },
    Flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    icon: {
        width: 35,
        height: 35
    },
    content: {
        flexGrow: 1,
        borderTopColor: "black",
        borderTopWidth: 1
    }
});

const custom = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20
    },
    iconLeft: {
        marginLeft: 10
    },
    boxTitle: {
        flexGrow: 2
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 18,
        marginBottom: 35,
        backgroundColor: "#eeeeee",
        borderRadius: 8
    }
});

export default Login;
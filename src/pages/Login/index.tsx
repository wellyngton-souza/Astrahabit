import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../routes";
import { useState } from "react";

const Login = () =>{
    const navigation = useNavigation<StackTypes>();

    const [loading, setLoading] = useState(false);

    const loadingStart = () =>{
        setLoading(true);

        setTimeout(() => {
            navigation.navigate("Timer");
        }, 2000);

        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }

    return(
        <>
            {
                loading ?
                    <View style={ [layout.container, { alignItems: "center", justifyContent: "center" }] }>
                        <Text style={ custom.title }>Carregando</Text>
                    </View>
                :
                <View style={ layout.container }>
                    <View style={ custom.boxTitle }></View>
                    <View style={ layout.subContainer }>
                        <Text style={ custom.title }>Login</Text>
                        <TouchableOpacity
                            onPress={loadingStart}
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
                        <Text style={ layout.TextMid } onPress={() => navigation.navigate("Terms")} >Leia os nossos termos</Text>
                    </View>
                </View>
            }
        </>
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
        borderRadius: 3
    }
});

export default Login;
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../routes";

const Config = () =>{
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={ layout.container }>
            <View style={ layout.subContainer }>
                <View style={ layout.Flex }>
                    <Text style={ custom.title }>Config</Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={ require("../../../assets/app/BackArrow.png") }
                            style={ [layout.icon, custom.iconLeft] }
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={ layout.content }>
                <View style={ custom.boxPerfil }>
                    <Image
                        source={ require("../../../assets/app/usericon.png") }
                        style={ custom.perfil }
                    />
                </View>
                <View style={ custom.option  }>
                    <Text style={ layout.Text }>Vanessa Lopes</Text>
                    <Text style={ layout.Text }>Perfil</Text>
                    <Text style={ layout.Text }>Tema escuro</Text>
                    <Text style={ layout.Text }>Updates</Text>
                    <Text style={ layout.Text }>Ajuda</Text>
                    <Text style={ layout.Text }>Quem</Text>
                </View>
                <View style={ custom.sair }>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={ layout.Text }>Sair</Text>
                    </TouchableOpacity>
                </View>
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
        paddingHorizontal: 35,
        paddingTop: 35,
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    Text: {
        fontSize: 21,
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
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 35
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
    perfil: {
        height: 145,
        width: 145,
        backgroundColor: "#eeeeee",
        borderRadius: 200
    },
    boxPerfil: {
        display: "flex",
        alignItems: "center",
        marginBottom: 35
    },
    option: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 20
    },
    sair: {
        marginBottom: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});

export default Config;
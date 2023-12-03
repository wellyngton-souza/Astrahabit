import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDate, format } from 'date-fns';

import Rodape from "../../components/Rodape";
import CalendaryComponent from "../../components/Calendary";

import { StackTypes } from "../../routes";
import { useState } from "react";

const Calendary = () =>{
    const navigation = useNavigation<StackTypes>();

    const [daySelect, setDaySelect] = useState(format(new Date(), "d"));

    const today = new Date();
    const dayOfWeek = format(today, "EEEE, MMM d");

    const getWeekDays = () => {
        const today = new Date();

        const pastDays = Array.from({ length: 3 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() - (i + 1));
            return {
                key: `past${i + 1}`,
                day: format(date, 'EEEE'),
                dayNumber: format(date, 'd')
            };
        }).reverse();
        
        const futureDays = Array.from({ length: 3 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + i + 1);
            return {
                key: `future${i + 1}`,
                day: format(date, 'EEEE'),
                dayNumber: format(date, 'd')
            };
        });
        
        return [...pastDays, { key: 'today', day: format(today, 'EEEE'), dayNumber: format(today, 'd') }, ...futureDays];
    };
    
    const data = getWeekDays();

    return(
        <View style={ layout.container }>
            <View style={ layout.subContainer }>
                <View style={ layout.Flex }>
                    <Text style={ custom.title }>Calendary</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Config")}
                    >
                        <Image
                            source={ require("../../../assets/app/Settings.png") }
                            style={ [layout.icon, custom.iconLeft] }
                        />
                    </TouchableOpacity>
                </View>
                <View style={ layout.Flex }>
                    <Text style={ layout.Text }>{dayOfWeek}</Text>
                    <Text style={ layout.Text }>0:00:00</Text>
                </View>
            </View>
            <ScrollView style={ layout.border }>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }) => (
                        <View style={ custom.scrollData }>
                            <Text>{item.day.substring(0, 3)}</Text>
                            <Text style={ getDate(new Date()) !== Number(item.dayNumber) ? custom.scrollText : custom.scrollTextSelected }>{Number(item.dayNumber) < 10 ? 0 : null}{item.dayNumber}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.key}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            <CalendaryComponent diaSelecionado={daySelect} />
            <Rodape screenSelect="calendary" />
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
        padding: 35
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
        flexGrow: 1,
        borderTopColor: "black",
        borderTopWidth: 1
    },
    border: {
        borderBottomColor: "black",
        overflow: "hidden",
        borderBottomWidth: 1
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
    scrollData: {
        marginHorizontal: 35,
        minHeight: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    scrollText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 35
    },
    scrollTextSelected: {
        fontSize: 18,
        fontWeight: "bold",
        color: "orange",
        marginBottom: 35
    },
});

export default Calendary;
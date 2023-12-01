import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

type diaType = {
    diaSelecionado: String;
}

const CalendaryComponent: React.FC<diaType> = ({ diaSelecionado }) =>{
    const [hours, setHours] = useState<number[]>([]);

    useEffect(() => {
        const hoursArray: number[] = [];
        for (let i = 1; i <= 24; i++) {
            hoursArray.push(i);
        }
        setHours(hoursArray);
    }, []);

    return(
        <ScrollView>
            <View style={ [ layout.content, layout.subContainer ] }>
                {
                    hours.map((dia, index)=>(
                        <View style={ layout.Flex }>
                            <Text key={index} style={ layout.Text }>
                                {dia.toString()}{Number(dia) < 13 ? "AM" : "PM"}
                            </Text>
                            <View style={ custom.separator }></View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const layout = StyleSheet.create({
    subContainer: {
        padding: 35
    },
    Text: {
        fontSize: 18,
        paddingVertical: 30,
        fontWeight: "bold"
    },
    Flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    content: {
        flexGrow: 1
    }
});

const custom = StyleSheet.create({
    separator: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        flexGrow: 1,
        marginLeft: 10
    }
});

export default CalendaryComponent;
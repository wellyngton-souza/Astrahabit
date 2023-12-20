import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

interface ScheduledDateProps {
    name: string;
    color: string;
}

const ScheduledDate: React.FC<ScheduledDateProps> = ({ name, color }) =>{
    const [taskOpen, setTaskOpen] = useState<Boolean>(false);

    return(
        <View style={ layout.contentTask }>
            <View style={ layout.subContentTask }>
                <Text style={ layout.task }>
                    {name}
                </Text>
                <View style={ [layout.color, { backgroundColor: color }] }></View>
            </View>
            <View style={ layout.subContentTask }>
                <Text style={ layout.task }>
                    0:00:00
                </Text>
                <TouchableOpacity
                    onPress={() => setTaskOpen(!taskOpen)}
                >
                    <Image
                        source={ require("../../../assets/app/Diamonds.png") }
                        style={ [layout.icon, layout.iconLeft, { tintColor: taskOpen ? "blue" : "black" }] }
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const TimerComponent = () =>{
    return(
        <ScrollView>
            <View style={ [ layout.content, layout.subContainer ] }>
                <Text style={ layout.Text }>
                    Saturday
                </Text>
                <View>
                    <ScheduledDate name="Atena" color="#26C3BA" />
                    <ScheduledDate name="Astrahabit" color="#2649C3" />
                    <ScheduledDate name="Manggih" color="#9B26C3" />
                    <ScheduledDate name="100Points" color="#59C326" />
                </View>
            </View>
        </ScrollView>
    );
}

const layout = StyleSheet.create({
    subContainer: {
        padding: 35
    },
    Text: {
        fontSize: 21,
        marginBottom: 35,
        fontWeight: "bold"
    },
    content: {
        flexGrow: 1
    },
    contentTask: {
        height: 74,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    subContentTask: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    color: {
        width: 35,
        marginLeft: 17,
        borderRadius: 180,
        aspectRatio: 1
    },
    task: {
        fontSize: 17,
        fontWeight: "bold"
    },
    icon: {
        width: 35,
        aspectRatio: 1
    },
    iconLeft: {
        marginLeft: 18
    }
});

export default TimerComponent;
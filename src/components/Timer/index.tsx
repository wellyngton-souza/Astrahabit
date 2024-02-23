import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import totalTime from "../../utils/totalTime";

interface ScheduledDateProps {
    name: string;
    color: string;
    times: Time[];
    taskSelected: string;
    defineTask: (task: string) => void;
}

const ScheduledDate: React.FC<ScheduledDateProps> = ({ name, color, times, taskSelected, defineTask }) =>{
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
                    {
                        totalTime(times.filter(item => item.name === name)[0].time)
                    }
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        if(name === taskSelected){
                            defineTask("");
                            return;
                        }

                        defineTask(name);
                    }}
                >
                    <Image
                        source={ require("../../../assets/app/Diamonds.png") }
                        style={ [layout.icon, layout.iconLeft, { tintColor: name === taskSelected ? "#FF006670" : "black" }] }
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

interface Time{
    name: string;
    color: string;
    time: number;
}

interface TimerTypes{
    times: Time[];
    defineTask: (task: string) => void;
    taskSelected: string;
}

const TimerComponent: React.FC<TimerTypes> = ({ times, defineTask, taskSelected }) =>{
    return(
        <ScrollView>
            <View style={ [ layout.content, layout.subContainer ] }>
                <Text style={ layout.Text }>
                    Saturday
                </Text>
                <View>
                    {
                        times.map((item) => (
                            <ScheduledDate name={item.name} color={item.color} times={times} taskSelected={taskSelected} defineTask={defineTask} />        
                        ))
                    }
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
        borderRadius: 6,
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
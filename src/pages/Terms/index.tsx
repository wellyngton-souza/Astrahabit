import { View, ScrollView, Text, StyleSheet } from "react-native";

const Terms = () =>{
    return(
        <View style={ layout.container }>
            <ScrollView style={ layout.subContainer }>
                <Text style={ custom.title }>Nossos Termos</Text>
                <Text style={ layout.Text }>
                    emporizador de Tarefas:
                </Text>
                <Text>
                    Seção principal onde as tarefas podem ser iniciadas e acompanhadas.
                </Text>
                <Text style={ layout.Text }>
                    Registro de Horas:
                </Text>
                <Text>
                    Área onde todas as horas trabalhadas são registradas.
                </Text>
                <Text style={ layout.Text }>
                    Relógio de Projeto:
                </Text>
                <Text>
                    Ferramenta para acompanhar o tempo dedicado a projetos específicos.
                </Text>
                <Text style={ layout.Text }>
                    Pausa Ativa:
                </Text>
                <Text>
                    Recurso para pausar o temporizador quando necessário.
                </Text>
                <Text style={ layout.Text }>
                    Relógio de Projeto:
                </Text>
                <Text>
                    Ferramenta para acompanhar o tempo dedicado a projetos específicos.
                </Text>
                <Text style={ layout.Text }>
                    Histórico de Atividades:
                </Text>
                <Text>
                    Registro de todas as atividades concluídas.
                </Text>
                <Text style={ layout.Text }>
                    Gráficos de Desempenho:
                </Text>
                <Text>
                    Exibição visual do tempo gasto em diferentes tarefas ou projetos.
                </Text>
                <Text style={ layout.Text }>
                    Configurações de Notificação:
                </Text>
                <Text>
                    Opções para ajustar as notificações de tempo.
                </Text>
                <Text style={ layout.Text }>
                    Tag de Tarefa:
                </Text>
                <Text>
                    Marcação para organizar e categorizar diferentes tipos de tarefas.
                </Text>
                <Text style={ layout.Text }>
                    Resumo de Horas:
                </Text>
                <Text>
                    Visão geral das horas trabalhadas em um determinado período.
                </Text>
                <Text style={ layout.Text }>
                    Dashboard de Produtividade:
                </Text>
                <Text>
                    Página inicial com informações resumidas sobre o tempo gasto e projetos ativos.
                </Text>
            </ScrollView>
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
        paddingTop: 35
    },
    Text: {
        fontSize: 21,
        fontWeight: "bold",
        marginVertical: 16
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
        textAlign: "center",
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
        flexGrow: 1
    },
    sair: {
        marginBottom: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});

export default Terms;
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { getPneuAutoclave } from "../../../services/pneuCRUD";
import { RootStackParamList, PneuItem } from "../../../src/types";

// Definindo o tipo de navegação com base no RootStackParamList
type VisualizarAutoclaveNavigationProp = StackNavigationProp<
    RootStackParamList,
    "AutoclaveProd"
>;

type Props = {
    navigation: VisualizarAutoclaveNavigationProp;
};

const VisualizarAutoclave: React.FC<Props> = ({ navigation }) => {
    const [pneuData, setPneuData] = useState<PneuItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getPneuAutoclave();

            if (error) {
                console.error("Erro ao buscar pneus:", error);
            } else if (data) {
                setPneuData(data);
            }
        };

        fetchData();
    }, []);

    const renderTableRow = ({ item }: { item: PneuItem }) => (
        <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.status}</Text>
            <Text style={styles.tableCell}>{item.codigo_pneu}</Text>
            <Text style={styles.tableCell}>{item.ID_Coleta}</Text>
            <TouchableOpacity
                style={styles.examButton}
                onPress={() =>
                    navigation.navigate("AutoclaveProd", { tireId: item.ID_Pneu.toString() })
                }
            >
                <Text style={styles.examButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pneus - Autoclave</Text>

            {/* Cabeçalho da Tabela */}
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Status</Text>
                <Text style={styles.tableHeaderText}>Código Pneu</Text>
                <Text style={styles.tableHeaderText}>ID Coleta</Text>
                <Text style={styles.tableHeaderText}></Text>
                {/* Espaço reservado para o botão */}
            </View>

            <FlatList
                data={pneuData}
                renderItem={renderTableRow}
                keyExtractor={(item) => item.ID_Pneu.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF5E1",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FF7043",
        marginBottom: 20,
        textAlign: "center",
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#FF7043",
        borderRadius: 8,
        marginBottom: 15,
    },
    tableHeaderText: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
    },
    tableRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#FF7043",
    },
    tableCell: {
        flex: 1,
        fontSize: 16,
        color: "#333",
        marginHorizontal: 15,
        textAlign: "left",
    },
    examButton: {
        backgroundColor: "#FF7043",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    examButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});

export default VisualizarAutoclave;

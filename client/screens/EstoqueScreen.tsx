import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function EstoqueScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renovatec</Text>
            <Text style={styles.subtitle}>Estoque Disponível</Text>

            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Nome do Produto</Text>
                    <Text style={styles.tableHeaderText}>Quantidade</Text>
                    <Text style={styles.tableHeaderText}>Data de Entrada</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Produto A</Text>
                    <Text style={styles.tableCell}>50</Text>
                    <Text style={styles.tableCell}>20/08/2024</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Produto B</Text>
                    <Text style={styles.tableCell}>30</Text>
                    <Text style={styles.tableCell}>18/08/2024</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Produto C</Text>
                    <Text style={styles.tableCell}>100</Text>
                    <Text style={styles.tableCell}>15/08/2024</Text>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF7043',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        color: '#FF7043',
        marginBottom: 20,
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#FF7043',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#FF7043',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    tableHeaderText: {
        flex: 1,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#FF7043',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        color: '#000',
    },
});

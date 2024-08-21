import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProducaoScreen() {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);

    const handleRowPress = (index: number) => {
        setSelectedRow(index);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renovatec</Text>
            <Text style={styles.subtitle}>Produção</Text>

            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Pneu</Text>
                    <Text style={styles.tableHeaderText}>Cliente</Text>
                    <Text style={styles.tableHeaderText}>Vendedor</Text>
                </View>

                {['Produto A', 'Produto B', 'Produto C'].map((produto, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tableRow,
                            selectedRow === index && styles.selectedRow
                        ]}
                        onPress={() => handleRowPress(index)}
                    >
                        <Text style={styles.tableCell}>{produto}</Text>
                        <Text style={styles.tableCell}>Cliente {index + 1}</Text>
                        <Text style={styles.tableCell}>Vendedor {index + 1}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Iniciar Linha de Produção</Text>
            </TouchableOpacity>
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
        marginBottom: 20,
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
        backgroundColor: '#FFF',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        color: '#000',
    },
    selectedRow: {
        backgroundColor: '#FFE0B2',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

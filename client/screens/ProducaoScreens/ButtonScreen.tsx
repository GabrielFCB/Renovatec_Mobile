import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

interface ButtonScreenProps {
    navigation: any;
}

const ButtonScreen: React.FC<ButtonScreenProps> = ({ navigation }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const buttons = [
        { name: 'Exame Inicial', description: 'Visualizar exames iniciais', icon: 'clipboard-list', library: 'FontAwesome5', route: 'VisualizarExameInicial' },
        { name: 'Raspa', description: 'Realizar raspagem', icon: 'car-tire-alert', library: 'MaterialCommunityIcons', route: 'VisualizarRaspa' }, 
        { name: 'Escareação', description: 'Processo de escareação', icon: 'hammer-wrench', library: 'MaterialCommunityIcons', route: 'VisualizarEscareacao' },
        { name: 'Aplicação de cola', description: 'Aplicar cola nos materiais', icon: 'brush', library: 'MaterialCommunityIcons', route: 'VisualizarAplicacaoDeCola' },
        { name: 'Orbicushion', description: 'Adicionar orbicushion', icon: 'circle-multiple-outline', library: 'MaterialCommunityIcons', route: 'VisualizarOrbicushion' },
        { name: 'Corte de banda', description: 'Cortar a banda corretamente', icon: 'cut', library: 'FontAwesome5', route: 'VisualizarCorteDeBanda' },
        { name: 'Aplicação de banda', description: 'Aplicar a banda nos pneus', icon: 'plus-circle', library: 'FontAwesome5', route: 'VisualizarAplicarBanda' },
        { name: 'Montagem', description: 'Montar o produto final', icon: 'tools', library: 'FontAwesome5', route: 'VisualizarMontagem' },
        { name: 'Autoclave', description: 'Utilizar autoclave para processamento', icon: 'tools', library: 'MaterialCommunityIcons', route: 'VisualizarAutoclave' }, // Ícone de autoclave
        { name: 'Exame final', description: 'Realizar exame final', icon: 'check-circle', library: 'FontAwesome5', route: 'VisualizarExameFinal' },
    ];

    const renderIcon = (icon: string, library: string) => {
        switch (library) {
            case 'FontAwesome5':
                return <FontAwesome5 name={icon} size={50} color="#FFF" style={styles.cardIcon} />;
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons name={icon} size={50} color="#FFF" style={styles.cardIcon} />;
            case 'Ionicons':
                return <Ionicons name={icon} size={50} color="#FFF" style={styles.cardIcon} />;
            default:
                return null;
        }
    };

    const renderItem = ({ item, index }: { item: { name: string; description: string; icon: string; library: string; route: string }; index: number }) => {
        const isHovered = hoveredIndex === index;

        return (
            <TouchableOpacity
                style={[styles.card, isHovered && styles.cardHovered]}
                onPress={() => navigation.navigate(item.route)}
                onPressIn={() => setHoveredIndex(index)}
                onPressOut={() => setHoveredIndex(null)}
            >
                {renderIcon(item.icon, item.library)}
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Linha de produção</Text>
            <FlatList
                data={buttons}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                numColumns={1}
                contentContainerStyle={styles.grid}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF7043',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 20,
        width: '70%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 2,
    },
    cardHovered: {
        backgroundColor: '#FF5722',
        transform: [{ scale: 1.05 }],
    },
    cardIcon: {
        marginBottom: 10,
    },
    cardTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    cardDescription: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    },
    grid: {
        justifyContent: 'center',
    },
});

export default ButtonScreen;

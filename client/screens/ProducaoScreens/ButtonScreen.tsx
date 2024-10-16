import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';

interface ButtonScreenProps {
    navigation: any;
}

const ButtonScreen: React.FC<ButtonScreenProps> = ({ navigation }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Estado para controlar o hover

    const buttons = [
        { name: 'Exame Inicial', description: 'Visualizar exames iniciais', image: 'https://plus.unsplash.com/premium_photo-1682141913633-113d5a59f795?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', route: 'VisualizarExameInicial' },
        { name: 'Raspa', description: 'Realizar raspagem', image: 'https://plus.unsplash.com/premium_photo-1682141910340-ee4a74276b2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', route: 'VisualizarRaspa' },
        { name: 'Escareação', description: 'Processo de escareação', image: 'https://plus.unsplash.com/premium_photo-1661349604450-611c45c8c42f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', route: 'VisualizarEscareacao' },
        { name: 'Aplicação de cola', description: 'Aplicar cola nos materiais', image: 'https://images.unsplash.com/photo-1506022991996-a56ff643eade?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', route: 'AplicarColaScreen' },
        { name: 'Orbicushion', description: 'Adicionar orbicushion', image: 'https://via.placeholder.com/100', route: 'Orbicushion' },
        { name: 'Corte de banda', description: 'Cortar a banda corretamente', image: 'https://via.placeholder.com/100', route: 'CorteDeBandaScreen' },
        { name: 'Aplicação de banda', description: 'Aplicar a banda nos pneus', image: 'https://via.placeholder.com/100', route: 'AplicarBandaScreen' },
        { name: 'Montagem', description: 'Montar o produto final', image: 'https://via.placeholder.com/100', route: 'MontagemProd' },
        { name: 'Autoclave', description: 'Utilizar autoclave para processamento', image: 'https://via.placeholder.com/100', route: 'AutoclaveProd' },
        { name: 'Exame final', description: 'Realizar exame final', image: 'https://via.placeholder.com/100', route: 'ExameFinalProd' },
    ];

    const renderItem = ({ item, index }: { item: { name: string; description: string; image: string; route: string }; index: number }) => {
        const isHovered = hoveredIndex === index; // Verifica se o card está "hovered"

        return (
            <TouchableOpacity
                style={[styles.card, isHovered && styles.cardHovered]}
                onPress={() => navigation.navigate(item.route)}
                onPressIn={() => setHoveredIndex(index)} // Ativa o hover ao pressionar
                onPressOut={() => setHoveredIndex(null)} // Remove o hover ao soltar
            >
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <View style={[styles.accessButton, isHovered && styles.accessButtonHovered]}>
                    <Text style={styles.accessButtonText}>Acessar</Text>
                </View>
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
                numColumns={2} // Define 2 cards por linha
                contentContainerStyle={styles.grid}
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
        flex: 1,
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30, // Aumenta a margem entre os cards
        padding: 20, // Aumenta a margem interna
        height: 220, // Define uma altura fixa para os cards
    },
    cardHovered: {
        backgroundColor: '#FF5722', // Cor mais escura para o hover
        transform: [{ scale: 1.05 }], // Aumenta levemente o tamanho do card
    },
    cardImage: {
        width: 60, // Diminuindo a largura da imagem
        height: 60, // Diminuindo a altura da imagem
        borderRadius: 30,
        marginBottom: 10,
    },
    cardTitle: {
        color: '#FFF',
        fontSize: 20, // Aumenta o tamanho da fonte do título
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    cardDescription: {
        color: '#FFF',
        fontSize: 14, // Tamanho da fonte da descrição
        textAlign: 'center',
        marginBottom: 10, // Margem entre descrição e botão
    },
    accessButton: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '60%', // O botão ocupa 60% da largura do card
        alignItems: 'center',
    },
    accessButtonHovered: {
        backgroundColor: '#FF7043', // Mudança de cor do botão no hover
    },
    accessButtonText: {
        color: '#FF7043',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    grid: {
        justifyContent: 'center',
    },
});

export default ButtonScreen;

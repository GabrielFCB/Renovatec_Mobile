import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


interface ButtonScreenProps {
    navigation: any;
}
const ButtonScreen: React.FC<ButtonScreenProps> = ({ navigation }) => {
    const buttonNames = [
        'Exame Inicial',
        'Raspa',
        'Escareação',
        'Aplicação de cola',
        'Orbicushion',
        'Corte de banda',
        'Aplicação de banda',
        'Montagem',
        'Autoclave',
        'Exame final'
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Linha de produção</Text>
                {buttonNames.map((name, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => {
                            if (name === 'Exame Inicial') {
                                navigation.navigate('ExamScreen');
                            } else if (name === 'Raspa') {
                                navigation.navigate('RaspaScreen');
                            }
                            
                        }}
                    >
                        <Text style={styles.buttonText}>{name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF7043',
        marginBottom: 20,
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ButtonScreen;
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flexDirection: 'row', // Isso alinha os botões horizontalmente
        justifyContent: 'center', // Isso centraliza os botões horizontalmente no container
        marginTop: 20, // Ajuste a margem superior conforme necessário
    },
    image: {
        width: 120,
        height: 60
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: "center"
    },
    label_aster:
    {
        color: "red",

    },
    label: {
        color: "black"
    },
    description: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
    formContainer: {
        margin: 20,
    },
    buttonIntro: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 12
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row', // Isso alinha os botões horizontalmente
        justifyContent: 'center', // Isso centraliza os botões horizontalmente no container
        marginTop: 20, // Ajuste a margem superior conforme necessário

    },
    button: {
        backgroundColor: '#05294A', // Cor de fundo do botão
        padding: 10, // Ajuste o preenchimento conforme necessário
        marginHorizontal: 10, // Espaçamento horizontal entre os botões
        borderRadius: 5, // Borda arredondada
        width: 120,
        height: 45
    },
    button2: {
        backgroundColor: '#6785A1', // Cor de fundo do botão
        padding: 10, // Ajuste o preenchimento conforme necessário
        marginHorizontal: 10, // Espaçamento horizontal entre os botões
        borderRadius: 5, // Borda arredondada
        width: 120,
        height: 45
    },
    buttonText: {
        color: 'white', // Cor do texto
        textAlign: 'center', // Alinha o texto ao centro dentro do botão
        fontSize: 16, // Ajuste o tamanho da fonte conforme necessário
    },
});
export default styles;
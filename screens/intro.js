import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './onboard/styles/style';
const IntroScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>


                <Image style={{ marginTop: 70 }} source={require('../assets/logo.png')} />

            </View>

            <View >

                <Text style={{ textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 60 }}>Um slogan legal para o aplicativo!</Text>
                <Text style={{ textAlign: "center", marginBottom: 70, fontSize: 15, marginTop: 60 }}>Como gostaria de começar?</Text>
                <View style={styles.buttonIntro}>
                    <Button onPress={() => { navigation.navigate('Step1Onboard') }} title='Fazer Login' />
                </View>
                <Text style={{ textAlign: "center" }}>Ou</Text>
                <View style={styles.buttonIntro}>
                    <Button onPress={() => { navigation.navigate('Step1Onboard') }} title='Próximo' />
                </View>
            </View>
        </ScrollView>
    );
}
export default IntroScreen;
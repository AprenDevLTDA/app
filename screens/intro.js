import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './onboard/styles/style';
export default function IntroScreen({ }) {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Ola ss</Text>
                <Button style={styles.button} onPress={() => { navigation.navigate('Step1Onboard') }} title='Logar' />
            </View>
        </ScrollView>
    );
}
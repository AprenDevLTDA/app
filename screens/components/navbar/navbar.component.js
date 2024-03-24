import { Image, StyleSheet, View } from 'react-native';

import Logo from './assets/Logo.png';
import Monetization from './assets/monetization.png';
import Heart from './assets/ion_heart-sharp.png';
import Notification from './assets/mdi_bell-outline.png';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} />
            <View style={styles.leftSide}>
                <Image source={Monetization} />
                <Image source={Heart} />
                <Image source={Notification} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default Navbar;

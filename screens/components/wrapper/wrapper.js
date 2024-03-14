import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Wrapper = () => {

  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          component={HomeScreen}
        />

        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: 'Trilha',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Wrapper;

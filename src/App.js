import React, { useEffect } from 'react';
    import { Provider } from 'react-redux';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, View } from 'react-native';

    import store from './src/store'; // Import Redux store
    import HomeScreen from './src/screens/HomeScreen';
    import SettingsScreen from './src/screens/SettingsScreen';
    import Button from './src/components/Button';
    import InputField from './src/components/InputField';
    import Loader from './src/components/Loader';
    import { configureNotifications } from './src/services/NotificationService';

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const HomeStack = () => (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );

    const SettingsStack = () => (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );

    const App = () => {
      useEffect(() => {
        configureNotifications();
      }, []);

      return (
        <Provider store={store}>
          <NavigationContainer>
            <SafeAreaView>
              <ScrollView>
                <Tab.Navigator>
                  <Tab.Screen name="Home" component={HomeStack} />
                  <Tab.Screen name="Settings" component={SettingsStack} />
                </Tab.Navigator>
              </ScrollView>
            </SafeAreaView>
            <StatusBar style="auto" />
          </NavigationContainer>
        </Provider>
      );
    };

    export default App;

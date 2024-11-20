import React from 'react';
    import { Provider } from 'react-redux';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, View } from 'react-native';
    import store from './src/store';
    import HomeScreen from './src/screens/HomeScreen';
    import SettingsScreen from './src/screens/SettingsScreen';
    import Button from './src/components/Button';
    import InputField from './src/components/InputField';
    import Loader from './src/components/Loader';
    import ScrollView from './src/components/ScrollView';
    import SafeAreaView from './src/components/SafeAreaView';

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function HomeStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      );
    }

    function SettingsStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      );
    }

    function App() {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
            <StatusBar style="auto" />
            <SafeAreaView>
              <ScrollView>
                <View style={styles.container}>
                  <Text style={styles.title}>Cross-Platform UI Components</Text>
                  <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
                  <InputField placeholder="Enter text" />
                  <Loader />
                </View>
              </ScrollView>
            </SafeAreaView>
          </NavigationContainer>
        </Provider>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    });

    export default App;

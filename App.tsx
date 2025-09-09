import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  TabNavigator: undefined;
};

type RootTabParamList = {
  Page1: undefined;
  Page2: undefined;
};

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Inicial</Text>
      <Button
        title="Ir para proximo"
        onPress={() => navigation.navigate('TabNavigator')}
      />
    </View>
  );
}

function Page1Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página 1</Text>
    </View>
  );
}

function Page2Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página 2</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Page1" component={Page1Screen} />
      <Tab.Screen name="Page2" component={Page2Screen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
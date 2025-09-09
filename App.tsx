import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View, FlatList, StyleSheet, Switch } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  TabNavigator: undefined;
};

type RootTabParamList = {
  Lista: undefined;
  Configuracao: undefined;
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

const listaDados = [
  { id: '1', nome: 'Item 1', descricao: 'Descrição do item 1' },
  { id: '2', nome: 'Item 2', descricao: 'Descrição do item 2' },
  { id: '3', nome: 'Item 3', descricao: 'Descrição do item 3' },
  { id: '4', nome: 'Item 4', descricao: 'Descrição do item 4' },
  { id: '5', nome: 'Item 5', descricao: 'Descrição do item 5' },
];

function ListaScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemLista}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemDescricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Itens</Text>
      <FlatList
        data={listaDados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
    </View>
  );
}

function ConfiguracaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      
      <View style={styles.configItem}>
        <Text style={styles.configLabel}>Notificações</Text>
        <Switch value={true} />
      </View>
      
      <View style={styles.configItem}>
        <Text style={styles.configLabel}>Modo Escuro</Text>
        <Switch value={false} />
      </View>
      
      <View style={styles.configItem}>
        <Text style={styles.configLabel}>Som</Text>
        <Switch value={true} />
      </View>
      
      <View style={styles.configItem}>
        <Text style={styles.configLabel}>Vibração</Text>
        <Switch value={false} />
      </View>
      
      <Button title="Salvar Configurações" onPress={() => {}} />
    </View>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={ListaScreen} />
      <Tab.Screen name="Configuracao" component={ConfiguracaoScreen} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  lista: {
    flex: 1,
  },
  itemLista: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDescricao: {
    fontSize: 14,
    color: '#666',
  },
  configItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  configLabel: {
    fontSize: 16,
    color: '#333',
  },
});
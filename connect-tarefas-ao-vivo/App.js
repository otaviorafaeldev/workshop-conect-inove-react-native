import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('Conecta');

  useEffect(() => {
    if (texto.length > 10) {
      setTexto('Texto muito grande');
    }
  }, [texto]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{texto}</Text>
      <View style={styles.linha}>
        <TextInput style={styles.linha} placeholder="Nova tarefa..." />
        <TouchableOpacity 
          style={{ backgroundColor: '#1F2A44', padding: 10, borderRadius: 5 }} 
          onPress={() => setTexto('Nova tarefa adicionada sdfdfdf dfdfdffd dfdfdf')}>
          <Text style={{ color: 'white' }}>+</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6FB', paddingTop: 70, paddingHorizontal: 20 },
  titulo: { fontSize: 30, fontWeight: 'bold', color: '#1F2A44' },
  linha: { flexDirection: 'row', marginBottom: 16 },
});

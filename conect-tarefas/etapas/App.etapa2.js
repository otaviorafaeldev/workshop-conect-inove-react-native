// ETAPA 2 - Estado (useState): adicionar, concluir e apagar tarefas
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionar() {
    if (texto.trim() === '') return;
    const nova = { id: Date.now().toString(), titulo: texto.trim(), feita: false };
    setTarefas([nova, ...tarefas]);
    setTexto('');
  }

  function alternar(id) {
    setTarefas(tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t)));
  }

  function apagar(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conect Tarefas</Text>

      <View style={styles.linhaNova}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={adicionar}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa ainda</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alternar(item.id)}>
              <Text style={[styles.cardTexto, item.feita && styles.feita]}>
                {item.feita ? '✅ ' : '⬜ '}
                {item.titulo}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => apagar(item.id)}>
              <Text style={styles.lixo}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6FB', paddingTop: 70, paddingHorizontal: 20 },
  titulo: { fontSize: 30, fontWeight: 'bold', color: '#1F2A44', marginBottom: 20 },
  linhaNova: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 14, fontSize: 16 },
  botao: { backgroundColor: '#4F46E5', width: 50, borderRadius: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center' },
  botaoTexto: { color: '#fff', fontSize: 28 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  cardTexto: { fontSize: 16, color: '#1F2A44' },
  feita: { textDecorationLine: 'line-through', color: '#9AA3B5' },
  lixo: { fontSize: 20, marginLeft: 10 },
  vazio: { textAlign: 'center', color: '#9AA3B5', marginTop: 40 },
});

// ETAPA 3 (FINAL) - Salva as tarefas no celular (AsyncStorage), contador e filtro
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = '@conect_tarefas';

export default function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [carregou, setCarregou] = useState(false);
  const [filtro, setFiltro] = useState('todas'); // 'todas' | 'pendentes' | 'feitas'

  // Ao abrir o app: le as tarefas salvas
  useEffect(() => {
    async function carregar() {
      try {
        const salvo = await AsyncStorage.getItem(CHAVE);
        if (salvo) setTarefas(JSON.parse(salvo));
      } catch (e) {
        console.log('Erro ao carregar', e);
      }
      setCarregou(true);
    }
    carregar();
  }, []);

  // Sempre que a lista mudar: salva (so depois de carregar a primeira vez)
  useEffect(() => {
    if (carregou) AsyncStorage.setItem(CHAVE, JSON.stringify(tarefas));
  }, [tarefas, carregou]);

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

  const visiveis = tarefas.filter((t) => {
    if (filtro === 'pendentes') return !t.feita;
    if (filtro === 'feitas') return t.feita;
    return true;
  });
  const qtdFeitas = tarefas.filter((t) => t.feita).length;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conect Tarefas</Text>
      <Text style={styles.contador}>
        {qtdFeitas} de {tarefas.length} concluídas
      </Text>

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

      <View style={styles.filtros}>
        {['todas', 'pendentes', 'feitas'].map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filtro, filtro === f && styles.filtroAtivo]}
            onPress={() => setFiltro(f)}
          >
            <Text style={[styles.filtroTexto, filtro === f && styles.filtroTextoAtivo]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={visiveis}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa aqui</Text>}
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
  titulo: { fontSize: 30, fontWeight: 'bold', color: '#1F2A44' },
  contador: { color: '#6B7490', marginBottom: 20, marginTop: 4 },
  linhaNova: { flexDirection: 'row', marginBottom: 16 },
  input: { flex: 1, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 14, fontSize: 16 },
  botao: { backgroundColor: '#4F46E5', width: 50, borderRadius: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center' },
  botaoTexto: { color: '#fff', fontSize: 28 },
  filtros: { flexDirection: 'row', marginBottom: 16 },
  filtro: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#E3E7F3', marginRight: 8 },
  filtroAtivo: { backgroundColor: '#4F46E5' },
  filtroTexto: { color: '#1F2A44', textTransform: 'capitalize' },
  filtroTextoAtivo: { color: '#fff' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  cardTexto: { fontSize: 16, color: '#1F2A44' },
  feita: { textDecorationLine: 'line-through', color: '#9AA3B5' },
  lixo: { fontSize: 20, marginLeft: 10 },
  vazio: { textAlign: 'center', color: '#9AA3B5', marginTop: 40 },
});

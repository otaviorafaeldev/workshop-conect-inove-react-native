// ETAPA 1 - So a tela (visual), sem logica ainda
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conect Tarefas</Text>

      <View style={styles.linhaNova}>
        <TextInput style={styles.input} placeholder="Nova tarefa..." />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>Estudar React Native</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTexto}>Publicar meu app</Text>
      </View>

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
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 10 },
  cardTexto: { fontSize: 16, color: '#1F2A44' },
});

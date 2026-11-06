/*
 * app/(private)/index.tsx (É a rota raiz: ./)
 */

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function TelaInicial() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel Principal (Logado)</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/detalhe')}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>

      {/* Simula o logout mandando de volta para a tela inicial de autenticação: */}
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.buttonText}>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  button: {
    minWidth: 180,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    borderRadius: 6,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  logoutButton: { backgroundColor: '#D32F2F' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
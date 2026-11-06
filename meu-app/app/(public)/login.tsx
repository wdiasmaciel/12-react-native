import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      
      {/* Simula o login enviando o usuário para a Dashboard */}
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Entrar (Ir para o App)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    minWidth: 180,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    borderRadius: 6,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  secondaryButton: { backgroundColor: '#666' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
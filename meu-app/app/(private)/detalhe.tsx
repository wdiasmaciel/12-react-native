import { View, Text, StyleSheet } from 'react-native';

export default function Detalhe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Detalhes</Text>
      <Text style={styles.subtitle}>O botão de voltar acima é gerado automaticamente pelo Stack Layout!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center' },
});
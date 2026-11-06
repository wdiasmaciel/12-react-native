/* Este arquivo gerencia a navegação principal da aplicação. 
 * Ele apenas renderiza o componente Stack, ocultando o 
 * cabeçalho global para dar liberdade aos sub-layouts 
 * (public) e (private).
 */

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
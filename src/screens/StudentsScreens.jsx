import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
const STUDENT = {
  nombre: 'Kenneth Enrique orellana tobar',
  carnet: '20240428',
  seccionGrupo: 'Sección A - Grupo 2',
};
 
export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{STUDENT.nombre.charAt(0)}</Text>
        </View>
 
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{STUDENT.nombre}</Text>
 
        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>{STUDENT.carnet}</Text>
 
        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.value}>{STUDENT.seccionGrupo}</Text>
      </View>
 
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Personajes')}>
        <Text style={styles.buttonText}>Ver personajes →</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9', padding: 20, justifyContent: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  avatar: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#6366f1',
    justifyContent: 'center', alignItems: 'center', marginBottom: 20,
  },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: '800' },
  label: { fontSize: 12, color: '#94a3b8', textTransform: 'uppercase', marginTop: 12 },
  value: { fontSize: 18, fontWeight: '600', color: '#0f172a', textAlign: 'center' },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
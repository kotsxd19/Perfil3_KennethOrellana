import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useFetchData from '../hooks/useFetchData';
import Card from '../components/Cards';
import Loading from '../components/Loading';
 
const URL = 'https://rickandmortyapi.com/api/character';
 
export default function ApiScreen({ navigation }) {
  const { data, loading, error, refetch } = useFetchData(URL);
 
  if (loading) return <Loading message="Cargando personajes..." />;
 
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Ocurrió un error: {error}</Text>
        <TouchableOpacity style={styles.button} onPress={refetch}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.name}
            description={`${item.species} • ${item.status}`}
          />
        )}
      />
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>← Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  error: { color: '#dc2626', marginBottom: 16, textAlign: 'center' },
  button: { backgroundColor: '#6366f1', padding: 14, borderRadius: 12 },
  back: { backgroundColor: '#0f172a', padding: 16, margin: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
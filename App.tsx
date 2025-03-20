import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loguin from '../Barbearia/src/pages/login/index';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Loguin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

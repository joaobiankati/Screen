import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet} from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#e100ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  }
});

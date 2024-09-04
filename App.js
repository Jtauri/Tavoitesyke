import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default function App() {
  const [ika, setIka] = useState('')
  const [alaLimitti, setAlaLimitti] = useState(null)
  const [ylaLimitti, setYlaLimitti] = useState(null)

const laskeHR = () => {
  let HR = 220 - ika
  setAlaLimitti(HR * 0.65)
  setYlaLimitti(HR * 0.85)
}


  return (
    <View style={styles.container}>
      <Text>Age:</Text>
      <TextInput
        style={styles.field}
        keyboardType="numeric"
        onChangeText={ika => setIka(ika)}
      />

      <Text>Limits</Text>
      <Text>{Math.round(alaLimitti)} - {Math.round(ylaLimitti)}</Text>
      <Button title="Calculate" onPress={laskeHR} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 20,
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  },
})

import { StyleSheet, Text, View } from 'react-native'

export default function Walking() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text>WINNERS</Text>
      </View>
      
      <View style={styles.boxOne}>
        <Text>1</Text>
      </View>

      <View style={styles.boxOne}>
        <Text>2</Text>
      </View>

      <View style={styles.boxOne}>
        <Text>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        height: 40,
        backgroundColor: 'black',
        width: '100%'
    },

    headerTextt: {
        fontsize: 15,
        fontStyle: 'italic',
    },

    boxOne: {
    backgroundColor: 'red',
    },

})
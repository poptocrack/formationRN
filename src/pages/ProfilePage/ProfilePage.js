import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ProfilePage() {
  return (
    <View style={styles.container}>
      <Text>This is the ProfilePage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProfilePage

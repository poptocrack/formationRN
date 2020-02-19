import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { AuthConsumer } from 'src/store/AuthContext'

function HomePage({ user, navigation }) {
  function onPress() {
    console.log('Do something here')
  }

  return (
    <View style={styles.container}>
      <Text>Hello {user.name}!</Text>
      <Button title="Go to profile page" onPress={onPress} />
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

export default props => (
  <AuthConsumer>
    {ctx => <HomePage user={ctx.user} logout={ctx.logoutUser} {...props} />}
  </AuthConsumer>
)

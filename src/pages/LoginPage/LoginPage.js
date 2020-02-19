import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { AuthConsumer } from 'src/store/AuthContext'

function LoginPage({ navigation }) {
  function goToAppStack() {
    console.log('Do something here')
  }

  return (
    <View style={styles.container}>
      <Text>This is the LoginPage</Text>
      <Button title="go to app" onPress={goToAppStack} />
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
    {ctx => <LoginPage {...props} />}
  </AuthConsumer>
)

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { AuthConsumer } from 'store/AuthContext'
import MyFirstComponent from 'components/thing'
import UserApi from 'api/user'

function LoginPage({ navigation }) {
  async function goToAppStack() {
    // const res = await UserApi.connectUser({ name: 'Pierre' })
    console.log('Do something here')
  }

  return (
    <View style={styles.container}>
      <MyFirstComponent />
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

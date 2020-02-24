import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomePage from 'src/pages/HomePage'
import ProfilePage from 'src/pages/ProfilePage'
import LoginPage from 'src/pages/LoginPage'

const AppStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
  },
  ProfilePage: {
    screen: ProfilePage,
  },
})

const AuthStack = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
  },
})

const RootNavigator = createSwitchNavigator({
  AuthStack,
  AppStack,
})

export default createAppContainer(RootNavigator)

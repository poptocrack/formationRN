import React from 'react'

import RootNavigator from 'src/navigation/RootNavigator'
import NavigationService from 'src/navigation/NavigationService'
import AuthProvider from 'src/store/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator
        ref={ref => NavigationService.setTopLevelNavigator(ref)}
      />
    </AuthProvider>
  )
}

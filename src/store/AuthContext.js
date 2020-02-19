import React, { useState, useEffect } from 'react'

import NavigationService from 'src/navigation/NavigationService'

const { Provider, Consumer } = React.createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function updateUser(updatedData) {
    setUser(updatedData)
  }

  useEffect(() => {
    if (user) {
      NavigationService.navigate('AppStack')
    } else {
      NavigationService.navigate('AuthStack')
    }
  }, [user])

  function logoutUser() {
    NavigationService.navigate('AuthStack')
    setUser(null)
  }

  return (
    <Provider
      value={{
        user,
        updateUser,
        logoutUser,
      }}
    >
      {children}
    </Provider>
  )
}

export { Consumer as AuthConsumer }
export default AuthProvider

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import Routes from './src/routes'

const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return <Routes />
}

export default App

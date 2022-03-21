/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { ThemeProvider } from 'styled-components'

import Routes from './src/routes'
import theme from './src/styles/theme'

const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	)
}

export default App

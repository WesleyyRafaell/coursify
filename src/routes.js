import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Dashboard from './pages/dashboard'

const Stack = createNativeStackNavigator()

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Dashboard" component={Dashboard} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes

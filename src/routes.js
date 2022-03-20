import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Dashboard from './pages/Dashboard'
import DetailPost from './pages/DetailPost'

const Stack = createNativeStackNavigator()

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Dashboard"
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="DetailPost" component={DetailPost} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes

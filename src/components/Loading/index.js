import React from 'react'
import { ActivityIndicator } from "react-native";
import * as S from './styles'

const Loading = () => {
	return <S.Container><ActivityIndicator size="large" color="#3CC6AA" /></S.Container>
}

export default Loading
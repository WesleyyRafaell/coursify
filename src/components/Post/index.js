import React from 'react'
import * as S from './styles'

const Post = () => {
	return (
		<S.Container>
			<S.Image
				source={{
					uri: 'https://media.discordapp.net/attachments/855429663677087805/955068683523354665/landing-page-blog-1.jpg'
				}}
			/>
			<S.Main>
				<S.Title>Como criar uma landing page de alta ...</S.Title>
				<S.Text>
					Uma landing page de alta conversão é o que todo mundo que vende online
					precisa ter para otimizar ...
				</S.Text>
				<S.Button>
					<S.TextButton>Leia mais</S.TextButton>
				</S.Button>
			</S.Main>
		</S.Container>
	)
}

export default Post

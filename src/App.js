import { BaseRoutes } from './routes'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
	// link: new HttpLink({
	uri: 'https://cors-anywhere.herokuapp.com/https://n7b67.sse.codesandbox.io/graphql',
	fetchOptions: {
		mode: 'no-cors',
	},
	// }),
	cache: new InMemoryCache(),
})

function App() {
	return (
		<ApolloProvider client={client}>
			<BaseRoutes />
		</ApolloProvider>
	)
}

export default App

import { BaseRoutes } from './routes'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// setting proxy: https://github.com/Yelp/yelp-fusion/issues/579
const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPH_URL,
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

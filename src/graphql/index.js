import { gql } from '@apollo/client'

const GET_FILMS = gql`
	{
		movies {
			id
			name
			genre
		}
	}
`

export default {
	GET_FILMS,
}

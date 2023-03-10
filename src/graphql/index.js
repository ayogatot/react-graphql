import { gql } from '@apollo/client'

const GET_ALL_MOVIES = gql`
	{
		movies {
			id
			name
			genre
		}
	}
`

const GET_ALL_ACTORS = gql`
	{
		actors {
			id
			name
			age
			movies {
				id
			}
		}
	}
`

const GET_MOVIE_BY_ID = gql`
	query movie($id: ID!) {
		movie(id: $id) {
			name
			genre
			actor {
				id
				name
			}
		}
	}
`

const GET_ACTOR_BY_ID = gql`
	query actor($id: ID!) {
		actor(id: $id) {
			name
			age
			movies {
				id
				name
				genre
			}
		}
	}
`

export default {
	GET_ALL_MOVIES,
	GET_ALL_ACTORS,
	GET_MOVIE_BY_ID,
	GET_ACTOR_BY_ID,
}

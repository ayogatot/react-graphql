import React from 'react'
import { useQuery } from '@apollo/client'

import query from '../../graphql'

export default function Movies() {
	const { data, loading, error } = useQuery(query.GET_FILMS)

	return <div>Movies</div>
}

import React from 'react'
import CardMovie from '../../components/CardMovie'
// import { useQuery } from '@apollo/client'

// import query from '../../graphql'

import data from '../../data'

export default function Movies() {
	// const { data, loading, error } = useQuery(query.GET_FILMS)
	return (
		<div className="flex flex-row flex-wrap sm:justify-center md:justify-start">
			{data.movies.map((movie) => (
				<CardMovie key={movie.id} data={movie} />
			))}
		</div>
	)
}

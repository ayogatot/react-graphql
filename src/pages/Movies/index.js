import React from 'react'
import CardMovie from '../../components/CardMovie'
import { useQuery } from '@apollo/client'
import query from '../../graphql'

export default function Movies() {
	const { data, loading, error } = useQuery(query.GET_ALL_MOVIES)

	return (
		<>
			{loading ? (
				<div className="grid md:grid-rows-2 md:grid-flow-col sm:grid-cols-1 mb-10">
					{Array.apply(null, Array(8)).map((_, key) => {
						return <CardMovie key={key} loading={true} />
					})}
				</div>
			) : (
				<div className="grid md:grid-rows-3 md:grid-flow-col sm:grid-cols-1 mb-10">
					{data.movies.map((movie) => (
						<CardMovie key={movie.id} data={movie} />
					))}
				</div>
			)}
		</>
	)
}

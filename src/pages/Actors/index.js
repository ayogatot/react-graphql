import React from 'react'
import CardActor from '../../components/CardActor'
import { useQuery } from '@apollo/client'
import query from '../../graphql'

export default function Actors() {
	const { data, loading, error } = useQuery(query.GET_ALL_ACTORS)

	return (
		<>
			{loading ? (
				<div className="grid md:grid-rows-2 md:grid-flow-col sm:grid-cols-1 mb-10">
					{Array.apply(null, Array(8)).map((_, key) => {
						return <CardActor key={key} loading={true} />
					})}
				</div>
			) : (
				<div className="grid md:grid-rows-2 md:grid-flow-col sm:grid-cols-1 mb-10">
					{data.actors.map((movie) => (
						<CardActor key={movie.id} data={movie} />
					))}
				</div>
			)}
		</>
	)
}

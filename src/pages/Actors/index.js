import React from 'react'
import CardActor from '../../components/CardActor'
import { useQuery } from '@apollo/client'
import query from '../../graphql'
import { Navigate } from 'react-router-dom'

export default function Actors() {
	const { data, loading, error } = useQuery(query.GET_ALL_ACTORS)

	if (error) {
		return <Navigate to="/error" />
	}

	return (
		<>
			{loading ? (
				<div className="grid md:grid-rows-2 md:grid-flow-col sm:grid-cols-1 gap-3 mb-10">
					{Array.apply(null, Array(6)).map((_, key) => {
						return <CardActor key={key} loading={true} />
					})}
				</div>
			) : (
				<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mb-10">
					{data.actors.map((movie) => (
						<CardActor key={movie.id} data={movie} />
					))}
				</div>
			)}
		</>
	)
}

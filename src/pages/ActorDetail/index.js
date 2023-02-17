import React from 'react'
import { FaArrowLeft, FaUserAstronaut } from 'react-icons/fa'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import query from '../../graphql'

export default function ActorDetail() {
	const params = useParams()
	const { data, loading, error } = useQuery(query.GET_ACTOR_BY_ID, { variables: { id: params.id } })

	if (error) {
		return <Navigate to="/error" />
	}

	return (
		<>
			<Link className="self-start" to="/actors">
				<div className="my-4 flex flex-row items-center cursor-pointer">
					<FaArrowLeft size={30} color="white" />
					<p className="text-white font-bold pl-2">BACK</p>
				</div>
			</Link>
			{loading ? (
				<div className="w-3/6 flex flex-col justify-between my-2 mb-10 animate-pulse">
					<div className="w-full min-h-[300px] rounded-t-lg bg-cyan-800 flex justify-center items-center">
						<div className="w-[250px] h-[250px] rounded-full bg-slate-400 flex justify-center items-center" />
					</div>
					<div className="w-full rounded-b-lg p-4 bg-white">
						<div className="mt-3">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-16 rounded-md my-2" />
						</div>
						<div className="mt-6">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-16 rounded-md my-2" />
						</div>
						<div className="mt-6">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-56 rounded-md my-2" />
							<div className="bg-slate-400 h-3 w-56 rounded-md my-2" />
							<div className="bg-slate-400 h-3 w-56 rounded-md my-2" />
						</div>
						<div className="mt-6">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-48 rounded-md my-2" />
							<div className="bg-slate-400 h-3 w-32 rounded-md my-2" />
							<div className="bg-slate-400 h-3 w-56 rounded-md my-2" />
						</div>
					</div>
				</div>
			) : (
				<div className="w-3/6 flex flex-col justify-between my-2 mb-10">
					<div className="w-full min-h-[300px] rounded-t-lg bg-cyan-800 flex justify-center items-center">
						<div className="w-[250px] h-[250px] rounded-full bg-cyan-900 flex justify-center items-center">
							<FaUserAstronaut size={90} color="white" />
						</div>
					</div>
					<div className="w-full rounded-b-lg p-4 bg-white">
						<div className="mt-3">
							<p className="text-xs text-orange-500 font-bold">Name</p>
							<p>{data?.actor?.name}</p>
						</div>
						<div className="mt-3">
							<p className="text-xs text-orange-500 font-bold">Age</p>
							<p>{data?.actor?.age}</p>
						</div>
						<div className="mt-3">
							<p className="text-xs text-orange-500 font-bold">Description</p>
							<p className="text-justify">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
								into electronic typesetting, remaining essentially unchanged
							</p>
						</div>
						<div className="mt-3">
							<p className="text-xs text-orange-500 font-bold mb-1">List Movie</p>
							{data?.actor?.movies.map((movie) => {
								return (
									<Link to={`/movies/${movie.id}`}>
										<p className="my-1 text-sm font-bold text-cyan-900 cursor-pointer hover:text-cyan-600 transition">
											• {movie.name}
										</p>
									</Link>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

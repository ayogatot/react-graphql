import React from 'react'
import { FaImage, FaUser, FaArrowLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import query from '../../graphql'

export default function MovieDetail() {
	const params = useParams()
	const { data, loading, error } = useQuery(query.GET_MOVIE_BY_ID, { variables: { id: params.id } })

	const rating = Math.floor(Math.random() * 5)

	return (
		<>
			<Link className="self-start" to="/">
				<div className="my-4 flex flex-row items-center cursor-pointer">
					<FaArrowLeft size={30} color="white" />
					<p className="text-white font-bold pl-2">BACK</p>
				</div>
			</Link>
			{loading ? (
				<div className="w-full flex md:flex-row sm:flex-col justify-between my-2 mb-10 animate-pulse">
					<div className="md:w-4/6 sm:w-full min-h-[500px] rounded-l-md bg-cyan-800 flex flex-col justify-center items-center">
						<div className="bg-slate-400 h-4 w-48 rounded-lg my-1" />
						<div className="bg-slate-400 h-4 w-48 rounded-lg my-1" />
						<div className="bg-slate-400 h-4 w-48 rounded-lg my-1" />
					</div>
					<div className="md:w-4/12 sm:w-full min-h-[500px] rounded-r-md p-4 bg-white">
						<div className="mt-6">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-16 rounded-md my-1" />
						</div>
						<div className="mt-6">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-16 rounded-md my-1" />
						</div>
						<div className="mt-8">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-16 rounded-md my-1" />
						</div>
						<div className="mt-8">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="bg-slate-400 h-3 w-48 rounded-md my-1" />
							<div className="bg-slate-400 h-3 w-48 rounded-md my-1" />
							<div className="bg-slate-400 h-3 w-48 rounded-md my-1" />
							<div className="bg-slate-400 h-3 w-48 rounded-md my-1" />
						</div>
						<div className="mt-8">
							<div className="bg-slate-400 h-2 w-10 rounded-md" />
							<div className="flex flex-row">
								<div className="flex flex-col justify-center items-center w- cursor-pointer">
									<div className="mt-4 rounded-full bg-slate-400 min-w-[50px] h-[50px] flex justify-center items-center" />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full flex md:flex-row sm:flex-col justify-between my-2 mb-10">
					<div className="md:w-4/6 sm:w-full min-h-[500px] rounded-l-md bg-cyan-800 flex justify-center items-center">
						<FaImage size={150} color="white" />
					</div>
					<div className="md:w-4/12 sm:w-full min-h-[500px] rounded-r-md p-4 bg-white">
						<div className="mt-2">
							<p className="text-xs text-orange-500 font-bold">Title</p>
							<p>{data?.movie?.name}</p>
						</div>
						<div className="mt-2">
							<p className="text-xs text-orange-500 font-bold">Genre</p>
							<p>{data?.movie?.genre}</p>
						</div>
						<div className="mt-2">
							<p className="text-xs text-orange-500 font-bold">Rating</p>
							<p>{rating} / 5</p>
						</div>
						<div className="mt-2">
							<p className="text-xs text-orange-500 font-bold">Description</p>
							<p className="text-justify">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
								into electronic typesetting, remaining essentially unchanged
							</p>
						</div>
						<div className="mt-2">
							<p className="text-xs text-orange-500 font-bold">Actors</p>
							<Link to={`/actors/${data?.movie?.actor?.id}`}>
								<div className="flex flex-row">
									<div className="flex flex-col justify-center items-center cursor-pointer transition hover:scale-95">
										<div className="mt-4 rounded-full bg-cyan-800 min-w-[50px] h-[50px] flex justify-center items-center transition hover:bg-cyan-900">
											<FaUser size={20} color="white" />
										</div>
										<p>{data?.movie?.actor?.name.split(' ')[0]}</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

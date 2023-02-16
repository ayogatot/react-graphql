import React from 'react'
import { FaImage, FaUser, FaArrowLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import data from '../../data'

export default function MovieDetail() {
	const params = useParams()
	const movie = data.movies.find((mov) => mov.id === params.id)
	const rating = movie.rating || Math.floor(Math.random() * 5)

	return (
		<>
			<Link className="self-start" to="/">
				<div className="my-4 flex flex-row items-center cursor-pointer">
					<FaArrowLeft size={30} color="white" />
					<p className="text-white font-bold pl-2">BACK</p>
				</div>
			</Link>
			<div className="w-full flex md:flex-row sm:flex-col justify-between my-2 mb-10">
				<div className="md:w-4/6 sm:w-full min-h-[500px] rounded-l-md bg-cyan-800 flex justify-center items-center">
					<FaImage size={150} color="white" />
				</div>
				<div className="md:w-4/12 sm:w-full min-h-[500px] rounded-r-md p-4 bg-white">
					<div className="mt-2">
						<p className="text-xs text-orange-500 font-bold">Title</p>
						<p>{movie.name}</p>
					</div>
					<div className="mt-2">
						<p className="text-xs text-orange-500 font-bold">Genre</p>
						<p>{movie.genre}</p>
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
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged
						</p>
					</div>
					<div className="mt-2">
						<p className="text-xs text-orange-500 font-bold">Actors</p>
						<Link to={`/actors/${movie.actor.id}`}>
							<div className="flex flex-row">
								<div className="flex flex-col justify-center items-center w- cursor-pointer">
									<div className="mt-4 rounded-full bg-cyan-800 min-w-[50px] h-[50px] flex justify-center items-center">
										<FaUser size={20} color="white" />
									</div>
									<p>{movie.actor.name.split(' ')[0]}</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Movies from '../pages/Movies'
import MovieDetail from '../pages/MovieDetail'
import Actors from '../pages/Actors'
import ActorDetail from '../pages/ActorDetail'
import Genres from '../pages/Genres'
import Layout from '../layouts'

export function BaseRoutes() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:id" element={<MovieDetail />} />
					<Route path="/actors" element={<Actors />} />
					<Route path="/actors/:id" element={<ActorDetail />} />
					<Route path="/genres" element={<Genres />} />
					<Route path="*" element={<Navigate to="/movies" replace />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from '../pages/Movies'
import Actors from '../pages/Actors'
import Genres from '../pages/Genres'
import Layout from '../layouts'

export function BaseRoutes() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Movies />} />
					<Route path="/actors" element={<Actors />} />
					<Route path="/genres" element={<Genres />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

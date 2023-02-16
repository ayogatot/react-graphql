import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from '../pages/Movies'
import Actors from '../pages/Actors'

export function BaseRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Movies />} />
				<Route path="/actors" element={<Actors />} />
			</Routes>
		</BrowserRouter>
	)
}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cards from "../components/cards/cards"
import Country from "./country"

export default function AppRoutes() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Cards />} />
                <Route path='/country/:countryName' element={<Country />} />
            </Routes>
        </BrowserRouter>
    )
}
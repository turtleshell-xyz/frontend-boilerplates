import './App.css'
import Firewall_Details from './Firewall_Details'
import Dashboard from './Dashboard'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
		{
			path: "/",
			element: <Dashboard />,
		},
		{
			path: "/Firewall_Details",
			element: <Firewall_Details />,
		},
		
	])

  return (
    <>
    <div className="selection:bg-red-500/100 selection:text-slate-100/100">
					<RouterProvider router={router} />
				</div>

    </>
  )
}

export default App
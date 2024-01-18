import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';
import Page404 from './pages/404/404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},

	{
		path: "/about",
		element: <About />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: "*",
		element: <Page404 />
	},
	


]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
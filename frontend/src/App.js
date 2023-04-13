import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/Home';
import EventsPage from './page/Events';
import EventDetailPage from './page/EventDetail';
import NewEventPage from './page/NewEvent';
import EditEventPage from './page/EditEvent';
import RootLayout from './page/Root';
import RootLayoutPage from './page/RootLayout';

const router = createBrowserRouter([
	{ path: '/', element: <RootLayout />, children: [
			{index: true, element: <HomePage /> },
			{path: 'events', element: <RootLayoutPage />, children: [
					{ index: true, element: <EventsPage /> },
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EditEventPage /> },
				] }
		] }
]);

function App() {
	return <RouterProvider router={ router } />;
}

export default App;

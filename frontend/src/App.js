import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/Home';
import EventsPage, { loader as eventsLoader } from './page/Events';
import EventDetailPage, {
	loader as eventDetailLoader,
} from './page/EventDetail';
import NewEventPage from './page/NewEvent';
import EditEventPage from './page/EditEvent';
import RootLayout from './page/Root';
import RootLayoutPage from './page/RootLayout';
import ErrorPage from './page/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'events',
				element: <RootLayoutPage />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
							},
							{ path: 'edit', element: <EditEventPage /> },
						],
					},
					{ path: 'new', element: <NewEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={ router } />;
}

export default App;

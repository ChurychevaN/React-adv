import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/Home';
import EventsPage, { loader as eventsLoader } from './page/Events';
import EventDetailPage, {
	loader as eventDetailLoader,
	action as deleteEventAction,
} from './page/EventDetail';
import NewEventPage from './page/NewEvent';
import EditEventPage from './page/EditEvent';
import RootLayout from './page/Root';
import RootLayoutPage from './page/RootLayout';
import ErrorPage from './page/Error';
import {action as manipulateEventAction} from './components/EventForm';

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
								action: deleteEventAction,
							},
							{ path: 'edit',
								element: <EditEventPage />,
								action: manipulateEventAction },
						],
					},
					{ path: 'new',
						element: <NewEventPage />,
						action: manipulateEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={ router } />;
}

export default App;

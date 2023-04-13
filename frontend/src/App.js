import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/Home';
import EventsPage from './page/Events';
import EventDetailPage from './page/EventDetail';
import NewEventPage from './page/NewEvent';
import EditEventPage from './page/EditEvent';

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/events', element: <EventsPage /> },
	{ path: '/events/:eventId', element: <EventDetailPage /> },
	{ path: '/events/new', element: <NewEventPage /> },
	{ path: '/events/:eventId/edit', element: <EditEventPage /> },
]);

function App() {
	return <RouterProvider router={ router } />;
}

export default App;

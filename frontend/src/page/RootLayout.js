import EventsNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

function RootLayoutPage() {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
}

export default RootLayoutPage;
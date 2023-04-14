import { Link, useParams } from 'react-router-dom';

function EventDetailPage() {
	const param = useParams();

	return (
		<>
			<h1>Event Detail Page</h1>
			<p>Event ID: { param.eventId }</p>
			<p><Link to="..">Back</Link></p>
		</>
	);
}

export default EventDetailPage;
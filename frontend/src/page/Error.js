import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
	const error = useRouteError();
	let title = 'An error occurred';
	let message = 'Something wron!!';

	if (error.state === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 400) {
		title = 'Nod found!';
		message = 'Could not find resource or page...';
	}

	return(
	<>
		<MainNavigation />
	<PageContent title={ title }>
		<p>{ message }</p>
	</PageContent>;
	</>
	)
}

export default ErrorPage;
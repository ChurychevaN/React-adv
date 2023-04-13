import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={ classes.header }>
			<main>
				<nav>
					<ul className={ classes.list }>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Events</a>
						</li>
					</ul>
				</nav>
			</main>
		</header>
	);
}

export default MainNavigation;

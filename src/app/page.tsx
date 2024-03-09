import Link from 'next/link';

const Home = () => (
	<div className="flex flex-col gap-2 p-4">
		<h1>Vitest and React Testing Library</h1>
		<Link className="text-blue-500" href="/ColorButton">
			Section 2 - ColorButton
		</Link>
		<Link className="text-blue-500" href="/Sundaes">
			Section 3 - Sundaes
		</Link>
	</div>
);

export default Home;

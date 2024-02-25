'use client';

import { useEffect, useState } from 'react';

const ClientSideRendering = () => {
	const [usernames, setUsernames] = useState<String>('Loading...');

	useEffect(() => {
		fetch('/api/users')
			.then((res) => res.json())
			.then(({ users }) => {
				const names = users.map((user: User) => user.name);
				setUsernames(names.join(', '));
			})
			.catch((error) => setUsernames(`Failed to load: ${JSON.stringify(error)}`));
	}, []);

	return (
		<>
			<h1 className="text-lg underline">Client-side Rendering</h1>
			<p>Use fetch, useEffect, and useState to retrieve data from `/api/users`:</p>
			<p>{usernames}</p>
		</>
	);
};

export default ClientSideRendering;

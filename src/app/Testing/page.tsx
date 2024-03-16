export const Tooltip = () => (
	<div className="group flex">
		<p>Trigger</p>
		<p className="hidden">Tooltip</p> {/* group-hover:block */}
	</div>
);

export const AlertDiv = () => (
	<div role="alert" /* aria-label="Please try again." */>Please try again.</div>
);

export const AlertButton = () => <button>Try again</button>;

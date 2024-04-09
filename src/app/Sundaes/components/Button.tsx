const Button = ({
	disabled,
	onClick,
	children,
}: {
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}): JSX.Element => (
	<button
		className="rounded bg-blue-500 px-2 py-1 text-white enabled:hover:ring-2 enabled:hover:ring-blue-600 disabled:bg-slate-500"
		disabled={disabled ?? false}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;

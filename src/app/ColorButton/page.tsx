'use client';

import { useState } from 'react';

const ColorButton = (): JSX.Element => {
	const [currentColor, setCurrentColor] = useState<'red' | 'blue'>('red');
	const [disabled, setDisabled] = useState(false);

	const nextColor = currentColor === 'red' ? 'blue' : 'red';

	return (
		<div>
			<button
				className={disabled ? 'bg-gray-500' : `bg-${currentColor}-500`}
				disabled={disabled}
				onClick={() => setCurrentColor(nextColor)}
			>
				Change to {nextColor}
			</button>

			<label>
				<input
					type="checkbox"
					checked={disabled}
					onChange={(e) => setDisabled(e.target.checked)}
				/>
				Disable button
			</label>
		</div>
	);
};

export default ColorButton;

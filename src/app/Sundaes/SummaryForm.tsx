import { useState } from 'react';

const SummaryForm = () => {
	const [tcChecked, setTcChecked] = useState(false);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={tcChecked}
					onChange={(e) => setTcChecked(e.target.checked)}
				/>
				I agree to the Terms and Conditions
			</label>

			<button disabled={!tcChecked}>Confirm order</button>
		</div>
	);
};

export default SummaryForm;

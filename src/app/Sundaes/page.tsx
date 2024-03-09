'use client';

import { useState } from 'react';

const TermsConditionsTooltip = () => (
	<span className="flex gap-1 text-blue-500 after:hidden after:bg-slate-800 after:px-1 after:py-0 after:text-white after:content-['See_Matt_for_details'] hover:after:block">
		Terms and Conditions
	</span>
);

const SummaryForm = () => {
	const [tcChecked, setTcChecked] = useState(false);

	return (
		<div className="flex flex-col items-start gap-2 p-4">
			<label className="flex gap-1">
				<input
					type="checkbox"
					checked={tcChecked}
					onChange={(e) => setTcChecked(e.target.checked)}
				/>
				I agree to the {TermsConditionsTooltip()}
			</label>

			<button
				className="rounded bg-blue-500 px-2 py-1 text-white enabled:hover:ring-2 enabled:hover:ring-blue-600 disabled:bg-slate-500"
				disabled={!tcChecked}
			>
				Confirm order
			</button>
		</div>
	);
};

export default SummaryForm;

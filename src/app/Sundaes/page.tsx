'use client';

import { useState } from 'react';
import Scoops from './Scoops';
import Toppings from './Toppings';

// Tailwind `group-hover:*` is bugged in tests, so this version is currently unused
const TermsConditionsTooltipV1 = () => (
	<div className="group flex gap-1">
		<span className="text-blue-500">Terms and Conditions</span>
		<span className="hidden rounded bg-slate-700 px-1 py-0 text-white group-hover:block">
			See Matt for details
		</span>
	</div>
);

const TermsConditionsTooltipV2 = () => {
	const [hover, setHover] = useState(false);

	return (
		<div className="flex gap-1">
			<span
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className="text-blue-500"
			>
				Terms and Conditions
			</span>
			{hover && (
				<span className="rounded bg-slate-700 px-1.5 py-0 text-white">
					See Matt for details
				</span>
			)}
		</div>
	);
};

const SummaryForm = () => {
	const [tcChecked, setTcChecked] = useState(false);

	return (
		<div className="flex flex-col items-start gap-4 p-4">
			<h1 className="text-xl">Design your Sundae!</h1>

			<Scoops />
			<Toppings />

			<div>
				<label className="mb-1 flex gap-1">
					<input
						type="checkbox"
						checked={tcChecked}
						onChange={(e) => setTcChecked(e.target.checked)}
					/>
					I agree to the {TermsConditionsTooltipV2()}
				</label>

				<button
					className="rounded bg-blue-500 px-2 py-1 text-white enabled:hover:ring-2 enabled:hover:ring-blue-600 disabled:bg-slate-500"
					disabled={!tcChecked}
				>
					Confirm order
				</button>
			</div>
		</div>
	);
};

export default SummaryForm;

import { useState } from 'react';
import { useOrderDetails } from '../OrderDetails';
import Button from '../components/Button';

const TermsConditionsTooltip = () => {
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
	const { setOrderPhase } = useOrderDetails();
	const [tcChecked, setTcChecked] = useState(false);

	return (
		<>
			<div>
				<label className="mb-1 flex gap-1">
					<input
						type="checkbox"
						checked={tcChecked}
						onChange={(e) => setTcChecked(e.target.checked)}
					/>
					I agree to the {TermsConditionsTooltip()}
				</label>

				<Button disabled={!tcChecked} onClick={() => setOrderPhase('confirmation')}>
					Confirm order
				</Button>
			</div>
		</>
	);
};

export default SummaryForm;

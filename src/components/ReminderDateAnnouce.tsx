import {format} from 'date-fns/format';
import {PreviewMessage} from './PreviewMessage';
import {Stack} from '@mui/material';
import {parseISO} from 'date-fns/parseISO';

export const ReminderDateAnnouce = ({
	reminderDate,
}: {
	reminderDate: string;
}) => {
	const dateSplit = (reminderDate ?? '').split('-');
	let previewDate = reminderDate;
	if (dateSplit.length >= 3) {
		const parsedDate = parseISO(reminderDate);
		previewDate = format(parsedDate, 'yyyy年MM月dd日');
	}

	return (
		<Stack
			spacing={1}
			direction={'column'}
			alignItems={'flex-start'}
			sx={{
				paddingTop: 2,
				paddingLeft: 2,
			}}
		>
			<PreviewMessage previewDate={previewDate} />
		</Stack>
	);
};

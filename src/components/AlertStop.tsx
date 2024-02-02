import {Typography} from '@mui/material';

export const AlertStop = ({
	message,
}: {
	message: string;
}) => (
	<Typography
		variant='body1'
		sx={{
			color: 'red',
			fontWeight: 'bold',
		}}
	>
		{message}
	</Typography>
);

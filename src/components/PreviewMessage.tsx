import {Box, Typography} from '@mui/material';

export const PreviewMessage = ({
	previewDate,
}: {
	previewDate: string;
}) => {
	if (!previewDate) {
		return (
			<Typography variant='body1'>
        請求書の作成予定日を設定してください
			</Typography>
		);
	}

	if (previewDate === 'default') {
		return (
			<Typography variant='body1'>
        再通知日を設定してください
			</Typography>
		);
	}

	return (
		<Box>
        再通知日を
			<Typography variant='h6' component={'span'}>
				{previewDate}
			</Typography>
        にします。
			<br />
        よろしければ「保存」ボタンをクリックしてください。
		</Box>
	);
};

import {Button, Typography, type ButtonOwnProps, Stack} from '@mui/material';

export const AlertButton = ({
	label,
	stateValue,
	colorSettings = 'error',
	message = '',
}: {
	label: string;
	stateValue: string;
	colorSettings?: ButtonOwnProps['color'];
	message?: string;
}) => {
	const reminderAppId = String(kintone.app.getId());

	const handleClick = () => {
		const reqBody = {
			app: reminderAppId,
			id: kintone.app.record.getId(),
			record: {
				alertState: {
					value: stateValue,
				},
			},
		};

		kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', reqBody, () => {
			// 保存成功時の処理
			const pageUrl = location.href;
			location.href = `${pageUrl.split(reminderAppId)[0]}/${reminderAppId}/`;
			console.log('アラートを停止しました');
			// Window.location.reload();
		}, error => {
			// 保存失敗時の処理
			console.error('保存エラー:', error);
		});
	};

	return (
		<Stack
			direction={'row'}
			spacing={2}
			alignItems={'center'}
		>
			<Button
				variant='outlined'
				color={colorSettings}
				onClick={handleClick}
			>
				{label}
			</Button>
			<Typography variant='body2'>
				{message}
			</Typography>
		</Stack>
	);
};

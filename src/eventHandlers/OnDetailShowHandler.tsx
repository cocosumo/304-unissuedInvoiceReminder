import {AlertStop} from '@/components/AlertStop';
import {type KintoneEvent} from '@/types/types';
import {getSpaceElement, setFieldShown} from '@api/kintone/kintoneAPI';
import {useState} from 'react';
import {createRoot, type Root} from 'react-dom/client';

let root: Root | undefined;

export const OnDetailShowHandler = (event: KintoneEvent) => {
	// フィールドの非表示設定
	// SetFieldShown('notificationSettings', false);
	setFieldShown('reminderDate', false);

	const [alertStop, setAlertStop] = useState(false);

	const handleCancelClick = () => {
		setAlertStop(false);
	};

	const handleStopClick = () => {
		setAlertStop(true);
	};

	const {record: {
		alertState,
	}} = event;

	const spaceElement = getSpaceElement('reminderStopButton');

	if (!spaceElement) {
		return;
	}

	if (!root) {
		root = createRoot(spaceElement);
	}

	root.render(
		<AlertStop handleClick={handleClick} />,
	);

	// 再通知日を設定する(何も選択しない場合はデフォルト3日後に設定する)
	alertState.value = alertStop ? '0' : '1';

	return event;
};

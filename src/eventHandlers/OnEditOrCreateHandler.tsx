import {AlertButton} from '@/components/AlertButton';
import {checkUserIsAccounting} from '@/helpers/checkUserIsAccounting';
import {type KintoneEvent} from '@/types/types';
import {getSpaceElement, setFieldShown} from '@api/kintone/kintoneAPI';
import {type Root, createRoot} from 'react-dom/client';

let root: Root | undefined;

export const OnEditOrCreateHandler = async (event: KintoneEvent) => {
	// フィールドの非表示設定
	setFieldShown('notificationSettings', false);
	setFieldShown('scheduledAlertDate', false);

	const spaceElement = getSpaceElement('reminderStopButton');
	const isAccounting = await checkUserIsAccounting();

	const alertState = event.record.alertState.value;
	const alertValid = alertState !== '0';

	// 経理担当者以外には、メッセージを表示しない
	if (!isAccounting) {
		return;
	}

	if (!spaceElement) {
		return;
	}

	if (!root) {
		root = createRoot(spaceElement);
	}

	root.render(
		<AlertButton
			label={alertValid ? 'アラート停止' : 'アラート再開'}
			stateValue={alertValid ? '0' : '1'}
			colorSettings={alertValid ? 'error' : 'primary'}
			message={alertValid ? '' : '※本案件はアラート対象外となっています'}
		/>,
	);
};

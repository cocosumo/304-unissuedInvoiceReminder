import {AlertStop} from '@/components/AlertStop';
import {checkUserIsAccounting} from '@/helpers/checkUserIsAccounting';
import {getSpaceElement, setFieldShown} from '@api/kintone/kintoneAPI';
import {type Root, createRoot} from 'react-dom/client';

let root: Root | undefined;

export const OnEditOrCreateHandler = async () => {
	// フィールドの非表示設定
	setFieldShown('notificationSettings', false);
	setFieldShown('scheduledAlertDate', false);

	const spaceElement = getSpaceElement('reminderStopButton');
	const isAccounting = await checkUserIsAccounting();

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
		<AlertStop
			message='アラートを停止する場合には、"通知しない"を選択してください'
		/>,
	);
};

import {AlertStop} from '@/components/AlertStop';
import {checkUserIsAccounting} from '@/helpers/checkUserIsAccounting';
import {getSpaceElement, setFieldShown} from '@api/kintone/kintoneAPI';
import {createRoot, type Root} from 'react-dom/client';

let root: Root | undefined;

export const OnDetailShowHandler = async () => {
	// フィールドの非表示設定
	// SetFieldShown('notificationSettings', false);
	setFieldShown('reminderDate', false);

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
			message='アラートを停止する場合には、レコード編集画面より設定変更をお願いします'
		/>,
	);
};

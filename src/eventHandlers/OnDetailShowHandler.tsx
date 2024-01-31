import {AlertStop} from '@/components/AlertStop';
import {getSpaceElement, setFieldShown} from '@api/kintone/kintoneAPI';
import {createRoot, type Root} from 'react-dom/client';

let root: Root | undefined;

export const OnDetailShowHandler = () => {
	// フィールドの非表示設定
	// SetFieldShown('notificationSettings', false);
	setFieldShown('reminderDate', false);

	const spaceElement = getSpaceElement('reminderStopButton');

	if (!spaceElement) {
		return;
	}

	if (!root) {
		root = createRoot(spaceElement);
	}

	root.render(
		<AlertStop />,
	);
};

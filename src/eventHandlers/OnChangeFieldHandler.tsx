import {type Root, createRoot} from 'react-dom/client';
import {type KInvoiceReminderList} from '@/config';
import {calcReminderDate} from '@/helpers/calcReminderDate';
import {type KintoneEvent} from '@/types/types';
import {getSpaceElement} from '@api/kintone/kintoneAPI';
import {format} from 'date-fns/format';
import {ReminderDateAnnouce} from '@/components/ReminderDateAnnouce';
import {addWeeks} from 'date-fns/addWeeks';

let root: Root | undefined;

export const OnChangeFieldHandler = (event: KintoneEvent) => {
	const {record: {
		reminderDate,
		scheduledAlertDate,
		expectedCreateInvoiceDate,
	}} = event;

	// 再通知日を表示する
	const spaceElement = getSpaceElement('reminderDateAnnounce');
	const newDate = calcReminderDate({
		reminderDate: reminderDate.value as KInvoiceReminderList,
		expectedCreateInvoiceDate: expectedCreateInvoiceDate.value,
	});

	if (!spaceElement) {
		return;
	}

	if (!root) {
		root = createRoot(spaceElement);
	}

	root.render(
		<ReminderDateAnnouce reminderDate={ newDate } />,
	);

	// 再通知日を設定する(何も選択しない場合はデフォルト1週間後に設定する)
	scheduledAlertDate.value = newDate === 'default' ? format(addWeeks(new Date(), 1), 'yyyy-MM-dd') : newDate;

	return event;
};

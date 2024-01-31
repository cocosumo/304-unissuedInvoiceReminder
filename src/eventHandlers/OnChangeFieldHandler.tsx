import {type Root, createRoot} from 'react-dom/client';
import {type KInvoiceReminderList} from '@/config';
import {calcReminderDate} from '@/helpers/calcReminderDate';
import {type KintoneEvent} from '@/types/types';
import {getSpaceElement} from '@api/kintone/kintoneAPI';
import {format} from 'date-fns/format';
import {addDays} from 'date-fns/addDays';
import {ReminderDateAnnouce} from '@/components/ReminderDateAnnouce';

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

	// 再通知日を設定する(何も選択しない場合はデフォルト3日後に設定する)
	scheduledAlertDate.value = newDate === 'default' ? format(addDays(new Date(), 3), 'yyyy-MM-dd') : newDate;

	return event;
};

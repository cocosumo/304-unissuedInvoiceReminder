import {setFieldShown} from '@api/kintone/kintoneAPI';

export const onDetailShowHandler = () => {
	// SetFieldShown('notificationSettings', false);
	setFieldShown('reminderDate', false);
};

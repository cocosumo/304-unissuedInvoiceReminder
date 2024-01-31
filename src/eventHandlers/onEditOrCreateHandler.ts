import {setFieldShown} from '@api/kintone/kintoneAPI';

export const onEditOrCreateHandler = () => {
	setFieldShown('notificationSettings', false);
	setFieldShown('scheduledAlertDate', false);
};

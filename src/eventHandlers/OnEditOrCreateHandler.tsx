import {setFieldShown} from '@api/kintone/kintoneAPI';

export const OnEditOrCreateHandler = () => {
	setFieldShown('notificationSettings', false);
	setFieldShown('scheduledAlertDate', false);
};

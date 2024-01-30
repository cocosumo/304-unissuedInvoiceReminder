import {onDetailShow, onEditOrCreate, onFieldChange} from '@api/kintone/events';
import {type KeyOfDB} from './types/types';
import {onDetailShowHandler} from './eventHandlers/onDetailShowHandler';
import {onEditOrCreateHandler} from './eventHandlers/onEditOrCreateHandler';
import {onChangeFieldHandler} from './eventHandlers/onChangeFieldHandler';

const watchFieldKeys: KeyOfDB[] = [
	'reminderDate',
	'expectedPaymentDate',
];

(() => {
	console.log(`Running in ${process.env.NODE_ENV}`);
	kintone.events.on(onDetailShow, onDetailShowHandler);
	kintone.events.on(onEditOrCreate, onEditOrCreateHandler);
	kintone.events.on(onFieldChange(watchFieldKeys), onChangeFieldHandler);
})();

import {onDetailShow, onEditOrCreate, onFieldChange} from '@api/kintone/events';
import {type KeyOfDB} from './types/types';
import {OnDetailShowHandler} from './eventHandlers/OnDetailShowHandler';
import {OnEditOrCreateHandler} from './eventHandlers/OnEditOrCreateHandler';
import {OnChangeFieldHandler} from './eventHandlers/OnChangeFieldHandler';

const watchFieldKeys: KeyOfDB[] = [
	'reminderDate',
	'expectedCreateInvoiceDate',
];

(() => {
	console.log(`Running in ${process.env.NODE_ENV}`);
	kintone.events.on(onDetailShow, OnDetailShowHandler);
	kintone.events.on(onEditOrCreate, OnEditOrCreateHandler);
	kintone.events.on(onFieldChange(watchFieldKeys), OnChangeFieldHandler);
})();

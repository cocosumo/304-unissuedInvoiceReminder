import {type IUnissuedInvoiceReminder, type KUnissuedInvoiceReminder} from '@/config';

export type KintoneEvent = {
	record: IUnissuedInvoiceReminder;
	appId: string;
	recordId: string;
	error: string;
};

export type KeyOfDB = KUnissuedInvoiceReminder;

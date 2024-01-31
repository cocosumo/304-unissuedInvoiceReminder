export const isProdForced = process.env.NODE_ENV_FORCED === 'production';
export const isProd = isProdForced || process.env.NODE_ENV === 'production';

/** Kintoneレコードタイプ、レコードキーの設定 */
export type IUnissuedInvoiceReminder = UnissuedInvReminder.SavedFields;
export type KUnissuedInvoiceReminder = keyof IUnissuedInvoiceReminder;

export type IContracts = Contracts.SavedFields;
export type KContracts = keyof IContracts;

export type IEmployees = Employees.SavedFields;
export type KEmployees = keyof IEmployees;

export type IProjects = Projects.SavedFields;
export type KProjects = keyof IProjects;

export type IProjTypes = ProjTypes.SavedFields;
export type KProjTypes = keyof IProjTypes;

export type IStores = Stores.SavedFields;
export type KStores = keyof IStores;

/**
 * Kintoneアプリで設定しているリマインダー選択肢
 * kintoneアプリで設定している選択肢をそのまま設定する
 */
export const invoiceReminderList = ['1日後', '1週間後', '1か月後', '3か月後', '請求書作成予定日'] as const;

export type KInvoiceReminderList = typeof invoiceReminderList[number];

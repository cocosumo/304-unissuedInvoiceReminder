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

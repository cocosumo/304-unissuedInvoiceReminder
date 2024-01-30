export const onDetailShow = [
	'app.record.detail.show',
	'mobile.app.record.detail.show',
];

export const onEditOrCreate = [
	'app.record.edit.show',
	'mobile.app.record.edit.show',
	'app.record.create.show',
	'mobile.app.record.create.show',
];

export const onFieldChange = (fields: string | string[]): string[] =>
	([] as string[]).concat(fields).reduce(
		(acc: string[], curr): string[] => acc.concat(
			`app.record.edit.change.${curr}`,
			`mobile.app.record.edit.change.${curr}`,
			`app.record.create.change.${curr}`,
			`mobile.app.record.create.change.${curr}`,
		), [],
	);

import {describe, it, expect} from '@jest/globals';
import {getEmployees} from './getEmployees';
import fs from 'fs';
import path from 'path';

describe('getEmployees', () => {
	it('should get cocosumo sales member', async () => {
		const result = await getEmployees({});
		console.log(result);
		expect(result.length).toBeGreaterThan(0);

		const dir = path.join(__dirname, '__TEST__');

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		// Save json file
		fs.writeFileSync(
			path.join(dir, 'getEmployeesSales.json'),
			JSON.stringify(result, null, 2),
		);
	});

	it('should get cocosumo accounting', async () => {
		const result = await getEmployees({isAccountingOnly: true});
		console.log(result);
		expect(result.length).toBeGreaterThan(0);

		const dir = path.join(__dirname, '__TEST__');

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		// Save json file
		fs.writeFileSync(
			path.join(dir, 'getEmployeesAccounting.json'),
			JSON.stringify(result, null, 2),
		);
	});
});

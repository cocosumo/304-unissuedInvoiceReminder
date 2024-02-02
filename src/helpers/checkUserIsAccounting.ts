import {getEmployees} from '@api/getEmployees';

export const checkUserIsAccounting = async () => {
	const userInfo = kintone.getLoginUser();
	const accountingRec = await getEmployees({
		isSalesPosOnly: false,
		isAccountingOnly: true,
	});

	return accountingRec.find(({
		$id,
		文字列＿氏名,
	}) => {
		const isVerifyId = $id.value === userInfo.employeeNumber;
		const userNameLogin = userInfo.name.replace(/\s+/, '');
		const userNameRec = 文字列＿氏名.value.replace(/\s+/, '');
		const isVerifyName = userNameLogin === userNameRec;

		return isVerifyId || isVerifyName;
	});
};

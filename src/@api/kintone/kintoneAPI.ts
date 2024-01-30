
export const isMobile = () => (window?.location.href || '').includes('k/m');

/**
* 要素を表示・非表示
* @param fieldCode {string} 要素のフィールドコード
* @param isShown {boolean} trueは表示、falseは非表示
*/
export const setFieldShown = (fieldCode: string, isShown: boolean) => {
	if (isMobile()) {
		kintone.mobile.app.record.setFieldShown(fieldCode, isShown);
	} else {
		kintone.app.record.setFieldShown(fieldCode, isShown);
	}
};

export const getSpaceElement = (spaceId: string) => (
	isMobile()
		? kintone.mobile.app.record.getSpaceElement(spaceId)
		: kintone.app.record.getSpaceElement(spaceId));

export const getHeaderSpaceElement = () => (
	isMobile()
		? kintone.mobile.app.getHeaderSpaceElement()
		: kintone.app.record.getHeaderMenuSpaceElement()
);

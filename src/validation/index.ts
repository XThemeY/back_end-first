import { OutputErrorsType, InputVideoType, Resolutions } from '../types';

export const inputValidation = (video: InputVideoType) => {
	const errors: OutputErrorsType = {
		// объект для сбора ошибок
		errorsMessages: [],
	};
	// ...
	if (
		!Array.isArray(video.availableResolution) ||
		video.availableResolution.find((p: string | number) => !Resolutions[p])
	) {
		errors.errorsMessages.push({
			message: 'error!!!!',
			field: 'availableResolution',
		});
	}
	return errors;
};

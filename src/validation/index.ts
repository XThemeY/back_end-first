import {
	CreateVideoType,
	InputVideoType,
	OutputErrorsType,
	UpdateVideoType,
} from '@types';

export enum Resolutions {
	P144 = 'P144',
	P240 = 'P240',
	P360 = 'P360',
	P480 = 'P480',
	P720 = 'P720',
	P1080 = 'P1080',
	P1440 = 'P1440',
	P2160 = 'P2160',
}

export const inputValidation = (video: InputVideoType): OutputErrorsType => {
	const errors: OutputErrorsType = {
		// объект для сбора ошибок
		errorsMessages: [],
	};

	//Проверка Title на длину и undefined
	video.title = video.title?.trim();
	if (video.title === undefined || video.title === '') {
		errors.errorsMessages?.push({
			message: 'Поле title не может быть пустым',
			field: 'title',
		});
	} else if (video.title.length > 40) {
		errors.errorsMessages?.push({
			message: 'Поле title должно быть не более 40 символов',
			field: 'title',
		});
	}

	//Проверка Author на длину и undefined
	video.author = video.author?.trim();
	if (video.author === undefined || video.author === '') {
		errors.errorsMessages?.push({
			message: 'Поле author не может быть пустым',
			field: 'author',
		});
	} else if (video.author.length > 20) {
		errors.errorsMessages?.push({
			message: 'Поле author должно быть не более 20 символов',
			field: 'author',
		});
	}

	//Проверка availableResolution
	if (!Array.isArray(video.availableResolutions)) {
		errors.errorsMessages?.push({
			message: 'Поле availableResolution должно быть массивом',
			field: 'availableResolution',
		});
	} else {
		for (const resolution of video.availableResolutions as Resolutions[]) {
			if (!Resolutions[resolution]) {
				errors.errorsMessages?.push({
					message: 'В поле availableResolution нет значения ' + resolution,
					field: 'availableResolution',
				});
			}
		}
	}

	//Проверка canBeDownloaded
	if (video.canBeDownloaded) {
		if (typeof video.canBeDownloaded !== 'boolean') {
			errors.errorsMessages?.push({
				message: 'canBeDownloaded should be a boolean',
				field: 'canBeDownloaded',
			});
		}
	}

	//Проверка minAgeRestriction
	if (video.minAgeRestriction) {
		if (typeof video.minAgeRestriction !== 'number') {
			errors.errorsMessages?.push({
				message: 'minAgeRestriction should be a number',
				field: 'minAgeRestriction',
			});
		} else if (video.minAgeRestriction < 0 || video.minAgeRestriction > 18) {
			errors.errorsMessages?.push({
				message: 'minAgeRestriction should be between 0 and 18',
				field: 'minAgeRestriction',
			});
		}
	}

	//Проверка publicationDate
	if (video.publicationDate) {
		const publicationDate = new Date(video.publicationDate);
		if (publicationDate.toString() === 'Invalid Date') {
			errors.errorsMessages?.push({
				message: 'publicationDate should be a proper Date string',
				field: 'publicationDate',
			});
		} else {
			const createdDate = new Date(video.createdAt as string);
			if (publicationDate.getTime() < createdDate.getTime()) {
				errors.errorsMessages?.push({
					message: 'publicationDate should be after createdAt',
					field: 'publicationDate',
				});
			}
		}
	}

	return errors;
};

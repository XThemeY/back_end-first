import { db, setDB } from '../db';
import { req } from './test-helpers';
import { SETTINGS } from '../config/constants';
import { dataset } from './datasets';
import { CreateVideoType, UpdateVideoType } from '../types';
import { inputValidation } from '../validation';

describe('Videos', () => {
	it('should create', async () => {
		setDB();
		const newVideo: CreateVideoType = {
			title: 'Test Title',
			author: 'Test',
			availableResolutions: ['P240', 'P1080', 'P1440'],
		};
		const res = await req
			.post(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS)
			.send(newVideo) // отправка данных
			.expect(201);

		const expectedProperties = [
			'id',
			'title',
			'author',
			'availableResolutions',
			'canBeDownloaded',
			'minAgeRestriction',
			'publicationDate',
			'createdAt',
		];
		expectedProperties.forEach((property) => {
			expect(res.body).toHaveProperty(property);
		});
	});

	it('should find', async () => {
		const id = db.videos[0].id;
		const res = await req
			.get(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
			.expect(200); // проверка на ошибку

		expect(res.body).toEqual(db.videos[0]);
		expect(res.body).toHaveProperty('title', 'Test Title');
		expect(res.body).toHaveProperty('author', 'Test');
		expect(res.body).toHaveProperty('availableResolutions', [
			'P240',
			'P1080',
			'P1440',
		]);
	});

	it('should update', async () => {
		const id = db.videos[0].id;

		const newVideo: UpdateVideoType = {
			title: 'Update TEST',
			author: 'Update Author',
			availableResolutions: ['P1440'],
			canBeDownloaded: true,
			minAgeRestriction: 18,
			publicationDate: '2024-06-19T20:57:39.150Z',
		};
		const res = await req
			.put(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
			.send(newVideo)
			.expect(204);

		expect(res.body).toEqual({}); // проверка на ошибку
	});

	it('should find', async () => {
		const id = db.videos[0].id;
		const res = await req
			.get(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
			.expect(200); // проверка на ошибку

		expect(res.body).toEqual(db.videos[0]);
		expect(res.body).toHaveProperty('title', 'Update TEST');
		expect(res.body).toHaveProperty('author', 'Update Author');
		expect(res.body).toHaveProperty('availableResolutions', ['P1440']);
		expect(res.body).toHaveProperty('canBeDownloaded', true);
		expect(res.body).toHaveProperty('minAgeRestriction', 18);
		expect(res.body).toHaveProperty(
			'publicationDate',
			'2024-06-19T20:57:39.150Z'
		);
	});

	it('should del by id', async () => {
		const id = db.videos[0].id;
		const res = await req
			.delete(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
			.expect(204); // проверка на ошибку

		expect(res.body).toEqual({});
	});
});

it('should create', async () => {
	setDB();
	const newVideo: CreateVideoType = {
		title: 'Test Title',
		author: 'Test',
		availableResolutions: ['P240', 'P1080', 'P1440'],
	};
	const res = await req
		.post(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS)
		.send(newVideo) // отправка данных
		.expect(201);

	const expectedProperties = [
		'id',
		'title',
		'author',
		'availableResolutions',
		'canBeDownloaded',
		'minAgeRestriction',
		'publicationDate',
		'createdAt',
	];
	expectedProperties.forEach((property) => {
		expect(res.body).toHaveProperty(property);
	});
});

it('should not create', async () => {
	setDB();
	const newVideo: CreateVideoType = {
		title: '',
		author: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdTest',
		availableResolutions: ['P1180'],
	};
	const res = await req
		.post(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS)
		.send(newVideo) // отправка данных
		.expect(400);

	expect(res.body).toEqual(inputValidation(newVideo));
});

it('should find', async () => {
	setDB(dataset);

	const id = dataset.videos[0].id;
	const res = await req
		.get(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.expect(200); // проверка на ошибку

	expect(res.body).toEqual(dataset.videos[0]);
});

it('should not find', async () => {
	setDB(dataset);
	const id = 1;
	const res = await req
		.get(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.expect(404); // проверка на ошибку
});

it('delete all', async () => {
	setDB(dataset);

	const res = await req
		.delete(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.TESTING + '/all-data')
		.expect(204); // проверка на ошибку

	expect(db.videos).toEqual([]);
});

it('should find all', async () => {
	setDB(dataset);

	const res = await req
		.get(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/')
		.expect(200); // проверка на ошибку

	expect(res.body).toEqual(dataset.videos);
});

it('should update', async () => {
	setDB(dataset);
	const id = dataset.videos[1].id;

	const newVideo: UpdateVideoType = {
		title: 'Update TEST',
		author: 'Update Author',
		availableResolutions: ['P1440'],
		canBeDownloaded: true,
		minAgeRestriction: 18,
		publicationDate: '2024-06-19T20:57:39.150Z',
	};
	const res = await req
		.put(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.send(newVideo)
		.expect(204);

	expect(res.body).toEqual({}); // проверка на ошибку
});

it('should not update', async () => {
	setDB(dataset);
	const id = dataset.videos[0].id;
	const newVideo: UpdateVideoType = {
		title: '',
		author: 'ASDSADSADASDASDSdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd',
		availableResolutions: ['P1111'],
		canBeDownloaded: false,
		minAgeRestriction: -1,
		publicationDate: '2024-06-17T20:57:39.150Z',
	};
	const res = await req
		.put(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.send(newVideo)
		.expect(400); // проверка на ошибку

	newVideo.createdAt = dataset.videos[0].createdAt;
	expect(res.body).toEqual(inputValidation(newVideo));
});

it('should not find', async () => {
	setDB(dataset);
	const id = 2;
	const res = await req
		.put(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.expect(404); // проверка на ошибку

	expect(res.body).toEqual({});
});

it('should del by id', async () => {
	setDB(dataset);
	const id = dataset.videos[0].id;
	const res = await req
		.delete(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.expect(204); // проверка на ошибку

	expect(res.body).toEqual({});
});

it('should not del by id', async () => {
	setDB(dataset);
	const id = 1;
	const res = await req
		.delete(SETTINGS.PATH.GLOBALURL + SETTINGS.PATH.VIDEOS + '/' + id)
		.expect(404); // проверка на ошибку

	expect(res.body).toEqual({});
});

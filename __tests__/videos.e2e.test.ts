// ...
// it('should create', async () => {
//     setDB()
//     const newVideo: any /*InputVideoType*/ = {
//         title: 't1',
//         author: 'a1',
//         availableResolution: ['P144' /*Resolutions.P144*/]
//         // ...
//     }
//
//     const res = await req
//         .post(SETTINGS.PATH.VIDEOS)
//         .send(newVideo) // отправка данных
//         .expect(201)
//
//     console.log(res.body)
//
//     expect(res.body.availableResolution).toEqual(newVideo.availableResolution)
// })

// it('shouldn\'t find', async () => {
//     setDB(dataset1)
//
//     const res = await req
//         .get(SETTINGS.PATH.VIDEOS + '/1')
//         .expect(404) // проверка на ошибку
//
//     console.log(res.body)
// })

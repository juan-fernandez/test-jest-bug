describe('bad test', () => {
    test('sync', () => {
        expect(1).toEqual(1)
    })
    afterAll(() => {
        setImmediate(() => {
            require('./cleanup.js')
        })
    })
})

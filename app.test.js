const db = require('./queries')

describe('products table', () => {
    
    describe('GET Requests', () => {
        

        test('GET all entries', async (done) => {
            let entries =  db.getProducts
            expect(entries).toHaveLength(1)
            done()
        })
        
    })

})
const sum = require('../operciones')

// it === test
it('Debe retornar la suma de 2 números', () => {
	expect(sum(3, 5)).toBe(8)
})

it('should return 15 if adding 7 and 8', () => {
	expect(sum(7, 8)).toBe(15)
})

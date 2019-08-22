const userApi = require('./user')

// userApi.createUser().then((create) => {
//     console.log('CREATED USER')
//     console.log(create)
// })

// userApi.findUsers().then((allUsers) => {
//     console.log('ALL USERS')
//     console.log(allUsers)
// })

// userApi.findUser('5d5ea71ac308737d79c6d3cb').then((foundUser) => {
//     console.log('FOUND USER')
//     console.log(foundUser)
// })

// userApi.editUser('5d5eaa790b028e7f2244096e', {name :'Lynd', email: 'lynd.parrish1@gmail.com'}).then((nameEdit) => {
//     console.log('Edited Name')
//     console.log(nameEdit)
// })

// userApi.deleteUser('5d5ea9a10753237ef15ae937').then((deleted) => {
//     console.log('DELETE ITEM')
//     console.log(deleted)
// })



const carApi = require('./car')

// carApi.createCar().then((created) => {
//     console.log('CREATED CAR')
//     console.log(created)
// })

// carApi.getCars().then((foundAllCars) => {
//     console.log('ALL CARS')
//     console.log(foundAllCars)
// })

// carApi.getCar('5d5eb942ef73488639fad332').then((foundCar) => {
//     console.log('FOUND CAR')
//     console.log(foundCar)
// })

// carApi.editCar('5d5eb942ef73488639fad332', {name: 'Lynd',year: 1999, make: 'Isuzu', model: 'Trooper' }).then((editedCar) => {
//     console.log('EDITED CARS')
//     console.log(editedCar)
// })

// carApi.addCar({name: 'Justin', year: 2003, make: 'Chevy', model: 'Monte Carlo'}).then((addedCar) => {
//     console.log('ADDED NEW CAR')
//     console.log(addedCar)
// })
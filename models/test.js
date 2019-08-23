const userApi = require('./user')

// userApi.createUser().then((create) => {
//     console.log('CREATED USER')
//     console.log(create)
// })

userApi.findUsers().then((allUsers) => {
    console.log('ALL USERS')
    console.log(allUsers)
})

// userApi.findUser('5d5ea71ac308737d79c6d3cb').then((foundUser) => {
//     console.log('FOUND USER')
//     console.log(foundUser)
// })

// userApi.editUser('5d5eaa790b028e7f2244096e', {name :'Lynd', email: 'lynd.parrish1@gmail.com'}).then((nameEdit) => {
//     console.log('Edited Name')
//     console.log(nameEdit)
// })

// userApi.deleteUser('5d5eda6b00e27992ccbe512a').then((deleted) => {
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

// // carApi.getCar('5d5eb942ef73488639fad332').then((foundCar) => {
// //     console.log('FOUND CAR')
// //     console.log(foundCar)
// // })

// // carApi.editCar('5d5eb942ef73488639fad332', {name: 'Lynd',year: 1999, make: 'Isuzu', model: 'Trooper' }).then((editedCar) => {
// //     console.log('EDITED CARS')
// //     console.log(editedCar)
// // })

// // carApi.addCar({name: 'Justin', year: 2003, make: 'Chevy', model: 'Monte Carlo'}).then((addedCar) => {
// //     console.log('ADDED NEW CAR')
// //     console.log(addedCar)
// // })

// carApi.deleteCar('5d5f1534d75e88a19ad729e8').then((deletedCar) => {
//     console.log('DELETED CAR')
//     console.log(deletedCar)
// })



const descriptionApi = require('./description')

// descriptionApi.createDescription().then((createdDescript) => {
//     console.log('CREATED DESCRIPTION')
//     console.log(createdDescript)
// })

// descriptionApi.getDescriptions().then((foundAll) => {
//     console.log('ALL DESCRIPTIONS')
//     console.log(foundAll)
// })

// descriptionApi.editDescription('5d5ed058d2bff28c90b4c305', {color: 'Black', mpg: 22, accident: true}).then((edited) => {
//     console.log('EDITED DESCRIPTION')
//     console.log(edited)
// })

// descriptionApi.addDescription({color: 'Tan', comfort: 'Very comfortable', seats: 5,
//  mpg: 26, childFriendly: true, accident: false, smoker: false}).then((addDescription) => {
//     console.log('ADDED DESCRIPTION')
//     console.log(addDescription)
// })

// descriptionApi.getDescription('5d5ed0a5d700028cd8ef68ae').then((foundDescription) => {
//     console.log('SINGLE DESCRIPTION')
//     console.log(foundDescription)
// })

// descriptionApi.deleteDescription('5d5ed236f403398e348f5b6f').then((deleted) => {
//     console.log('DELETED')
//     console.log(deleted)
// })
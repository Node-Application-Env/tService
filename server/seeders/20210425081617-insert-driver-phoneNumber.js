'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('phoneMasters',[
     { driverId: "7756174b-921c-4caa-9641-7b69ce1b9d75", phoneNumber: '+91 8866117741', isActive: true, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "7756174b-921c-4caa-9641-7b69ce1b9d75", phoneNumber: '+91 9924184381', isActive: false, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "9e219f03-1fb1-4855-b8d4-ea4efb23ad85", phoneNumber: '+91 7779097075', isActive: true, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "9e219f03-1fb1-4855-b8d4-ea4efb23ad85", phoneNumber: '+91 9924184381', isActive: false, createdAt: new Date(), updatedAt: new Date() },
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete('phoneMasters',[], {});
  }
};

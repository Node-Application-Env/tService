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
     { driverId: "3d0efff4-b7c0-49b6-a154-4a4b21d0fb76", phoneNumber: '+91 8866117741', isActive: true, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "3d0efff4-b7c0-49b6-a154-4a4b21d0fb76", phoneNumber: '+91 9924184381', isActive: false, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "79be7fef-13ab-46dc-95d4-faba967f3fbe", phoneNumber: '+91 7779097075', isActive: true, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "79be7fef-13ab-46dc-95d4-faba967f3fbe", phoneNumber: '+91 9924184381', isActive: false, createdAt: new Date(), updatedAt: new Date() },
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

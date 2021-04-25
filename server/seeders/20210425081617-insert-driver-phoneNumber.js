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
     { driverId: "184d808e-3ace-4063-92bc-84143d29ed9f", phoneNumber: '+91 8866117741', isActive: true, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "184d808e-3ace-4063-92bc-84143d29ed9f", phoneNumber: '+91 9924184381', isActive: false, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "cb7f6f70-20f6-49f9-a2f4-4032272456ab", phoneNumber: '+91 7779097075', isActive: true, createdAt: new Date(), updatedAt: new Date() },
     { driverId: "cb7f6f70-20f6-49f9-a2f4-4032272456ab", phoneNumber: '+91 9924184381', isActive: false, createdAt: new Date(), updatedAt: new Date() },
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

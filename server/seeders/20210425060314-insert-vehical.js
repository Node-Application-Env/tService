
export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  return await queryInterface.bulkInsert('vehicalMasters', [
    {
      name: 'Maruti Suzuki', fixKM: 300, fixCharge: 15, DA: 1000, seatCapacity: 5, fuelType: 1, isActive: true,
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      name: 'Maruti Suzuki ALTO 800', fixKM: 300, fixCharge: 15, DA: 1000, seatCapacity: 5, fuelType: 1, isActive: true,
      createdAt: new Date(), updatedAt: new Date()
    }
  ], {});
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  return await queryInterface.bulkDelete('vehicalMasters', [], {});
}

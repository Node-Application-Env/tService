
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
    { name: 'Maruti 800',  vehicalNumber: 'GJ01-XX-1234', fixKM: 300, fixCharge: 500 , DA: 600, seatCapacity: 4, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Maruti Alto 800', vehicalNumber: 'GJ02-XX-4822', fixKM: 300, fixCharge: 500 , DA: 600, seatCapacity: 4, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mahindra KUV 100', vehicalNumber: 'MH04-AA-1254', fixKM: 300, fixCharge: 500 , DA: 700, seatCapacity: 5, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mahindra KUV 300', vehicalNumber: 'MH01-XX-0215', fixKM: 300, fixCharge: 500 , DA: 800, seatCapacity: 5, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
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

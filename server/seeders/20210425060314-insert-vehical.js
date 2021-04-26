
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
    { name: 'Maruti 800', vehicalNumber: 'GJ 01 PD 1251', fixKM: 300, fixCharge: 500 , DA: 600, seatCapacity: 4, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Maruti Alto 800', vehicalNumber: 'GJ 02 XX 0025', fixKM: 300, fixCharge: 500 , DA: 600, seatCapacity: 4, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mahindra KUV 100', vehicalNumber: 'MH 05 DD 2510', fixKM: 300, fixCharge: 500 , DA: 700, seatCapacity: 5, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mahindra KUV 300', vehicalNumber: 'JH 06 XX 7512', fixKM: 300, fixCharge: 500 , DA: 800, seatCapacity: 5, fuelType: 1, isActive: true, createdAt: new Date(), updatedAt: new Date() },
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

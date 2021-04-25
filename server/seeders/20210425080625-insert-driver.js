
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
  return await queryInterface.bulkInsert('driverMasters', [
    { name: 'ABC', licenceNo: 'ABC0000111', birthDate: new Date(), isActive: true, createdAt: new Date(), updatedAt: new Date() },
    { name: 'DEF', licenceNo: 'DEF0000111', birthDate: new Date(), isActive: true, createdAt: new Date(), updatedAt: new Date() }
  ], {});
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  return await queryInterface.bulkDelete('driverMasters', [], {});
}

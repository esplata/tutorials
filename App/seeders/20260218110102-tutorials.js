"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "tutorials",
      [
        {
          title: "Usare Express",
          description: "Tutorial per creare un server express",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Usare Javascript",
          description: "Tutorial apprendere Javascript",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Usare React",
          description: "Tutorial apprendere React",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tutorials", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

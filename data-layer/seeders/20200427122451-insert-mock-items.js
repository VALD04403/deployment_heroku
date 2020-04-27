'use strict';

const items = [
  {
    id: 'WALLET-1234',
    name: 'Wallet',
  },
  {
    id: 'GUN-5678',
    name: 'Gun',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map((item) => item.id) },
      },
      {}
    );
  },
};

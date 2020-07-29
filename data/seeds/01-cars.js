
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '5N1AN0NW7FN655248', make: 'Crysler', model: 'Town and Country', transmissionType: 'automatic',  title: 'clean', color: 'red', mileage: 259000}
      ]);
    });
};

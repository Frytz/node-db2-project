// The client for this API is a car dealer who has provided the following specs:

// - The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title(clean, salvage, etc.), but this information is not always immediately known.



exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('vin', 128).unique().notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model',20).notNullable();
        tbl.string('transmissionType',10);
        tbl.string('title', 10).notNullable();
        tbl.string('color', 20).notNullable();
        tbl.bigint('mileage', 9).notNullable();

    })
};

exports.down = function(knex) {
  return knex.schema.droptableIfExists('cars')
};

import faker from 'faker';
faker.locale = 'en_US';

export function createFakeUser() {
  const createdAt = faker.date.past(2);
  const updatedAt = faker.date.between(createdAt, new Date());

  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    middlename: faker.name.firstName(),
    nickname: Math.random() > 0.7 ? faker.name.firstName() : null,
    streetAddress: faker.address.streetAddress(),
    zip: faker.address.zipCode(),
    phone: faker.phone.phoneNumberFormat(3),
    email: faker.internet.email(),
    birthday: faker.date.past(50),
    createdAt,
    updatedAt,
    deletedAt: null,
  };
}

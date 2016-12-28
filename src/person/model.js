import mongoose from 'mongoose';
import faker from 'faker';
faker.locale = 'en_US';

export function createFakePerson() {
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
    deletedAt: null,
    createdAt,
    updatedAt,
  };
}

const PersonSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  nickname: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  zip: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('person', PersonSchema);

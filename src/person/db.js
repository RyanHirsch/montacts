import Person from './model';

export function getAll() {
  return Person.find({ deletedAt: null })
    .select('-deletedAt')
    .exec();
}

export function getById(id) {
  return Person.where({ _id: id, deletedAt: null })
    .findOne()
    .select('-deletedAt')
    .exec();
}

export function create(person) {
  return Person.create(person);
}

export function update(person, updated) {
  return person.update(updated)
    .then(() => {
      return getById(person._id);
    });
}

export function tombstone(person) {
  person.deletedAt = new Date();
  return person.save();
}
//Model.findByIdAndRemove
/*
function addPerson(person) {
  const newPerson = {
    ...person,
    id: ++newId, // eslint-disable-line no-plusplus
  };
  people[newPerson.id] = newPerson;
  return newPerson;
}

function updatePerson(existingPerson, updatedPerson) {
  const person = {
    ...updatedPerson,
    id: existingPerson.id,
  };
  people[person.id] = person;
  return person;
}

function deletePerson(id) {
  const person = getPerson(id);
  delete people[id];
  return person;
}
*/

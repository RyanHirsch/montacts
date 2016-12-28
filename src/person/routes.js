import { Router as createRouter } from 'express';
const router = createRouter();

router.param('id', function(req, res, next, id) { // eslint-disable-line max-params
  req.appData = req.appData || {};

  req.appData.person = getPerson(id);
  next();
});

router.get('/', (req, res) => {
  res.json({ data: getAllPeople() });
});

router.post('/', (req, res) => {
  res.json({ data: addPerson(req.body) });
});

router.get('/:id', (req, res) => {
  res.json({ data: req.appData.person });
});

router.put('/:id', (req, res) => {
  res.json({ data: updatePerson(req.appData.person, req.body) });
});

router.delete('/:id', (req, res) => {
  deletePerson(req.params.id);
  res.json({ data: req.appData.person });
});

const people = {};
let newId = 0;

function getAllPeople() {
  return Object.keys(people).reduce((all, id) => [ ...all, people[id] ], []);
}

function getPerson(id) {
  return people[id];
}

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

export default router;

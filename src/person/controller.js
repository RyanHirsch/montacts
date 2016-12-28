import bluebird from 'bluebird';
import logger from '../utils/logger';
import { create, getAll, getById, update, tombstone } from './db';
import serialize from '../utils/mongo-serializer';

export function paramsId(req, res, next, id) { // eslint-disable-line max-params
  return getById(id)
    .then(person => {
      console.log(person);
      console.log(person.deletedAt);
      console.log(Boolean(person.deletedAt));
      if(!person || Boolean(person.deletedAt)) {
        return res.status(404).status('Not Found');
      }
      req.appData = req.appData || {};
      req.appData.person = person;
      next();
    })
    .catch(err => {
      logger.warn(err);
      res.status(404).send('Not Found');
    });
}

export function getPeople(req, res) {
  return getAll()
    .then(serialize)
    .then(data => res.json({ data }));
}

export function getPerson(req, res) {
  return bluebird.resolve(req.appData.person)
    .then(serialize)
    .then(data => res.json({ data }));
}

export function postPeople(req, res) {
  return create(req.body)
    .then(serialize)
    .then(data => {
      res.json({ data });
    });
}

export function putPerson(req, res) {
  if(!req.body) {
    res.status(400).send('Bad Request');
    return;
  }

  const newPerson = Object.keys(req.body)
    .filter(prop => !(['__v', '_id', 'id', 'createdAt', 'deletedAt', 'updatedAt'].includes(prop)))
    .reduce((obj, prop) => {
      obj[prop] = req.body[prop];
      return obj;
    }, {});
  const needsUpdate = Object.keys(newPerson)
    .reduce((update, prop) =>
      update || newPerson[prop] !== req.appData.person[prop]
    , false);

  if(needsUpdate) {
    return update(req.appData.person, newPerson)
      .then(serialize)
      .then(data => {
        res.json( { data });
      });
  }

  return bluebird.resolve(req.appData.person)
    .then(serialize)
    .then(data => res.json({ data }));
}

export function deletePerson(req, res) {
  return tombstone(req.appData.person)
    .then(serialize)
    .then(data => {
      res.json( { data });
    });
}

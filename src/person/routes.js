import { Router as createRouter } from 'express';
import { getPeople, getPerson, paramsId, postPeople, putPerson, deletePerson } from './controller';
const router = createRouter();

router.param('id', paramsId);

router.get('/', getPeople);
router.post('/', postPeople);
router.get('/:id', getPerson);
router.put('/:id', putPerson);
router.delete('/:id', deletePerson);

export default router;

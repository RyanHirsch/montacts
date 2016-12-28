function serialize(obj) {
  const newObj = {
    ...obj.toObject(),
    id: obj._id,
  };
  delete newObj._id;
  delete newObj.__v;
  delete newObj.deletedAt;
  return newObj;
}

export default function mongoSerializer(obj) {
  if(Array.isArray(obj)) {
    return obj.map(serialize);
  }
  return serialize(obj);
}

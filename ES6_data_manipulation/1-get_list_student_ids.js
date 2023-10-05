export default function getListStudentIds(element) {
  if (element instanceof Array) {
    const ids = element.map(getIds);
    function getIds(obj) {
      return obj.id;
    };
    return ids;
  }
  return [];
}

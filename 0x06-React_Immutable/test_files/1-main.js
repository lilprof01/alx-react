import getImmutableObject from './1-map';

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

console.log(getImmutableObject(obj));

// Map {
//   size: 4,
//   _root: ArrayMapNode {
//   ownerID: OwnerID {},
//   entries: [ [Array], [Array], [Array], [Array] ]
//   },
//   __ownerID: undefined,
//   __hash: undefined,
//   __altered: false
// }

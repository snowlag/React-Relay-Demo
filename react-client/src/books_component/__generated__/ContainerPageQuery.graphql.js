/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContainerPageQueryVariables = {||};
export type ContainerPageQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +Name: ?string,
    +Genre: ?string,
    +author: ?{|
      +id: ?string
    |},
  |}>
|};
export type ContainerPageQuery = {|
  variables: ContainerPageQueryVariables,
  response: ContainerPageQueryResponse,
|};
*/


/*
query ContainerPageQuery {
  books(first: 8) {
    Name
    Genre
    author {
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 8
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "Name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "Genre",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Author",
  "kind": "LinkedField",
  "name": "author",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContainerPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": "books(first:8)"
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContainerPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "books(first:8)"
      }
    ]
  },
  "params": {
    "cacheID": "ab06b72f76de53855f6c0ac434fd2c32",
    "id": null,
    "metadata": {},
    "name": "ContainerPageQuery",
    "operationKind": "query",
    "text": "query ContainerPageQuery {\n  books(first: 8) {\n    Name\n    Genre\n    author {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eaebcf46dcfcfb23f9f67ec8469953ae';

module.exports = node;

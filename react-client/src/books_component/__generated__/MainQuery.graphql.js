/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainQueryVariables = {||};
export type MainQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +Name: ?string,
    +Genre: ?string,
    +author: ?{|
      +id: ?string
    |},
  |}>
|};
export type MainQuery = {|
  variables: MainQueryVariables,
  response: MainQueryResponse,
|};
*/


/*
query MainQuery {
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
    "name": "MainQuery",
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
    "name": "MainQuery",
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
    "cacheID": "51f695f362587ff83bb5ed1dac8e8e32",
    "id": null,
    "metadata": {},
    "name": "MainQuery",
    "operationKind": "query",
    "text": "query MainQuery {\n  books(first: 8) {\n    Name\n    Genre\n    author {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bdbcea943fe3add8c6114ee39a93fe92';

module.exports = node;

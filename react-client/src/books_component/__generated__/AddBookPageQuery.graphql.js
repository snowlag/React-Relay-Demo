/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBookPageQueryVariables = {||};
export type AddBookPageQueryResponse = {|
  +authors: ?$ReadOnlyArray<?{|
    +Name: ?string,
    +id: ?string,
  |}>
|};
export type AddBookPageQuery = {|
  variables: AddBookPageQueryVariables,
  response: AddBookPageQueryResponse,
|};
*/


/*
query AddBookPageQuery {
  authors(first: 10) {
    Name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 10
      }
    ],
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "authors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "Name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": "authors(first:10)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddBookPageQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AddBookPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "47d9f1b84541945694fc27d910f363fb",
    "id": null,
    "metadata": {},
    "name": "AddBookPageQuery",
    "operationKind": "query",
    "text": "query AddBookPageQuery {\n  authors(first: 10) {\n    Name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af419c74a8193e72f60e3bb4c7ba8927';

module.exports = node;

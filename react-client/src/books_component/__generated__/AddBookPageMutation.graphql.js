/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBookPageMutationVariables = {|
  name: string,
  genre?: ?string,
  id?: ?string,
  authorid?: ?string,
|};
export type AddBookPageMutationResponse = {|
  +addBook: ?{|
    +Name: ?string,
    +Genre: ?string,
    +id: ?string,
    +author: ?{|
      +id: ?string
    |},
  |}
|};
export type AddBookPageMutation = {|
  variables: AddBookPageMutationVariables,
  response: AddBookPageMutationResponse,
|};
*/


/*
mutation AddBookPageMutation(
  $name: String!
  $genre: String
  $id: ID
  $authorid: ID
) {
  addBook(name: $name, genre: $genre, id: $id, authorid: $authorid) {
    Name
    Genre
    id
    author {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "authorid"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "genre"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "authorid",
        "variableName": "authorid"
      },
      {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "addBook",
    "plural": false,
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
        "name": "Genre",
        "storageKey": null
      },
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "author",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddBookPageMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddBookPageMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "a70a71dd56afb927ac9ebd7a47cb658f",
    "id": null,
    "metadata": {},
    "name": "AddBookPageMutation",
    "operationKind": "mutation",
    "text": "mutation AddBookPageMutation(\n  $name: String!\n  $genre: String\n  $id: ID\n  $authorid: ID\n) {\n  addBook(name: $name, genre: $genre, id: $id, authorid: $authorid) {\n    Name\n    Genre\n    id\n    author {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d021bcacaa5e608244e038e6fd39b05';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditBookPageMutationVariables = {|
  name: string,
  genre?: ?string,
  id?: ?string,
|};
export type EditBookPageMutationResponse = {|
  +editBook: ?{|
    +Name: ?string,
    +Genre: ?string,
    +id: ?string,
  |}
|};
export type EditBookPageMutation = {|
  variables: EditBookPageMutationVariables,
  response: EditBookPageMutationResponse,
|};
*/


/*
mutation EditBookPageMutation(
  $name: String!
  $genre: String
  $id: ID
) {
  editBook(name: $name, genre: $genre, id: $id) {
    Name
    Genre
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "genre"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = [
  {
    "alias": null,
    "args": [
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
    "name": "editBook",
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditBookPageMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditBookPageMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "1232ae7b4d078f9ed889bd1240405c5d",
    "id": null,
    "metadata": {},
    "name": "EditBookPageMutation",
    "operationKind": "mutation",
    "text": "mutation EditBookPageMutation(\n  $name: String!\n  $genre: String\n  $id: ID\n) {\n  editBook(name: $name, genre: $genre, id: $id) {\n    Name\n    Genre\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4fd6bb713835e8e531e0fc6fc98fdc60';

module.exports = node;

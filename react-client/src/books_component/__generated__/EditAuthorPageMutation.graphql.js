/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditAuthorPageMutationVariables = {|
  name: string,
  age?: ?number,
  id?: ?string,
|};
export type EditAuthorPageMutationResponse = {|
  +editAuthor: ?{|
    +Name: ?string,
    +Age: ?string,
    +id: ?string,
  |}
|};
export type EditAuthorPageMutation = {|
  variables: EditAuthorPageMutationVariables,
  response: EditAuthorPageMutationResponse,
|};
*/


/*
mutation EditAuthorPageMutation(
  $name: String!
  $age: Int
  $id: ID
) {
  editAuthor(name: $name, age: $age, id: $id) {
    Name
    Age
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "age"
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
        "name": "age",
        "variableName": "age"
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
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "editAuthor",
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
        "name": "Age",
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
    "name": "EditAuthorPageMutation",
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
    "name": "EditAuthorPageMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "038d84af1164096bd234c62df6dac710",
    "id": null,
    "metadata": {},
    "name": "EditAuthorPageMutation",
    "operationKind": "mutation",
    "text": "mutation EditAuthorPageMutation(\n  $name: String!\n  $age: Int\n  $id: ID\n) {\n  editAuthor(name: $name, age: $age, id: $id) {\n    Name\n    Age\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c45c321fdc4a4528284e782591715335';

module.exports = node;

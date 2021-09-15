/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddAuthorPageMutationVariables = {|
  name: string,
  age?: ?number,
  id?: ?string,
|};
export type AddAuthorPageMutationResponse = {|
  +addAuthor: ?{|
    +Name: ?string,
    +Age: ?string,
    +id: ?string,
  |}
|};
export type AddAuthorPageMutation = {|
  variables: AddAuthorPageMutationVariables,
  response: AddAuthorPageMutationResponse,
|};
*/


/*
mutation AddAuthorPageMutation(
  $name: String!
  $age: Int
  $id: ID
) {
  addAuthor(name: $name, age: $age, id: $id) {
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
    "name": "addAuthor",
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
    "name": "AddAuthorPageMutation",
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
    "name": "AddAuthorPageMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "c237099cff436b5019f680f9686af691",
    "id": null,
    "metadata": {},
    "name": "AddAuthorPageMutation",
    "operationKind": "mutation",
    "text": "mutation AddAuthorPageMutation(\n  $name: String!\n  $age: Int\n  $id: ID\n) {\n  addAuthor(name: $name, age: $age, id: $id) {\n    Name\n    Age\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '387f84881ecda59dd19cb81bf6f0dace';

module.exports = node;

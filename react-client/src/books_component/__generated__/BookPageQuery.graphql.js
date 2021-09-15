/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookPageQueryVariables = {|
  id?: ?string
|};
export type BookPageQueryResponse = {|
  +author: ?{|
    +Name: ?string,
    +id: ?string,
  |}
|};
export type BookPageQuery = {|
  variables: BookPageQueryVariables,
  response: BookPageQueryResponse,
|};
*/


/*
query BookPageQuery(
  $id: ID
) {
  author(id: $id) {
    Name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "author",
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
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookPageQuery",
    "selections": (v1/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5e20965e84b931d2c02ac4976963d3da",
    "id": null,
    "metadata": {},
    "name": "BookPageQuery",
    "operationKind": "query",
    "text": "query BookPageQuery(\n  $id: ID\n) {\n  author(id: $id) {\n    Name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0bda96ad3a237fa74df373d2a2e1c2df';

module.exports = node;

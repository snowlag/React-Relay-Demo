/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AuthorData_author$ref = any;
export type BookPageQueryVariables = {|
  id?: ?string
|};
export type BookPageQueryResponse = {|
  +author: ?{|
    +$fragmentRefs: AuthorData_author$ref
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
    ...AuthorData_author
    id
  }
}

fragment AuthorData_author on Author {
  Name
  Age
  id
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "author",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuthorData_author"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "ae7426e94f5cc7ba306e5739dfe52284",
    "id": null,
    "metadata": {},
    "name": "BookPageQuery",
    "operationKind": "query",
    "text": "query BookPageQuery(\n  $id: ID\n) {\n  author(id: $id) {\n    ...AuthorData_author\n    id\n  }\n}\n\nfragment AuthorData_author on Author {\n  Name\n  Age\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '634a5e3a2e0fea83a5a737d15b1aad6b';

module.exports = node;

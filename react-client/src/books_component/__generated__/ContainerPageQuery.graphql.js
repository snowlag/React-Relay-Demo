/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SamplePage_book$ref = any;
export type ContainerPageQueryVariables = {||};
export type ContainerPageQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +Name: ?string,
    +Genre: ?string,
    +author: ?{|
      +id: ?string
    |},
    +$fragmentRefs: SamplePage_book$ref,
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
    ...SamplePage_book
    id
  }
}

fragment SamplePage_book on Book {
  Genre
  author {
    id
    Name
    Age
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
          {
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SamplePage_book"
          }
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Author",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "Age",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "books(first:8)"
      }
    ]
  },
  "params": {
    "cacheID": "bd876dc4785262d39e3a2e79a3d181ff",
    "id": null,
    "metadata": {},
    "name": "ContainerPageQuery",
    "operationKind": "query",
    "text": "query ContainerPageQuery {\n  books(first: 8) {\n    Name\n    Genre\n    author {\n      id\n    }\n    ...SamplePage_book\n    id\n  }\n}\n\nfragment SamplePage_book on Book {\n  Genre\n  author {\n    id\n    Name\n    Age\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9aa8f19a8a8d3c3bc41bbc11e2ec2afc';

module.exports = node;

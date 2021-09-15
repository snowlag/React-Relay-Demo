/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SamplePage_book$ref: FragmentReference;
declare export opaque type SamplePage_book$fragmentType: SamplePage_book$ref;
export type SamplePage_book = {|
  +Genre: ?string,
  +author: ?{|
    +id: ?string,
    +Name: ?string,
    +Age: ?string,
  |},
  +$refType: SamplePage_book$ref,
|};
export type SamplePage_book$data = SamplePage_book;
export type SamplePage_book$key = {
  +$data?: SamplePage_book$data,
  +$fragmentRefs: SamplePage_book$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SamplePage_book",
  "selections": [
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
      "concreteType": "Author",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'a96aa5c81efcc928331fa6b1aa0a9a11';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorData_author$ref: FragmentReference;
declare export opaque type AuthorData_author$fragmentType: AuthorData_author$ref;
export type AuthorData_author = {|
  +Name: ?string,
  +Age: ?string,
  +id: ?string,
  +$refType: AuthorData_author$ref,
|};
export type AuthorData_author$data = AuthorData_author;
export type AuthorData_author$key = {
  +$data?: AuthorData_author$data,
  +$fragmentRefs: AuthorData_author$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthorData_author",
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
  "type": "Author",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6dcf4e97fa08a1e4a22efa1ed443f686';

module.exports = node;

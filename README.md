# remark-inserted

This plugin parses custom Markdown syntax to handle text insertions like `++cats are awesome++`. It adds a new node type to the [mdast][mdast] produced by [remark][remark]: `Mark`

If you are using [rehype][rehype], the stringified HTML result will be `<mark>`.

## Syntax

```markdown
It's cool how ++cats++ are super awesome.
```

## AST (see [mdast][mdast] specification)

`Mark` ([`Parent`][parent]) represents a reference to a user.

```javascript
interface Mark <: Parent {
  type: "Mark";
}
```

For example, the following markdown:

`++cats++`

Yields:

```javascript
{
  type: 'mark',
  children: [{
    type: 'text',
    value: 'cats'
  }]
}
```

## Rehype

This plugin is compatible with [rehype][rehype]. `Mark` mdast nodes will become `<mark>contents</mark>`.

## Installation

[npm][npm]:

```bash
npm install remark-inserted
```

## Usage

Dependencies:

```javascript
const unified = require("unified");
const remarkParse = require("remark-parse");
const stringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");

const remarkInserted = require("remark-inserted");
```

Usage:

```javascript
unified()
  .use(remarkParse)
  .use(remarkInserted)
  .use(remark2rehype)
  .use(stringify);
```

## License

[MIT][license] © John McDowall

[license]: https://github.com/johnmcdowall/remark-inserted/blob/master/remark-inserted/LICENSE.md
[npm]: https://www.npmjs.com/package/remark-inserted
[mdast]: https://github.com/syntax-tree/mdast/blob/master/readme.md
[remark]: https://github.com/remarkjs/remark
[rehype]: https://github.com/rehypejs/rehype
[parent]: https://github.com/syntax-tree/unist#parent

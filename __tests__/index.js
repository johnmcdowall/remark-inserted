const dedent = require("dedent");
const unified = require("unified");
const reParse = require("remark-parse");
const remarkStringify = require("remark-stringify");
const rehypeStringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");

const plugin = require("../src/");

const render = text =>
  unified()
    .use(reParse)
    .use(plugin)
    .use(remark2rehype)
    .use(rehypeStringify)
    .processSync(text);

const markdown = dedent`
 ++cats are awesome++
`;

describe("parses inserted markdown", () => {
  it("generates the correct mark HTML elements", () => {
    const { contents } = render(markdown);
    expect(contents).toMatchSnapshot();
  });
});

test("to markdown", () => {
  const { contents } = unified()
    .use(reParse)
    .use(remarkStringify)
    .use(plugin)
    .processSync(markdown);

  expect(contents).toMatchSnapshot();
});

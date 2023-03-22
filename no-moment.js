module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of the moment library",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      // Look for import statements like `import moment from "moment";`
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node,
            message: "Do not use the moment library.",
          });
        }
      },
      // Look for require statements like `const moment = require("moment");`
      CallExpression(node) {
        if (
          node.callee.type === "Identifier" &&
          node.callee.name === "require"
        ) {
          const arg = node.arguments[0];
          if (arg && arg.type === "Literal" && arg.value === "moment") {
            context.report({
              node,
              message: "Do not use the moment library.",
            });
          }
        }
      },
    };
  },
};

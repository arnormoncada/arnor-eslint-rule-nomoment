import { describe, test } from "vitest";
import noMoment from "./no-moment";
import { RuleTester } from "eslint";


describe("Rule test", () => {

test("no-moment", () => {
  //can not test for import statements as import and const are reserved keywords
  const ruleTester = new RuleTester();
  ruleTester.run("no-moment", noMoment, {
    valid: [
      'var moment = "not the moment library";',
      'var momentJs = require("not-moment");',
    ],
    invalid: [
      // { code: "import moment from 'moment'", errors: [{ message: "Unexpected moment() import found." }] },
      {
        code: "var momentJs = require('moment')",
        errors: [{ message: "Do not use the moment library." }],
      },
    ],
  });
});

});
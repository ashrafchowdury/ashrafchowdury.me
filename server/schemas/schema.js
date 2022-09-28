// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import category from "./category";
import language from "./language";
import blog from "./blog";
import author from "./author";
import blockContent from "./blockContent";
import experiance from "./experiance";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "Portfolio",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    project,
    category,
    language,
    blog,
    author,
    blockContent,
    experiance,
  ]),
});

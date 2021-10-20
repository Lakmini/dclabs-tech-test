import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import { schema } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import items from "./rest/product-service";

const app = express();

app.use(cors());
app.use("/rest", express.static("data"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.get("/rest/category", (req, res) => {
  const category = req.query.category;
  const products = items.productsForCategory(category);
  return res.send(products);
});

app.listen(4000);

console.log(
  "Running a GraphQL API server at http://localhost:4000/graphql and a REST API at http://localhost:4000/rest"
);

import { check, fail, group } from "k6";
import http from "k6/http";

const getCountries = open("./performance_test_countries.graphql");

const urlToTest = "http://localhost:4000/graphql";

const headers = {
  "Content-Type": "application/json",
};

const call = (url, query, variables) => {
  const res = http.post(url, JSON.stringify({ query, variables }), {
    headers,
  });

  check(res, {
    "HTTP status 200": (res) => res.status === 200,
  });

  return JSON.parse(res.body ? res.body.toString() : "");
};

const notRateLimitError = (r) => {
  return !(
    r.errors &&
    r.errors[0].extensions &&
    r.errors[0].extensions.code === "RATE_LIMITED"
  );
};

const notAuthenticationError = (r) => {
  return !(
    r.errors &&
    r.errors[0].extensions &&
    r.errors[0].extensions.code === "UNAUTHENTICATED"
  );
};

const notInternalServerError = (r) => {
  return !(
    r.errors &&
    r.errors[0].extensions &&
    r.errors[0].extensions.code === "INTERNAL_SERVER_ERROR"
  );
};

const errorCheck = (r, checkName) => {
  const checks = {};
  /* eslint-disable @typescript-eslint/restrict-template-expressions */
  checks[`${checkName}: Authentication passed`] = notAuthenticationError;
  checks[`${checkName}: no rate limit errors`] = notRateLimitError;
  checks[`${checkName}: no graphql errors`] = (r) => {
    return !(r.errors && r.errors.length);
  };
  checks[`${checkName}: no internal server errors`] = notInternalServerError;
  /* eslint-enable @typescript-eslint/restrict-template-expressions */
  check(r, checks);
};

export default function () {
  group("Queries", () => {
    // const responseJson = call(urlToTest, query, { businessId });
    // errorCheck(responseJson, 'Queries');

    const countriesResponse = call(urlToTest, getCountries, {});
    errorCheck(countriesResponse, "Queries");
  });

  // group('Mutations', () => {
  //   // Get the ID of the first product.
  //   const productResponseJson = call(urlToTest, getFirstProduct, {
  //     businessId,
  //   });

  //   errorCheck(productResponseJson, 'Product get');

  //   let productId;
  //   try {
  //     productId = productResponseJson.data.business.products.edges[0].node.id;
  //   } catch (e) {
  //     check(null, { 'Product can be fetched': () => false });
  //   }

  //   const responseJson = call(urlToTest, productPatchMutation, {
  //     input: {
  //       id: productId,
  //       name: 'test',
  //     },
  //   });

  //   errorCheck(responseJson, 'Product update');
  // });
}

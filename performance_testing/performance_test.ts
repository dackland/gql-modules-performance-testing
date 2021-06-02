import { check } from "k6";
import http from "k6/http";

const getCountries = open("./performance_test_countries.graphql");

const headers = {
  "Content-Type": "application/json",
};

const call = (url, query) => {
  const res = http.post(url, JSON.stringify({ query }), {
    headers,
  });

  check(res, {
    "HTTP status 200": (res) => res.status === 200,
  });
};

export default function () {
  call("http://localhost:4000/graphql", getCountries);
}

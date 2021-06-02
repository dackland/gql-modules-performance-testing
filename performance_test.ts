import { check } from "k6";
import http from "k6/http";

const query = `
    {
        movies{
            title
            year
            cast
            genres
        }
    }
`;

export default function () {
  const res = http.post(
    "http://localhost:4000/graphql",
    JSON.stringify({ query }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  check(res, {
    "HTTP status 200": (res) => res.status === 200,
  });
}

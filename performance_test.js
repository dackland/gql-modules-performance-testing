import http from "k6/http";

export default () => {
  http.post(
    "http://localhost:4000/graphql",
    JSON.stringify({
      query: `
          {
              movies {
                  title
                  year
                  cast
                  genres
              }
          }
      `,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

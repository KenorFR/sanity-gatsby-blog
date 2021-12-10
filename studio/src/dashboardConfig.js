export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61b37d0ac2eeb362c614ab70",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-foo2jras",
                  apiId: "c1432646-5acf-4df9-a9f4-5cea45b55625",
                },
                {
                  buildHookId: "61b37d0a63cfc07734c79f21",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-f4dk8bx5",
                  apiId: "f984e024-df47-480a-b8ae-05b5b0f41b3c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/KenorFR/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-f4dk8bx5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

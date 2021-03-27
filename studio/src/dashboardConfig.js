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
                    "605ef3e15036623366438609",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-h3stmgre",
                  apiId: "58ab1b58-d613-4f03-9442-16cbb40ffa2e",
                },
                {
                  buildHookId: "605ef3e2bca4b8402fd8b88c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-p289obqg",
                  apiId: "002014f2-8183-4f9e-8283-5a1d0b692e64",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/anuptamang/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-p289obqg.netlify.app",
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

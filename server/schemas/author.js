export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "current_stack",
      title: "Current_stack",
      type: "array",
      of: [{ type: "reference", to: { type: "project_category" } }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "main_description",
      title: "Main_description",
      type: "string",
    },
    {
      name: "github_link",
      title: "Github_link",
      type: "url",
    },
    {
      name: "resume",
      title: "Resume",
      type: "url",
    },
  ],
};

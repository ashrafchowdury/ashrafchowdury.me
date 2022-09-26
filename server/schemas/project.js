export default {
  name: "project",
  title: "Project",
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
      name: "project_id",
      title: "Project Id",
      type: "number",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "project_category" } }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description_1",
      title: "Description_1",
      type: "string",
    },
    {
      name: "description_2",
      title: "Description_2",
      type: "string",
    },

    {
      name: "github_link",
      title: "Github_link",
      type: "url",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "direction",
      title: "Direction",
      type: "string",
    },
  ],
  orderings: [
    {
      name: "project_id",
      title: "Project Id",
      by: [{ field: "name", direction: "desc" }],
    },
  ],
};

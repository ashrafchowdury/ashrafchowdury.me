export default {
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "filed",
      title: "Filed",
      type: "string",
    },
    {
      name: "id",
      title: "Id",
      type: "number",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

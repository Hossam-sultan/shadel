const Machine = {
  name: "Machine",
  title: "Machine",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      title: "MainImage",
      type: "image",
      option: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "laser", value: "laser" },
          { title: "brake", value: "brake" },
          { title: "rolling", value: "rolling" },
          { title: "press", value: "press" },
          { title: "shear", value: "shear" },
          { title: "bind", value: "bind" },
        ],
      },
    },
    {
      name: "secImages",
      title: "secImages",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "table",
      title: "table",
      type: "image",
      of: [{ type: "image" }],
      option: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
}
export default Machine

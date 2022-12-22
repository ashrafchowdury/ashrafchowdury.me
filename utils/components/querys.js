//Author Query
export const authorQuery = `*[_type == "author"]{
    _id,
    title,
    mainImage,
    header_description,
    main_description,
    sub_description,
    github_link,
    resume,
    current_stack[] -> {
      title,
     },
  }`;

// Blog Query
export const blogQuery = `*[_type == "blog"]{
    _id,
    title,
    link,
    mainImage,
    publishedAt,
    description,
  }`;

//Language Query
export const languageQuery = `*[_type == "language"]{
    _id,
    id,
    name,
    tooltip,
    mainImage,
  }`;

//Project Query
export const projectQuery = `*[_type == "project"]{
    _id,
    title,
    mainImage,
    publishedAt,
    slug,
    description_1,
    description_2,
    github_link,
    website,
    direction,
    project_id,
    categories[] -> {
      title,
     },
  }`;
//Experiance Query
export const experianceQuery = `*[_type == "experiance"]{
  _id,
  body, 
}`;

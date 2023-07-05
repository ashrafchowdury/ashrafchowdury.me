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
    filed,
    mainImage,
  }`;

//Project Query
export const projectQuery = `*[_type == "project"]{
    _id,
    title,
    mainImage,
    publishedAt,
    slug,
    github_link,
    description,
    body,
    website,
    direction,
    project_id,
    categories[] -> {
      title,
     },
  }`;

//About Query
export const aboutQuery = `*[_type == "about"]{
  _id,
  about,
  images 
}`;

export const contactQuery = `*[_type == "contact"]{
  _id,
  contact
}`;

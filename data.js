import React, { useState, useEffect, createContext, useContext } from "react";

export const DataContext = createContext();

export const useData = useContext(DataContext);
const DataContextProvider = ({ author }) => {
  const value = {
    author,
  };
  return (
    <DataContextProvider.Provider value={value}>
      {children}
    </DataContextProvider.Provider>
  );
};

export default DataContextProvider;

export const getServerSideProps = async () => {
  //blog query
  const authorQuery = `*[_type == "author"]{
      _id,
      title,
      mainImage,
      main_description,
      github_link,
      resume,
      current_stack[] -> {
        title,
       },
    }`;
  //call api
  const author = await sanityClient.fetch(authorQuery);

  //send the data to home page
  return {
    props: {
      author,
    },
  };
};

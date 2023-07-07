import { useState, useEffect, createContext, useContext } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

export const DataContext = createContext(null);
export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  // get contents
  const { data: project } = useQuery("project", { staleTime: 500000 });
  const { data: blog } = useQuery("blog", { staleTime: 500000 });
  const { data: language } = useQuery("language", { staleTime: 500000 });
  const { data: about } = useQuery("about", { staleTime: 500000 });
  const { data: contact } = useQuery("contact", { staleTime: 500000 });
  const router = useRouter();

  const shortProjects = () => {
    let data_id = []; //store the project datas Id
    const find_id = project?.map((val) => data_id.push(val.project_id)); //find id & store in data_id
    const sort_data_id = data_id.sort((a, b) => a - b); //sort data_id
    //sort the actual data by the help of sort_data_id
    const order_rize_data = sort_data_id.map((id) =>
      project?.find((value) => value.project_id == id)
    );
    setProjects(order_rize_data);
  };

  const shortLanguages = () => {
    let data_id = [];
    const find_id = language?.map((val) => data_id.push(val.id));
    const sort_data_id = data_id.sort((a, b) => a - b);
    const order_rize_data = sort_data_id.map((id) =>
      language?.find((value) => value.id == id)
    );
    setLanguages(order_rize_data);
  };

  useEffect(() => {
    shortProjects();
    shortLanguages();
  }, [router.pathname]);

  const value = { projects, languages, blog, about, contact };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataProvider;

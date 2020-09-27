import React from 'react';
import useHttp from "../hooks/useHttp";

// let isFetchedData = false;
function App() {
  // const [isDarkMode, setDarkMode] = React.useState(true);
  // const [title, setTitle] = React.useState("Hello all");

  const [dataApp, setDataApp] = React.useState({
    isDarkMode: true,
    title: "Hello all",
  })

  const [isLoading, dataMovie] = useHttp("/movies", dataApp.isDarkMode);

  const toggleMode = (e) => {
    // const { checked } = e.target;
    setDataApp({ ...dataApp, isDarkMode: !dataApp.isDarkMode });
  }

  // React.useEffect(() => {
  //   // if (isFetchedData) return
  //   api.get("/movies")
  //     .then((res) => {
  //       setDataMovie(res.data);
  //       // isFetchedData = true;
  //     })
  //     .catch((err) => console.log(err));

  //   document.addEventListener("scroll", () => { })
  //   //clean up
  //   return () => {
  //     document.removeEventListener("scroll", () => { })
  //   }
  // }, [dataApp.isDarkMode]) // componentDidMount, componentDidUpdate, componentWillUnMount

  console.log("dataMovie", dataMovie);

  return (
    <div className={`App ${dataApp.isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>{dataApp.title}</h1>
      <input type="checkbox" checked={dataApp.isDarkMode ? true : false} onChange={toggleMode} /> is dark mode

      {isLoading ? "Loading data ..." : ""}
    </div>
  );
}

export default App;

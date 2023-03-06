// import { uiActions } from "./ui-slice";
// import { projectsActions } from "./project-slice";

// export const fetchProjects = (projects) => {
  
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
//       );
//       const slicedData = response.data.slice(0, 15);
//       let loadedData = [];

//       loadedData = slicedData.map((item) => ({
//         id: item.Number,
//         projName: item.Name,
//         projDesc: item.About,
//         year: item.MaxHP,
//         customer: item.Generation,
//         styled: false,
//       }));
//     setMyProjList(loadedData);


//       if (!response) {
//         throw new Error("Couldn't fetch cart data");
//       }

//       const data = response.json();

//       return data;
//     };

//     try {
//       const cartData = await fetchData();

//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error...",
//           message: "Fetching cart data failed!",
//         })
//       );
//     }
//   };
// };

// const fetchDataHandler = async () => {
//   const response = await axios.get(
//     "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
//   );
//   const slicedData = response.data.slice(0, 15);
//   let loadedData = [];

//   loadedData = slicedData.map((item) => ({
//     id: item.Number,
//     projName: item.Name,
//     projDesc: item.About,
//     year: item.MaxHP,
//     customer: item.Generation,
//     styled: false,
//   }));

//   setMyProjList(loadedData);
// };

// useEffect(() => {
//   fetchDataHandler();
// }, []);

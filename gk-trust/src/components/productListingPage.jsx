import Header from "./Header";
import "./productListingPage.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./productCard";
import Filter from "./filter";
import { useSnackbar } from "notistack";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ProductListingPage = ({ setCheckoutData }) => {
  const [toggle, setToggle] = useState(false);

  const [filterData, setFilterData] = useState({
    color: [],
    gender: [],
    type: [],
    price:[]
  });
  const [productsData, setProductsData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [text, setText] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleCardsApi = async () => {
    let url =
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    try {
      let response = await fetch(url);
      let responseData = await response.json();
      setProductsData(responseData);
      setApiData(responseData);
      // return responseData;
    } catch (error) {
      console.log(error);
    }
  };

  console.log("toggle", toggle);

  useEffect(() => {
    handleCardsApi();
  }, []);
  useEffect(() => {
    newData();
  }, [filterData]);

  useEffect(() => {
    setCheckoutData(cartData);
  }, [cartData]);

  // const handleFilter = (event) => {
  //     const {checked, value} = event.target
  //     if(checked){
  //         setFilterData([value,...filterData]);
  //     }else {
  //         setFilterData(filterData.filter((item)=>{
  //             return item !== value
  //         }));
  //     }
  // }

  const handleFilter = (event) => {
    const { checked, value, name } = event.target;
    if (checked) {
      setFilterData({ ...filterData, [name]: [...filterData[name], value] });
    } else {
      let updatedArray = [...filterData[name]];
      updatedArray = updatedArray.filter((e) => e !== value);
      setFilterData({ ...filterData, [name]: updatedArray });
    }
  };

  let newData = () => {
    let copyProductsData = [...apiData];
    if (filterData.color.length > 0) {
      copyProductsData = copyProductsData.filter((itm) => {
        return filterData.color.includes(itm.color);
      });
    }
    if (filterData.gender.length > 0) {
      copyProductsData = copyProductsData.filter((itm) => {
        return filterData.gender.includes(itm.gender);
      });
    }
    if (filterData.type.length > 0) {
      copyProductsData = copyProductsData.filter((itm) => {
        return filterData.type.includes(itm.type);
      });
    }
    console.log("f-d-p",filterData)
    if (filterData.price.length > 0) {
      //let x = filterData.price.split("-");
      if(filterData.price.length >1){

        copyProductsData = copyProductsData.filter((itm)=>{
          return itm.price >= Number(filterData.price[0]) &&  itm.price <= Number(filterData.price[1])
        })
      }else{
        copyProductsData = copyProductsData.filter((itm)=>{
          return itm.price <= Number(filterData.price[0])
        })
      }
    }
    setProductsData(copyProductsData);
  };

  const isItemInCart = (cartData, itemId) => {
    let isPresent = false;
    cartData.forEach((item) => {
      if (item.id.toString() === itemId.toString()) {
        isPresent = true;
      }
    });

    return isPresent;
  };

  const addToCart = (itemInfo, itemId) => {
    if (itemInfo.quantity === 0) {
      enqueueSnackbar("Out of stck", { variant: "warning" });
      return;
    }
    if (isItemInCart(cartData, itemId)) {
      enqueueSnackbar("Item already in cart.", { variant: "warning" });
      return;
    } else {
      setCartData([...cartData, itemInfo]);
      enqueueSnackbar("Item added in cart.", { variant: "success" });
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearch = () => {
    let searchData = [...apiData];
    searchData = searchData.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(text) ||
        ele.color.toLowerCase().includes(text) ||
        ele.type.toLowerCase().includes(text)
      );
    });
    setProductsData(searchData);
  };

  console.log("text", text);

  return (
    <div>
      <Header />
      <div className="header-filter">
        <div>
          <TextField
            type="search"
            onChange={(e) => setText(e.target.value)}
            variant="standard"
            placeholder="Search for products"
          />
          <button onClick={() => handleSearch()}>
            <SearchIcon />
          </button>
        </div>

        <button className="toggle-btn" onClick={handleToggle}>
          <FilterAltIcon />
        </button>
      </div>

      <div className="papa">
        <Grid container spacing={2}>
          {toggle && (
            <Grid item md={3}>
              {/* <div style={{ display: "block", height:"auto" }}> */}
                <Filter handleFilter={handleFilter} />
              {/* </div> */}
            </Grid>
          )}
                      <Grid item md={3} display = {{xs:"none", md:"block"}}>
              {/* <div style={{ display: "block", height:"auto" }}> */}
                <Filter handleFilter={handleFilter} />
              {/* </div> */}
            </Grid>
          
            <Grid
              className="products-Section"
              item
              md={9}
              container
              spacing={2}
            >
              {productsData && productsData.length > 0 ? (
                productsData.map((item) => {
                  return (
                    <Grid container key={item.id} item xs={12} sm={6} md={4}>
                      <ProductCard data={item} handleAddToCart={addToCart} />
                    </Grid>
                  );
                })
              ) : (
                <p>No Products Found</p>
              )}
            </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductListingPage;

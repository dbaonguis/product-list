import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';
import {
  Container,
  Grid,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import ProductPanel from './ProductPanel';

const CATEGORY_ASC = 'category_asc';
const CATEGORY_DESC = 'category_desc';
const PRICE_ASC = 'price_asc';
const PRICE_DESC = 'price_desc';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [orderedData, setOrderedData] = useState([]);
  const [sortBy, setSortBy] = useState(CATEGORY_ASC);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        'https://apimdev.wakefern.com/mockexample/V1',
        {
          headers: {
            'Ocp-Apim-Subscription-Key': 'c10156b807b24918b5715f50f879b4ee',
          },
        }
      );

      setProductData(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (productData && productData.length > 0 && sortBy) {
      const [column, order] = sortBy.split('_');
      const orderedData = _.orderBy(productData, [column], [order]);
      setOrderedData(orderedData);
    }
  }, [productData, sortBy]);

  const sortByHandler = (evt) => {
    setSortBy(evt.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            ProductList
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="standard">
            <InputLabel>Sort By:</InputLabel>
            <Select value={sortBy} onChange={sortByHandler}>
              <MenuItem value={CATEGORY_ASC}>Category (asc)</MenuItem>
              <MenuItem value={CATEGORY_DESC}>Category (desc)</MenuItem>
              <MenuItem value={PRICE_ASC}>Price (asc)</MenuItem>
              <MenuItem value={PRICE_DESC}>Price (desc)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {orderedData &&
          orderedData.length > 0 &&
          orderedData.map((product) => (
            <ProductPanel key={product.index} product={product} />
          ))}
      </Grid>
    </Container>
  );
};

export default ProductList;

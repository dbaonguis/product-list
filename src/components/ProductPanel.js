import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    dataGrid: {
      borderBottom: '1px solid gray',
    },
    wrapper: {
      margin: '3px',
      padding: '10px',
    },
    onSale: {
      color: 'red',
    },
  };
});

const ProductPanel = ({ product }) => {
  const classes = useStyles();

  const {
    product: name,
    weight,
    description,
    category,
    icon,
    price,
    onSale,
    SKU,
  } = product;
  return (
    <Grid item xs={12}>
      <Paper className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">{name}</Typography>
          </Grid>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
          <Grid item xs={4}>
            <img src={icon} alt={name} />
          </Grid>
          <Grid item xs={6}>
            {onSale && (
              <Typography variant="h5" className={classes.onSale}>
                On Sale!!!!
              </Typography>
            )}
            <Typography variant="h6">$ {price.toFixed(2)} / each</Typography>
            <div className={classes.dataGrid}>
              <strong>weight:</strong> {weight}
            </div>
            <div className={classes.dataGrid}>
              <strong>description:</strong> {description}
            </div>
            <div className={classes.dataGrid}>
              <strong>category:</strong> {category}
            </div>
            <div className={classes.dataGrid}>
              <strong>sku:</strong> {SKU}
            </div>
          </Grid>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProductPanel;

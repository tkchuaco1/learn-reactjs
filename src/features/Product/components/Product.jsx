import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants';

const useStyles = makeStyles(theme => ({
    boxbg: {
        color: 'black',
        cursor: 'pointer',
        '&:hover': {
            background: '#89ca94',
            color: 'white',
        },
    },
    img: {
        height: '150px;',
        objectFit: 'contain',
    },

}))

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const classes = useStyles();
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : `${THUMBNAIL_PLACEHOLDER}`;
    return (
        <div>
            <Box padding={1} className={classes.boxbg} minHeight={'215px'}>
                <Box padding={1}  minHeight={'200px'}>
                    <img className={classes.img} alt={product.name} width="100%" src={thumbnailUrl} />
                </Box>
                <Typography variant='body2' align="left">
                    {product.name} 
                </Typography>
                <Typography variant='body2' align="left" fontWeight="bold" color="red">
                    {product.promotionPercent > 0 ? ` ( giảm -${product.promotionPercent}%)` : ""}  
                </Typography>
                <Typography variant='body2' align="left">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                    </Box>
                </Typography>
            </Box>
        </div>
    );
}

export default Product;
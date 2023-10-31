import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box, Paper, Grid, Container } from '@mui/material';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import Pagination from '../../../components/Pagination/Pagination';

ListPage.propTypes = {

};

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0'
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowwrap',
        justifyContent: 'center',
        marginTop: '30px',
        paddingBottom: '30px'
    }
}))

function ListPage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        data: {},
        page: 1,
        limit: 8,
        total: 8,
    });
    const [filters, setFilter] = useState({
        page: 1,
        limit: 8
    });
    useEffect(() => {
        (async () => {
            try {
                const data = await productApi.getAll(filters);
                setProductList(data.data);
                setPagination(data.pagination);
                console.log(data, pagination);

            } catch (error) {
                console.log('Fail to fetch product: ', error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handleChange = (data) => {
            console.log(data)
            setLoading(true);
        setFilter(prevFilters => ({
            ...prevFilters,
            _page: data.currentPage
        }))
    }
    console.log(filters)

    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                            {/* <Pagination 
                                showFirstButton 
                                showLastButton 
                                size="large" 
                                variant="outlined"  
                                className={classes.pagination}

                                count={Math.ceil(pagination.total / pagination.limit)} 
                                page={pagination.page} 
                                onChange={handlePageChange}
                            >
                            </Pagination> */}
                            <Pagination
                            totalRecords = {pagination.total}
                            pageLimit= {pagination.limit}
                            pageNeighbours = {1}
                            onPageChanged= {handleChange}
                            >

                            </Pagination>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
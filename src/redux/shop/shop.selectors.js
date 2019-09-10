import { createSelector } from 'reselect';

const selectShop = state => state.shop;

 export const selectCollections = createSelector(
     [selectShop],
     shop => shop.collections
 );

export const selectCollection = collectUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectUrlParam]
    );

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);
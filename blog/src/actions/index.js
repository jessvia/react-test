import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());
//    console.log('fetched post');
//    const userIds = _.uniq(_.map(getState().posts, 'userId'));
//    console.log(userIds);
//    userIds.forEach(id => dispatch (fetchUser(id)));

   _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch (fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// one option of one time of each user  MEMOIZE//

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });
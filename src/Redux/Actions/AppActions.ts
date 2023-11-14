import axios from "axios"

export const getTableList = (tabNumber) => async (dispatch) => {
  try {
    const tabUrl1 = 'https://mocki.io/v1/52b2d83c-2698-4930-8ae1-0a6bf619bb4c';
    const tabUrl2 = 'https://mocki.io/v1/ebb70b71-b45c-4d80-a03f-b89ee13abd8c';
    const tabUrl3 = 'https://mocki.io/v1/8aa61d74-dbd3-44b7-a307-243217989667';

    let result;

    if (tabNumber === 1) {
      result = await axios.get(tabUrl1);
    } else if (tabNumber === 2) {
      result = await axios.get(tabUrl2);
    } else if (tabNumber === 3) {
      result = await axios.get(tabUrl3);
    }

    dispatch({ type: 'getList', payload: result.data })


  } catch (error) {
    console.log('getList Error', error)
  }
}
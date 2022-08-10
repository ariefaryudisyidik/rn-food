import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Mp7Moz_T7UcNy2sw51TTxp_-y_EgddV-bmm13YI4VPGQkdauvUQQJ8TroZalT0bwH7k-ccD5II7Pndq7i1YPPV4lIwhkJuO5b_kDlFxoFS6yih_b9A9A9g70ImbyYnYx',
  },
});

import axios from "axios";
import { toast } from "react-toastify";



export default class LiveFoodApi{

<<<<<<< HEAD
   static BASE_URL = 'http://3.80.41.161:8002/skb/food/livefoods';
=======
    static baseApi = import.meta.env.VITE_API_BASE_URL;
   static BASE_URL = `${this.baseApi}/skb/food/livefoods`;
//    static BASE_URL = 'http://localhost:8002/skb/food/livefoods';
>>>>>>> dev


   static async getLiveFoods(){
    try{
        const response = await axios.get(this.BASE_URL);
        if(response.status === 200){
            return response.data;
        }else{
            toast.error('Error fetching Food list in api');
        }
    } catch(error)
    {
        toast.error('Api error', error);
        throw error;
    }
   }

   static async toggleFoodItem(foodId){
    try{
        const response = await axios.post(`${this.BASE_URL}/${foodId}`);
        if(response.status === 200){
            return response.data;
        }else{
            toast.error('Error toggle food');
        }
    } catch(error)
    {
        toast.error('Api error', error);
        throw error;
    }
    
   }

   

}
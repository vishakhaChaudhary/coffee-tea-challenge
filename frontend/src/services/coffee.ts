/**
 * Coffee Service
 * Service to call the API to fetch list of coffees
 * return coffees list
 */
class CoffeeService {
    constructor() {}
    fetchAllCoffees = async () : Promise<any> => {
        return await fetch(`${process.env.API_URL}/api/coffee`).then((res) => {
            return res.json() || [];
        }).catch((err) => {
            console.log(`Error is ${err}`);
            return [];
        });
    }
}

export default new CoffeeService();

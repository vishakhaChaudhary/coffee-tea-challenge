/**
 * Tea Service
 * Service to call API to fetch all tea
 * return list of teas
 */
class TeaService {
    constructor() {}
    fetchAllTea = async () => {
        return await fetch(`${process.env.API_URL}/api/tea`).then((res) => {
            return res.json() || [];
        }).catch((err) => {
            console.log(`Error is ${err}`)
            return [];
        });
    }
}

export default new TeaService();

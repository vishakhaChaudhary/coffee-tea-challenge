import { getServerSideProps } from '../../pages/coffee';
import { coffeeService } from '../../services'; 
import { coffeeMockData } from '../mock';
import { FETCH_COFFEE } from '../../cms/constant';

describe('Coffee Page', () => {
    it('GetServerSideProps returns the correct list of coffees from the api', async () => {
        const coffeeList = coffeeMockData;

        jest.spyOn(coffeeService, FETCH_COFFEE).mockImplementation(async () => coffeeList);

        const result = await getServerSideProps({} as any);
        expect(coffeeService.fetchAllCoffees).toHaveBeenCalled();
        expect(result).toEqual({
            props: { coffeeList }
        })
    });
});

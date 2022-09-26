import { getServerSideProps } from '../../pages/tea';
import { teaService } from '../../services';
import { teaMockData } from '../mock';
import { FETCH_TEA } from '../../cms/constant';

describe('Tea Page', () => {
    it('GetServerSideProps returns the correct list of tea from the api', async () => {
        const teaList = teaMockData;

        jest.spyOn(teaService, FETCH_TEA).mockImplementation(async () => teaList);

        const result = await getServerSideProps({} as any);
        expect(teaService.fetchAllTea).toHaveBeenCalled();
        expect(result).toEqual({
            props: { teaList }
        })
    });
});

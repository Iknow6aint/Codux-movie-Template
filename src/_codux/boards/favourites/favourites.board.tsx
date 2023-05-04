import { createBoard } from '@wixc3/react-board';
import { Favourites } from '../../../components/favourites/favourites';

export default createBoard({
    name: 'Favourites',
    Board: () => <Favourites />
});

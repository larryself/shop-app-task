import Link from 'next/link';
import {useGetCategoryQuery} from "../../store/product/product";
import {Nav, MenuList, MenuItem, ItemLink} from './style';

const Menu = () => {
    const {data} = useGetCategoryQuery();
    return (
        <Nav>
            <MenuList>
                {
                    data?.map((menuItem: any) => (
                        <MenuItem key={menuItem}>
                            <Link href={`/category/${menuItem}`} passHref>
                                <ItemLink>{menuItem}</ItemLink>
                            </Link>
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Nav>
    );
};

export default Menu;

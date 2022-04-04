import Link from 'next/link';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Nav, MenuList, MenuItem, ItemLink } from './style';

export const Menu = () => {
  const {categories} = useAppSelector(state => state.product)
  return (
    <Nav>
      <MenuList>
        {
          categories?.map((menuItem: any) => (
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

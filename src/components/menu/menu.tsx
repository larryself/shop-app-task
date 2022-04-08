import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from 'hooks/useAppSelector';
import { Nav, MenuList, MenuItem, ItemLink, Blur, Burger, BurgetIcon } from 'components/menu/style';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {categories} = useAppSelector(state => state.product)
  return (
    <Nav onClick={() => setIsOpen(false)}>
      <Blur isOpen={isOpen}/>
      <div onClick={(e) => e.stopPropagation()}>
        <Burger onClick={() => setIsOpen(prevState => !prevState)} isOpen={isOpen}>
          <BurgetIcon isOpen={isOpen}/>
        </Burger>
        <MenuList isOpen={isOpen}>
          {
            categories?.map((menuItem: string) => (
              <MenuItem key={menuItem}>
                <Link href={`/category/${menuItem}`} passHref>
                  <ItemLink onClick={() => setIsOpen(false)}>{menuItem}</ItemLink>
                </Link>
              </MenuItem>
            ))
          }
        </MenuList>
      </div>
    </Nav>
  );
};

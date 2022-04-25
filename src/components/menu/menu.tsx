import { useState } from 'react';
import Link from 'next/link';
import { useProductSelector } from 'hooks/useProductSelector';
import { Nav, MenuList, MenuItem, ItemLink, Blur, Burger, BurgetIcon } from 'components/menu/style';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {categories} = useProductSelector();
  return (
    <Nav onClick={() => setIsOpen(false)}>
      <Blur isOpen={isOpen}/>
      <div onClick={(event) => event.stopPropagation()}>
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

import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import Link from 'next/link';
import { Nav, MenuList, MenuItem, ItemLink, Blur, Burger, BurgetIcon } from 'components/menu/style';
import { useStore } from 'store/store';

export const Menu = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { productStore: { categories } } = useStore();
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
});

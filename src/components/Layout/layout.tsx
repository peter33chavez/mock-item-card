import { useState } from "react";
import {
  CartButton,
  Header,
  IconsContainer,
  ItemCount,
  LogoContainer,
  SearchButton,
} from "./layout.style";
import { BsCart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import companyLogo from "../../assets/companyLogo.svg";
import { selectCartItems } from "features/cartSlice";
import { useSelector } from "react-redux";
import { OpenCart, SearchBar } from "components";

export const Layout = ({ children }: any) => {
  const cartItems = useSelector(selectCartItems);
  const [openCart, setOpenCart] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const handleSearchClose = () => {
    setOpenSearchBar(!openSearchBar);
    setInputSearch("");
  };
  return (
    <>
      <Header>
        <LogoContainer to={"/"}>
          <img src={companyLogo} alt="Company Logo" />
        </LogoContainer>
        <IconsContainer>
          <SearchButton>
            {!openSearchBar ? (
              <BiSearch
                size={24}
                onClick={() => setOpenSearchBar(!openSearchBar)}
              />
            ) : (
              <SearchBar
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                handleSearchClose={handleSearchClose}
              />
            )}
          </SearchButton>
          <CartButton onClick={() => setOpenCart(!openCart)}>
            {!openCart ? (
              <>
                <BsCart size={24} />

                {cartItems.length > 0 && (
                  <ItemCount>{cartItems.length}</ItemCount>
                )}
              </>
            ) : (
              <IoMdClose size={24} />
            )}
          </CartButton>
        </IconsContainer>
      </Header>
      {openCart && <OpenCart />}
      {children}
    </>
  );
};

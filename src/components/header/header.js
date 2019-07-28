import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import { signOutStart } from '../../redux/user/user.actions';



const Header = ({ currentUser, hidden, signOutStart }) => {

    return (

        <HeaderContainer>

            <LogoContainer to="/">

                <Logo className="logo" />
            
            </LogoContainer>  

            <OptionsContainer>
            
                <OptionLink to="/shop">SHOP</OptionLink>

                <OptionLink to="/contact">CONTACT</OptionLink>


                { 
                    currentUser !== null ?

                        ( <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv> )

                    : 
 
                       ( <OptionLink to="/signin">SIGN IN</OptionLink> )

                }

                <CartIcon />
            
            </OptionsContainer>

            { hidden ? null : ( <CartDropdown /> ) }
            
        </HeaderContainer>

    );

};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispactchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispactchToProps)(Header);
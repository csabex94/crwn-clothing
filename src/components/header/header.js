import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';


const Header = ({ currentUser, hidden }) => {

    return (

        <div className="header">

            <Link className="logo-container" to="/">

                <Logo className="logo" />
            
            </Link>  

            <div className="options">
            
                <Link to="/shop" className="option">SHOP</Link>

                <Link to="/contact" className="option">CONTACT</Link>


                { 
                    currentUser !== null ?

                        ( <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> )

                    : 
 
                       ( <Link className="option" to="/signin">SIGN IN</Link> )

                }

                <CartIcon />
            
            </div>

            { hidden ? null : ( <CartDropdown /> ) }
            
        </div>

    );

};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
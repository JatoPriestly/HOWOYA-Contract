import Image from "next/image";

export default function Header(){
    return(
        <div>
            <div className="sidemenu-wrapper sidemenu-cart ">
                <div className="sidemenu-content">
                <button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
                <div className="widget woocommerce widget_shopping_cart">
                    <h3 className="widget_title">Shopping cart</h3>
                    <div className="widget_shopping_cart_content">
                    <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button"><i className="far fa-times" /></a>
                        <a href="#"><Image width={100} height={50} src="/img/product/product_thumb_1_1.png" alt="Cart Image" />Books</a>
                        <span className="quantity">1 ×
                            <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">$</span>940.00</span>
                        </span>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button"><i className="far fa-times" /></a>
                        <a href="#"><Image width={100} height={50} src="/img/pics/Favicon.png" alt="Cart Image" />Medicine</a>
                        <span className="quantity">1 ×
                            <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">$</span>899.00</span>
                        </span>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button"><i className="far fa-times" /></a>
                        <a href="#"><Image width={100} height={50} src="/img/product/product_thumb_1_3.png" alt="Cart Image" />Dress</a>
                        <span className="quantity">1 ×
                            <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">$</span>756.00</span>
                        </span>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button"><i className="far fa-times" /></a>
                        <a href="#"><Image width={100} height={50} src="/img/product/product_thumb_1_4.png" alt="Cart Image" />Chair</a>
                        <span className="quantity">1 ×
                            <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">$</span>723.00</span>
                        </span>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button"><i className="far fa-times" /></a>
                        <a href="#"><Image width={100} height={50} src="/img/product/product_thumb_1_5.png" alt="Cart Image" />Cloths</a>
                        <span className="quantity">1 ×
                            <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">$</span>1080.00</span>
                        </span>
                        </li>
                    </ul>
                    <p className="woocommerce-mini-cart__total total">
                        <strong>Subtotal:</strong>
                        <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">$</span>4398.00</span>
                    </p>
                    <p className="woocommerce-mini-cart__buttons buttons">
                        <a href="cart.html" className="th-btn wc-forward">View cart</a>
                        <a href="checkout.html" className="th-btn checkout wc-forward">Checkout</a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="popup-search-box d-none d-lg-block">
                <button className="searchClose"><i className="far fa-times" /></button>
                <form action="#">
                <input type="text" placeholder="What are you looking for?" />
                <button type="submit"><i className="fal fa-search" /></button>
                </form>
            </div>{/*==============================
                Mobile Menu
            ============================== */}
            <div className="th-menu-wrapper">
                <div className="th-menu-area text-center">
                <button className="th-menu-toggle"><i className="fal fa-times" /></button>
                <div className="mobile-logo">
                    <a href="index.html"><Image width={100} height={50} src="/img/logo.svg" alt="Donat" /></a>
                </div>
                <div className="th-mobile-menu">
                    <ul>
                    <li className="menu-item-has-children">
                        <a href="index.html">Home</a>
                    </li>
                    <li><a href="about.html">About Us</a></li>
                    <li className="menu-item-has-children">
                        <a href="#">Donations</a>
                        <ul className="sub-menu">
                        <li><a href="donation.html">Donations</a></li>
                        <li><a href="donation-details.html">Donation Details</a></li>
                        <li><a href="donate-now.html">Donate Now</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <header className="th-header header-layout3 onepage-nav">
                <div className="sticky-wrapper">
                {/* Main Menu Area */}
                <div className="container">
                    <div className="menu-area">
                    <div className="header-logo" id="logo" style={{ position: 'relative', width: '156px', height: '80px' }}>
                        <a href="#"><Image src="/img/pics/RealLogo.svg" alt="Donat" fill style={{ objectFit: 'contain' }} /></a>
                    </div>
                    <div className="menu-area-wrap">
                        <nav className="main-menu d-none d-lg-block">
                        <ul>
                            <li className="menu-item-has-children">
                            <a href="#hero">Home</a>
                            </li>
                            <li><a href="#about-sec">About Us</a></li>
                            <li><a href="#donation-sec">Donations</a></li>
                            <li><a href="#service-sec">Service</a></li>
                            <li><a href="#blog-sec">Blog</a></li>
                            <li>
                            <a href="#contact-sec">Contact Us</a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div className="header-button">
                        <button type="button" className="icon-btn style2 searchBoxToggler d-lg-block d-none"><i className="far fa-search" /></button>
                        <button type="button" className="icon-btn sideMenuToggler">
                        <span className="badge">5</span>
                        <i className="fa-regular fa-cart-shopping" />
                        </button>
                        <a href="contact.html" className="th-btn style3 d-xl-block d-none"><i className="fas fa-heart me-2" /> Donate Now</a>
                        <button type="button" className="icon-btn th-menu-toggle d-lg-none"><i className="far fa-bars" /></button>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </div>
    );
}
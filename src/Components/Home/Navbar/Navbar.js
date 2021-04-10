import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">

            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white" href="#">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white active" aria-current="page" href="#">Dental Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white" href="#">Reviews</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white active" aria-current="page" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

       
    );
    
};

export default Navbar;
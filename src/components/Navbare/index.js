import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbare = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbare;

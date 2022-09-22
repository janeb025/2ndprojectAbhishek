import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
		My Information
		</NavLink>
		<NavLink to="/enterskills" activeStyle>
		Add new Skills
		</NavLink>
		<NavLink to="/skills" activeStyle>
		View Skills
		</NavLink>

		<NavLink to="/enterexperience" activeStyle>
		Add new Experience
		</NavLink>
    <NavLink to="/experience" activeStyle>
	View Experience
		</NavLink>
		<NavLink to="/enterrecommendation" activeStyle>
		Enter new Recommendations
		</NavLink>
		
    <NavLink to="/recommendations" activeStyle>
	View Recommendations
		</NavLink>
		
		
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   &nbsp;&nbsp; &nbsp; &nbsp;
   <NavLink to="/" activeStyle><button>Logout</button>
		
		</NavLink>	
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

import React, { useState } from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ id, title, videoName }) => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return <div className="menu-text"> {title} </div>;
};

export default MenuItem;

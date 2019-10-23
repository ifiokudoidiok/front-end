import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DashboardRouter from '../Router/DashboardRouter';
import avatar from '../../utils/photo/avatar.png';



    
const onLogout = () => {
    localStorage.clear();
    // props.history.replace('/login');
  };

const DashboardLayout = () => (
    // <StyledContainer>
    //     <div className='adminSection'>
    //         <div>
    //             <img src={avatar} alt="Avatar" className="avatar" />
    //             <p>CLick to <i>edit</i> profile</p>
    //         </div>
    //         <div className='admin-actions'>
    //             <p>return to<Link to='/' ><i>main</i> </Link> page</p>
    //             <button className='logout' onClick={onLogout}>log-out</button>
    //         </div>
    //     </div>
        <DashboardRouter />
	// </StyledContainer>
);

export default DashboardLayout;


const StyledContainer = styled.div`

display: flex;
justify-content: space-between;
font-size: 16px;

.adminSection{
max-width: 250px;
width:100%;
background-color: #D3D3D3;
text-align: center;
}

.avatar {
vertical-align: middle;
width: 150px;
height: 150px;
border-radius: 50%;
}

.logout{
color:dodgerblue;
padding:3px 5px;
}
.logout:hover{
border: 3px solid #F08080;
color:red;

}

.admin-actions{
margin: 10px 5px;
border: 2px solid gray

}
`
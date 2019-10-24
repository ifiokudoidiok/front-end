import React from "react";
import { Link } from 'react-router-dom';
import PrivateRoute from '../Router/PrivateRoute';
import Dashboard from "../../pages/Dashboard";
import ApprovedStories from "../../pages/ApprovedStories";

import styled from 'styled-components';
import avatar from '../../utils/photo/avatar.png';


const DashboardLayout = props => {
    const onLogout = () => {
        localStorage.clear();
        props.history.replace('/login');
    };

    return (
        <StyledContainer>
            <div className='adminSection'>
                <div>
                    <img src={avatar} alt="Avatar" className="avatar" />
                    <p><i> Welcome Admin-01</i></p>
                    <p><i>CLick Here to edit profile</i></p>
                </div>
                <div className='admin-actions'>
                    <p><Link to='/'><i>Home Page</i> </Link></p>
                    <p><Link to='/dashboard'><i>Pending Stories</i> </Link></p>
                    <p><Link to='/dashboard/approved-stories'><i>Approved Stories</i> </Link></p>
                    <button className='logout' onClick={onLogout}>Log Out</button>
                </div>
            </div>

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard/approved-stories" component={ApprovedStories} />
        </StyledContainer>
    );
}

export default DashboardLayout;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    background-color: #D3D3D3;

    .adminSection {
        max-width: 250px;
        width:100%;
        text-align: center;
        margin-top: 5%;
    }

    .avatar {
        vertical-align: middle;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .logout {
        color:dodgerblue;
        padding:3px 5px;
        margin:10px 5px 5px 5px;
        border: 1px solid gray;
        border-radius:10px;
        background-color:lightgray
    }

    .logout:hover {
        border: 3px solid #F08080;
        color:red;
    }

    .admin-actions {
        margin: 10px 5px;
        border: 2px solid gray
    }

    a:hover{
        font-size: 19px;
        color: black;
    }

`

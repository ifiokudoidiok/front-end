
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../state/actions/index';
import styled from 'styled-components';
import avatar from '../utils/photo/avatar.png';




const Dashboard = ({ pendingStories,  getPendingStories, approveStory}) => {

	useEffect(
		() => {
			getPendingStories();
		},
		[getPendingStories ]
    ); 

    const onLogout = () => {
        localStorage.clear();
        // props.history.replace('/login');
      };

	return (
		<StyledContainer>
            <div className='adminSection'>
                <div>
                    <img src={avatar} alt="Avatar" className="avatar" />
                    <p><i>CLick to edit profile</i></p>
                </div>
                <div className='admin-actions'>
                    <p><Link to='/'><i>Main Page</i> </Link></p>
                    <button className='logout' onClick={onLogout}>log-out</button>
                </div>
            </div>
            <div className='pendingSection'>
                <h2 className='intro'>Pending Stories</h2>
                {pendingStories.map((person) => {
                    return (
                        <div key={person.id} className='pendingCards'>
                            <h3 ><i>{person.title}</i></h3>
                            <p>{person.story}</p>
                            <div className='btnDiv'>
                                <button onClick={() => approveStory(person.id,{...person, highlight:null})}>Approve Story</button>
                            </div>
                        </div>
                    );
                })}
            </div>			
		</StyledContainer>
	);
};

export default connect( state => state, actions)(Dashboard);

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
margin-bottom: 10px;
margin-top: 20px;
}

.logout{
color:black;
padding:3px 7px;
border: 1px solid gray;
}
.logout:hover{
border: 2px solid #F08080;
color: red;

}

.admin-actions{
margin: 20px 10px;
border: 2px solid gray

}

    .pendingSection{
        max-width:800px;
        width:100%;
        background-color: whitesmoke;
        margin: 0 auto;
    }

    .pendingCards{
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
            0 2px 4px rgba(0, 0, 0, 0.24);  
        background-color: #FFEBCD;
        margin:10px 10px 30px 10px;
    }

    .btnDiv{
        display: flex;
        justify-content:flex-end;
    }

    button{
        margin:10px 5px 5px 5px;
        padding: 5px;
        border-radius:10px;
        background-color:lightgray
    }

    button:hover{
        background-color: #90EE90
    }

    .intro{
        font-size: 3rem;
        text-shadow: 1px 1px 1px lightblue, 
        3px 3px 5px darkgray;
        text-align: center;
    }
  `

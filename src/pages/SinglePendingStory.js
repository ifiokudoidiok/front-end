import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import withAuth from '../utils/axios';
import * as actions from '../state/actions/index'


const SinglePendingStory = (props) => {
  const [person, setPerson] = useState(null);

 
  useEffect(() => {
    const id = props.match.params.id;
        console.log('fetching...')
       withAuth().get(`https://bwrefugeestories.herokuapp.com/${id}`)
        .then(response => {
            console.log(response.data)
          setPerson(response.data);
        })
        .catch(error => {
          console.error(error.message);
        });

  },[props.match.params.id]);


//   if (!person ) {
//     return <div>Loading case information...</div>;
//   }

  return (
      <div className='StoryCard'>
          <h2>Testing...</h2>
            {/* <h3 ><i>{person.title}</i></h3>
            <p>{person.story}</p> */}
            {/* <button onClick={() => approveStory()}>Approve Story</button>
            <button onclick={() => rejectStory()}>Reject Story</button> */}
      </div>

  );
}

export default connect( state => state, actions)(SinglePendingStory);
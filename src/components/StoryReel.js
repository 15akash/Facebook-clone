import React from 'react';
import './StoryReel.css';
import Story from './Story';

import hrithikReel from './images/hrithikReel.jpg';
import hrithikProfile from './images/hrithikProfile.jpg';
import diljitProfile from './images/diljitProfile.jpg';
import diljitReel from './images/diljitReel.jpg';
import pcReel from './images/pcReel.jpg';
import pcProfile from './images/pcProfile.jpg';
import kiaraReel from './images/kiaraReel.jpg';
import kiaraProfile from './images/kiaraProfile.jpg';
import elizabethReel from './images/elizabethReel.jpg';
import elizabethProfile from './images/elizabethProfile.jpg';

function StoryReel() {
   return (
      <div className="storyReel">
        <Story 
           image={hrithikReel}
           profileSrc={hrithikProfile}
           title="Hrithik Roshan" 
        />
        <Story 
           image={diljitReel}
           profileSrc={diljitProfile}
           title="Diljit Dosanjh" 
        />
        <Story 
           image={kiaraReel}
           profileSrc={kiaraProfile}
           title="Kiara Advani" 
        />
        <Story 
           image={pcReel}
           profileSrc={pcProfile}
           title="Priyanka Chopra" 
        />
        <Story 
           image={elizabethReel}
           profileSrc={elizabethProfile}
           title="Elizabeth Olsen"
        />   
      </div>
   );
}

export default StoryReel;

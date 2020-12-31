import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PostCard from 'components/PostCard';
import * as Network from 'api/Network';

export default function Explore() {
  const [exploreContent, setExploreContent] = useState([]);
  
  useEffect(() => {
    Network.GetExploreContent().then((res) => {
      setExploreContent(res);
    });
  }, []);

  return (
    <React.Fragment>
      <h1 className="display-3">Explore</h1>
      { exploreContent.map((value) => {
        return <PostCard 
          key={value.id}
          username={value.username}
          userID={value.user_id}
          postID={value.id}
          title={value.title} 
          content={value.content} />
      })}
    </React.Fragment>
  );
}


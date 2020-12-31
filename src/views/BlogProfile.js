import React, { useState, useEffect } from 'react';
import { useRouteMatch, } from 'react-router-dom';
import PostCard from 'components/PostCard';
import * as Network from 'api/Network';

export default function BlogProfile() {
  const match = useRouteMatch('/blog/:username');
  const [userContent, setUserContent] = useState([]);
  
  useEffect(() => {
    Network.GetUserContentByUsername(match.params.username).then((res) => {
      setUserContent(res);
    });
  }, []);

  return (
    <React.Fragment>
      <h1 className="display-3">{ match.params.username }</h1>

      { userContent.posts &&
        userContent.posts.map((value) => {
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

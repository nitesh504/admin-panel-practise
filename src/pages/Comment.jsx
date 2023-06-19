import React, { useState } from 'react';
import ProductList from './ProductList';


const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: Date.now(),
        text: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Comment Section</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          rows={4}
          cols={50}
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
      <div>
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        )}
        
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'  }}>

     
     
      <ProductList/>    
      <ProductList/>    
      <ProductList/>      
      <ProductList title="Nitesh " imgsrc="https://images.cdn.circlesix.co/image/2/1200/700/5/uploads/media/2020-02/07/42467f29489e7a13/01_ducati-superleggera-v4_uc145951_high.jpg"/>  
      </div>
    </div>
     
  );
};

export default Comment;

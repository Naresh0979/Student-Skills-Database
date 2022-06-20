import React from "react";
import "./DoubtBlog.css";
import { Navbar } from "../../Navbar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const DoubtBlogs = () => {
  let location = useLocation();
  //console.log(location);
  const [replybox, setReplybox] = useState(false);
  const [replyPostIndex, setReplyPostIndex] = useState();
  const [pId ,setPId] = useState(null);
  const [replyMsg, setReplyMsg] = useState("");
  const [contentPost, setContentPost] = useState("");
  const [posts, setPosts] = useState();
  const [seenPostIndex,setSeenPostIdx] = useState(-1);
  // const [comment]

  const handlePost = (e) => {
    setContentPost(e.target.value);
  };

  const handleSubmit = () => {
    let post = {
      email: location.state.email,
      content: contentPost,
    };

    //console.log(post);
    axios
      .post("http://localhost:2000/student/createPost", {
        post,
      })
      .then(({ data }) => {
        console.log("Inside DATA ", data);
        // let temporaryInfo = {
        //   name: data.name,
        //   content: data.content,
        //   comments: data.comments,
        // };

        posts.push(data);
        console.log(posts);
        setPosts(posts);
      });
  };

  const handleCommentSubmit = () => {
    let comment = {
      email: location.state.email,
      content: replyMsg,
      pId : pId
    };

    //console.log(post);
    axios
      .post("http://localhost:2000/student/createComment", {
        comment,
      })
      .then(({ data }) => {
        console.log("Inside DATA ", data);
        // let temporaryInfo = {
        //   name: data.name,
        //   content: data.content,
        //   comments: data.comments,
        // };

        posts.push(data);
        console.log(posts);
        setPosts(posts);
      });
  };

  useEffect(() => {
    axios
      .post("http://localhost:2000/student/getallPost", {
        email: location.state.email,
      })
      .then((response) => {
        //   console.log(response);
        //console.log(response.data);

        // let temporaryInfo = {
        //   name: response.data.name,
        //   content: response.data.content,
        //   comments:response.data.comments,
        // };
        setPosts(response.data);
      });
  }, [posts]);

  return (
    <div id="profileContainer">
      <Navbar />
      <h1 className="head">Discussions</h1>
      <div className="container container-doubtBlog">
        <div className="comment-sidebar">
          <div className="sidebar-features">
            <button>my posts</button>
            <button>my comments</button>
          </div>
        </div>

        <div className="comment-thread">
          {posts ? (
            posts.map((post, index) => (
              <>
                {/* <a href={worklink.link} key={index}>
                  {worklink.linkName}
                </a>
                <br /> */}
                <details open className="comment" id="comment-1" key={index}>
                  <a href="#comment-1" className="comment-border-link">
                    <span className="sr-only">Jump to comment-1</span>
                  </a>
                  <summary>
                    <div className="comment-heading">
                      {/* <div className="comment-voting">
                        <button type="button">
                          <span aria-hidden="true">&#9650;</span>
                          <span className="sr-only">Vote up</span>
                        </button>
                        <button type="button">
                          <span aria-hidden="true">&#9660;</span>
                          <span className="sr-only">Vote down</span>
                        </button>
                      </div> */}

                      <div className="comment-info">
                        
                        <a href="#" className="comment-author">
                          {post.email}
                        </a>
                        <button type="button" onClick={() => {setSeenPostIdx(index)} }> Show Post</button>
                        <p className="m-0">22 points &bull; 4 days ago</p>
                        
                      </div>
                    </div>
                  </summary>

                  {/* { seenPostIndex === index && */}
                  
                    <div className="comment-body">
                    <p>{post.content}</p>
                    <button
                      type="button"
                      data-toggle="reply-form"
                      data-target="comment-1-reply-form"
                      onClick={() => {
                        setReplybox(!replybox);
                        setReplyPostIndex(index);
                        setPId(post.pId);
                      }}
                    >
                      Reply
                    </button>

                    {replybox && index === replyPostIndex ? (
                      <form
                        method="POST"
                        className="reply-form "
                        id="comment-1-reply-form"
                      >
                        <textarea
                          placeholder="Reply to comment"
                          rows="4"
                          onChange={setReplyMsg}
                          
                        ></textarea>
                        <button type="submit">Submit</button>
                        <button
                          type="button"
                          data-toggle="reply-form"
                          data-target="comment-1-reply-form"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <></>
                    )}
                  </div>

                  <h3 className="head">comments</h3>

                  <div className="replies">
                    <details open className="comment" id="comment-2">
                      <a href="#comment-2" className="comment-border-link">
                        <span className="sr-only">Jump to comment-2</span>
                      </a>

                      <summary>
                        <div className="comment-heading">
                          <div className="comment-voting">
                            <button type="button">
                              <span aria-hidden="true">&#9650;</span>
                              <span className="sr-only">Vote up</span>
                            </button>
                            <button type="button">
                              <span aria-hidden="true">&#9660;</span>
                              <span className="sr-only">Vote down</span>
                            </button>
                          </div>
                          <div className="comment-info">
                            <a href="#" className="comment-author">
                              randomperson81
                            </a>
                            <p className="m-0">4 points &bull; 3 days ago</p>
                          </div>
                        </div>
                      </summary>

                      <div className="comment-body">
                        <p>Took the words right out of my mouth!</p>
                        <button
                          type="button"
                          data-toggle="reply-form"
                          data-target="comment-2-reply-form"
                        >
                          Reply
                        </button>
                        <button type="button">Flag</button>

                        <form
                          method="POST"
                          className="reply-form d-none"
                          id="comment-2-reply-form"
                        >
                          <textarea
                            placeholder="Reply to comment"
                            rows="4"
                          ></textarea>
                          <button type="submit">Submit</button>
                          <button
                            type="button"
                            data-toggle="reply-form"
                            data-target="comment-2-reply-form"
                          >
                            Cancel
                          </button>
                        </form>
                      </div>
                    </details>
                  </div>
                </details>
              </>
            ))
          ) : (
            <>Not Mentioned</>
          )}
        </div>
        <div className="comment-post">
          <h3 className="head">Post </h3>
          {/* <form
                method="POST"
                action="http://localhost:2000/student/createpost" */}
          <div className="reply-form " id="comment-1-reply-form">
            <textarea
              placeholder="Post questions here"
              rows="4"
              onChange={handlePost}
            ></textarea>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button
              type="button"
              data-toggle="reply-form"
              data-target="comment-1-reply-form"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtBlogs;

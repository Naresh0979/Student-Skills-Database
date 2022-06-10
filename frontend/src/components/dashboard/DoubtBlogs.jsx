import React from "react";
import "./DoubtBlog.css";
import { Navbar } from "../../Navbar";
import {useState} from 'react'

const DoubtBlogs = () => {

  const [replybox,setReplybox]=useState(false);
 
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
          <details open className="comment" id="comment-1">
            <a href="#comment-1" className="comment-border-link">
              <span className="sr-only">Jump to comment-1</span>
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
                    someguy14
                  </a>
                  <p className="m-0">22 points &bull; 4 days ago</p>
                </div>
              </div>
            </summary>

            <div className="comment-body">
              <p>
                This is really great! I fully agree with what you wrote, and
                this is sure to help me out in the future. Thank you for posting
                this.
              </p>
              <button 
                type="button"
                data-toggle="reply-form"
                data-target="comment-1-reply-form"
                 onClick={()=>setReplybox(!replybox)}
              >
                
                Reply
              </button>
             
    { replybox?
              <form
                method="POST"
                 className="reply-form "
                id="comment-1-reply-form"
              >
                <textarea placeholder="Reply to comment" rows="4"></textarea>
                <button type="submit">Submit</button>
                <button
                  type="button"
                  data-toggle="reply-form"
                  data-target="comment-1-reply-form"
                >
                  Cancel
                </button>
              </form>
  : <></>}
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
        </div>


        <div className="comment-post">
        <h3 className="head">Post </h3>
        <form
                method="POST"
                action=""
                 className="reply-form "
                id="comment-1-reply-form"
              >
                <textarea placeholder="Post questions here" rows="4"></textarea>
                <button type="submit">Submit</button>
                <button
                  type="button"
                  data-toggle="reply-form"
                  data-target="comment-1-reply-form"
                >
                  Cancel
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default DoubtBlogs;

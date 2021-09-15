import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {

    const {id} = useParams();
    const [postById, setPostById] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostById(data))
    }, [id])

    const {title, body} = postById;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments/`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])



    return (
        <div className="bg-gray-100 ">
        <div className="min-h-screen bg-gray-100 pt-5 px-4 sm:px-6 lg:pt-12 lg:pb-28 max-w-7xl mx-auto lg:px-8">
            <section>
                <div className="bg-white shadow sm:overflow-hidden mx-4 px-4 py-4">
                    <h2 className="text-2xl font-bold pb-3 text-indigo-600">{title}</h2>
                    <p>{body}</p>
                </div>
            </section>

            <section>
              <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden mx-4">
                <div className="divide-y divide-gray-200">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                      Comments
                    </h2>
                  </div>
                  <div className="px-4 py-6 sm:px-6">
                    <ul className="space-y-8">
                      {comments.map((comment) => (
                        <li key={comment.id}>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="text-sm">
                                <h4 className="font-medium text-gray-900">
                                  {comment.name}
                                </h4>
                              </div>
                              <div className="mt-1 text-sm text-gray-700">
                                <p>{comment.body}</p>
                              </div>
                              <div className="mt-2 text-sm space-x-2">
                                <span className="text-gray-500 font-medium">4 days ago</span>{' '}
                                <span className="text-gray-500 font-medium">&middot;</span>{' '}
                                <button type="button" className="text-gray-900 font-medium">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>
                </div>

                </section>
            </div>
        </div>
    );
};

export default BlogDetails;
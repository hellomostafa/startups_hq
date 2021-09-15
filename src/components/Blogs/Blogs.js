import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const top10 = data.slice(10, 20);
            setPosts(top10)
        })
    }, [])

    console.log(posts)

    return (
        <div className="pt-8  bg-gray-100 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8" id="blogs">
            <div className="relative max-w-lg mx-auto  lg:max-w-7xl">
                <div className="border-b-2 border-gray-400 pb-5">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Posts</h2>
                <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                    <p className="text-xl text-gray-600">Get weekly articles in your inbox on how to grow your business.</p>
                    
                </div>
                </div>
                <div className=" pt-10 grid gap-5 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-5">
                    {posts.map((post) => (
                        <div key={post.id} class="bg-white pt-3 pb-8 px-6 rounded-md shadow-lg">
                            <div className="mt-2 block">
                                <p className="text-xl font-semibold text-indigo-600">{post.title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.body}</p>
                            </div>
                            <div className="mt-5">
                                <Link to={`/posts/${post.id}`}
                                className="text-base font-semibold text-indigo-600 hover:text-indigo-500 border border-indigo-600 py-2 px-4 rounded-md">
                                Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                

            </div>

            <div className=" w-full text-center mt-20">
                    <Link to="/allPost" className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    All Posts
                    </Link>
                </div>
            </div>
    );
};

export default Blogs;
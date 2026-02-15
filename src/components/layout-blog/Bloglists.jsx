import { Link } from 'react-router-dom';


import { posts } from './data';



export default function BlogList() {
  return (
    <div className="bg-[#E5E2D9] min-h-screen px-10 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="aspect-[3/2] overflow-hidden mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] tracking-[0.2em] font-medium text-[#2A3B2A] mb-2">
              {post.date}
            </p>
            <h2 className="text-5xl font-normal text-[#2A3B2A] mb-6">
              {post.title}
            </h2>
            <Link 
              to={`/blog/${post.id}`} 
              className="text-xs font-medium uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-50 transition-opacity"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}   
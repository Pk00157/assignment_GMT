import { useParams, Link } from 'react-router-dom';
import { posts } from './data';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <div className="p-20 text-center">Post not found</div>;

  return (
    <div className="bg-[#E5E2D9] min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-7xl font-normal text-[#2A3B2A] mb-20">
          {post.title}
        </h1>
        
        <div className="max-w-2xl mx-auto text-left space-y-8 text-[#2A3B2A] text-lg leading-relaxed">
          <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
          <p>Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest.</p>
        </div>

        {/* Navigation Footer */}
        <div className="mt-40 pt-10 border-t border-black/10 flex justify-between items-center">
          <Link to={`/blog/${id === "one" ? "four" : id === "two" ? "one" : id === "three" ? "two" : "three"}`} className="text-3xl text-[#2A3B2A] flex items-center hover:opacity-50 transition-all">
            <span className="mr-4 text-xl">〈</span> Previous Post
          </Link>
          <Link to={`/blog/${id === "one" ? "two" : id === "two" ? "three" : id === "three" ? "four" : "one"}`} className="text-3xl text-[#2A3B2A] flex items-center hover:opacity-50 transition-all">
            Next Post <span className="ml-4 text-xl">〉</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
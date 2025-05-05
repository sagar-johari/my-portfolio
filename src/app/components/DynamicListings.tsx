"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Listing {
  id: string;
  title: string;
  date?: string;
  type: 'blog' | 'work';
}

const DynamicListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockData: Listing[] = [
      { id: '1', title: 'Getting Started with Next.js', date: '2024-03-20', type: 'blog' },
      { id: '2', title: 'Building Responsive UIs with Tailwind', date: '2024-03-19', type: 'blog' },
      { id: '3', title: 'MDMD Project', type: 'work' },
      { id: '4', title: 'Hot Buttered Project', type: 'work' },
    ];
    setListings(mockData);
  }, []);

  return (
    <div className="p-4 fadecustom">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Recent Blogs</h3>
        <ul className="space-y-2">
          {listings
            .filter(item => item.type === 'blog')
            .map(blog => (
              <li key={blog.id}>
                <Link href={`/blogs/${blog.id}`} className="hover:text-theme_accent transition-colors">
                  {blog.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">Featured Work</h3>
        <ul className="space-y-2">
          {listings
            .filter(item => item.type === 'work')
            .map(work => (
              <li key={work.id}>
                <Link href={`/work/${work.id}`} className="hover:text-theme_accent transition-colors">
                  {work.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicListings; 
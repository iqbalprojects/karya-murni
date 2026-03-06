import type { PageLoad } from "./$types";
import { env } from '$env/dynamic/public';

export const load: PageLoad = async ({ fetch, params }) => {
    const [articleRes, blogsRes] = await Promise.all([
        fetch(`${env.PUBLIC_API_URL}/api/v1/public/blog/${params.slug}`),
        fetch(`${env.PUBLIC_API_URL}/api/v1/public/blog?limit=4`)
    ]);

    const item = await articleRes.json();
    const blogs = await blogsRes.json();

    // Filter out the current article and take up to 3 latest blogs
    const latestBlogs = (blogs.data ?? [])
        .filter((b: any) => b.slug !== params.slug)
        .slice(0, 3);

    return { item, latestBlogs };
};
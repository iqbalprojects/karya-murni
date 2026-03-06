import type { PageLoad } from "./$types";
import { env } from '$env/dynamic/public';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${env.PUBLIC_API_URL}/api/v1/public/project`);
	const item = await res.json();

	const blogRes = await fetch(`${env.PUBLIC_API_URL}/api/v1/public/blog`);
	const blogs = await blogRes.json();

	return { item, blogs };
};
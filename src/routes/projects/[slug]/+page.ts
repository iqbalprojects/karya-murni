import type { PageLoad } from "./$types";
import { env } from '$env/dynamic/public';

export const load: PageLoad = async ({ fetch, params }) => {
    const res = await fetch(`${env.PUBLIC_API_URL}/api/v1/public/project/${params.slug}`);
    const item = await res.json();

    return { item };
};
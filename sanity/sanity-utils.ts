import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: '4kv5hhfo',
        dataset: 'production',
        apiVersion: "2024-01-26",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}


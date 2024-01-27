import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
    projectId: '4kv5hhfo',
    dataset: 'production',
    title: "My Website",
    apiVersion: "2024-01-26",
    basePath: "/admin",
    plugins: [structureTool]
})

export default config;
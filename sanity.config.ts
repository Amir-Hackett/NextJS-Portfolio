import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '4kv5hhfo',
    dataset: 'production',
    title: "My Website",
    apiVersion: "2024-01-26",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;
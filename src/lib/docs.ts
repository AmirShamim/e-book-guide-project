import fs from "fs";
import path from "path";

const DOCS_DIRECTORY = path.join(process.cwd(), "..", "docs");

export interface Chapter {
    slug: string;
    title: string;
    order: number;
}

export function getChapters(): Chapter[] {
    if (!fs.existsSync(DOCS_DIRECTORY)) {
        return [];
    }

    const files = fs.readdirSync(DOCS_DIRECTORY);
    return files
        .filter((file) => file.endsWith(".md") && file.match(/^\d+/))
        .map((file) => {
            const order = parseInt(file.split("-")[0]);
            return {
                slug: file.replace(".md", ""),
                title: file
                    .replace(/^\d+-/, "")
                    .replace(".md", "")
                    .replace(/-/g, " ")
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                order,
            };
        })
        .sort((a, b) => a.order - b.order);
}

export function getChapterContent(slug: string): string | null {
    const fullPath = path.join(DOCS_DIRECTORY, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    return fs.readFileSync(fullPath, "utf8");
}

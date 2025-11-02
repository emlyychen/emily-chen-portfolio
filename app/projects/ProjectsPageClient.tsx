"use client";

import { useState } from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "app/components/projectcard";

export default function ProjectsPageClient() {
  const [sortOrder, setSortOrder] = useState("Latest");

  const sortedProjects = [...projects].sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return sortOrder === "Latest" ? -diff : diff;
  });

  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold text-2xl tracking-tighter">My Projects</h1>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 bg-black text-md"
        >
          <option value="Latest">Sort by Latest</option>
          <option value="Oldest">Sort by Oldest</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-12 mx-auto w-9/10">
        {sortedProjects.map((proj) => (
          <ProjectCard
            key={proj.title}
            title={proj.title}
            date={proj.date}
            url={proj.url}
            desc={proj.desc}
            img_url={proj.img_url}
          />
        ))}
      </div>
    </section>
  );
}

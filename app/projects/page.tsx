// import { BlogPosts } from 'app/components/posts'
import projects from "../data/projects.json";
import { ProjectCard } from "app/components/projectcard"

export const metadata = {
  title: "Projects",
  description: "Check out my projects!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      {/* <BlogPosts /> */}
      <div className="grid grid-cols-2 gap-12 mx-auto w-9/10">
      {projects.map((proj) => (
        <ProjectCard
          title={proj.title}
          date={proj.date}
          url={proj.url}
          desc={proj.desc}
          img_url={proj.img_url}
        ></ProjectCard>
      ))}
      </div>
    </section>
  );
}

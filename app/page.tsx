import { BlogPosts } from "app/components/posts";
import Links from "./components/links";
import projects from "app/data/projects.json";
import { ProjectCard } from "./components/projectcard";
import FishLink from "./components/fishlink";
import FishToggle from "./components/fishtoggle";

const latestProjects = projects.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function Page() {
  return (
    <div className="px-8 py-12">
      {/* Intro row */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        <img
          className="flex-fill img-fluid w-1/3 w-72 h-72 rounded-full object-cover"
          src="punxsy_pic.jpg"
        />
        <section className="flex-fill">
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
            Emily Chen
          </h1>
          <Links />
          <p className="mb-4">
            {`Hi! I'm Emily, a Masters student studying computer science at The University of Michigan with a focus on human computer interaction and AI for accessibility. I'm currently an AI & Machine Learning Fellow at `}
            <a
              href="https://www.texastribune.org/"
              className="underline text-blue-400 hover:text-violet-400"
            >
              The Texas Tribune
            </a>
            {`, where I'm working on an AI tag suggestion model to streamline categorization for editorial workflows.`}
          </p>
          <p>
            {`Previously, I was an intern at `}
            <a
              href="https://www.sartorius.com/en"
              className="underline text-blue-400 hover:text-violet-400"
            >
              Sartorius
            </a>
            {`, where I worked with the Advanced Algorithms team
            to develop AI algorithms for cell imaging and nucleus detection.`}
          </p>
          <p className="mb-4">
            {`I'm also Managing Online Editor at `}
            <a
              href="https://www.michigandaily.com"
              className="underline text-blue-400 hover:text-violet-400"
            >
              The Michigan Daily
            </a>
            {`, where I manage 40+ staffers across 3 subteams to create interactive websites
            and engaging data-driven articles.`}
          </p>
          <p className="mb-4">
            {`In my free time, you can find me playing guitar and singing with my band, Playing Koi.  𓆝 𓆟 𓆞 𓆝`}
          </p>
          <p className="mb-4">
            {" "}
            Check out my latest work{" "}
            <a href="/projects" className="underline text-blue-400 hover:text-violet-400">
              here
            </a>
            !{" "}
          </p>
        </section>
      </div>

      <div style={{ position: "relative" }}>
        <FishToggle href="https://www.youtube.com/watch?v=VlcI2Vu5uV4" />
      </div>

      {/* Projects grid below */}
      <div className="my-12">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-heading md:text-2xl lg:text-3xl">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 mx-auto w-9/10 md:grid-cols-2 md:gap-12">
          {projects.slice(0, 3).map((proj) => (
            <ProjectCard
              key={proj.title}
              title={proj.title}
              date={proj.date}
              url={proj.url}
              desc={proj.desc}
              img_url={proj.img_url}
            />
          ))}
          <ProjectCard
            key="See more"
            title="More Projects! →"
            date=""
            url="/projects"
            desc=""
            img_url="https://i.pinimg.com/736x/de/87/60/de87604127aa8d4ee0fa2aabe7900959.jpg"
          />
        </div>
      </div>
    </div>
  );
}

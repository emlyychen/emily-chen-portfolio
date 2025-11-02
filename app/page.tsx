import { BlogPosts } from "app/components/posts";
import Links from "./components/links";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-8 py-12">
      <img className="flex-fill img-fluid w-1/3" src="grad_photo.png"></img>
      <section className="flex-fill">
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          Emily Chen
        </h1>
        <Links></Links>
        <p className="mb-4">
          {`Hi! I'm Emily, a Masters student studying computer science at The University of Michigan with a focus on human computer interaction and AI for accessibility.
          Previously, I was an intern at `}
          <a href="https://www.sartorius.com/en" className="underline text-blue-400">Sartorius</a>
          {`, where I worked with the Advanced Algorithms team
          to develop AI algorithms for cell imaging and nucleus detection.`}
        </p>
        <p className="mb-4">
          {`I'm also Managing Online Editor at `}
          <a href="https://www.michigandaily.com" className="underline text-blue-400">The Michigan Daily</a>
          {`, where I manage 40+ staffers across 3 subteams to create interactive websites
          and engaging data-driven articles.`}
        </p>
        <p className="mb-4">
          {`In my free time, you can find me playing guitar and singing with my band, Playing Koi.  𓆝 𓆟 𓆞 𓆝`}
        </p>
        <p className="mb-4"> Check out my lastest work <a href="/projects" className="underline text-blue-400">here</a>! </p>
        <div className="my-8">{/* <BlogPosts /> */}</div>
      </section>
    </div>
  );
}

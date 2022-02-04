import ProjectCard from "../components/ProjectCard";

function projects() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Project</h1>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default projects;

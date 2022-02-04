export default function ProjectCard() {
  return (
    <div className="mt-10 cursor-pointer mb-20 ">
      <img
        src="https://anuraggharat.github.io/assets/newsapp.png"
        className="w-4/5 rounded-lg hover:shadow-2xl"
      />
      <h1 className="mt-4 text-2xl font-semibold">Project 1</h1>
      <p className="text-md text-gray-500 mt-2">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

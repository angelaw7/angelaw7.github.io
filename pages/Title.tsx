export default function Title() {
  return (
    <div className="flex justify-center mt-40 flex-col align-middle my-20">
      <h1 className="text-6xl font-bold text-center mb-2">hey, I'm Angela!</h1>
      <h2 className="text-2xl text-center mb-10">
        I'm a{" "}
        <span className="text-purple-400">software engineering student</span>
      </h2>

      <div className="flex-col">
        <a href="#">
          <p className="text-center text-xl hover:text-purple-400">about</p>
        </a>
        <a href="#">
          <p className="text-center text-xl hover:text-purple-400">
            experience
          </p>
        </a>
        <a href="#">
          <p className="text-center text-xl hover:text-purple-400">projects</p>
        </a>
        <a href="#">
          <p className="text-center text-xl hover:text-purple-400">contact</p>
        </a>
      </div>
    </div>
  );
}

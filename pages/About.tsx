import Heading from "../components/Heading";

export default function About() {
  return (
    <div id="about" className="my-20">
      <Heading name="About Me" color="bg-purple-400" />
      <div className="flex flex-col xl:flex-row p-6 justify-center">
        <div className="bg-fuchsia-900 p-6 rounded-lg xl:w-8/12">
          <p>
            My name is Angela and I’m a third-year Software Engineering student
            at McMaster University. I discovered my passion in tech after coding
            a virtual robot arm to pick up some virtual boxes in my first-year
            engineering design course, and ever since then fell in love with the
            logic, problem-solving, and creativity that comes with programming.
            <br />
            <br />
            Most of my previous experiences has been in fullstack web and app
            development, although I'm more interested in the backend side of
            things. I'm also curious about machine learning and am learning
            about it during my free time.
            <br />
            <br />
            Outside of work, I enjoy expressing myself through digital art,
            reaching my fitness goals through rock climbing and swimming, and
            exploring different worlds through gaming - some of my favourites
            are Hollow Knight and Ori for their amazing storytelling,
            animations, and soundtracks :)
          </p>
        </div>
        <div className="bg-purple-200 lg:w-4/12 mx-10 text-violet-600 text-center">
          will add profile soon!
        </div>
      </div>
    </div>
  );
}

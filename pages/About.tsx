import Heading from "../components/Heading";

export default function About() {
  return (
    <div className="my-20">
      <Heading name="About Me" color="bg-purple-500" />
      <div className="flex flex-row">
        <div className="bg-violet-900 p-6 rounded-lg w-8/12">
          <p>
            My name is Angela and I’m a third-year Software Engineering student
            at McMaster University. I discovered my passion in tech after coding
            a QArm to pick up some virtual boxes in my first-year engineering
            design course, and ever since then fell in love with the logic and
            creative side of programming. <br />
            <br />
            Most of my previous experience has been in fullstack app and web
            development, although I'm more interested in the backend side of
            things. I'm also curious about machine learning and am learning
            about it during my free time.
            <br />
            <br />
            Outside of work, I enjoy expressing myself through digital art,
            reaching my fitness goals through rock climbing and swimming, and
            exploring different worlds through gaming. This website itself was
            influenced by some of the games I love, including Hollow Knight,
            Ori, and Celeste! You should definietely check them out :)
          </p>
        </div>
        <div className="bg-blue-200 w-4/12 mx-10">img</div>
      </div>
    </div>
  );
}

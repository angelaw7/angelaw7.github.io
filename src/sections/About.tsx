import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Skill from "../components/Skill";
import ProfilePic from "../imgs/angela.png";
import { fade } from "../styles/animations";

export default function About() {
  return (
    <div id="about">
      <Section bgColour="bg-orange-200">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-8/12">
            <Heading name="A quick intro!" color="bg-orange-300" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fade(0.5, 0.5)}
            >
              <div className="p-6">
                <p>
                  Hey! My name is Angela and I&apos;m a third-year Software
                  Engineering student at McMaster University. I discovered my
                  passion in tech after coding a virtual robot arm to pick up
                  some virtual boxes in my first-year engineering design course,
                  and ever since then fell in love with the logic,
                  problem-solving, and creativity that comes with programming.
                  <br />
                  <br />
                  Most of my previous experiences have been in fullstack web and
                  app development, although I&apos;m more interested in the
                  backend side of things. I also enjoy learning about algorithms
                  that blow my mind and I&apos;m a pretty big fan of design
                  patterns and OOP.
                  <br />
                  <br />
                  Outside of work, I enjoy expressing myself through digital
                  art, reaching my fitness goals through rock climbing and
                  swimming, and exploring different worlds through gaming - some
                  of my favourites are Hollow Knight and Ori for their amazing
                  storytelling, art/design and soundtracks :)
                </p>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-4/12 mx-10 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fade(1, 0.5)}
            >
              <div className=" rounded-lg flex flex-col bg-orange-200 font-mono justify-center">
                <div className="bg-white w-36 h-36 mx-auto my-4 overflow-hidden border-4 border-white">
                  <Image
                    src={ProfilePic}
                    alt="profile picture"
                    width={200}
                    height={200}
                  />
                </div>
                <p className="font-bold text-2xl text-center">Angela</p>
                <div className="h-0.5 w-48 mx-auto my-2" />
                {/* <div className="text-center m-auto my-2">
                  <Skill name="Python" value={5} />
                  <Skill name="Java" value={4} />
                  <Skill name="JavaScript" value={4} />
                  <Skill name="Golang" value={3} />
                  <Skill name="C" value={3} />
                </div> */}
                <button>Read more! </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}

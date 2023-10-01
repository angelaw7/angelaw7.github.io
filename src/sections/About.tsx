import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Skill from "../components/Skill";
import ProfilePic from "../imgs/angela.png";
import { fade } from "../styles/animations";
import { aboutBlocks } from "../data/about";

export default function About() {
  return (
    <div id="about">
      <Section bgColour="bg-orange-200">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-8/12">
            <Heading name="A quick intro" color="bg-orange-200" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fade(0.5, 0.5)}
            >
              <div className="p-6">
                {aboutBlocks.map((block, index) => {
                  return (
                    <>
                      <p key={index}>{block}</p>
                      <br />
                    </>
                  );
                })}
              </div>
            </motion.div>
          </div>
          <div className="lg:w-4/12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fade(1, 0.5)}
            >
              <div className="rounded-lg flex flex-col bg-orange-200 font-mono justify-center">
                <div className="bg-white mx-auto my-4 overflow-hidden border-4 border-white rounded-full">
                  <Image
                    src={ProfilePic}
                    alt="profile picture"
                    width={160}
                    height={160}
                  />
                </div>
                <p className="font-bold text-2xl text-center">Angela</p>
                <div className="text-center m-auto my-2">
                  <Skill name="Python" value={5} />
                  <Skill name="Java" value={4} />
                  <Skill name="JavaScript" value={4} />
                  <Skill name="Golang" value={3} />
                  <Skill name="C" value={3} />
                </div>
                {/* <button>Read more! </button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}

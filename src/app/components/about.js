import React from "react";

import data from "../lib/data";

const About = () => {
  return (
    <div>
      <section className=" dark:bg-gray-800 dark:text-white pb-12" id="about">
        <div className="flex p-5 py-10 flex-col gap-10 lg:flex-row lg:gap-15">
          {data.map((item, index) => {
            return (
                <div key={index} className=" flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg">
                    {item.desc}
                </div>
            )
          }
            )}
          
        </div>

      </section>
    </div>
  );
};

export default About;

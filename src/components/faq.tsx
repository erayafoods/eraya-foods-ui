"use client";
import { useState } from "react";
import { faqDataSet1, faqDataSet2 } from "@/lib/constants";

export default function Faq() {
  const [openIndexSet1, setOpenIndexSet1] = useState<number | null>(0);
  const [openIndexSet2, setOpenIndexSet2] = useState<number | null>(0);

  const toggleFAQ = (index: number, set: string) => {
    if (set == "set1") {
      setOpenIndexSet1(openIndexSet1 === index ? null : index);
    } else {
      setOpenIndexSet2(openIndexSet2 === index ? null : index);
    }
  };

  return (
    <div className="wrapper py-10">
      <p className="text-2xl md:text-4xl lg:w-[60%] text-[#997E2C]">
        Where Every Bite Nourishes Your Story
        <br />
        Premium Superfoods, Your Path to Wellness
      </p>

      <div className="mt-10">
        <h2 className="text-2xl md:text-3xl lg:max-w-[60%] font-thin">
          Frequently Asked Questions
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            {faqDataSet1.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index, "set1")}
                  className="flex w-full justify-between p-2.5 text-start"
                >
                  <span className=" lg:text-xl">{faq.question}</span>
                  <span>{openIndexSet1 === index ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndexSet1 === index
                      ? "h-fit border-b-2 border-secondary"
                      : "h-0 border-b-2"
                  }`}
                >
                  <p className="p-2.5 pt-1.5">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {faqDataSet2.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index, "set2")}
                  className="flex w-full justify-between p-2.5 text-start"
                >
                  <span className=" lg:text-xl">{faq.question}</span>
                  <span>{openIndexSet2 === index ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndexSet2 === index
                      ? "h-fit border-b-2 border-secondary"
                      : "h-0 border-b-2"
                  }`}
                >
                  <p className="p-2.5 pt-1.5">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

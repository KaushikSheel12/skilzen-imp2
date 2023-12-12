import Image from "next/image";
import React from "react";
import { LiUlComponent } from "./LiUlComponent";
import { AiOutlineRight } from "react-icons/ai";

export const EligibilityForm = () => {
  const KYC = ["PAN card ", "Driving License ", "Aadhar Card"];
  const Address = [
    "Aadhar Card ",
    "Valid water/electricity/ LPG bill",
    "Voter’s ID card ",
    "Current House lease agreement ",
    "Valid passport ",
  ];

  const TheAcademic = [
    "10th Result",
    "12th Result",
    "Under Graduate Result Semester Wise (If required)",
    "Entrance Exam Result - Abroad institutes (GRE, GMAT, TOEFL, etc.)",
    "Entrance Exam Result- Domestic institutes (CAT, CET, GMAT, CMAT, JEE, NEET, GRE, etc.)",
    "Proof of Admission ",
  ];

  const CommonDocuments = [
    "Title deed & Sales Deed",
    "Registration receipt",
    "Allotment letter",
    "Chain deed of 30 years",
    "Tax copy or electricity bill",
    "Government-approved building plan",
    "OC and Completion Certificate (if the property is constructed)",
  ];

  const EligibleCourses = [
    "Medicine, Management & Engineering",
    "Agri Diploma",
    "Medical Veterinary Diploma",
    "Teacher Training Courses",
    "Nursing Courses",
    "Computer studies",
    "Data Entry Operator Course",
    "Diploma/Degree Courses In Areas Of Aeronautics, Shipping, Pilot Training.",
    "Vocational courses that are offered by a Government organization or department, State Skill Missions, State Skill Corporations etc.",
  ];

  return (
    <>
      <div className="w-full h-[200px] md:h-[350px] relative">
        <h1 className=" z-10 absolute text-white md:top-[130px] top-[80px] left-5 md:left-40 text-[20px] md:text-[36px] font-semibold tracking-[1px]">
          Education Loan Eligibility
        </h1>
        <p className=" z-10 absolute text-white md:top-[190px] md:left-40  top-[110px] left-5  text-[16px] md:text-[17px]  ">
          Check if you are eligible for student loan from UniCreds
        </p>
        <Image
          src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FEligibility%2Fdesktop-banner.png&w=2048&q=75"
          alt="banner"
          fill
          className="object-cover"
          loading="lazy"
        />

        <div className="md:w-[450px] w-[90%] h-[550px]  px-2 py-2 right-5  md:right-[110px] bg-white shadow-2xl md:fixed mx-auto top-[170px]  absolute rounded-2xl z-10 md:top-28">
          <h1 className="text-[25px] font-semibold  px-4 pt-2 tracking-[1px] ">
            Start your journey now
          </h1>
          <p className="text-[15px] px-4 ">Help us with a few details.</p>
          <div className="md:w-[405] w-[90%] h-[60px] border border-gray-400  mx-auto mt-5">
            <span className="text-[12px]  font-semibold px-3 py-1">
              FULL NAME
            </span>
            <input
              type="text"
              className="w-full px-3 tracking-[1px] "
              placeholder="John Smith "
            />
          </div>

          <div className="md:w-[405] w-[90%] h-[60px] border border-gray-400 mx-auto mt-2">
            <span className="text-[12px] font-semibold  px-3 py-1">EMAIL</span>
            <input
              type="email"
              className="w-full px-3 tracking-[1px] "
              placeholder="johnsmith@gmail.com "
            />
          </div>

          <div className="md:w-[405] w-[90%] h-[60px] border border-gray-400 mx-auto mt-2">
            <span className="text-[12px] font-semibold  px-3 py-1">
              PHONE NUMBER
            </span>
            <input
              type="number"
              className="w-full px-3 tracking-[1px] "
              placeholder="1234567890"
            />
          </div>

          <div className="md:w-[405] w-[90%] h-[60px] border border-gray-400 mx-auto mt-2">
            <span className="text-[12px] font-semibold  px-3 py-1">
              LOAN AMOUNT
            </span>
            <input
              type="number"
              className="w-full px-3 tracking-[1px] "
              placeholder="00,000"
            />
          </div>

          <div className="md:w-[405] w-[90%] h-[60px]  mx-auto flex justify-center gap-5 mt-2">
            <div className="w-full h-[60px] border border-gray-400 mx-auto ">
              <span className="text-[12px] font-semibold  px-3 py-1">
                PERMANENT CITY
              </span>
              <input
                type="text"
                className="w-full px-3 tracking-[1px] "
                placeholder="Mumbai"
              />
            </div>
            <div className="w-full h-[60px] pr-2 border border-gray-400 mx-auto">
              <span className="md:text-[12px] text-[12px] px-1  font-semibold  md:px-3 py-1">
                ADMISSION STATUS
              </span>

              <select className="w-full px-2  tracking-[1px] ">
                <option className=" text-gray-300" value="">
                  Select
                </option>
                <option value="">Not Applied </option>
                <option value=""> Applied </option>
                <option value="">Not Applied </option>Confirmed
              </select>
            </div>
          </div>
          <button className="md:w-[405] w-[90%] relative grid place-content-center h-[50px] bg-green-600 text-white rounded-lg mx-auto mt-3">
            <span>Continue</span>
            <AiOutlineRight size={15} className="absolute right-2 top-4" />
          </button>
          <p className="text-[12px] py-2 text-center">
            By submitting you agree to our{" "}
            <span className="text-blue-700">Terms</span> and{" "}
            <span className="text-blue-700">Privacy Policy.</span>{" "}
          </p>
        </div>
      </div>

      <div className="md:w-[50%] w-full md:absolute  md:mt-0 mt-[540px]  left-14  px-4 md:px-2 py-2  h-full mx-auto ">
        <div className="">
          <h1 className="text-[18px] font-bold tracking-[1px] ">
            Education Loan Eligibility
          </h1>
          <p className="py-2 text-[17px]  leading-6 text-gray-600 ">
            Calculate the eligibility for your student loan with this basic
            calculator. It will assist you in calculating the amount for which
            you are eligible. You will have your loan application rejected if
            you apply for an amount greater than you are eligible for. Your
            valuable time and money will be lost, plus you will have no idea of
            the exact sum you should apply for.
          </p>
          <h1 className="text-[18px] font-bold tracking-[1px] ">
            Documents Required For Education Loans
          </h1>
          <p className="py-1 text-[17px] leading-6 font-bold ">
            Identity-Related Documents Required From Both Applicant And
            Co-Applicant
          </p>

          <LiUlComponent heading="KYC Documents:" items={KYC} />
          <LiUlComponent heading="Address Proof:" items={Address} />
          <LiUlComponent
            heading="Documents Related To The Academic Record Of The Applicant:"
            items={TheAcademic}
          />
          <p className="text-[18px] font-bold tracking-[1px] ">
            Collateral Related Documents
          </p>

          <LiUlComponent heading="Common Documents:" items={CommonDocuments} />
          <h1 className="text-[18px] font-bold tracking-[1px] mt-3 ">
            Eligible Courses For Education Loans
          </h1>
          <p className="py-2 text-[17px] leading-6 text-gray-600 ">
            Typically, the educational loan is available for all courses offered
            by various institutes that are recognized by the respective
            governing bodies. These loans are available for various
            undergraduate programs, postgraduate programs & doctoral programs
            and also for special diploma courses. These loans are also
            accessible for specialized courses & training depending on each
            lender’s policies. Thus it is possible that one lender may offer a
            loan for one course while another may not. The general list below
            gives the names of few courses for which loans are available:
          </p>

          <LiUlComponent heading="" items={EligibleCourses} />
        </div>
      </div>
    </>
  );
};

import Image from "next/image";
import React, { useState } from "react";
import { FiPercent } from "react-icons/Fi";
import { PercentMark } from "./PercentMark";
import { LuNewspaper } from "react-icons/lu";
import { RxTimer } from "react-icons/Rx";
import { TbZoomMoney } from "react-icons/tb";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/Bs";
import { TickBox } from "./TickBox";
import { GiCheckMark } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
const NavItems = [
  "Features",
  "Eligibilty",
  "Benefits",
  "How to Apply",
  "Documents",
  "Loan Repayent",
  "FAQs",
];

export const Loanthree = () => {
  const [active, setActive] = useState(null);

  const handleSelect = (index) => {
    setActive(index);
  };

  return (
    <>
      <div className="md:w-[90%] md:h-[400px]  py-4  bg-[#F7F7F7] mx-auto grid md:grid-cols-2 grid-cols-1">
        <div className="w-md:w-fit h-full  py-4">
          <div className="w-[220px] h-[90px]  relative rounded-md mx-auto">
            <Image
              src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FHDFC.jpg&w=828&q=75"
              alt="img"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h2 className="md:text-[30px] text-center py-4  font-semibold">
            HDFC Credila - Education Loan
          </h2>
          <div className="flex items-center gap-3 w-fit mx-auto">
            <p className="w-fit px-4 py-[2px] rounded-full text-[12px]  bg-[#f3e9e9]">
              NBFC
            </p>
            <p className="w-fit px-4 py-[2px] rounded-full text-[12px]  bg-[#f3e9e9]">
              COLLTERAL NEEDED
            </p>
            <p className="w-fit px-4 py-[2px] rounded-full text-[12px]  bg-[#f3e9e9]">
              LOAN MARGIN : NA
            </p>
          </div>
          <p className="text-[16px] text-center py-4 font-semibold">
            7 Working Days Avg Loan Processing Time
          </p>
        </div>

        <div className="w-md:w-full h-full   grid place-content-center ">
          <div className="md:w-[600px] md:flex items-center py-6 px-4 rounded-lg  bg-white h-fit md:h-[300px] mx-auto">
            <div className="md:w-[60%]  place-content-center grid grid-cols-2 justify-around h-full md:border-r-2">
              <div className="">
                <PercentMark
                  icon={<FiPercent size={23} color="green" />}
                  ptag="Margin"
                  status="NA"
                />

                <PercentMark
                  icon={<RxTimer size={23} color="green" />}
                  ptag="Loan Tenure"
                  status="Upto 15 Years"
                />
                <PercentMark
                  icon={<TbZoomMoney size={23} color="green" />}
                  ptag="Early Repayment"
                  status="No"
                />
              </div>

              <div className="">
                <PercentMark
                  icon={<LuNewspaper size={23} color="green" />}
                  ptag="Collateral"
                  status="Yes"
                />

                <PercentMark
                  icon={<FiPercent size={23} color="green" />}
                  ptag="Processing fee"
                  status="1.0% - 2%"
                />
                <PercentMark
                  icon={<AiOutlineHome size={23} color="green" />}
                  ptag="Living Cost"
                  status="Yes"
                />
              </div>
            </div>

            <div className="md:w-[40%] md:py-4 md:block hidden     h-full">
              <p className="text-[18px] md:mt-4 text-center text-[#767272]">
                Secured Loan
              </p>
              <div className="mx-auto w-fit mt-2 border-b-2 px-4">
                <PercentMark
                  icon={<BsCurrencyRupee size={23} color="green" />}
                  ptag="Amount"
                  status="Up To 1.5Cr"
                />
              </div>

              <p className="text-[18px] mt-4 text-center text-[#767272]">
                Un-Secured Loan
              </p>
              <div className="mx-auto w-fit mt-2 px-4">
                <PercentMark
                  icon={<BsCurrencyRupee size={23} color="green" />}
                  ptag="Amount"
                  status="Up To 1.5Cr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[90%] mx-auto py-5 md:h-20 h-fit px-4   bg-[#FFFCF4] md:flex items-center justify-around ">
        <div className="flex items-center gap-2">
          <Image
            src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Partners/shield-check.svg"
            alt="svg"
            width={20}
            height={20}
          />
          <h3 className="text-[18px] md:py-0 py-4">UniCreds Guarntee</h3>
        </div>

        <TickBox
          icon={
            <GiCheckMark size={15} className="text-[green]" color="green" />
          }
          text="Quick Loan Sanctions"
        />

        <TickBox
          icon={
            <GiCheckMark size={15} className="text-[green]" color="green" />
          }
          text="100% Transparency"
        />

        <TickBox
          icon={
            <GiCheckMark size={15} className="text-[green]" color="green" />
          }
          text="No Hidden Fees"
        />
        <TickBox
          icon={
            <GiCheckMark size={15} className="text-[green]" color="green" />
          }
          text="24x7 Support"
        />
      </div>

      <div className="md:w-[80%] w-full overflow-scroll mx-auto flex items-center justify-between h-[50px] py-2 ">
        {NavItems?.map((el, index) => {
          return (
            <p
              onClick={() => handleSelect(index)}
              className={`   ${
                active === index ? " border-2 rounded-lg border-[#6da1e1] " : ""
              }  cursor-pointer hover:font-bold  px-6 whitespace-nowrap md:px-3 py-2`}
              key={index}
            >
              {el}
            </p>
          );
        })}
      </div>

      <div className="md:w-[80%] w-full h-full mx-auto px-2  mt-5">
        <h2 className="text-[22px] font-semibold">
          How To Apply for HDFC Abroad Education Loan?
        </h2>
        <p className="text-[16px] mt-4 ">
          HDFC Credila Financial Services, India's first specialist education
          loan lender, offers education loans under the name HDFC Credila
          Education loan for students wishing to study abroad at over 1000
          universities in at least 35 countries. What distinguishes HDFC Credila
          is its personalised education loan options that take into account the
          applicant's course and country preferences. Students who want to study
          in the country or abroad can get an education loan from HDFC Credila,
          a subsidy firm of HDFC Limited. HDFC Credila, the country's first
          dedicated education loan lender, offers income tax advantages under
          Section 80E of the Income Tax Act. You can borrow up to 100% of your
          educational expenditures.{" "}
        </p>

        <p className="text-[16px] mt-7 ">
          HDFC Credila acknowledges that the work we do at UniCreds is
          consistent with the company's mission and objectives. The
          collaboration between HDFC Credila and UniCreds is a new ray of hope
          for students looking for low-cost education loans to study abroad as
          soon as possible and in the most convenient way imaginable.
        </p>

        <div className="w-full  mt-5 flex items-center gap-2 ">
          <div className="w-[20%] md:block hidden bg-[#E8E8E9]  h-full">
            {" "}
            <p className="text-center py-2 font-semibold">Features</p>{" "}
            <p className="px-2 py-4 bg-slate-100">Loan amount</p>
            <p className="px-2 py-4 bg-slate-100">Margin money</p>
            <p className="px-2 py-4 bg-slate-100">Interest rate</p>
            <p className="px-2 py-4 mt-8 bg-slate-100">Processing fee</p>
            <p className="px-2 py-4  bg-slate-100">Processing time</p>
            <p className="px-2 py-4  bg-slate-100">Loan tenure</p>
            <p className="px-2 py-4  bg-slate-100">Prepayment charges</p>
            <p className="px-2 py-4  bg-slate-100">Repayment holiday</p>
            <p className="px-2 py-4  bg-slate-100">Countries covered</p>
            <p className="px-2 py-4  bg-slate-100">Payment study period</p>
          </div>
          <div className="md:w-[80%] w-full bg-[#E8E8E9]  h-full">
            <p className="text-center py-2 font-semibold">
              Education Loan Details
            </p>
            <p className="px-2 py-4 bg-slate-100">
              Upto ₹50Lac (Without Collateral) Exceptional cases - up to 1
              Crore.
            </p>
            <p className="px-2 py-4 bg-slate-100">Nil</p>
            <p className="px-2 py-2 bg-slate-100">
              The HDFC Credila education loan interest rates and charges are
              mentioned below: 1. Rate of Interest - The interest rate is a
              floating rate related to HDFC Credila's Benchmark Lending Rate
              (CBLR). CBLR is currently 12.55% per annum. 2. Processing Fee -
              1.0% to 1.2% of Loan Amount 3. Pre-payment charges - Every fiscal
              year, the borrower has the option to pay up to 25% of the starting
              principal due without incurring any fees.
            </p>
            <p className="px-2 py-4 bg-slate-100">1.0% to 1.2% </p>
            <p className="px-2 py-4 bg-slate-100 ">12 Working Days</p>
            <p className="px-2 py-4 bg-slate-100 ">14 Years</p>
            <p className="px-2 py-4 bg-slate-100 ">Nil</p>
            <p className="px-2 py-4 bg-slate-100 ">
              Interest to be paid during the moratorium period. EMI starts after
              the completion of course + 6 months.
            </p>
            <p className="px-2 py-4 bg-slate-100 ">
              HDFC Credila offers abroad education loans to study in over 35+
              different countries across the world including the USA, Canada,
              the UK, Germany, Australia, Singapore, France, etc
            </p>
            <p className="px-2 py-4 bg-slate-100 ">
              Yes, simple interest. For selected good profile, partial interest
              repayment available.
            </p>
          </div>
        </div>

        <div className="mt-10 px-2 md:px-20 relative w-full flex items-center text-white rounded-md bg-[black]  h-[150px] md:h-[350px]  ">
          <div className="w-full md:py-4  py-2 rounded-md h-full">
            <h2 className="md:text-[36px] text-[20px] leading-6 md:leading-[47px]">
              Looking For Faster And Streamlined Process?
            </h2>
            <div className="flex md:mt-5 mt-2 items-center gap-3">
              <div className="w-fit h-fit md:text-[17px] whitespace-nowrap text-[10px] md:px-3 px-1 py-[2px] border rounded-md">
                100% Transparency
              </div>
              <div className="w-fit h-fit md:text-[17px] whitespace-nowrap text-[10px] md:px-3 px-1 py-[2px] border rounded-md">
                100% Free
              </div>
            </div>
            <p className="md:text-[16px] md:block hidden text-[12px] md:leading-5 md:mt-5">
              Our education loan counsellors will stay by your side every step
              of the way and recommend the best partner and guide you through
              the loan applying and sanctioning process.
            </p>
            <div className="w-fit h-fit md:mt-6 mt-2 px-3  md:px-7 md:text-[17px] text-[10px] whitespace-nowrap  py-1 md:py-2 cursor-pointer bg-[green] rounded-md text-white">
              Contect Our Expert For Free &gt;
            </div>
          </div>
          <div className="w-full relative rounded-md  h-full">
            <Image
              className="object-contain"
              fill
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/illustrations/scholar-girl.png"
              alt="img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full  mt-5 flex items-center gap-2 ">
          <div className="w-[20%] md:block hidden bg-[#E8E8E9] md:h-[530px]  h-full">
            {" "}
            <p className="text-center py-2 font-semibold">Type</p>{" "}
            <p className="px-2 py-4 bg-slate-100">
              Eligibility Criteria For HDFC Credila Education Loan
            </p>
            <p className="px-2 py-4 bg-slate-100">Eligible Courses</p>
            <p className="px-2 py-4 bg-slate-100">Eligible Countries</p>
          </div>
          <div className="md:w-[80%] w-full bg-[#E8E8E9]  h-full">
            <p className="text-center py-2 font-semibold">Requirement</p>
            <p className="px-2 py-4 bg-slate-100">
              You are eligible to apply for the HDFC student loan only if you’ve
              met the following requirements:
            </p>
            <p className="px-2 py-4 bg-slate-100">For the borrower - </p>
            <p className="px-2 py-2 bg-slate-100">
              1. The student applying for the Education Loan should be an Indian
              citizen, 18 years old or above. 2. The student should be enrolled
              in a recognised institution as a full-time student. 3. An earning
              co-borrower in India should co-sign the Education Loan.
            </p>
            <p className="px-2 py-4 bg-slate-100">For the co-borrower - </p>
            <p className="px-2 py-4 bg-slate-100 ">
              Co-borrowers are required to have a bank account in India.
              Co-applicant(s) must be Indian citizens. Co-applicant need to show
              proof of earning based in India. A co-applicant can be any of the
              following relatives - Father / Mother / Brother / Sister (married)
              /Spouse/ Father-in-law/ Mother-in-law/ Sister-in-law/
              Brother-in-law/ Maternal or Paternal Uncle or Aunt/ Grandparents &
              First Cousins.
            </p>
            <p className="px-2 py-4 bg-slate-100 ">
              {" "}
              All full-time courses from recognized colleges and universities in
              all major countries like the USA, the UK, Canada, Singapore,
              Australia, Germany, France, etc.
            </p>
            <p className="px-2 py-4 bg-slate-100 ">
              HDFC Credila offers abroad education loans to study in over 35+
              different countries across the world including the USA, Canada,
              the UK, Germany, Australia, Singapore, France, etc.
            </p>
          </div>
        </div>

        <p className="md:text-[24px] text-[20px] font-semibold   mt-5">
          HDFC foreign Education Loan Eligibility
        </p>
        <p className="md:text-[18px] text-[15px] mt-2">
          You are eligible to apply for the HDFC student loan only if you’ve met
          the following requirements:
        </p>

        <div className="md:w-full hidden md:block mt-10 relative h-[600px] border bg-red-600 mx-auto">
          <Image
            fill
            src="https://di2vt7hcm6vs0.cloudfront.net/v2/bg/BannerForm.png"
            alt="bg-img"
            className="object-cover"
          />

          <div className="md:w-[500px] w-[90%]  h-[550px]  px-4 py-2 right-5  md:left-20    absolute top-[270px]  md:top-[30px]  rounded-2xl z-10">
            <h1 className="md:text-[42px] leading-[55px]  text-white ">
              Get Guidance At Every Step Of Your Loan Application
            </h1>
            <p className="text-[16px] text-white">
              We ensure 100% transparency throughout the education loan
              process.Our education loan counsellors will stay by your side
              every step of the way.
            </p>
            <p className="md:text-[20px] mt-24 text-white font-semibold ">
              Need Guidance Faster? Call us at:
            </p>
            <div className="flex gap-2 rounded-lg px-2 py-2 w-fit border items-center mt-10 ">
              <BiPhoneCall color="green" size={25} />
              <p className="text-white text-[16px]">18001217661</p>
            </div>
          </div>

          <div className="md:w-[440px] w-[90%] h-[550px]  px-2 py-2 right-5  md:right-20  bg-white shadow-2xl absolute top-[270px]  md:top-[50px]  rounded-2xl z-10 ">
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
              <span className="text-[12px] font-semibod  px-3 py-1">EMAIL</span>
              <input
                type="email"
                className="w-full px-3 tracking-[1px] "
                placeholder="johnsmith@gmail.com "
              />
            </div>

            <div className="md mt-4 :w-[405] w-[90%] h-[60px] border border-gray-400 mx-auto mt-2">
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

        <h3 className="md:text-[24px] font-semibold text-[16px]  mt-5">
          How To Apply for HDFC Abroad Education Loan?
        </h3>
        <p className="text-[16px] ">
          1. Once you've established your HDFC Credila education loan
          eligibility, you can submit an online application or get in touch with
          one of our expert education loan counsellors to schedule a callback.
          Our counsellors can assist you in obtaining an HDFC Credila Education
          loan without collateral, depending on your needs. 2. After you've
          submitted your profile information, our specialists will carefully
          review it and, based on your eligibility, recommend the following
          course of action to you. 3. UniCreds enables students to upload
          documents digitally, sparing you the trouble of having to present your
          documents at the bank and allowing you to do it from the convenience
          of your home. 4. In addition, UniCreds gives you a customised set of
          documents to submit based on your profile and the loan you've applied
          for to speed up the process.
        </p>





        <div className="mt-10 px-2 md:px-20 relative w-full flex items-center text-white rounded-md bg-[black]  h-[150px] md:h-[350px]  ">
          <div className="w-full md:py-4  py-2 rounded-md h-full">
            <h2 className="md:text-[36px] text-[20px] leading-6 md:leading-[47px]">
              Looking For Faster And Streamlined Process?
            </h2>
            <div className="flex md:mt-5 mt-2 items-center gap-3">
              <div className="w-fit h-fit md:text-[17px] whitespace-nowrap text-[10px] md:px-3 px-1 py-[2px] border rounded-md">
                100% Transparency
              </div>
              <div className="w-fit h-fit md:text-[17px] whitespace-nowrap text-[10px] md:px-3 px-1 py-[2px] border rounded-md">
                100% Free
              </div>
            </div>
            <p className="md:text-[16px] md:block hidden text-[12px] md:leading-5 md:mt-5">
              Our education loan counsellors will stay by your side every step
              of the way and recommend the best partner and guide you through
              the loan applying and sanctioning process.
            </p>
            <div className="w-fit h-fit md:mt-6 mt-2 px-3  md:px-7 md:text-[17px] text-[10px] whitespace-nowrap  py-1 md:py-2 cursor-pointer bg-[green] rounded-md text-white">
              Contect Our Expert For Free &gt;
            </div>
          </div>
          <div className="w-full relative rounded-md  h-full">
            <Image
              className="object-contain"
              fill
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/illustrations/scholar-girl.png"
              alt="img"
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="md:text-[24px] font-semibold text-[16px]  mt-5">Documents Required for an Abroad Education Loan By HDFC Credila</h2>

        <p className="md:text-[17px] md:block hidden text-[12px] md:leading-5 md:mt-5">Once you meet the HDFC Credila education loan eligibility; below are the documents required for HDFC Education Loan</p>




        <div className="w-full  mt-5 flex items-center gap-2 ">
          <div className="w-[20%] md:block hidden bg-[#E8E8E9] md:h-[510px]  h-full">
            {" "}
            <p className="text-center py-2 font-semibold">Type</p>{" "}
            <p className="px-2 py-4 bg-slate-100">
            Identity Details
            </p>
            <p className="px-2 py-4 bg-slate-100">Academic Documents</p>
            <p className="px-2 py-4 bg-slate-100">Financial Documents</p>
            <p className="px-2 py-4 bg-slate-100">Income Proof of Co-Applicant</p>
          </div>
          <div className="md:w-[80%] w-full bg-[#E8E8E9]  h-full">
            <p className="text-center py-2 font-semibold">Documents Required</p>
            <p className="px-2 py-4 bg-slate-100">
            1. Permanent Account Number (PAN) Card
2. Voter’s ID Card
3. Passport
4. Driving License
5. Aadhaar Card
            </p>
            <p className="px-2 py-4 bg-slate-100">1. Marksheet/Certificate of 12th Exam
2. Marksheet/Certificate of Subsequent Years of Education e.g. BE, BCom, BSc, etc.
3. Marksheet of Any Entrance Exam Taken e.g. CAT, CET, GRE, GMAT, IELTS, TOEFL, etc. (If applicable)
4. Scholarship Documents (if applicable)</p>
            <p className="px-2 py-2 bg-slate-100">
            1. (If more than one bank account, provide copies of all)
2. Make sure to include the bank statements of the Bank Account where Salary or Business professional receipts are credited every month
            </p>
            <p className="px-2 py-4 bg-slate-100">A) For Salaried Employees (All the following)</p>
            <p className="px-2 py-4 bg-slate-100 ">
            1. The most recent three salary slips or salary certificate on employer letterhead
2. Employer Form 16 from the last two years or Income Tax Returns from the previous two years
3. Any Other Income Proof Not Included in the Above Documents
            </p>
            <p className="px-2 py-4 bg-slate-100 ">
            B) If you are self-employed or a professional (All the following)
            </p>
            <p className="px-2 py-4 bg-slate-100 ">
            1. Income Tax Returns for the Previous Two Years
2. CA-Certified Financial Statements or Provisional Financial Statements for the Previous Two Years (any one of the following, Lease Deed, Utility Bill, Title Deed, etc.)
3. Any Other Income Proof Not Included in the Above Documents
            </p>
          </div>
        </div>



      </div>
    </>
  );
};

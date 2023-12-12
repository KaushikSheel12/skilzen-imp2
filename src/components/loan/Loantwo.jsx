import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { LiUlComponent } from "../educantionLoan/LiUlComponent";
import { GrCheckmark } from "react-icons/Gr";
import { TickBox } from "./TickBox";
import { GiCheckMark } from "react-icons/gi";
import { FaMoneyBillAlt, FaUserGraduate } from "react-icons/Fa";
import { BiSolidLocationPlus } from "react-icons/bi";
import { NbfcBox } from "./NbfcBox";

export const Loantwo = () => {
  const KYC = ["PAN card ", "Driving License ", "Aadhar Card"];

  const NavItem = ["Overview", "Eligibility", " Documents", "How to Apply"];

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

  const Info1 = [
    "There is no margin on student loans up to Rs. 4,000,000",
    "15% interest rate on education loans up to Rs. 4,00,000 on bank loan for study abroad",
    "Your proposed education loan can be released two days after it has been approved",
    "Once the loan is authorised, one can also reimburse the previous instalments made toward the course that were refinanced.",
  ];

  const Info2 = [
    "Processing fees: For loans beyond Rs. 7.5 lakhs, 1% (maximum Rs. 10,000)",
    "There are no processing charges for transactions up to Rs 7.50 lakh",
    "Loans up to Rs. 4 lakhs have no margin",
    "No cost debit card",
    "There won't be any fees for the paperwork",
    "No security required for up to Rs. 7.50 lakh",
  ];

  const EducationInfo = [
    "The candidate must be an Indian national",
    "If the applicant is under 18 years old, then her or his parents will have to take out the loan",
    "The candidate must have a strong academic record",
    "The candidate must have been accepted to a reputable overseas university, institution, or college",
    "The applicant's chosen course must be technical or professional because banks prefer courses that are job-oriented",
  ];

  return (
    <div className="md:w-[90%] w-full mx-auto h-full">
      <div className="w-full h-[350px] md:h-[450px] relative">
        <div className="md:w-[550px] w-full py-3 md:left-8 h-full absolute z-10 md:px-4 px-3 ">
          <h1 className="  mt-10 md:leading-10 text-white  text-[20px] md:text-[32px] font-semibold tracking-[1px]">
            Simplifying Education Loan For Abroad Studies!
          </h1>

          <div className="md:w-fit w-full h-fit mt-5  md:mt-14 space-x-5  md:space-x-10 text-white grid grid-cols-2  ">
            <div className="">
              <TickBox
                icon={
                  <GiCheckMark
                    size={20}
                    className="text-[green]"
                    color="green"
                  />
                }
                text="Quick Approvals"
              />
              <TickBox
                icon={
                  <GiCheckMark
                    size={20}
                    className="text-[green]"
                    color="green"
                  />
                }
                text="Non Collateral Loans"
              />
              <TickBox
                icon={
                  <GiCheckMark
                    size={20}
                    className="text-[green]"
                    color="green"
                  />
                }
                text="Check Eligibility"
              />
            </div>

            <div className="">
              <TickBox
                icon={
                  <GiCheckMark
                    size={20}
                    className="text-[green]"
                    color="green"
                  />
                }
                text="Quick Approvals"
              />
              <TickBox
                icon={
                  <GiCheckMark
                    size={20}
                    className="text-[green]"
                    color="green"
                  />
                }
                text="Non Collateral Loans"
              />
              <TickBox
                icon={
                  <GiCheckMark
                    size={20}
                    className="text-[green]"
                    color="green"
                  />
                }
                text="Check Eligibility"
              />
            </div>
          </div>

          <div className="w-[190px] h-[80px] md:block hidden md:mt-4 mx-auto md:mx-0 mt-[620px] relative">
            <Image
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/AbroadEducation/google-reviews.svg"
              fill
              alt=""
            />
          </div>
        </div>

        <Image
          src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FAbroadEducation%2Fabroad-education-banner.jpg&w=3840&q=75"
          alt="banner"
          fill
          className="object-cover"
          loading="lazy"
        />

        <div className="md:w-[440px] w-[90%] h-[550px]  px-2 py-2 right-5  md:left-[1000px]   bg-white shadow-2xl absolute top-[270px]  md:top-[50px]  rounded-2xl z-10 ">
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

      <div className="w-fit mt-1  grid grid-cols-1 md:grid-cols-3 h-fit px-4 py-2">
        <div className="w-[280px] grid place-content-center h-fit px-2 py-3  border-r-2">
          <div className="flex items-center space-x-5">
            <FaMoneyBillAlt size={25} color="green" />
            <div>
              <p className="md:text-[30px]">800 Cr+</p>
              <p className="text-[12px] mt-[-4px]">Disbursed</p>
            </div>
          </div>
        </div>

        <div className="w-[280px] grid place-content-center h-fit px-2 py-3 border-r-2">
          <div className="flex items-center space-x-5">
            <FaUserGraduate size={25} color="green" />
            <div>
              <p className="md:text-[30px]">5K+</p>
              <p className="text-[12px] mt-[-4px]">Loans Facilitated</p>
            </div>
          </div>
        </div>

        <div className="w-[280px] grid place-content-center h-fit px-2 py-3 ">
          <div className="flex items-center space-x-5">
            <BiSolidLocationPlus size={25} color="green" />
            <div>
              <p className="md:text-[30px]">20+</p>
              <p className="text-[12px] mt-[-4px]">Countries</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:h-[50px]  h-fit py-2 px-4 md:px-20 rounded-lg shadow-lg mt-[300px] md:mt-[100px]">
        <div className="flex items-center gap-5 md:gap-20 w-fit h-fit">
          {NavItem?.map((el, i) => {
            return (
              <p
                className="md:text-[18px] whitespace-nowraptext-[14px] hover:font-bold  cursor-pointer"
                key={i}
              >
                {el}
              </p>
            );
          })}
        </div>
      </div>

      <div className="md:px-0 px-4 md:mt-0 mt-[0px]">
        <p className="mt-10 text-[17px] ">
          Indian students are becoming more and more inclined to complete their
          studies overseas. While the US, UK, and Canada continue to be some of
          the top options, Australia and EU nations are not far behind in terms
          of educational prospects. Getting an education loan for abroad studies
          is one of the most preferred options to finance education during the
          time of the course. For students who aspire to study abroad, many
          banks and other lenders now provide overseas education loans.
          Different student loan programmes are available from these lenders,
          but picking the one that is best for you might be challenging. We at
          UniCreds bridge the gap & help you tackle this challenge of choosing
          the best education loan. Our experts guide you to pick the most
          suitable competitive education loan available toda
        </p>

        <p className="font-semibold md:mt-7 mt-5 leading-7 text-[20px] md:text-[24px]">
          Different types of Education Loans to study abroad
        </p>

        <p className="md:mt-7  mt-5 md:text-[17px]">
          There are two types of education loans for abroad studies on the basis
          of Collateral. Both types are explained in detail below:
        </p>

        <p className="mt-10  text-[17px]">
          <span className="font-semibold"> Secured Education Loan:</span> A
          secured education loan, often known as a loan with collateral,
          requires the applicant to provide either material or immaterial
          security. A pledge of security to the lender may take the form of real
          estate, a fixed deposit, a life insurance policy, etc. Since the bank
          needs to confirm all the paperwork pertaining to the pledged security,
          this type of loan acceptance takes longer. However, it has lower
          interest rates on student loans, lengthier payback schedules, and no
          repayment throughout the course of school. Additionally, there is a
          larger likelihood that this education loan will be authorised, and
          parental income is not a factor in a loan acceptance.
        </p>

        <p className="mt-10  text-[17px]">
          <span className="font-semibold"> Unsecured Education Loan:</span> In
          the case of an unsecured education loan for abroad studies, the
          applicant is not required to put up any security. This is an education
          loan for abroad studies without collateral. This form of education
          loan is suitable for students who do not have any security to give.
          However, it should be noted that an unsecured education loan is more
          difficult to get approval for and has a higher rate of interest
          (compared to secured loans). Unsecured student loans also have a
          shorter repayment period and certain repayments must be made while the
          borrower is still in school. Additionally, for education loans without
          collateral, a minimum co-applicant income is required.
        </p>

        <p className="font-semibold md:mt-7 mt-5 leading-7 text-[20px]  md:text-[24px]">
          Top Student Loan Providers for Studying Abroad in India
        </p>

        <p className="md:mt-7  mt-3 text-[17px]">
          Check out these top government and private student loan providers in
          India:
        </p>

        <p className="font-semibold mt-7 text-[20px] md:text-[24px]">
          Axis Bank
        </p>
        <p className="mt-5  text-[17px]">
          For technical, professional, or career-oriented courses, students may
          apply for a study abroad loan in Axis Bank. Hostel costs, tuition
          costs, book costs, and other costs are covered by the loan amount,
          which starts at Rs 50,000 with competitive interest rates. With Axis
          Bank, the entire loan application process is simple.
        </p>
        <LiUlComponent heading="Key Points" items={Info1} />

        <p className="font-semibold mt-7 text-[20px] md:text-[24px]">
          Bank of Baroda
        </p>
        <p className="mt-5  text-[17px]">
          Student loans for college are authorised under the Baroda Scholar
          programme for students who have been admitted to professional and
          technical programmes like MBA, MCA, MS, etc. The loan cap is Rs. 80
          lakhs for institutions that are specifically listed and Rs. 60 lakhs
          for institutions that are not.
        </p>
        <LiUlComponent heading="Key Points" items={Info2} />

        <p className="font-semibold mt-7 text-[20px] leading-7 md:text-[28px]">
          Top NBFCs for Study Abroad Education Loans
        </p>

        <p className="mt-5  text-[17px]">
          Numerous NBFCs, in addition to banks, provide education loan for
          abroad studies. NBFC frequently have fewer requirements for education
          loan for abroad eligibility.
        </p>

        <p className="font-semibold md:mt-20 mt-7 text-[20px] md:text-[28px]">
          Avanse
        </p>
        <p className=" text-[17px]">
          Established in 2013, Avanse is a new-age education loan firm that
          strives to create seamless loans for those Indian students wishing to
          study abroad. The specifics of Avanse's student loans are as follows:
        </p>
        <NbfcBox />

        <p className="font-semibold md:mt-20 mt-[140px] text-[20px] md:text-[28px]">
          HDFC Credila
        </p>
        <p className=" text-[17px]">
          The goal of HDFC Credila, India's first specifically designed
          education loan, is to help students realise their dreams of pursuing
          higher education overseas. Credila's loan approval is available even
          before receiving official admission.
        </p>
        <NbfcBox />

        <p className="font-semibold md:mt-20 mt-[140px] text-[20px] md:text-[28px]">
          Auxilo{" "}
        </p>
        <p className=" text-[17px]">
          Auxilo is a new player in the school loan market, but it has already
          established itself by providing education loan for abroad studies to
          numerous students. The primary characteristics of an Auxilo education
          loan are:
        </p>
        <NbfcBox />

        <p className="font-semibold md:mt-20 mt-[140px] text-[20px] md:text-[28px]">
          InCred{" "}
        </p>
        <p className=" text-[17px]">
          All prospective students may apply for study abroad loan through the
          NBFC InCred. The following information relates to their loans for
          studying abroad:
        </p>
        <NbfcBox />

        <p className="font-semibold md:mt-14 mt-[170px] text-[20px] md:text-[28px]">
          Education Loan For Abroad Eligibility
        </p>
        <p className=" md:mt-5 mt-3 text-[17px]">
          It is essential that students check if they are eligible to apply for
          an education loan for abroad studies. Although each bank or financial
          institution will have particular criteria or eligibility for education
          loans; we have some general terms and conditions that are common among
          them all. The following is a list of the typical terms and conditions
          that any bank will usually adhere to when providing an education loan.
        </p>
        <LiUlComponent heading="" items={EducationInfo} />

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

        <p className="font-semibold text-[20px] md:text-[28px] ">
          How to Apply for an Overseas Education Loans?
        </p>

        <p className=" mt-5 text-[17px]">
          It is usually good to apply for an education loan for abroad studies a
          little early because the entire loan process—from loan application to
          approval and disbursement—takes time. Before understanding the whole
          application process; here are a few things that a student must do
          prior to officially applying
        </p>

        <div className="md:w-full w-full    md:mt-0     md:px-0   relative h-[1200px]  ">
          <div className="md:w-[65%] w-full absolute top-2    h-full ">
            <h1 className="text-[18px] font-bold tracking-[1px] ">
              Education Loan Eligibility
            </h1>
            <p className="py-2 text-[17px]  leading-6 text-gray-600 ">
              Calculate the eligibility for your student loan with this basic
              calculator. It will assist you in calculating the amount for which
              you are eligible. You will have your loan application rejected if
              you apply for an amount greater than you are eligible for. Your
              valuable time and money will be lost, plus you will have no idea
              of the exact sum you should apply for.
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

            <LiUlComponent
              heading="Common Documents:"
              items={CommonDocuments}
            />
            <h1 className="text-[18px] font-bold tracking-[1px] mt-3 ">
              Eligible Courses For Education Loans
            </h1>
            <p className="py-2 text-[17px] leading-6 text-gray-600 ">
              Typically, the educational loan is available for all courses
              offered by various institutes that are recognized by the
              respective governing bodies. These loans are available for various
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
      </div>
    </div>
  );
};

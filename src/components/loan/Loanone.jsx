import Image from "next/image";
import React, { useState } from "react";
import { LiUlComponent } from "../educantionLoan/LiUlComponent";
import { LdetailBox } from "./LdetailBox";

const Banks1 = [
  "Union Bank of India",
  "Axis Bank",
  "MPOWER Financing",
  "Lorian Finance",
];
const Banks2 = ["Icici Bank", "Auxilo", "Credenc", "J&K Bank"];
const Banks3 = ["Avanse", "Bank of Baroda", "IDFC First Bank"];
const Banks4 = ["HDFC Credila", "Prodigy Finance", "Sallie Mae"];

export const Loanone = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);
  return (
    <div className="md:w-[80%] w-full px-4 h-full mx-auto">
      <div className="mt-10  h-full w-full">
        <h3 className="text-[20px]">Calculate EMI For Education Loan</h3>
        <p className="text-[16px] leading-5 mt-5">
          In today's knowledge economy, education plays a pivotal role.
          Education allows us to hit new heights in our profession, allow us to
          live a better life, increase our standard of living, achieve financial
          objectives, and much more!
        </p>

        <p className="text-[16px] leading-5 mt-5">
          Education is a long-term personal commitment that, like no other, has
          the potential to yield returns. You will make your dreams come true
          with an educational loan. The loan is available either at a graduate
          or postgraduate level at prime institutes in India and abroad for
          career-oriented courses such as medicine, engineering, management,
          etc. The loan covers tuition fees, exam fees, subscription to the
          library, book costs, lab tools/equipment required, laptop/computer,
          hostel fees (if any), and so on
        </p>

        <p className="text-[16px] leading-5 mt-5">
          Students may apply for an educational loan directly. However, their
          parent(s) or guardian will be treated as co-applicants, and a primary
          debtor (an individual who owes money) will be similar to their
          position. But before you apply for an education loan, determine how
          much the Equated Monthly Instalment (EMI) would be, as a wise loan
          preparation exercise. The Education Loan EMI calculator from Unicreds
          is an automated tool that will quickly let you know about your EMI.
        </p>

        <p className="text-[16px] leading-5 mt-5">
          Note, the interest rate and your loan tenure are the critical
          influencing factors that decide the EMI loan. The principal portion
          and the interest represent the EMI of your loan. The EMI generally
          stays set for the entire term of your loan and is to be repaid every
          month over the loan tenure. You pay more interest during the first few
          years of your loan term, and eventually, as you repay the loan, a
          higher portion is modified towards the central part. Unicreds provides
          education loans at competitive interest rates. Apply today for a loan
          for education and fuel your dreams!
        </p>

        <p className="text-[20px] mt-10">Education Loan Payment Calculation</p>
        <p className="text-[16px] leading-5 mt-3">
          In today's knowledge economy, education plays a pivotal role.
          Education allows us to hit new heights in our profession, allow us to
          live a better life, increase our standard of living, achieve financial
          objectives, and much more!
        </p>

        <p className="text-[16px] leading-5 mt-3">
          EMI = [P x R x (1+R)^N]/ [(1+R) ^ (N-1)], where P is principal, R is
          interest rate, and N is tenure, respectively.
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

        <h3 className="text-[20px] mt-5">Education Loan Interest Rates</h3>
        <p className="md:text-[16px] leading-5 mt-5">
          Currently, public sector banks provide the most affordable loans, with
          rates starting from 6.8%, for a loan amount of Rs 20 lakh loan with a
          tenure period of 7 years. Below is a list of public sector banks that
          offer education loans with good interest rates.
        </p>
      </div>

      <div className="w-full h-fit  mt-10">
        <h3 className=" text-[17px] md:px-[85px] font-semibold ">Banks</h3>
        <div className="grid md:flex grid-cols-1 items-center md:gap-20">
          <LiUlComponent heading="" items={Banks1} />
          <LiUlComponent heading="" items={Banks2} />
          <LiUlComponent heading="" items={Banks3} />
          <LiUlComponent heading="" items={Banks4} />
          <LiUlComponent heading="" items={Banks4} />
        </div>
      </div>

      <h3 className="text-[20px] mt-7">Why Do You Need A Calculator?</h3>
      <p className="text-[16px] leading-5 mt-2">
        There are several benefits of using an education loan EMI calculator.
        Here is a look at a few of them:
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full mt-10 justify-between  h-full">
        <LdetailBox
          heading="Saves Time And Effort"
          para="By using an education loan calculator, individuals can find out the EMIs they will need to pay within a matter of seconds. They do not have to invest time toward manual calculations. All that users will need to do is input the loan amount, rate of interest and loan tenure, and the calculator will show how much they will need to pay as EMIs. This helps students save time. The calculation is a little bit difficult to do manually but, with an EMI calculator, a person can get instant results."
        />
        <LdetailBox
          heading="Accurate Results"
          para="While performing manual calculations, there is always room for error if one is not careful with the numbers. On the other hand, one can be certain of accurate results when using education loan calculators."
        />
        <LdetailBox
          heading="Helps Plan Finances"
          para="On entering key details of an education loan into the calculator, users can find out the amount they would have to pay in the form of EMIs. Knowledge of this is important as it will help them identify whether they can afford the loan, and the toll it will take on their financial health."
        />
        <LdetailBox
          heading="Responsive"
          para="Join different tenures and loan interest rates for education. Our interactive framework is sufficiently open to find a blend that works best for you."
        />

        <LdetailBox
          heading="Accuracy"
          para="You can get an accurate result of your education loan with the help of the EMI calculator. To use the online tool, you can visit the official bank website."
        />

        <LdetailBox
          heading="Free 100 percent"
          para="This user-friendly loan interest rate calculator for education is free to use."
        />

        <LdetailBox
          heading="Compare EMIs"
          para="To compare the EMIs, the best tool is the education loan EMI calculator. You can make changes in your education loan by checking the repayment track shown by the calculator. This will help you choose the repayment option that suits your budget better."
        />

        <LdetailBox
          heading="Adjustable Tool"
          para="You can use the calculator as many times you want. Just enter your loan credentials and get the EMI you want by changing the tenure."
        />

        <LdetailBox
          heading="Get More Than An EMI"
          para="
          The EMI calculator not only shows you the monthly installment. But, there are some calculators which give a graphic representation of your loan and an amortization table."
        />
      </div>

      <div className="w-full h-[230px] relative">
        <Image
          fill
          src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fillustrations%2Ffooter-illustration.png&w=3840&q=75"
          alt="img"
          className="object-cover"
        />
      </div>
    </div>
  );
};

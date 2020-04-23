import logo from "../images/logo_fullstack.png" // add school logo to images folder and import here
export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"
export const showPopup = false

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.50 - 12.36%",
  APRRange60: "12.80 - 13.14%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName:
        "the Software Engineering Immersive and Cyber Bootcamp programs",
      APR36: "11.50%",
      financeCharge36: "$2,293.64",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.80%",
      financeCharge60: "$4,040.39",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "3", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "the Flex Part-Time Immersive program",
      APR36: "12.36%",
      financeCharge36: "$1,904.08",
      FullMonthlyPayment36: "$330.67",
      APR60: "13.14%",
      financeCharge60: "$3,564.16",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: true, // true if at least one program has cost of living included
  costOfLivingPrograms:
    "Cyber Bootcamp, Live Online Coding Bootcamp, and Software Engineering Immersive", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false,
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.50%",
  APR60: "12.80%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Software Engineering Immersive",
      maxAmount: "$17,910",
      col: true,
      colAmount: "$6,500",
    },
    {
      programName: "Live Online Coding Bootcamp",
      maxAmount: "$17,910",
      col: true,
      colAmount: "$1,500",
    },
    {
      programName: "Flex Part-Time Immersive",
      maxAmount: "$15,980",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Cyber Bootcamp",
      maxAmount: "$17,910",
      col: true,
      colAmount: "$8,205",
    },
    {
      programName: "Cyber Bootcamp Part-Time",
      maxAmount: "$15,980",
      col: false,
      colAmount: "$8,205",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Fullstack Academy"

export const schoolURL = "https://www.fullstackacademy.com/" // update with url of school's website

export const skfURL = "https://fullstack.skills.fund" // update with Skills Fund url

export const headline = "Learn to Code at Fullstack Academy" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to help students build a strong foundation in programming with fullstack JavaScript. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Software Engineering Immersive, Remote Software Engineering Immersive, Flex Part-Time Immersive, Cyber Bootcamp, and Cyber Bootcamp Part-Time programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "fullstack_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "831d1773-3683-4e05-99c1-2a09d3d1255e" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_fullstack_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Software Engineering Immersive",
    url: "https://my.skills.fund/application?lenderCode=SKFSFTSE17",
    loanInfo: {
      maxLoanAmt: 24410,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 7,
        apr36: 11.5,
        apr60: 12.8,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only",
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          maxLoanAmt: 24410,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 7,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Flex Part-Time Immersive",
    url: "https://my.skills.fund/application?lenderCode=SKFSFLEX17",
    loanInfo: {
      maxLoanAmt: 15980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 5,
      },
      "Immediate Repayment": {
        apr36: 12.36,
        apr60: 13.14,
      },
    },
    defaultLoanType: "Immediate Repayment",
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Immediate Repayment"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          maxLoanAmt: 15980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
          },
          "Immediate Repayment": {
            apr36: 12.36,
            apr60: 13.14,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Cyber Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKFSIP19",
    loanInfo: {
      maxLoanAmt: 26115,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 7,
        apr36: 11.5,
        apr60: 12.8,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only",
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          maxLoanAmt: 26115,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 7,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Live Online Coding Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKFSRI",
    loanInfo: {
      maxLoanAmt: 19410,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 7,
        apr36: 11.5,
        apr60: 12.8,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only",
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          maxLoanAmt: 19410,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 7,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Cyber Bootcamp Part-Time",
    url: "https://my.skills.fund/application?lenderCode=SKFSIPPT19",
    loanInfo: {
      maxLoanAmt: 15980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 9,
        apr36: 11.34,
        apr60: 12.73,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only",
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          maxLoanAmt: 15980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 9,
            apr36: 11.34,
            apr60: 12.73,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $24,410 for Fullstack Academy's Software Engineering Immersive program, up to $19,410 for the Remote Software Engineering Immersive program, up to $15,980 for the Flex Part-Time Immersive program, up to $26,115 for the Cyber Bootcamp Full-Time program, or up to $15,980 for the Cyber Bootcamp Part-Time program."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

const originalQuestions = [
  {
    q: "What is a business?",
    opts: [
      "An organization engaged in commercial, industrial, or professional activities",
      "A government building",
      "A social club",
      "A personal hobby"
    ],
    ans: 0
  },
  {
    q: "A company can transact business activities through:",
    opts: [
      "Production of goods",
      "Offering services",
      "Retailing manufactured products",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "A business can be:",
    opts: [
      "Only for-profit",
      "Only nonprofit",
      "Either for-profit or nonprofit",
      "Neither for-profit nor nonprofit"
    ],
    ans: 2
  },
  {
    q: "Going into business involves:",
    opts: [
      "Setting up, managing, growing, and developing a business concern",
      "Avoiding management",
      "Working only for another person",
      "Closing existing businesses"
    ],
    ans: 0
  },
  {
    q: "Which of the following is a skill needed by an entrepreneur according to the material?",
    opts: [
      "Technical skill",
      "Financial skill",
      "Time management skill",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "Which skill relates directly to managing business finances?",
    opts: [
      "Financial skill",
      "Natural skill",
      "Mentorship skill",
      "Social skill"
    ],
    ans: 0
  },
  {
    q: "Time management skills help an entrepreneur to:",
    opts: [
      "Manage available time effectively",
      "Eliminate competitors",
      "Avoid customers",
      "Increase taxes"
    ],
    ans: 0
  },
  {
    q: "The location of a business venture is influenced by:",
    opts: [
      "Market size and demography",
      "Nature of the business",
      "Available workforce",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "Which factor relates to the physical area in which customers are located?",
    opts: [
      "Market demography",
      "Employee salary",
      "Business name",
      "Product packaging"
    ],
    ans: 0
  },
  {
    q: "Why is business location important?",
    opts: [
      "It can determine the success or failure of a new venture",
      "It eliminates all competition",
      "It guarantees profit",
      "It removes the need for planning"
    ],
    ans: 0
  },
  {
    q: "Before locating a business, an entrepreneur should:",
    opts: [
      "Carefully analyze relevant variables",
      "Ignore the environment",
      "Choose randomly",
      "Avoid research"
    ],
    ans: 0
  },
  {
    q: "Environmental scanning involves:",
    opts: [
      "Visiting sites and gathering information about business prospects",
      "Advertising a product",
      "Paying employees",
      "Producing goods"
    ],
    ans: 0
  },
  {
    q: "The main purpose of environmental scanning is to assess the:",
    opts: [
      "Possibility and viability of a business",
      "Employee's salary",
      "Company's logo",
      "Number of offices"
    ],
    ans: 0
  },
  {
    q: "Environmental scanning should take place:",
    opts: [
      "Before establishing a business",
      "Only after business failure",
      "After closing the business",
      "Never"
    ],
    ans: 0
  },
  {
    q: "An entrepreneur should examine the business environment in order to:",
    opts: [
      "Make an informed location decision",
      "Avoid planning",
      "Increase uncertainty",
      "Eliminate employees"
    ],
    ans: 0
  },
  {
    q: "Before launching a business, an entrepreneur should determine:",
    opts: [
      "What product or service to offer",
      "What market to enter",
      "How to raise capital",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "The decision about going into business is largely based on the entrepreneur's:",
    opts: [
      "Judgment",
      "Luck alone",
      "Competitor's decision",
      "Customer's salary"
    ],
    ans: 0
  },
  {
    q: "An entrepreneur should gather as much ______ as possible before making crucial decisions.",
    opts: [
      "Information and advice",
      "Money only",
      "Employees only",
      "Advertising materials"
    ],
    ans: 0
  },
  {
    q: "The entrepreneur's challenge is to balance:",
    opts: [
      "Decisiveness with caution",
      "Profit with loss",
      "Advertising with production",
      "Competition with employment"
    ],
    ans: 0
  },
  {
    q: "Decisiveness means:",
    opts: [
      "Being ready to act when an opportunity arises",
      "Delaying every decision",
      "Avoiding opportunities",
      "Ignoring information"
    ],
    ans: 0
  },
  {
    q: "Preparatory work before launching a venture includes:",
    opts: [
      "Evaluating the market opportunity",
      "Developing the product or service",
      "Preparing a business plan",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "An entrepreneur should determine how much ______ is needed before starting a business.",
    opts: [
      "Capital",
      "Advertising",
      "Office furniture",
      "Competition"
    ],
    ans: 0
  },
  {
    q: "Why is preparatory work important?",
    opts: [
      "It helps reduce the risks of the new venture",
      "It guarantees success",
      "It eliminates competition",
      "It prevents innovation"
    ],
    ans: 0
  },
  {
    q: "According to the material, one factor entrepreneurs should consider is:",
    opts: [
      "Motivation",
      "Strategy",
      "Realistic vision",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "Motivation concerns the entrepreneur's:",
    opts: [
      "Incentive for starting the business",
      "Location only",
      "Advertising budget",
      "Product packaging"
    ],
    ans: 0
  },
  {
    q: "During the startup and early phases of a business, money is often:",
    opts: [
      "Tight",
      "Unlimited",
      "Unimportant",
      "Guaranteed"
    ],
    ans: 0
  },
  {
    q: "Many entrepreneurs may not take a salary until:",
    opts: [
      "The firm can maintain positive cash flow",
      "The business opens",
      "The first customer arrives",
      "The product is advertised"
    ],
    ans: 0
  },
  {
    q: "Competing solely on the basis of selling price is described in the material as:",
    opts: [
      "Extremely risky",
      "Always successful",
      "The best strategy",
      "The only strategy"
    ],
    ans: 0
  },
  {
    q: "Large firms have an advantage in lowering costs because they:",
    opts: [
      "Produce huge quantities",
      "Have fewer customers",
      "Avoid production",
      "Have no competition"
    ],
    ans: 0
  },
  {
    q: "A realistic vision involves:",
    opts: [
      "Realistic expectations about the enterprise's potential",
      "Overestimating sales",
      "Ignoring startup costs",
      "Avoiding financial projections"
    ],
    ans: 0
  },
  {
    q: "Entrepreneurs often make the mistake of:",
    opts: [
      "Underestimating startup costs and overestimating sales revenue",
      "Overestimating costs and underestimating revenue",
      "Avoiding all financial planning",
      "Refusing to sell products"
    ],
    ans: 0
  },
  {
    q: "Cash-flow projections help an entrepreneur determine:",
    opts: [
      "Whether the business is ready to launch",
      "The color of the business logo",
      "Employee dress codes",
      "The business name"
    ],
    ans: 0
  },
  {
    q: "A good business idea serves as the ______ of a new venture.",
    opts: [
      "Foundation",
      "Competition",
      "Expense",
      "Liability"
    ],
    ans: 0
  },
  {
    q: "An entrepreneur may develop an idea by first identifying:",
    opts: [
      "A market need",
      "An employee",
      "A bank loan",
      "A tax bill"
    ],
    ans: 0
  },
  {
    q: "An entrepreneur can also develop a product first and then:",
    opts: [
      "Find a market for it",
      "Close the business",
      "Avoid customers",
      "Stop researching"
    ],
    ans: 0
  },
  {
    q: "The material suggests that a business idea:",
    opts: [
      "Does not necessarily have to be revolutionary",
      "Must always be revolutionary",
      "Must be expensive",
      "Must have no competition"
    ],
    ans: 0
  },
  {
    q: "Which three factors can transform commonplace ideas into successful businesses?",
    opts: [
      "Research, timing, and luck",
      "Money, employees, and taxes",
      "Advertising, rent, and salaries",
      "Competition, debt, and loss"
    ],
    ans: 0
  },
  {
    q: "One way to look for business ideas is to:",
    opts: [
      "Read widely and talk to people",
      "Ignore customers",
      "Avoid technology",
      "Ignore society"
    ],
    ans: 0
  },
  {
    q: "An entrepreneur can identify opportunities by asking about:",
    opts: [
      "Limitations in current products and services",
      "Unavailable products",
      "Other uses for technology",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "Changes in society can create:",
    opts: [
      "Business opportunities",
      "Only business failures",
      "No business impact",
      "Guaranteed losses"
    ],
    ans: 0
  },
  {
    q: "Unfulfilled needs among groups of people can provide:",
    opts: [
      "Business opportunities",
      "Business taxes",
      "Employee problems",
      "Production costs"
    ],
    ans: 0
  },
  {
    q: "According to the material, business ideas can generally fit into:",
    opts: [
      "Four categories",
      "Two categories",
      "Six categories",
      "Ten categories"
    ],
    ans: 0
  },
  {
    q: "Offering goods or services to an existing market can be difficult for a:",
    opts: [
      "Startup",
      "Government",
      "Consumer",
      "Bank"
    ],
    ans: 0
  },
  {
    q: "An existing-market strategy may require:",
    opts: [
      "Merchandising appeal and advertising",
      "No marketing",
      "No research",
      "No customers"
    ],
    ans: 0
  },
  {
    q: "The entry costs for an existing product/service in an existing market are described as:",
    opts: [
      "High",
      "Zero",
      "Very low",
      "Unlimited"
    ],
    ans: 0
  },
  {
    q: "A new product or service for a new market is considered:",
    opts: [
      "The riskiest strategy for a new firm",
      "The safest strategy",
      "Risk-free",
      "The cheapest strategy"
    ],
    ans: 0
  },
  {
    q: "A new product for a new market requires:",
    opts: [
      "The most research and planning",
      "No research",
      "No planning",
      "Only advertising"
    ],
    ans: 0
  },
  {
    q: "If successful, a new product for a new market can have:",
    opts: [
      "Great potential for a new business",
      "No profitability",
      "No customers",
      "No market"
    ],
    ans: 0
  },
  {
    q: "A new or modified good/service for an existing market is an example of:",
    opts: [
      "An entry strategy",
      "Environmental scanning",
      "Financial feasibility",
      "Intellectual property"
    ],
    ans: 0
  },
  {
    q: "An existing good/service introduced into a new market may involve:",
    opts: [
      "A different country, region, or market niche",
      "No customers",
      "No market research",
      "No innovation"
    ],
    ans: 0
  },
  {
    q: "The last two categories of business ideas have:",
    opts: [
      "Moderate risk",
      "No risk",
      "Maximum risk",
      "Guaranteed success"
    ],
    ans: 0
  },
  {
    q: "Product and market research can help to:",
    opts: [
      "Reduce business risk",
      "Increase uncertainty",
      "Eliminate customers",
      "Prevent innovation"
    ],
    ans: 0
  },
  {
    q: "Effective startup strategies mentioned in the material include:",
    opts: [
      "Innovation, differentiation, and market specification",
      "Price cutting only",
      "Advertising only",
      "Borrowing only"
    ],
    ans: 0
  },
  {
    q: "Before choosing a product or service, an entrepreneur should consider:",
    opts: [
      "Market potential",
      "Competition",
      "Financial resources",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "A key question for a new venture is:",
    opts: [
      "Why would consumers choose this firm's product or service?",
      "Why should customers avoid the business?",
      "Why should the business have no competitors?",
      "Why should the business stop advertising?"
    ],
    ans: 0
  },
  {
    q: "One important factor that can help a new venture enter a market is:",
    opts: [
      "Uniqueness",
      "High expenses",
      "Poor quality",
      "Lack of planning"
    ],
    ans: 0
  },
  {
    q: "Uniqueness can help a venture:",
    opts: [
      "Stand out from competitors",
      "Avoid customers",
      "Increase uncertainty",
      "Eliminate market research"
    ],
    ans: 0
  },
  {
    q: "The material advises entrepreneurs to avoid an entry strategy based on:",
    opts: [
      "Low cost alone",
      "Innovation",
      "Differentiation",
      "Niche specification"
    ],
    ans: 0
  },
  {
    q: "Why is competing on low cost alone difficult for new ventures?",
    opts: [
      "Large firms often have cost advantages from producing large quantities",
      "Customers dislike low prices",
      "It prevents production",
      "It eliminates competition"
    ],
    ans: 0
  },
  {
    q: "Differentiation means:",
    opts: [
      "Separating a company's product or service from competitors",
      "Selling exactly what competitors sell",
      "Avoiding customers",
      "Closing the business"
    ],
    ans: 0
  },
  {
    q: "Which is one way successful entrepreneurs distinguish their ventures?",
    opts: [
      "Differentiation",
      "Ignoring competition",
      "Avoiding innovation",
      "Reducing quality"
    ],
    ans: 0
  },
  {
    q: "Another strategy for distinguishing a new venture is:",
    opts: [
      "Niche specification",
      "Employee dismissal",
      "Tax avoidance",
      "Product withdrawal"
    ],
    ans: 0
  },
  {
    q: "Innovation can help a new venture:",
    opts: [
      "Distinguish itself from competitors",
      "Avoid customers",
      "Increase costs unnecessarily",
      "Eliminate planning"
    ],
    ans: 0
  },
  {
    q: "The incubation stage is the:",
    opts: [
      "Introductory or experimental period of the business",
      "Final stage of decline",
      "Period after business closure",
      "Stage of maximum maturity"
    ],
    ans: 0
  },
  {
    q: "The incubation stage is important because it involves:",
    opts: [
      "Preparation for launching a product",
      "Closing the business",
      "Stopping research",
      "Eliminating marketing"
    ],
    ans: 0
  },
  {
    q: "During incubation, entrepreneurs plan:",
    opts: [
      "How and when to present the product to the public",
      "How to close the business",
      "How to avoid consumers",
      "How to reduce quality"
    ],
    ans: 0
  },
  {
    q: "The product during incubation has:",
    opts: [
      "Not yet been made public",
      "Already reached maturity",
      "Already declined",
      "Already disappeared"
    ],
    ans: 0
  },
  {
    q: "One feature of incubation is:",
    opts: [
      "A lot of planning and review of plans",
      "No planning",
      "No product development",
      "No marketing"
    ],
    ans: 0
  },
  {
    q: "During incubation, the company attempts to:",
    opts: [
      "Enter the market and compete with established businesses",
      "Leave the market",
      "Avoid competitors",
      "Stop production"
    ],
    ans: 0
  },
  {
    q: "During incubation, resources are committed to creating a:",
    opts: [
      "Good first impression",
      "Business failure",
      "Product decline",
      "Financial loss"
    ],
    ans: 0
  },
  {
    q: "During the incubation stage, workers may:",
    opts: [
      "Put in extra hours improving product quality",
      "Stop improving products",
      "Avoid customers",
      "Stop production"
    ],
    ans: 0
  },
  {
    q: "During incubation, there is generally more:",
    opts: [
      "Outflow of funds than inflow",
      "Inflow than outflow",
      "Profit than expenses",
      "Revenue than costs"
    ],
    ans: 0
  },
  {
    q: "Why is there more outflow of funds during incubation?",
    opts: [
      "Sales have not started yielding revenue",
      "The company has too many customers",
      "Profit is too high",
      "Competitors have disappeared"
    ],
    ans: 0
  },
  {
    q: "During incubation, the company is generally:",
    opts: [
      "Below the breakeven point",
      "At maximum profit",
      "In decline",
      "At maturity"
    ],
    ans: 0
  },
  {
    q: "Advertising and public relations during incubation are used to:",
    opts: [
      "Create awareness about the new product",
      "Eliminate customers",
      "Reduce product quality",
      "Stop market research"
    ],
    ans: 0
  },
  {
    q: "During incubation, the price may be fixed below competitors' prices to:",
    opts: [
      "Attract price-conscious consumers",
      "Eliminate all competition",
      "Increase production costs",
      "Stop sales"
    ],
    ans: 0
  },
  {
    q: "Market planning during incubation considers:",
    opts: [
      "Methods of distribution",
      "Employee retirement",
      "Office decoration",
      "Tax collection"
    ],
    ans: 0
  },
  {
    q: "Feedback from management, directors, and the public is used to:",
    opts: [
      "Improve the product",
      "Stop production",
      "Increase business risk",
      "Eliminate research"
    ],
    ans: 0
  },
  {
    q: "The acceptance stage occurs when a product:",
    opts: [
      "Moves into the open market and is tested for acceptance",
      "Has not yet been developed",
      "Has entered decline",
      "Has been withdrawn"
    ],
    ans: 0
  },
  {
    q: "One characteristic of the acceptance stage is:",
    opts: [
      "Increased demand",
      "Reduced sales",
      "No revenue",
      "No customers"
    ],
    ans: 0
  },
  {
    q: "During the acceptance stage, sales volume generally:",
    opts: [
      "Increases",
      "Disappears",
      "Remains permanently at zero",
      "Is prohibited"
    ],
    ans: 0
  },
  {
    q: "During the acceptance stage, revenue generally:",
    opts: [
      "Increases",
      "Disappears",
      "Remains at zero",
      "Becomes irrelevant"
    ],
    ans: 0
  },
  {
    q: "The maturity stage is described as the:",
    opts: [
      "Peak period in the product life cycle",
      "First stage",
      "Experimental stage",
      "Decline stage"
    ],
    ans: 0
  },
  {
    q: "At maturity, the business is generally:",
    opts: [
      "Stable and at equilibrium",
      "Not yet launched",
      "Below breakeven",
      "Without customers"
    ],
    ans: 0
  },
  {
    q: "At maturity, the business can:",
    opts: [
      "Withstand competitors in the short and long run",
      "No longer compete",
      "Avoid all obligations",
      "Stop production"
    ],
    ans: 0
  },
  {
    q: "One feature of maturity is:",
    opts: [
      "Increasing revenue",
      "No sales",
      "No assets",
      "No customers"
    ],
    ans: 0
  },
  {
    q: "During maturity, the business may enjoy:",
    opts: [
      "Economies of large-scale production",
      "No savings",
      "Increasing inefficiency only",
      "No revenue"
    ],
    ans: 0
  },
  {
    q: "The decline stage occurs when:",
    opts: [
      "More production results in less revenue",
      "Revenue grows faster than production",
      "Demand increases rapidly",
      "The product is newly launched"
    ],
    ans: 0
  },
  {
    q: "One cause of decline is:",
    opts: [
      "Outdated or inefficient technology",
      "Strong innovation",
      "Increasing demand",
      "Better customer acceptance"
    ],
    ans: 0
  },
  {
    q: "In the decline stage, substitutes may become:",
    opts: [
      "More acceptable to consumers",
      "Less acceptable",
      "Unavailable",
      "Unnecessary"
    ],
    ans: 0
  },
  {
    q: "A feasibility study investigates the:",
    opts: [
      "Potential outcome of a project",
      "Employee's personality",
      "Company's logo",
      "Business name"
    ],
    ans: 0
  },
  {
    q: "A feasibility study helps determine whether a business idea is:",
    opts: [
      "Practicable, feasible, and viable",
      "Attractive only",
      "Expensive only",
      "Popular only"
    ],
    ans: 0
  },
  {
    q: "One question in a feasibility study is whether:",
    opts: [
      "A market exists for the product",
      "Employees like the office",
      "The company has a logo",
      "Customers know the owner"
    ],
    ans: 0
  },
  {
    q: "A feasibility study also examines:",
    opts: [
      "The nature of competition",
      "The availability of technology",
      "Financial requirements",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "According to the material, one function of a feasibility report is to:",
    opts: [
      "Aid in business planning",
      "Eliminate all competition",
      "Guarantee profit",
      "Replace management"
    ],
    ans: 0
  },
  {
    q: "Another function of a feasibility report is to:",
    opts: [
      "Evaluate new business ventures",
      "Stop business operations",
      "Prevent investment",
      "Eliminate research"
    ],
    ans: 0
  },
  {
    q: "Which of the following is NOT listed as a component of a feasibility report?",
    opts: [
      "Market feasibility",
      "Economic feasibility",
      "Technological feasibility",
      "Entertainment feasibility"
    ],
    ans: 3
  },
  {
    q: "Market feasibility determines:",
    opts: [
      "Whether there is a market for the product or service",
      "The number of employees",
      "The company's tax rate only",
      "The owner's salary"
    ],
    ans: 0
  },
  {
    q: "Economic feasibility examines factors such as:",
    opts: [
      "Interest rates, inflation, and exchange rates",
      "Product color only",
      "Employee uniforms",
      "Office furniture"
    ],
    ans: 0
  },
  {
    q: "Financial feasibility focuses on:",
    opts: [
      "Costs, capital requirements, cash flow, projected revenue and income",
      "Advertising slogans only",
      "Employee clothing",
      "Business location only"
    ],
    ans: 0
  }
];

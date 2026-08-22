const originalQuestions = [
  {
    q: "When analyzing the relationship between leadership and followership in a community health drive, how does the text suggest volunteers' roles connect to preventing \"one-man or one-woman show\" failures?",
    opts: [
      "By competing for the leader's vision to create innovation",
      "By focusing only on the leader's decisions without questions",
      "Via strict adherence to management processes like deadlines",
      "Through their belief, energy, and initiative, which bring ideas to life and provide grounding feedback"
    ],
    ans: 3
  },
  {
    q: "Assessing the collaborative project in section 2.2, why is Step 4 (Reflect and Share) most valuable for personal growth in understanding transformational leadership?",
    opts: [
      "It emphasizes research over personal motivation insights",
      "By discussing changes in views and future actions, it evaluates how theory application confirms or evolves one's leadership aspirations, promoting critical development",
      "It focuses only on presentation skills, ignoring deeper self-assessment",
      "It limits reflection to group dynamics without individual application"
    ],
    ans: 1
  },
  {
    q: "Body language is important in public speaking because it:",
    opts: [
      "Distracts the audience",
      "Reinforces the spoken message",
      "Should be completely avoided",
      "Makes the speaker nervous"
    ],
    ans: 1
  },
  {
    q: "Cultural intelligence mainly involves:",
    opts: [
      "Focusing only on your own background",
      "The ability to understand, respect, and adapt to different cultures",
      "Forcing others to accept your culture",
      "Ignoring other people's customs"
    ],
    ans: 1
  },
  {
    q: "The TED Talk event project involves:",
    opts: [
      "Working alone",
      "Only writing reports",
      "Team collaboration and public presentation",
      "Avoiding the audience"
    ],
    ans: 2
  },
  {
    q: "In a global team, a good leader should:",
    opts: [
      "Focus only on people from their own background",
      "Show respect for different customs and values",
      "Force everyone to follow one culture",
      "Avoid working with diverse people"
    ],
    ans: 1
  },
  {
    q: "Managing diversity effectively leads to:",
    opts: [
      "Less creativity",
      "More boredom",
      "Better innovation and problem-solving",
      "Uniform thinking"
    ],
    ans: 2
  },
  {
    q: "Negotiation in leadership is mainly about:",
    opts: [
      "Refusing to compromise",
      "Finding mutually acceptable solutions",
      "Only making demands",
      "Winning at all costs"
    ],
    ans: 1
  },
  {
    q: "One major barrier in cross-cultural leadership is:",
    opts: [
      "Perfect communication always",
      "Lack of cultural awareness",
      "Excessive empathy",
      "Too much understanding"
    ],
    ans: 1
  },
  {
    q: "In global teams, conflicts can arise due to:",
    opts: [
      "Misunderstanding of cultural differences",
      "Too much similarity",
      "Lack of goals",
      "Perfect agreement always"
    ],
    ans: 0
  },
  {
    q: "When preparing a speech, it is recommended to:",
    opts: [
      "Avoid eye contact",
      "Practice and focus on clarity and confidence",
      "Speak very fast",
      "Read directly from notes without emotion"
    ],
    ans: 1
  },
  {
    q: "Public speaking confidence grows through:",
    opts: [
      "Preparation, practice, and positive body language",
      "Speaking without planning",
      "Focusing only on content",
      "Avoiding practice"
    ],
    ans: 0
  },
  {
    q: "What is the most important skill for leading in a global context?",
    opts: [
      "Using only one leadership style",
      "Avoiding diversity",
      "Understanding and respecting cultural differences",
      "Speaking only one language"
    ],
    ans: 2
  },
  {
    q: "The main purpose of the negotiation task is to:",
    opts: [
      "Practice real-life problem-solving and compromise",
      "Avoid talking to management",
      "Only write complaints",
      "Create conflict"
    ],
    ans: 0
  },
  {
    q: "Leaders who manage diversity well create:",
    opts: [
      "More division",
      "An environment where only similar people succeed",
      "An inclusive environment where everyone feels valued",
      "Confusion"
    ],
    ans: 2
  },
  {
    q: "Body language during public speaking includes:",
    opts: [
      "Speaking very fast",
      "Avoiding eye contact",
      "Standing straight, using gestures, and making eye contact",
      "Looking only at the floor"
    ],
    ans: 2
  },
  {
    q: "A good example of active listening is:",
    opts: [
      "Interrupting immediately",
      "I understand this is important to you. Can you tell me more?",
      "I don't care what you think",
      "Changing the topic"
    ],
    ans: 1
  },
  {
    q: "The main goal of the cultural intelligence project is to:",
    opts: [
      "Focus only on your own culture",
      "Engage with diverse individuals and reflect on learnings",
      "Avoid people from other backgrounds",
      "Only read books about culture"
    ],
    ans: 1
  },
  {
    q: "Cultural differences affect:",
    opts: [
      "Nothing important",
      "How people communicate, make decisions, and view leadership",
      "Only food choices",
      "Only clothing styles"
    ],
    ans: 1
  },
  {
    q: "Effective global leaders demonstrate:",
    opts: [
      "Preference for only one group",
      "Cultural blindness",
      "Respect and adaptability to different cultures",
      "Rigid methods"
    ],
    ans: 2
  },
  {
    q: "Practising active listening helps leaders to:",
    opts: [
      "Build trust and gather useful information",
      "Avoid solving problems",
      "Speak more than others",
      "Misunderstand their team"
    ],
    ans: 0
  },
  {
    q: "Diversity brings both:",
    opts: [
      "Only advantages",
      "Challenges and opportunities for innovation",
      "Only problems",
      "No benefits"
    ],
    ans: 1
  },
  {
    q: "Managing diversity in a team helps to:",
    opts: [
      "Bring different perspectives and foster innovation",
      "Create more conflicts only",
      "Reduce creativity",
      "Make decisions slower"
    ],
    ans: 0
  },
  {
    q: "Cultural intelligence can be developed by:",
    opts: [
      "Staying isolated",
      "Avoiding conversations",
      "Reading only theory",
      "Engaging with people from different backgrounds"
    ],
    ans: 3
  },
  {
    q: "Negotiation is successful when:",
    opts: [
      "Both parties feel their concerns are addressed",
      "No compromise is made",
      "One side loses completely",
      "Only one person speaks"
    ],
    ans: 0
  },
  {
    q: "What should a leader do during negotiation?",
    opts: [
      "Always insist on their own terms",
      "Avoid any discussion",
      "Ignore the other party's concerns",
      "Listen actively and seek compromise"
    ],
    ans: 3
  },
  {
    q: "Effective negotiation requires:",
    opts: [
      "Understanding different perspectives and finding common ground",
      "Refusing to listen",
      "Only talking",
      "Being aggressive"
    ],
    ans: 0
  },
  {
    q: "Public speaking is important for leaders because it helps them:",
    opts: [
      "Hide their ideas",
      "Speak only to small groups",
      "Inspire and influence others",
      "Avoid interacting with people"
    ],
    ans: 2
  },
  {
    q: "In global leadership, adapting your style shows:",
    opts: [
      "Wisdom and respect",
      "Weakness",
      "Inconsistency",
      "Confusion"
    ],
    ans: 0
  },
  {
    q: "Active listening involves:",
    opts: [
      "Thinking about your reply while the person is speaking",
      "Fully focusing on the speaker and responding thoughtfully",
      "Interrupting the speaker frequently",
      "Checking your phone during conversations"
    ],
    ans: 1
  },
  {
    q: "A leader with high cultural intelligence is:",
    opts: [
      "Unwilling to learn",
      "Rigid in their approach",
      "Judgmental of other cultures",
      "Curious, respectful, and adaptable"
    ],
    ans: 3
  },
  {
    q: "A leader demonstrating cultural intelligence will:",
    opts: [
      "Listen actively and show respect",
      "Avoid diverse teams",
      "Force their own culture",
      "Judge other cultures"
    ],
    ans: 0
  },
  {
    q: "Which of the following is a key component of cultural intelligence?",
    opts: [
      "Avoiding conversations with different people",
      "Insisting on your own ways",
      "Being curious and asking respectful questions",
      "Judging other cultures quickly"
    ],
    ans: 2
  },
  {
    q: "Nervousness before public speaking is:",
    opts: [
      "Normal and can be channeled into enthusiasm",
      "Abnormal and should be feared",
      "Something only beginners feel",
      "A sign that you should never speak"
    ],
    ans: 0
  },
  {
    q: "When practising public speaking, it is helpful to:",
    opts: [
      "Speak as fast as possible",
      "Avoid any practice",
      "Speak without preparation",
      "Record yourself and review your delivery"
    ],
    ans: 3
  },
  {
    q: "The project on cultural intelligence requires learners to:",
    opts: [
      "Stay within their own culture",
      "Avoid reflection",
      "Have conversations with people from different backgrounds",
      "Only watch videos"
    ],
    ans: 2
  },
  {
    q: "Diversity in teams includes differences in:",
    opts: [
      "Only food preferences",
      "Only language",
      "Gender, age, religion, and thinking styles",
      "Only nationality"
    ],
    ans: 2
  },
  {
    q: "One benefit of diversity in leadership teams is:",
    opts: [
      "More misunderstandings always",
      "Less innovation",
      "Richer ideas and better problem-solving",
      "Slower progress"
    ],
    ans: 2
  },
  {
    q: "In Module 4, communication is described as:",
    opts: [
      "Unimportant for leadership",
      "The heart of leadership",
      "Only about speaking",
      "Only about writing"
    ],
    ans: 1
  },
  {
    q: "Confidence in speaking improves when you:",
    opts: [
      "Prepare thoroughly and practise regularly",
      "Never practise",
      "Focus only on fear",
      "Avoid feedback"
    ],
    ans: 0
  },
  {
    q: "Public speaking helps leaders to:",
    opts: [
      "Reduce influence",
      "Hide their vision",
      "Speak only privately",
      "Inspire and connect with larger audiences"
    ],
    ans: 3
  },
  {
    q: "Overall, leadership communication and cultural intelligence together help leaders to:",
    opts: [
      "Avoid responsibility",
      "Create more problems",
      "Isolate themselves",
      "Build trust, inspire others, and succeed in diverse environments"
    ],
    ans: 3
  },
  {
    q: "In public speaking, pausing at key moments helps to:",
    opts: [
      "Emphasise important points and engage listeners",
      "Confuse the audience",
      "Show lack of preparation",
      "Rush through the speech"
    ],
    ans: 0
  },
  {
    q: "In Module 3, leading in a globalised world requires:",
    opts: [
      "Rigid leadership style",
      "Empathy, adaptability, and cultural awareness",
      "Focusing only on local issues",
      "Ignoring differences"
    ],
    ans: 1
  },
  {
    q: "Effective communication in leadership means:",
    opts: [
      "Ensuring the message is clearly understood by others",
      "Talking more than listening",
      "Using only written messages",
      "Speaking quickly"
    ],
    ans: 0
  },
  {
    q: "Active listening is best described as:",
    opts: [
      "Passive hearing",
      "Frequent interruption",
      "Full attention with thoughtful response",
      "Thinking about other things"
    ],
    ans: 2
  },
  {
    q: "The community engagement project in Module 3 aims to develop:",
    opts: [
      "Isolation skills",
      "Theoretical knowledge only",
      "Cultural intelligence through real interactions",
      "Avoidance of diversity"
    ],
    ans: 2
  },
  {
    q: "A global leader should adapt their style because:",
    opts: [
      "All cultures are exactly the same",
      "Different cultures have different expectations of leadership",
      "People prefer only one style",
      "Change is unnecessary"
    ],
    ans: 1
  },
  {
    q: "In some cultures, leadership is expected to be:",
    opts: [
      "Based only on authority and individual decision-making",
      "Completely informal",
      "Always collaborative",
      "Focused only on friendship"
    ],
    ans: 0
  },
  {
    q: "Negotiation skills are useful for leaders when:",
    opts: [
      "They need to resolve issues and reach agreements",
      "They work alone",
      "They want to dominate",
      "They refuse compromise"
    ],
    ans: 0
  },
  {
    q: "Active listening shows:",
    opts: [
      "Impatience",
      "Disrespect to the speaker",
      "That you are not interested",
      "That you value the other person's input"
    ],
    ans: 3
  },
  {
    q: "The TED Talk project helps students practice:",
    opts: [
      "Writing only",
      "Public speaking, teamwork, and event organisation",
      "Only theory",
      "Avoiding audiences"
    ],
    ans: 1
  },
  {
    q: "Innovation in leadership mainly involves:",
    opts: [
      "Maintaining old methods forever",
      "Ignoring new ideas",
      "Reducing team size",
      "Finding creative and better ways to solve problems"
    ],
    ans: 3
  },
  {
    q: "Conflict in teams can be resolved effectively through:",
    opts: [
      "Silence",
      "Ignoring the issue",
      "Open dialogue and mutual respect",
      "Blaming others"
    ],
    ans: 2
  },
  {
    q: "The collaborative change project requires students to:",
    opts: [
      "Work without a plan",
      "Avoid feedback",
      "Present their plan to stakeholders",
      "Keep ideas secret"
    ],
    ans: 2
  },
  {
    q: "Effective team building is compared to:",
    opts: [
      "Following one person's ideas only",
      "Avoiding all conflicts",
      "Working in complete isolation",
      "Weaving a strong fabric from different threads"
    ],
    ans: 3
  },
  {
    q: "Clean and Renewable Energy course addresses:",
    opts: [
      "Irrelevant global issues",
      "Decreasing energy needs",
      "Only theoretical concepts",
      "Nigeria's energy challenges"
    ],
    ans: 3
  },
  {
    q: "The overall goal of Modules 7 and 8 is to develop leaders who can:",
    opts: [
      "Resist change and teamwork",
      "Avoid innovation",
      "Work alone always",
      "Lead change, build strong teams, and promote collaboration"
    ],
    ans: 3
  },
  {
    q: "AI4FS and AI4WA are examples of:",
    opts: [
      "Failed projects",
      "Traditional farming methods",
      "Irrelevant initiatives",
      "Successful grants secured by Summit University"
    ],
    ans: 3
  },
  {
    q: "Team building activities should help members:",
    opts: [
      "Work in isolation",
      "Avoid feedback",
      "Understand roles and build trust",
      "Compete against each other"
    ],
    ans: 2
  },
  {
    q: "In leading change, innovation is encouraged by:",
    opts: [
      "Maintaining old methods strictly",
      "Punishing new ideas",
      "Creating space for creative solutions",
      "Discouraging team input"
    ],
    ans: 2
  },
  {
    q: "A key role of followers in a team is to:",
    opts: [
      "Compete with the leader",
      "Do nothing",
      "Support the vision and provide honest feedback",
      "Only obey orders blindly"
    ],
    ans: 2
  },
  {
    q: "In team collaboration, valuing each person's strengths leads to:",
    opts: [
      "Stronger, more creative, and resilient teams",
      "More conflicts",
      "Weaker teams",
      "Less productivity"
    ],
    ans: 0
  },
  {
    q: "A strong team is built by:",
    opts: [
      "Avoiding communication",
      "Recognizing each member's strengths and encouraging contribution",
      "Creating division",
      "Valuing only the leader's ideas"
    ],
    ans: 1
  },
  {
    q: "The main goal of grantsmanship at Summit University is:",
    opts: [
      "To reduce academic activities",
      "To waste resources",
      "To avoid external support",
      "To attract funding for research and innovation"
    ],
    ans: 3
  },
  {
    q: "Adapting to new technologies helps leaders to:",
    opts: [
      "Improve productivity and solve problems",
      "Reduce team efficiency",
      "Avoid all digital tools",
      "Stay behind in progress"
    ],
    ans: 0
  },
  {
    q: "In conflict management within teams, good leaders:",
    opts: [
      "Avoid team members",
      "Encourage open dialogue and mutual respect",
      "Take sides aggressively",
      "Ignore disagreements"
    ],
    ans: 1
  },
  {
    q: "A major barrier to successful change is:",
    opts: [
      "Excessive planning",
      "Too much innovation",
      "Poor communication and lack of support",
      "Clear communication"
    ],
    ans: 2
  },
  {
    q: "Good followers contribute to team success by:",
    opts: [
      "Remaining silent always",
      "Creating unnecessary conflict",
      "Taking initiative and supporting shared goals",
      "Competing against teammates"
    ],
    ans: 2
  },
  {
    q: "One outcome of Summit University's curriculum change is:",
    opts: [
      "Increased innovation and student engagement",
      "Rejection of technology",
      "Focus only on theory",
      "Decreased enrolment"
    ],
    ans: 0
  },
  {
    q: "A good example of collaboration in Nigerian culture is:",
    opts: [
      "Avoiding group activities",
      "Competing against community members",
      "Working completely alone",
      "Ajo (traditional cooperative saving group)"
    ],
    ans: 3
  },
  {
    q: "A practical way to improve team collaboration is:",
    opts: [
      "Working individually only",
      "Letting conflicts grow",
      "Organizing small collaborative projects with clear roles",
      "Avoiding group projects"
    ],
    ans: 2
  },
  {
    q: "Artificial Intelligence and ICT course aims to:",
    opts: [
      "Prepare students for the future of work",
      "Keep students away from technology",
      "Focus only on theory",
      "Reject digital tools"
    ],
    ans: 0
  },
  {
    q: "Followership strengthens leadership by:",
    opts: [
      "Offering support, feedback, and active participation",
      "Providing blind loyalty only",
      "Reducing team effort",
      "Creating opposition"
    ],
    ans: 0
  },
  {
    q: "The Oluboffa and council in Offa are examples of:",
    opts: [
      "Acting as peacekeepers in communal activities",
      "Working alone",
      "Creating division",
      "Avoiding community issues"
    ],
    ans: 0
  },
  {
    q: "Family and Leadership Skills course prepares students for:",
    opts: [
      "Rejecting family values",
      "Life beyond campus including relationships and responsibility",
      "Avoiding leadership",
      "Only academic life"
    ],
    ans: 1
  },
  {
    q: "The module encourages students to reflect on their role as:",
    opts: [
      "Isolated individuals",
      "Both leaders and followers",
      "Only followers",
      "Only critics"
    ],
    ans: 1
  },
  {
    q: "Financial Literacy course helps students:",
    opts: [
      "Focus only on spending",
      "Protect themselves from financial pitfalls",
      "Make poor financial decisions",
      "Avoid all money matters"
    ],
    ans: 1
  },
  {
    q: "One of the seven skills introduced at Summit University, Offa is:",
    opts: [
      "Financial Literacy",
      "Ancient History only",
      "Basic Cooking",
      "Traditional Farming"
    ],
    ans: 0
  },
  {
    q: "An effective leader understands the importance of:",
    opts: [
      "Only leading",
      "Only following",
      "Avoiding all responsibility",
      "Leading and knowing when to follow"
    ],
    ans: 3
  },
  {
    q: "In Module 8, effective collaboration requires:",
    opts: [
      "One person making all decisions",
      "Working in isolation",
      "Constant arguments",
      "Trust, respect, and clear roles"
    ],
    ans: 3
  },
  {
    q: "The module emphasizes that leadership and followership:",
    opts: [
      "Are opposites",
      "Are not needed",
      "Make teams weaker",
      "Work together as two sides of the same coin"
    ],
    ans: 3
  },
  {
    q: "In Nigerian communities, Ajo groups demonstrate:",
    opts: [
      "Individual competition",
      "Successful teamwork and mutual support",
      "Lack of trust",
      "Poor collaboration"
    ],
    ans: 1
  },
  {
    q: "History, Heritage, and Storytelling helps students:",
    opts: [
      "Preserve and share African narratives",
      "Forget their roots",
      "Avoid modern tools",
      "Focus only on foreign cultures"
    ],
    ans: 0
  },
  {
    q: "History, Heritage, and Storytelling course empowers students to:",
    opts: [
      "Focus only on foreign stories",
      "Forget African history",
      "Avoid modern tools",
      "Own and share their narrative using modern tools"
    ],
    ans: 3
  },
  {
    q: "Resistance to change is best handled by:",
    opts: [
      "Ignoring people's fears",
      "Forcing immediate compliance",
      "Cancelling the change",
      "Addressing concerns through communication and support"
    ],
    ans: 3
  },
  {
    q: "Clean and Renewable Energy is one of the seven skills because:",
    opts: [
      "Nigeria has an energy crisis",
      "It has no practical use",
      "It is not important",
      "Students dislike science"
    ],
    ans: 0
  },
  {
    q: "The collaborative project in Module 7 requires students to:",
    opts: [
      "Ignore stakeholder feedback",
      "Keep ideas secret",
      "Work individually only",
      "Develop a change management plan for a real issue"
    ],
    ans: 3
  },
  {
    q: "Islam and Global Citizenship course helps students:",
    opts: [
      "Reject ethical values",
      "Thrive in a diverse, interconnected world",
      "Avoid multicultural environments",
      "Focus only on local issues"
    ],
    ans: 1
  },
  {
    q: "Future leadership in Module 11 will require:",
    opts: [
      "Focusing only on the past",
      "Adaptability, innovation, and openness to technology",
      "Resistance to all change",
      "Avoiding new ideas"
    ],
    ans: 1
  },
  {
    q: "Emotional intelligence includes the ability to:",
    opts: [
      "Shout when angry",
      "Ignore others' feelings",
      "Avoid all conversations",
      "Manage your emotions and show empathy"
    ],
    ans: 3
  },
  {
    q: "The power of followership in women's leadership lies in:",
    opts: [
      "Providing support, trust, and active engagement",
      "Creating isolation",
      "Weakening the leader",
      "Increasing barriers"
    ],
    ans: 0
  },
  {
    q: "The project in Module 10 asks students to research:",
    opts: [
      "Foreign leaders only",
      "Only male leaders",
      "A woman leader's journey and the role of followership",
      "Barriers without opportunities"
    ],
    ans: 2
  },
  {
    q: "Self-awareness grows when leaders regularly:",
    opts: [
      "Blame others for failures",
      "Avoid all feedback",
      "Reflect on their strengths, weaknesses, and reactions",
      "Ignore their emotions"
    ],
    ans: 2
  },
  {
    q: "Support from followers is especially powerful for:",
    opts: [
      "Only political leaders",
      "Women leaders facing societal barriers",
      "No one",
      "Male leaders only"
    ],
    ans: 1
  },
  {
    q: "Barriers faced by women leaders can be overcome with:",
    opts: [
      "Increased stereotypes",
      "Strong followership and support systems",
      "Less education",
      "More restrictions"
    ],
    ans: 1
  },
  {
    q: "Courage in future leadership means:",
    opts: [
      "Spotting opportunities and acting on them",
      "Maintaining status quo",
      "Avoiding all risks",
      "Ignoring community needs"
    ],
    ans: 0
  },
  {
    q: "Journaling emotions primarily builds:",
    opts: [
      "Self-awareness",
      "Physical fitness",
      "Sports skills",
      "Cooking ability"
    ],
    ans: 0
  },
  {
    q: "Practising active listening helps improve:",
    opts: [
      "Financial calculations",
      "Physical fitness",
      "Emotional intelligence and relationships",
      "Cooking skills"
    ],
    ans: 2
  },
  {
    q: "Emotional intelligence helps leaders to:",
    opts: [
      "Focus only on tasks",
      "Avoid all forms of listening",
      "Understand and manage their emotions and those of others",
      "React impulsively under pressure"
    ],
    ans: 2
  },
  {
    q: "Overall, Modules 9, 10, and 11 emphasize that great leaders must develop:",
    opts: [
      "Self-awareness, support others, and embrace future changes",
      "Avoidance of learning",
      "Only technical skills",
      "Rigid methods"
    ],
    ans: 0
  },
  {
    q: "One practical way to develop self-awareness is:",
    opts: [
      "Blaming others constantly",
      "Ignoring personal triggers",
      "Keeping an emotion journal",
      "Avoiding reflection"
    ],
    ans: 2
  },
  {
    q: "In Module 10, leadership is described as:",
    opts: [
      "Unimportant for women",
      "Only about giving orders",
      "A solo journey",
      "A partnership between leaders and followers"
    ],
    ans: 3
  },
  {
    q: "A practical example of future leadership in the module is:",
    opts: [
      "Avoiding innovation",
      "Waiting passively for change",
      "Rejecting community involvement",
      "A woman introducing solar-powered kiosks"
    ],
    ans: 3
  },
  {
    q: "Adaptive leadership involves:",
    opts: [
      "Flexibility and learning from feedback",
      "Avoiding responsibility",
      "Ignoring new realities",
      "Rigid plans that never change"
    ],
    ans: 0
  },
  {
    q: "Active listening is a practical way to develop:",
    opts: [
      "Emotional intelligence",
      "Physical strength",
      "Financial skills only",
      "Avoidance of people"
    ],
    ans: 0
  },
  {
    q: "Emotional intelligence includes showing:",
    opts: [
      "Avoidance of people",
      "Disrespect",
      "Only anger",
      "Empathy and calmness under pressure"
    ],
    ans: 3
  },
  {
    q: "Women leaders like Queen Amina inspire us because they:",
    opts: [
      "Avoided all challenges",
      "Showed bold and strategic leadership",
      "Focused only on domestic roles",
      "Discouraged other"
    ],
    ans: 1
  },
  {
    q: "One quality needed for future leadership is:",
    opts: [
      "Resistance to innovation",
      "Fear of technology",
      "Complete avoidance of risk",
      "Courage to embrace change"
    ],
    ans: 3
  },
  {
    q: "Self-awareness helps leaders to:",
    opts: [
      "Make more impulsive decisions",
      "Hide their weaknesses permanently",
      "Understand how their emotions affect their decisions and behaviour",
      "Avoid all reflection"
    ],
    ans: 2
  },
  {
    q: "The solar-powered kiosk example shows:",
    opts: [
      "Rejection of technology",
      "Waiting for government help",
      "Innovative and community-driven future leadership",
      "Passive leadership"
    ],
    ans: 2
  },
  {
    q: "In Module 10, a major barrier to women in leadership in Nigeria is often:",
    opts: [
      "Perfect gender equality",
      "Cultural expectations and stereotypes",
      "Too many opportunities",
      "Excessive support from men"
    ],
    ans: 1
  },
  {
    q: "Madam Efunsetan Aniwura represents:",
    opts: [
      "Someone who faced no obstacles",
      "A follower only",
      "A woman who avoided influence",
      "A powerful historical woman leader in Ibadan"
    ],
    ans: 3
  },
  {
    q: "Barriers to women in leadership can be reduced through:",
    opts: [
      "More restrictions",
      "Increased stereotypes",
      "Strong followership and societal support",
      "Less education"
    ],
    ans: 2
  },
  {
    q: "The module encourages reflection on:",
    opts: [
      "Avoiding self-assessment",
      "Only weaknesses",
      "Only successes",
      "Both strengths and areas for improvement"
    ],
    ans: 3
  },
  {
    q: "In Nigerian communities, women leaders often face challenges related to:",
    opts: [
      "Traditional roles and cultural expectations",
      "Excessive funding",
      "Lack of education opportunities",
      "Too much encouragement"
    ],
    ans: 0
  },
  {
    q: "A key message from Module 11 is that future leaders must be:",
    opts: [
      "Adaptable and ethically grounded",
      "Rigid and unchanging",
      "Afraid of uncertainty",
      "Focused only on the past"
    ],
    ans: 0
  },
  {
    q: "Cultural stereotypes are a common barrier for:",
    opts: [
      "Foreign leaders",
      "Only young people",
      "Women in leadership positions",
      "All male leaders"
    ],
    ans: 2
  },
  {
    q: "Which of the following is a key lesson from the module about motivating people?",
    opts: [
      "People cannot be motivated; they either have it or don’t.",
      "External rewards like money are the only things that motivate people.",
      "Inner drive, passion, and a compelling vision are powerful sources of motivation.",
      "Fear of punishment is the best motivator."
    ],
    ans: 2
  },
  {
    q: "A leader is preparing for an important negotiation. What is the most important thing to understand?",
    opts: [
      "The goal is a mutually acceptable solution where both sides feel their concerns are addressed.",
      "The goal is to make demands and refuse any compromise.",
      "The goal is to “win” at all costs, even if the other side loses.",
      "The goal is to avoid discussing difficult topics."
    ],
    ans: 0
  },
  {
    q: "A leader wants to improve team problem-solving. How can they best leverage diversity?",
    opts: [
      "Have the leader solve all problems and assign tasks to the team.",
      "Encourage members from different backgrounds to share unique perspectives and ideas.",
      "Make the team as homogeneous as possible to avoid conflict.",
      "Discourage any form of disagreement or debate."
    ],
    ans: 1
  },
  {
    q: "According to the module, what is the main purpose of the “community engagement project”?",
    opts: [
      "To avoid reading books or studying theory.",
      "To prove one’s own community is superior to others.",
      "To isolate students from the wider community.",
      "To develop cultural intelligence through real-life interactions with people from different backgrounds."
    ],
    ans: 3
  },
  {
    q: "A leader is criticized for being “too soft” because they listen to team concerns before deciding. Based on the module, is this a weakness?",
    opts: [
      "No, but only if the leader ignores concerns after listening.",
      "Yes, leaders should never listen to followers.",
      "No, consulting followers (Shura) is a sign of strength and wisdom in leadership.",
      "Yes, listening to concerns is a sign of weakness."
    ],
    ans: 2
  },
  {
    q: "Which of the following is a practical example of a leader applying “Amanah”?",
    opts: [
      "Ignoring responsibilities and hoping no one notices.",
      "Using company funds for personal expenses.",
      "Taking credit for the team’s work.",
      "Responsibly managing the team’s budget and reporting transparently."
    ],
    ans: 3
  },
  {
    q: "A leader stays calm and makes rational decisions under immense pressure. This leader demonstrates high:",
    opts: [
      "Empathy.",
      "Motivation.",
      "Self-regulation.",
      "Social skills."
    ],
    ans: 2
  },
  {
    q: "Which of the following is an example of a leader demonstrating “Motivation” (inner drive)?",
    opts: [
      "Working hard only when being watched.",
      "Giving up easily when faced with a challenge.",
      "Having deep passion for goals and persevering despite obstacles.",
      "Competing with team members to take credit for their work."
    ],
    ans: 2
  },
  {
    q: "According to the module, what is the ultimate relationship between a leader and a follower?",
    opts: [
      "They are natural enemies who must compete for power.",
      "A leader is less important than a follower.",
      "A follower is less important than a leader.",
      "They are interdependent and both essential for achieving a shared vision."
    ],
    ans: 3
  },
  {
    q: "Which of the following is a key characteristic of an ethical leader?",
    opts: [
      "Prioritizing personal profit over fairness.",
      "Focusing only on short-term gains.",
      "Prioritizing long-term integrity and fairness over short-term popularity.",
      "Changing ethical standards based on the situation."
    ],
    ans: 2
  },
  {
    q: "A student’s community project is stalled by disagreements. Using the module’s guidance, what should the student do?",
    opts: [
      "Choose a side and argue aggressively for it.",
      "Leave the group and start a new project alone.",
      "Step back, help establish ground rules for respectful dialogue, and facilitate finding common ground.",
      "Ignore disagreements and hope they resolve on their own."
    ],
    ans: 2
  },
  {
    q: "What is the most important benefit of a leader showing genuine humility?",
    opts: [
      "It makes the leader more popular but doesn’t help with results.",
      "It makes the leader look weak and vulnerable.",
      "It allows the leader to avoid taking responsibility.",
      "It builds trust, encourages open communication, and puts focus on serving others."
    ],
    ans: 3
  },
  {
    q: "Which of the following is a practical example of applying the module’s lessons on leading change?",
    opts: [
      "Implementing a new system without telling anyone in advance.",
      "Announcing a change once and refusing to answer questions.",
      "Communicating reasons for change, training people on new processes, and providing transition support.",
      "Canceling a change initiative at the first sign of resistance."
    ],
    ans: 2
  },
  {
    q: "How does the module suggest a leader handle a team member’s mistake?",
    opts: [
      "Publicly humiliate the team member to set an example.",
      "Focus on the team member’s growth and well-being while addressing the error constructively.",
      "Ignore the mistake and pretend it never happened.",
      "Fire the team member immediately."
    ],
    ans: 1
  },
  {
    q: "What is the main lesson from the module about the role of “grantsmanship” in university leadership?",
    opts: [
      "It is a form of begging universities should avoid.",
      "It is only useful for science departments, not arts or humanities.",
      "It is a crucial skill for securing funding that drives innovation and development.",
      "It is a waste of time that distracts from teaching."
    ],
    ans: 2
  },
  {
    q: "According to the module, what is the most important step in developing emotional intelligence?",
    opts: [
      "Avoiding all situations that trigger strong emotions.",
      "It is inborn and cannot be developed.",
      "Regular reflection on emotions and consistent practice of skills like self-regulation and empathy.",
      "Reading a book about emotional intelligence once."
    ],
    ans: 2
  },
  {
    q: "Which of the following is the best description of “active followership”?",
    opts: [
      "A follower who asks questions, gives constructive feedback, and takes initiative to help achieve shared goals.",
      "A follower who only obeys orders and never asks questions.",
      "A follower who does the bare minimum and avoids responsibility.",
      "A follower who constantly opposes the leader and creates conflict."
    ],
    ans: 0
  },
  {
    q: "According to the module, what is the role of a leader in a family setting?",
    opts: [
      "To avoid resolving conflicts and let them escalate.",
      "To make all decisions without input from other family members.",
      "To ensure only the eldest member has any influence.",
      "To facilitate shared responsibilities and mutual support among family members."
    ],
    ans: 3
  },
  {
    q: "Which of the following is a key component of emotional intelligence?",
    opts: [
      "Solving complex mathematical problems.",
      "Understanding and managing your own emotions and the emotions of others.",
      "Speaking multiple languages.",
      "Ignoring the emotions of others."
    ],
    ans: 1
  },
  {
    q: "Why does the module include the course “Artificial Intelligence and ICT”?",
    opts: [
      "To keep students away from digital tools and technology.",
      "To encourage students to ignore the ethical implications of AI.",
      "To prepare students for the future of work and teach responsible technology use.",
      "To prove traditional knowledge is more important than modern technology."
    ],
    ans: 2
  },
  {
    q: "A leader wants to build a strong, resilient team. What is the most effective strategy?",
    opts: [
      "Encourage constant competition between team members.",
      "Value each person’s unique strengths and encourage collaboration.",
      "Hire only people who think exactly the same way.",
      "Ensure the leader makes every decision without input."
    ],
    ans: 1
  },
  {
    q: "A leader makes impulsive decisions when stressed, often causing problems. What skill does this leader most need to develop?",
    opts: [
      "Public speaking",
      "Grantsmanship",
      "Self-regulation",
      "Financial literacy"
    ],
    ans: 2
  },
  {
    q: "According to the module, what is the main purpose of the Qur’anic concept of “Khalifah” in relation to the environment?",
    opts: [
      "To argue humans should avoid using any natural resources.",
      "To give humans unlimited permission to exploit natural resources.",
      "To suggest environmental issues are not important.",
      "To command humans to act as responsible caretakers and stewards of the earth."
    ],
    ans: 3
  },
  {
    q: "According to the module, what is a key quality of a future-ready leader?",
    opts: [
      "The ability to predict the future with certainty.",
      "The ability to focus only on the past and maintain traditions.",
      "The ability to adapt to new technologies and social changes ethically and effectively.",
      "The ability to resist all forms of change."
    ],
    ans: 2
  },
  {
    q: "According to the module, what is a key component of cultural intelligence?",
    opts: [
      "Judging other cultures based on your own standards.",
      "Being curious and asking respectful questions to learn about other cultures.",
      "Avoiding conversations with people from other backgrounds.",
      "Insisting everyone adopt your own cultural norms."
    ],
    ans: 1
  },
  {
    q: "Which of the following is a key component of “active listening”?",
    opts: [
      "Focusing full attention on the speaker and responding thoughtfully.",
      "Planning what to say next while the other person is talking.",
      "Interrupting the speaker to ask a question.",
      "Nodding but thinking about something else."
    ],
    ans: 0
  },
  {
    q: "According to the module, what is one major ethical challenge that leaders in Nigeria must address?",
    opts: [
      "Too much transparency and accountability.",
      "A lack of talented people to lead.",
      "Perfect adherence to all ethical standards.",
      "A culture of corruption and lack of accountability."
    ],
    ans: 3
  },
  {
    q: "A leader struggles to get the team to buy into a new project. Based on Transformational Leadership, what is the best approach?",
    opts: [
      "Communicate a compelling, inspiring vision for the project’s success.",
      "Threaten punishment for non-cooperation.",
      "Demand followers obey without question.",
      "Ignore the team’s lack of enthusiasm and start anyway."
    ],
    ans: 0
  },
  {
    q: "According to the module, what is the main benefit of diversity in leadership teams?",
    opts: [
      "It eliminates the need for a leader.",
      "It makes decision-making faster and simpler.",
      "It guarantees everyone will agree on everything.",
      "It leads to richer ideas, better problem-solving, and more innovation."
    ],
    ans: 3
  },
  {
    q: "A leader wants to develop a more inclusive team culture. What is the most effective first step?",
    opts: [
      "Ignore differences and treat everyone exactly the same.",
      "Model curiosity and respect for different perspectives, and actively seek diverse input.",
      "Create a team where all members have the same cultural background.",
      "Force everyone to attend cultural sensitivity training regardless of interest."
    ],
    ans: 1
  },
  {
    q: "Which of the following is a key component of effective team building?",
    opts: [
      "Encouraging constant conflict to generate new ideas.",
      "Ensuring one person makes all the decisions.",
      "Recognizing each member’s strengths and creating an environment where everyone feels valued.",
      "Encouraging members to work in isolation from each other."
    ],
    ans: 2
  },
  {
    q: "A student notices the club president is making a decision that could harm the club’s reputation. As an active follower, what should the student do?",
    opts: [
      "Quit the club immediately.",
      "Remain silent to avoid conflict.",
      "Post negative comments about the president on social media.",
      "Respectfully express concerns to the president and offer alternative suggestions."
    ],
    ans: 3
  },
  {
    q: "Which of the following is a practical application of Servant Leadership?",
    opts: [
      "A CEO who lives in a mansion and never interacts with employees.",
      "A team leader who asks, “What do you need to be successful?” and then works to provide it.",
      "A supervisor who spends all time in private meetings and avoids the team.",
      "A manager who takes the best office and gives cramped spaces to the team."
    ],
    ans: 1
  },
  {
    q: "A student researches a Nigerian woman leader for a class project. What should the project focus on, according to the module?",
    opts: [
      "Only the barriers she faced, ignoring successes.",
      "Comparing her to foreign leaders and proving she is inferior.",
      "The leader’s journey, barriers faced, and role of followership in her success.",
      "Only the leader’s successes, ignoring barriers."
    ],
    ans: 2
  },
  {
    q: "According to the module, what is the main benefit of the “Ajo” system for understanding teamwork?",
    opts: [
      "It shows individualism is the best path to success.",
      "It shows how mutual support, trust, and shared goals create strong community bonds.",
      "It shows competition is more important than cooperation.",
      "It shows financial systems should be avoided."
    ],
    ans: 1
  },
  {
    q: "A leader understands their own emotional triggers and manages their reactions. This leader has a high degree of:",
    opts: [
      "Public speaking ability.",
      "Self-awareness and self-regulation.",
      "Technical skill.",
      "External motivation."
    ],
    ans: 1
  },
  {
    q: "According to the module, how should a leader handle a follower who provides critical feedback?",
    opts: [
      "Ignore the feedback completely.",
      "Publicly embarrass the follower for disagreeing.",
      "Punish the follower for questioning authority.",
      "Listen respectfully, thank the follower for honesty, and consider the feedback seriously."
    ],
    ans: 3
  },
  {
    q: "A leader wants to improve team problem-solving. How can they best leverage diversity?",
    opts: [
      "Make the team as homogeneous as possible to avoid conflict.",
      "Discourage any form of disagreement or debate.",
      "Encourage members from different backgrounds to share unique perspectives and ideas.",
      "Have the leader solve all problems and assign tasks to the team"
    ],
    ans: 2
  },
  {
    q: "According to the module, how should a leader handle a follower who provides critical feedback?",
    opts: [
      "Publicly embarrass the follower for disagreeing.",
      "Ignore the feedback completely.",
      "Punish the follower for questioning authority.",
      "Listen respectfully, thank the follower for honesty, and consider the feedback seriously."
    ],
    ans: 3
  },
  {
    q: "How does the module suggest a leader handle a team member’s mistake?",
    opts: [
      "Publicly humiliate the team member to set an example.",
      "Focus on the team member’s growth and well-being while addressing the error constructively.",
      "Ignore the mistake and pretend it never happened.",
      "Fire the team member immediately."
    ],
    ans: 1
  },
  {
    q: "Which of the following is a practical example of applying the module’s lessons on leading change?",
    opts: [
      "Announcing a change once and refusing to answer questions.",
      "Implementing a new system without telling anyone in advance.",
      "Canceling a change initiative at the first sign of resistance.",
      "Communicating reasons for change, training people on new processes, and providing transition support."
    ],
    ans: 3
  },
  {
    q: "A leader is criticized for being “too soft” because they listen to team concerns before deciding. Based on the module, is this a weakness?",
    opts: [
      "No, but only if the leader ignores concerns after listening.",
      "Yes, leaders should never listen to followers.",
      "No, consulting followers (Shura) is a sign of strength and wisdom in leadership.",
      "Yes, listening to concerns is a sign of weakness."
    ],
    ans: 2
  },
  {
    q: "According to the module, what is the role of a leader in a family setting?",
    opts: [
      "To facilitate shared responsibilities and mutual support among family members.",
      "To ensure only the eldest member has any influence.",
      "To avoid resolving conflicts and let them escalate.",
      "To make all decisions without input from other family members."
    ],
    ans: 0
  },
  {
    q: "According to the module, what is the main benefit of diversity in leadership teams?",
    opts: [
      "It leads to richer ideas, better problem-solving, and more innovation.",
      "It makes decision-making faster and simpler.",
      "It guarantees everyone will agree on everything.",
      "It eliminates the need for a leader."
    ],
    ans: 0
  },
  {
    q: "Why is it important for leaders to have strong public speaking skills?",
    opts: [
      "To dominate conversations and prevent others from speaking.",
      "To prove they are more intelligent than followers.",
      "To avoid having to write anything down.",
      "To inspire and influence larger audiences and communicate a clear vision."
    ],
    ans: 3
  },
  {
    q: "According to the module, what is the main purpose of the Qur’anic concept of “Khalifah” in relation to the environment?",
    opts: [
      "To give humans unlimited permission to exploit natural resources.",
      "To argue humans should avoid using any natural resources.",
      "To command humans to act as responsible caretakers and stewards of the earth.",
      "To suggest environmental issues are not important."
    ],
    ans: 2
  },
  {
    q: "A leader understands their own emotional triggers and manages their reactions. This leader has a high degree of:",
    opts: [
      "Technical skill.",
      "Self-awareness and self-regulation.",
      "External motivation.",
      "Public speaking ability."
    ],
    ans: 1
  },
  {
    q: "According to the module, what is the most important step in developing emotional intelligence?",
    opts: [
      "Regular reflection on emotions and consistent practice of skills like self-regulation and empathy.",
      "It is inborn and cannot be developed.",
      "Reading a book about emotional intelligence once.",
      "Avoiding all situations that trigger strong emotions."
    ],
    ans: 0
  },
  {
    q: "A leader wants to develop a more inclusive team culture. What is the most effective first step?",
    opts: [
      "Force everyone to attend cultural sensitivity training regardless of interest.",
      "Model curiosity and respect for different perspectives, and actively seek diverse input.",
      "Ignore differences and treat everyone exactly the same.",
      "Create a team where all members have the same cultural background."
    ],
    ans: 1
  },
  {
    q: "Which of the following is a key characteristic of an ethical leader?",
    opts: [
      "Changing ethical standards based on the situation.",
      "Prioritizing personal profit over fairness.",
      "Focusing only on short-term gains.",
      "Prioritizing long-term integrity and fairness over short-term popularity"
    ],
    ans: 3
  },
  {
    q: "Which of the following is a practical example of a leader applying “Amanah”?",
    opts: [
      "Ignoring responsibilities and hoping no one notices.",
      "Using company funds for personal expenses.",
      "Responsibly managing the team’s budget and reporting transparently.",
      "Taking credit for the team’s work."
    ],
    ans: 2
  },
  {
    q: "Which of the following is a practical application of Servant Leadership?",
    opts: [
      "A supervisor who spends all time in private meetings and avoids the team.",
      "A team leader who asks, “What do you need to be successful?” and then works to provide it.",
      "A CEO who lives in a mansion and never interacts with employees.",
      "A manager who takes the best office and gives cramped spaces to the team."
    ],
    ans: 1
  },
  {
    q: "A student’s community project is stalled by disagreements. Using the module’s guidance, what should the student do?",
    opts: [
      "Ignore disagreements and hope they resolve on their own.",
      "Step back, help establish ground rules for respectful dialogue, and facilitate finding common ground.",
      "Leave the group and start a new project alone.",
      "Choose a side and argue aggressively for it."
    ],
    ans: 1
  },
  {
    q: "According to the module, why is “followership” important?",
    opts: [
      "Because it is a way for weak people to gain power.",
      "Because good followers help turn a leader’s vision into reality.",
      "Because leadership is impossible without followers who obey blindly.",
      "Because followers are more important than leaders."
    ],
    ans: 1
  },
  {
    q: "According to the module, what is a key component of cultural intelligence?",
    opts: [
      "Judging other cultures based on your own standards.",
      "Being curious and asking respectful questions to learn about other cultures.",
      "Avoiding conversations with people from other backgrounds.",
      "Insisting everyone adopt your own cultural norms."
    ],
    ans: 1
  },
  {
    q: "A leader makes impulsive decisions when stressed, often causing problems. What skill does this leader most need to develop?",
    opts: [
      "Financial literacy",
      "Grantsmanship",
      "Self-regulation",
      "Public speaking"
    ],
    ans: 2
  },
  {
    q: "Which of the following is a key component of “active listening”?",
    opts: [
      "Focusing full attention on the speaker and responding thoughtfully.",
      "Planning what to say next while the other person is talking.",
      "Interrupting the speaker to ask a question.",
      "Nodding but thinking about something else."
    ],
    ans: 0
  },
  {
    q: "Which of the following is a key lesson from the module about motivating people?",
    opts: [
      "People cannot be motivated; they either have it or don’t.",
      "Fear of punishment is the best motivator.",
      "Inner drive, passion, and a compelling vision are powerful sources of motivation.",
      "External rewards like money are the only things that motivate people."
    ],
    ans: 2
  },
  {
    q: "A leader wants to build a strong, resilient team. What is the most effective strategy?",
    opts: [
      "Hire only people who think exactly the same way.",
      "Encourage constant competition between team members.",
      "Value each person’s unique strengths and encourage collaboration.",
      "Ensure the leader makes every decision without input."
    ],
    ans: 2
  },
  {
    q: "Why is it important for a leader to have strong social skills?",
    opts: [
      "To prove they are more popular than others.",
      "To avoid making difficult decisions.",
      "To manipulate team members into compliance.",
      "To manage relationships, resolve conflicts effectively, and communicate clearly."
    ],
    ans: 3
  },
  {
    q: "Why does the module include the course “Artificial Intelligence and ICT”?",
    opts: [
      "To prove traditional knowledge is more important than modern technology.",
      "To encourage students to ignore the ethical implications of AI.",
      "To keep students away from digital tools and technology.",
      "To prepare students for the future of work and teach responsible technology use."
    ],
    ans: 3
  },
  {
    q: "According to the module, what is one major ethical challenge that leaders in Nigeria must address?",
    opts: [
      "Too much transparency and accountability.",
      "Perfect adherence to all ethical standards.",
      "A culture of corruption and lack of accountability.",
      "A lack of talented people to lead."
    ],
    ans: 2
  },
  {
    q: "According to the module, what is the ultimate relationship between a leader and a follower?",
    opts: [
      "A follower is less important than a leader.",
      "A leader is less important than a follower.",
      "They are interdependent and both essential for achieving a shared vision.",
      "They are natural enemies who must compete for power."
    ],
    ans: 2
  },
  {
    q: "Which of the following is a key component of effective team building?",
    opts: [
      "Ensuring one person makes all the decisions.",
      "Recognizing each member’s strengths and creating an environment where everyone feels valued.",
      "Encouraging members to work in isolation from each other.",
      "Encouraging constant conflict to generate new ideas."
    ],
    ans: 1
  },
  {
    q: "Which of the following is a key component of emotional intelligence?",
    opts: [
      "Solving complex mathematical problems.",
      "Ignoring the emotions of others.",
      "Speaking multiple languages.",
      "Understanding and managing your own emotions and the emotions of others."
    ],
    ans: 3
  },
  {
    q: "A student researches a Nigerian woman leader for a class project. What should the project focus on, according to the module?",
    opts: [
      "Only the leader’s successes, ignoring barriers.",
      "Only the barriers she faced, ignoring successes.",
      "Comparing her to foreign leaders and proving she is inferior.",
      "The leader’s journey, barriers faced, and role of followership in her success."
    ],
    ans: 3
  },
  {
    q: "A leader struggles to get the team to buy into a new project. Based on Transformational Leadership, what is the best approach?",
    opts: [
      "Threaten punishment for non-cooperation.",
      "Demand followers obey without question.",
      "Communicate a compelling, inspiring vision for the project’s success.",
      "Ignore the team’s lack of enthusiasm and start anyway."
    ],
    ans: 2
  },
  {
    q: "Which of the following is the best description of “active followership”?",
    opts: [
      "A follower who constantly opposes the leader and creates conflict.",
      "A follower who asks questions, gives constructive feedback, and takes initiative to help achieve shared goals.",
      "A follower who only obeys orders and never asks questions.",
      "A follower who does the bare minimum and avoids responsibility"
    ],
    ans: 1
  },
  {
    q: "Which of the following is an example of a leader demonstrating “Motivation” (inner drive)?",
    opts: [
      "Working hard only when being watched.",
      "Competing with team members to take credit for their work.",
      "Giving up easily when faced with a challenge.",
      "Having deep passion for goals and persevering despite obstacles."
    ],
    ans: 3
  },
  {
    q: "What is the main lesson from the module about the role of “grantsmanship” in university leadership?",
    opts: [
      "It is a form of begging universities should avoid.",
      "It is a waste of time that distracts from teaching.",
      "It is only useful for science departments, not arts or humanities.",
      "It is a crucial skill for securing funding that drives innovation and development."
    ],
    ans: 3
  },
  {
    q: "What is the most important benefit of a leader showing genuine humility?",
    opts: [
      "It makes the leader more popular but doesn’t help with results.",
      "It builds trust, encourages open communication, and puts focus on serving others.",
      "It makes the leader look weak and vulnerable.",
      "It allows the leader to avoid taking responsibility."
    ],
    ans: 1
  },
  {
    q: "A student notices the club president is making a decision that could harm the club’s reputation. As an active follower, what should the student do?",
    opts: [
      "Respectfully express concerns to the president and offer alternative suggestions.",
      "Quit the club immediately.",
      "Remain silent to avoid conflict.",
      "Post negative comments about the president on social media"
    ],
    ans: 0
  }
];


export type ContentBlock =
  | string
  | { heading: string }
  | { code: string; language?: string };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  topic: string;
  chapterLabel: string;
  aboutText: string;
  content: ContentBlock[];
  relatedSlugs: string[];
}

export const posts: Record<string, BlogPost> = {
  "open-sourcing-2024": {
    slug: "open-sourcing-2024",
    title: "Open-Sourcing All of My Projects from 2024",
    subtitle: "A chronicle of AI experiments",
    date: "FEB 13, 2025",
    readingTime: "6 MIN",
    topic: "AI / OPEN SOURCE",
    chapterLabel: "POST 016",
    aboutText:
      "I worked on a lot of personal AI projects in 2024, and decided to open source all of them. Each project pushed the boundaries of what LLMs could do for software development.",
    relatedSlugs: ["rag-vs-big-context-windows", "emerging-personalized-economy"],
    content: [
      "I worked on a lot of personal AI projects in 2024, and have decided to open source all of them. I think the work done in a lot of them is pretty interesting and there may be some novel insights gained by looking at the code.",
      { heading: "ui-builder" },
      "This is a drag and drop website builder with a few twists. An LLM writes all of the frontend state management code, and the LLM can help you to redesign or beautify your site. It has some novel ways of switching between edit and preview modes that uses some potentially unsafe javascript eval in your browser, but enables some very cool features. One of which is live editing the code in a small window, which is far more convenient than toggling buttons or moving sliders to do things like change colors or adjust font sizes. Instead, just edit your component\u2019s tailwind classes. It uses tailwind, React, and shadcn components.",
      { heading: "react-component-agent" },
      "An AI Agent that builds your frontend components. It first formulates a plan which you can see appear in the interface, then goes step by step building the component. As it completes steps, there is a live demo view of the component available for you to play with and a view of the code it has produced on the right side of the page as well. It has some special tricks for building components that use contenteditable. As of early 2024, it worked fairly reliably and had surprisingly good results but it was expensive to run and took a while.",
      { heading: "agent2" },
      "This is a poorly named project \u2014 it is actually a Node.js code generator application. It works with existing repositories similar to how Devin works (but created several months before Devin was announced), and produces a ton of artifacts besides just the code change pull request. It also spins off PRDs based on the task, technical design docs, coding style guides, and more report style artifacts that it uses internally. It worked well enough to start improving itself although the reliability was a bit questionable and like most LLM projects in early 2024 it was slow and expensive.",
      { heading: "qckfx-ads" },
      "This was actually launched and used by others for a bit. It uses ComfyUI workflows to generate images that contain products from ecommerce brands. It was interesting working with ComfyUI and all of the image manipulation tools out there. I was able to generate pretty high quality product images straight out of the flux model without having to \u201cphotoshop in\u201d the product photo, which blew my mind.",
      { heading: "What Are You Doing Now?" },
      "I recently founded qckfx.com, where we\u2019re building the first fully-automated bug-fixing AI. Our agents automatically detect and fix bugs from your task trackers, delivering complete pull requests with fixes, tests, and root cause analysis \u2014 no human intervention (or prompting) needed.",
      "We\u2019re looking for beta users and hiring founding engineers (preferred experience with AI agents, AI codegen, AI workflow automation, machine learning, or AI evals).",
    ],
  },

  "emerging-personalized-economy": {
    slug: "emerging-personalized-economy",
    title: "Implications of the Emerging Personalized Economy",
    subtitle: "AI, AR/VR, and the shift to small business",
    date: "MAY 3, 2023",
    readingTime: "5 MIN",
    topic: "ECONOMICS / AI",
    chapterLabel: "POST 015",
    aboutText:
      "New technologies are making it easier and cheaper to get products and experiences tailored just for you. This piece explores how personalization reshapes economics and society.",
    relatedSlugs: ["rag-vs-big-context-windows", "open-sourcing-2024"],
    content: [
      "New technologies are making it easier and cheaper to get products and experiences that are tailored just for you. These include things like AI, augmented and virtual reality, digital goods, and 3D printing. These changes can impact how we see the world, get news, and even communicate with others.",
      { heading: "Economic Implications" },
      "These new technologies mean that custom products are becoming cheaper and easier to make. We\u2019re already seeing this with services like Google and TikTok, which let niche businesses tailor their offerings to people worldwide, enabling businesses that weren\u2019t previously possible. Now, 3D printing is making it cheaper to produce custom goods since inputs can be commoditized and digital designs will be abundant.",
      "In the future, it looks like everyone will be able to have personalized digital and 3D printed goods. This is so different from how the world works today, where centralized corporations like Ikea and McDonalds rule due to their lower costs. Instead of big companies making products for everyone, we might see more small businesses and artists making products for specific groups of people.",
      { heading: "Social Implications" },
      "With more personalized goods and services, people will also start to see and share things in a new way. This shift will impact our daily life, but also our culture and society. We will have more choices, and a more diverse group of people will be able to contribute to the market.",
      "However, there could be downsides. As we consume more personalized content, we might start to lose shared experiences. This could isolate us within our own echo chambers and lead to more polarization and fragmentation in society. We\u2019ll need to actively seek out different perspectives and engage in open conversation.",
      { heading: "Opportunities for Startups" },
      "Startups can help by creating platforms that allow artists and small businesses to sell their goods and services. They can also help design and produce these items. To deal with the issues of fewer large employers, startups can create innovative solutions to replace traditional jobs \u2014 for example, they could partner with communities to provide healthcare or education, or create platforms for freelance work with benefits like insurance and retirement savings.",
      { heading: "Investment Ideas" },
      "Investors might want to look at companies that are creating personalized experiences using AI, AR/VR, and 3D printing. They could also look at companies that are disrupting traditional businesses and providing digital design repositories and markets. There is also a need for companies building tools for creators and ways for people to maintain social connections.",
      { heading: "Conclusion" },
      "Personalization technologies are changing our economy and society. More and more, we\u2019re seeing personalized goods that are cheap and easy to make. This is creating a more diverse and customer-focused economy. It\u2019s also changing how we see and share things. But we need to be careful about losing shared experiences and we need to find new ways to support workers.",
    ],
  },

  "rag-vs-big-context-windows": {
    slug: "rag-vs-big-context-windows",
    title: "RAG vs Big Context Windows",
    subtitle: "Is focused retrieval still the way to win at scale?",
    date: "NOV 9, 2023",
    readingTime: "5 MIN",
    topic: "AI / ENGINEERING",
    chapterLabel: "POST 014",
    aboutText:
      "With context windows growing rapidly, I explored whether custom RAG systems still provide value for AI startups. The answer surprised me.",
    relatedSlugs: ["emerging-personalized-economy", "open-sourcing-2024"],
    content: [
      "At this point, most people who have been following generative AI discussions have probably heard of RAG (retrieval-augmented generation). For those who aren\u2019t familiar, briefly it means you pull data from elsewhere and feed it through the LLM to get your final result.",
      "Recently there\u2019s been some doubt about the future of RAG. Context windows are bigger now (gpt-4-turbo has 128k, Claude 100k). OpenAI is releasing their Assistant API that manages RAG for you. Is there value in building your own RAG for your AI app anymore?",
      "While larger context or managed RAG might work for the low hanging fruit applications like summarizing a long PDF or single-threaded chat applications, I see a lot of value still in custom RAG development.",
      "AI apps have the following 4 distinguishing elements: proprietary data, exactness of response, cost, and speed. Most startups aren\u2019t going to have proprietary data, so that limits advantages to exactness of response, cost, and speed. In practically all of these, larger context windows and managed RAG lose out.",
      { heading: "Exactness of Response" },
      "Exactness of response is a moving target. Depending on who your user is, what time it is, what they are doing, etc. the definition of what is exact may differ. That means there\u2019s no one size fits all generation technique. Unless the answer you\u2019re looking for is a general summarization of a very long document, then bigger context windows are not going to give you a more exact response. Studies show that lazily packing irrelevant content into a large context window and relying on the LLM to figure it out performs worse than RAG.",
      { heading: "Cost" },
      "It goes without saying that as far as LLM service costs go, when you\u2019re paying for tokens then sending bigger contexts is going to be more expensive than smaller contexts.",
      { heading: "Speed" },
      "Sending more tokens means it takes longer to get a response. There are many studies that show even tens of milliseconds can influence retention and timespent at scale. For startups who want to differentiate by serving faster responses, using less tokens is going to be one of the easiest ways.",
      { heading: "The Recursive Nature of Work" },
      "One of my main workflows for ChatGPT is breaking a large project into tasks, and then smaller tasks until I can convert tasks to code. What\u2019s interesting is the recursive nature of this workflow. It seems like this is not only how individuals operate but also how larger organizations operate. Vice Presidents set high level, abstract goals. Directors and senior managers turn this into more concrete tasks. Then managers and team leads break these into projects for teams of 3-5.",
      "To me, this looks something like LLMs with large context windows figuring out general strategy, LLMs with a more focused dataset putting together a sub-strategy, and then progressively focused LLMs breaking these into projects, tasks, and subtasks until finally the tasks are converted into the final products.",
      "While completely automated *AI agents* are appealing in a technical and magical sense, I highly doubt we are able to create such sophisticated pieces of machinery from non-deterministic LLMs. For the time being, I still see the best AI products being those that have a human-in-the-loop to course correct and guide the AI.",
    ],
  },

  "difficulty-becoming-manager": {
    slug: "difficulty-becoming-manager",
    title: "The Difficulty of Becoming a Manager",
    subtitle: "On delegation, jealousy, and growth",
    date: "JAN 7, 2018",
    readingTime: "4 MIN",
    topic: "LEADERSHIP",
    chapterLabel: "POST 013",
    aboutText:
      "After being promoted to iOS Team Leader at DayDayCook, I went through every classic new-manager mistake. This is what I learned.",
    relatedSlugs: ["2017", "why-china"],
    content: [
      "Nearly every new manager makes the same mistakes.",
      "She\u2019ll try to compete with those whom she\u2019s supposed to be managing and try to continue being the team superstar. She\u2019ll horde the difficult work because others on her team are \u201cnot capable\u201d or \u201cmess things up.\u201d She\u2019ll get jealous when others compliment one of her team members\u2019 work, because she should be the one receiving the compliment. And she\u2019ll get stressed beyond belief as she tries to do the entire team\u2019s work by herself because \u201cshe\u2019s the one who\u2019s held responsible now.\u201d",
      "Getting promoted to manager is a weird thing. It\u2019s actually completely different from whichever position you were promoted. It\u2019s its own beast. You used to be a doer, and you got all those dopamine boosts from doing things well and being complimented. But now\u2026 now you just get told whenever things are going wrong. And most of the time it\u2019s not even something you did wrong, it was those dastardly team members you\u2019re supposed to be managing.",
      "Whenever something is wrong, your first instinct is to jump in and fix it yourself. Because you were informed of the problem, you assume it\u2019s yours to fix. That\u2019s how it used to be. And you used to just fix it and move on. But not anymore. You\u2019re going to hear about every mistake that every one of your team members made. If you try to fix all of them you\u2019re going to quickly find yourself overwhelmed beyond belief.",
      "Your job used to be to write code / write drafts / other entry level work. Now your job is to strategize and work on the logic that holds everything together, to check your team members\u2019 work, and to learn how to work with all of those personalities that make up your team.",
      "After my supervisor recommended I delegate more, I took his advice to heart. I started letting other people take the bigger, more critical projects. I would help them to plan the work, then do other things while they wrote the code. Once it was done I would check it, but I wasn\u2019t good at giving constructive feedback. I was afraid of hurting people\u2019s feelings and wasn\u2019t sure that my feedback was even 100% correct. But by kicking the can down the road and not giving better feedback, I helped accumulate a lot of technical debt and failed to help my team members grow.",
      "Another problem I faced was feelings of competition. I used to be in the team and now I was leading the team. In the past I received a lot of praise for my work, that\u2019s how I managed to get promoted. But now when I saw my team members receiving praise it weirdly bit at me.",
      "This whole mindset is completely backwards. Once I became a manager, I was no longer doing my previous job. I should\u2019ve been delighted that my team members were receiving praise. I should have hopped on the bandwagon and praised them as well. My team members getting praised meant that I was doing my job. They were growing and getting better. They were filling the gap that was opened when I moved out, just like I was filling the gap ahead of me.",
      "So, if you just became a manager or are about to become a manager, remember to work with your team, not against them. Remember that you have a new job, and it\u2019s time to let someone else do your old job. And remember that you are all working together for the same goal, not competing!",
    ],
  },

  "2017": {
    slug: "2017",
    title: "2017",
    subtitle: "Year in review \u2014 DayDayCook, Series A, global launch",
    date: "JAN 3, 2017",
    readingTime: "8 MIN",
    topic: "PERSONAL",
    chapterLabel: "POST 012",
    aboutText:
      "A follow-up to my 2016 post, chronicling my journey from Niuwa to DayDayCook \u2014 first technical hire, iOS team lead, and a year of incredible growth.",
    relatedSlugs: ["goodbye-2015", "why-china"],
    content: [
      "I started 2016 having worked at Niuwa for about one and a half months following the merger of Stubank and Niuwa. Because of the depth of talent at Niuwa and since I entered via a merger, I was relatively low on the iOS developer totem pole (we had 5 developers for one app). In late January I left Niuwa and joined DayDayCook as their first technical hire after the CTO.",
      "DayDayCook is a company that creates recipes, videos, and other content. The company distributes this content through various video platforms both in and outside of China as well as through our award-winning iOS and Android apps. Our CEO, Norma Chu, was born in Hong Kong, raised in the US, and returned to Hong Kong after graduating college. She founded DayDayCook in Hong Kong in 2012, and expanded into mainland China in 2015.",
      "Prior to my joining DayDayCook, the app development had been outsourced in order to quickly get the app up and running. From January to May I worked alongside our outsource company in developing, testing, and debugging the App. I also worked alongside our angel investors and product managers to design the Apple TV and Apple Watch MVP versions.",
      "In March our company announced a $5 million dollar A Round of investment led by 500 Startups and MFund and we began hiring more talent for the app and our content development team.",
      "Starting in May, another iOS developer colleague and I began work on a complete redesign of the iOS app in preparation for a global relaunch. We soon added a third iOS developer and worked day and night through May and June to prepare the new iPhone, iPad, Apple Watch, and Apple TV apps for a global launch in three different languages (Simplified Chinese, Traditional Chinese, and English). Once we finally finished development and testing and submitted the app, we were rewarded with a week on the front page of the App Store in mainland China, Hong Kong, and Taiwan. In Hong Kong, our app rose to the #3 spot on the Free Download ranks.",
      "Following our promotion in July, I was promoted to iOS Team Leader. This was something that was almost completely unfathomable to me \u2014 a self-taught developer without significant experience. I\u2019m tremendously grateful for the opportunity.",
      "The end of the year was quite eventful as well. In September, we released our iMessage app simultaneously with the release of iOS 10 and were again promoted to the front page of the App Store. In October we raised a $5 million A+ round of investment from Alibaba. And we ended the year with the App Store naming us one of the top ten apps in Hong Kong and Macau.",
      "I was incredibly lucky to land at such a wonderful company as DayDayCook, and even luckier to join the company at such a perfect time in its development. Many of my 2016 goals went unaccomplished, but I also succeeded in many unanticipated ways. After all is said and done, goals are just a concrete way to express personal growth intentions. I may not have achieved all of my goals, but my personal growth this past year has far exceeded my expectations.",
    ],
  },

  "why-china": {
    slug: "why-china",
    title: "Why China",
    subtitle: "Why I came to China and what I found",
    date: "NOV 5, 2017",
    readingTime: "5 MIN",
    topic: "PERSONAL / STARTUPS",
    chapterLabel: "POST 011",
    aboutText:
      "The story of how I ended up building software at a Shanghai fintech startup, and what I learned about growth hacking in the Chinese market.",
    relatedSlugs: ["2017", "goodbye-2015"],
    content: [
      "I originally came to China as a way to continue my Chinese language study and pursue a career in consulting, government work, or perhaps an NGO. After getting involved in a startup competition at the Hopkins-Nanjing Center and interning at a startup involved in the ChinaAccelerator program in Shanghai, I changed directions and started working on building a skill set that would let me reach my goals of joining a startup and hopefully one day building my own.",
      "In August, 2015 I joined my first startup in Shanghai, Stubank. Stubank was one in a new wave of fintech companies working to make digital transactions real. This was around the time of the iPhone 6 release, and the implications of phones that could be secured with finger prints was just being realized by the market.",
      "The idea behind Stubank was that Alipay and Wechat Pay were still largely used for paying for online services, and the opportunity existed to bring that convenience of paying via app offline. Targeting college students seems counter-intuitive at first, but on further analysis makes sense: they spend in small amounts and would be quick to see the advantage of abandoning loose change for a mobile wallet, a larger percentage are early-adopters, and their lifetime value is greater than adults.",
      "To get money into the hands of our consumers, we had built a micro-loan platform into our application. Students could take out loans up to 10,000 RMB after a review from our credit team. The long term goal was to collect data on consumption behaviors and credit worthiness and use that data to build a credit-rating system.",
      "Growth hacking was crazy. We built ways to import contact lists, share passcodes that would give away cash to new users, and even built a wrapper on top of Taobao\u2019s website to enable quick purchases via our app using our loans as payment. Our marketing team was visiting 2-3 colleges per week. Each college would result in 2,000-3,000 new signups.",
      "The Taobao wrapper was hands down the coolest growth hack I\u2019ve ever worked on. After entering the Taobao purchase page, the user would be prompted to login via the Taobao website login page. The app would intercept the server\u2019s reply and check to see whether a captcha was needed or if the login was successful. After login, we would push a new view controller onto the stack, keeping the webpage running in the background. Through javascript functions downloaded from our server, we would open the user\u2019s shopping cart, scrape and parse the data, and feed it into a native table view. The whole process was carried out via native view controllers with a webview running in the background, controlled by javascript functions. It was a really clever implementation that no one else had built.",
      "Unfortunately, after only a few months the company closed down after our founder sold to a competitor. I\u2019m forever thankful to him for giving me the opportunity to enter into the local startup ecosystem. The experience confirmed my desire to work in startups, and confirmed my opinion that the Chinese market is the future of mobile consumer business.",
    ],
  },

  "goodbye-2015": {
    slug: "goodbye-2015",
    title: "Goodbye 2015",
    subtitle: "Learning to code, joining a fintech startup",
    date: "DEC 30, 2015",
    readingTime: "7 MIN",
    topic: "PERSONAL",
    chapterLabel: "POST 010",
    aboutText:
      "A year-end reflection on teaching myself Swift, building my first app, and landing a job at a Shanghai fintech startup.",
    relatedSlugs: ["2017", "why-china"],
    content: [
      "Going into the beginning of 2015 I had set out a few vague goals for the year. These mainly revolved around me finding my way into a technology company, preferably a startup. At the time, I had already spent about four months slowly teaching myself iOS programming with Swift.",
      "I continued learning Swift and in February had an idea for an app that I thought could provide me challenges beginning with user interface and continuing all the way to big data analysis and natural language processing. I started work on the app, and quickly realized I had no idea what I was doing and this is not something that would be easy.",
      "After about two and a half months of making a lot of mistakes, I decided to completely scrap my heap of spaghetti code and start all over from the top. I somehow got the idea that instead of just aiming for a job at a tech startup, I should shoot for a job at a Chinese tech startup to make use of my six years of Chinese study. In order to prove my coding ability, I would need to have at least a demo of my app available for the interviews.",
      "Around May 15, I began applying to as many jobs as I could through China\u2019s 51job.com and lagou.com. I had interviews with five or six companies ranging from Alibaba\u2019s international marketing division to a tech startup in Chengdu. I was lucky enough to interview with a Shanghai financial tech company named Stubank two days before I left for the US. One week after returning home, I received a phone call from the CEO offering me a full time position as their second iOS developer and 23rd employee.",
      "I had managed to create a semi-stable first version of my own app, Earlyworm, that I demoed during my interview. Earlyworm is a combined Read It Later and Flashcard app for Chinese learners. It uses real life articles from sites like 36Kr.com and Caijing.com.cn, and generates flashcards plus handles your deck automatically using spaced repetition.",
      "Although I loved working at Stubank, our CEO called a meeting to inform all thirty of us that we were moving too slowly and the competition was getting more fierce. We soon realized we were being merged with a larger startup called Niuwa. That afternoon I printed out my resume, hopped in a cab with some of my coworkers and headed to the downtown offices of Niuwa for interviews.",
      "Although I loved working at Stubank, I also love Niuwa \u2014 both for very different reasons. Stubank\u2019s organizational structure was super flat, and developers had a lot more freedom and input. At Niuwa, the company is structured much more like I would expect a larger company to be, but the management is amazing and I am learning as much about writing good code as I am about how a company should be run.",
    ],
  },

  "2-seconds": {
    slug: "2-seconds",
    title: "2 Seconds",
    subtitle: "Cognitive science of reading and language learning",
    date: "MAY 1, 2015",
    readingTime: "5 MIN",
    topic: "COGNITIVE SCIENCE",
    chapterLabel: "POST 009",
    aboutText:
      "Your brain can only hold new information in working memory for two seconds. I explored what this means for reading and second language learning.",
    relatedSlugs: ["goodbye-2015"],
    content: [
      "Don\u2019t read the below word. I mean look at it, but don\u2019t read it. Don\u2019t think about what it means, don\u2019t try to think of its definition. Just look at it as some ink on a page.",
      "Oh no! You read it didn\u2019t you. You probably read it before you even got to the break in the page. The truly *amazing* thing is that you read and processed that word in less than 100 milliseconds. *Less than 1/10 of a second!*",
      "Yes. 100 milliseconds to understand a written word is pretty awesome. But it\u2019s also super important. Your brain can only hold new information in its working memory (aka short term memory) for up to *two seconds*. That\u2019s quite the time-window.",
      "What does this mean for you the reader? Firstly, if you come across an unfamiliar word you\u2019re not going to be able to identify it in 100 milliseconds, or probably even two seconds. If you get tripped up on a word and the context is of no help, then after two seconds the word floats out of your memory and you have to revert your attention back to it. This is why reading in a foreign language is so slow and painful.",
      "Comprehending a word (or in fancy scientific language: lexical access) is only a \u201clow level\u201d working memory process. Lexical access, combined with syntactic parsing and semantic proposition formation make up the three low level processes. These processes can best be thought of as similar to the fuel and engine of a car.",
      "The rest of the car \u2014 the really awesome parts like turbo, air conditioning, and leather seats \u2014 are equivalent to our working memory\u2019s \u201chigh level\u201d processes: text model of comprehension, situation model of reader interpretation, background knowledge use and inferencing, and executive control processes. These are the processes that let you understand what a word means in the context of its sentence, paragraph, and entire document.",
      { heading: "What About Second Language Learners?" },
      "Why have you never had to worry about analyzing the way you read? Because fluent first language readers can recognize 98-100% of the words they encounter. Fluent readers not only can recognize a word in under 1/10 of a second, but they don\u2019t even realize they do it and it can\u2019t be stopped.",
      "That\u2019s a powerful advantage for fluent readers. But for second language learners, reading is not such a piece of cake. Depending on their vocabulary base, they may need to frequently stop reading to look up words, causing them to stop their high level processing and making reading incredibly inefficient.",
      "Some techniques to combat this: word and phrase recognition exercises (think flashcards), timed semantic connection exercises that make you examine the relationship between words, and lexical access fluency exercises like matching words to definitions under time pressure.",
      "All research for this piece was drawn from *Teaching and Researching Reading* by William Grabe and Fredricka L. Stoller.",
    ],
  },

  "buzzfeed-is-only-the-beginning": {
    slug: "buzzfeed-is-only-the-beginning",
    title: "BuzzFeed Is Only the Beginning",
    subtitle: "The future of media in the digital age",
    date: "AUG 19, 2014",
    readingTime: "5 MIN",
    topic: "MEDIA / TECHNOLOGY",
    chapterLabel: "POST 008",
    aboutText:
      "BuzzFeed had just raised $50M at an $850M valuation. I wrote about what this meant for the future of news and digital media.",
    relatedSlugs: ["newspapers-vs-free-market"],
    content: [
      "BuzzFeed just raised $50 million and is valued at $850 million. Andreessen Horowitz, one of the most respected VC firms, made the investment and has predicted a changing media landscape that could grow 10x-100x in the next five years.",
      "News has always been received in a quick, glancing kind of way. Newspapers were published daily or weekly, sold cheaply, and intended to be skimmed and dismissed. Now, these publications have moved to digital, but have not transformed with the new medium. It\u2019s near impossible to read a newspaper article on a cell phone while boarding the subway.",
      "More and more people spend their time watching television shows or playing games while in transport. Reading a digital magazine or newspaper article is too time consuming and too inconvenient to win the battle for attention. In order to survive, news needs to transform into something more interesting.",
      "The news media is in a unique position to harness amazing profit growth over the next decade. With maturing social sharing sites like Facebook, Twitter, and Youtube as well as more up and coming sites like Pinterest, Instagram, and Snapchat, the industry now has a solid and growing foundation on which to build.",
      "Furthermore, with the advent of crypto currency like Bitcoin, profitability is becoming less and less of an issue. With Bitcoin, users can pay fractions of a dollar or even cents per webpage view. It is doubtful that a user would opt to not pay 5 cents to read an article documenting the growth of the US police state through an interactive graph and animated video.",
      "Secondly, just as magazines and newspapers sported amazing, high quality advertisements in their heyday, I believe we can propel the online advertising market forward into a second advertising golden age by only accepting the most high quality advertisements from the best brands.",
      "Lastly, I see a change in how contributors and editors will function. As news media moves from purely written or filmed accounts and into a more interactive and engaging format, I see contributors creating content more and more by means of coding. No longer will journalists be able to only rely upon specialized knowledge and a solid grasp of language. They will also need the ability to code and truly \u201cdevelop\u201d a story.",
      "We need not fear a future where news media is dead. I see our current stage of news media as a temporary fix for a disrupted industry that has yet to formulate an answer. Just as Marc Andreessen said, look for this to change over the next five years and for phenomenal growth in the industry.",
    ],
  },

  "newspapers-vs-free-market": {
    slug: "newspapers-vs-free-market",
    title: "Newspapers vs Free Market",
    subtitle: "Can emerging media fill the watchdog gap?",
    date: "SEP 20, 2014",
    readingTime: "3 MIN",
    topic: "MEDIA",
    chapterLabel: "POST 007",
    aboutText:
      "A response to concerns about declining journalism quality in the internet age, and why I believe emerging media can fill the gap.",
    relatedSlugs: ["buzzfeed-is-only-the-beginning", "future-of-the-internet"],
    content: [
      "I woke up this morning to a story on Medium from Kristi Culpepper. In summary it details the growing lack of journalistic quality due to the Internet. While Ms. Culpepper makes a good point that a growing amount of journalism is poorly done and poorly sourced, she fails to mention that the overall amount of journalism and news content being produced has also grown with the advent of the Internet.",
      "While today we have Zero Hedge, a Twitter account she picks out for being especially bad, in the days of print we had the National Enquirer and still have the NY Post. It always has and always will be up to the reader\u2019s discretion as to what articles he or she decides to read. This is the beauty of the freedom of the press.",
      "Her article was inspired by a much longer piece written by Robert G. Kaiser of the Washington Post. Mr. Kaiser\u2019s work offers a much more perplexing issue: the important role of America\u2019s news old guard as a government watchdog. Today\u2019s flat media structure, in which anyone can publish online and gather an audience, opens us to many previously marginalized viewpoints. While this is a spectacular phenomenon, it does limit profits of large news organizations; profits that Mr. Kaiser argues allow these large outlets to pursue groundbreaking stories.",
      "I have little doubt that today\u2019s emerging media titans \u2014 Twitter, Politico, Vice, Vox, BuzzFeed, Reddit, etc. will be able to fill this gap. After all, a single man, not a large news corporation, wrote one of the most influential pieces of journalism in the history of the United States \u2014 *Common Sense* by Thomas Paine. He distributed to 500,000 people when the primary form of transportation was horseback.",
      "Furthermore, we see countries like China and Iran that do not have freedom of the press continue to censor their Internet and build firewalls to keep out western media like Twitter, Facebook, and Google. To me it is clear that our society has made a tremendous advancement in the adoption of these new technological media outlets. They have removed power of the press from the hands of a few, and shared it with billions, and in doing so have potentially given millions of Thomas Paines ink and a quill.",
    ],
  },

  "uber-china-fail": {
    slug: "uber-china-fail",
    title: "Uber + China = Fail",
    subtitle: "Why Uber\u2019s market entry strategy was doomed",
    date: "FEB 20, 2014",
    readingTime: "5 MIN",
    topic: "BUSINESS / CHINA",
    chapterLabel: "POST 006",
    aboutText:
      "An early analysis of why Uber\u2019s business model and market entry strategy in China was destined to fail against local competitors.",
    relatedSlugs: ["chinas-shadow-banking", "chinas-emerging-capitalist-economy"],
    content: [
      "If you\u2019ve followed Uber\u2019s rise from Silicon Valley to what is now essentially world-wide, you\u2019ve certainly noticed a few bumps in the road.",
      "Uber has battled what seems to be the same complaints in France, DC, New York, Boston, Chicago, and even San Francisco. These complaints are largely based around the unjustness of Uber\u2019s business model. Uber requires a bare minimum of its drivers in the US, but even less in China.",
      "Other complaints stem from consumer rights\u2019 advocates. It has already been seen that China is ready to defend its citizens against unjust business practices, as several Chinese cities have taken stands against the likes of Kuaidi Dache and Didi Dache for using a tipping system to create a competitive atmosphere that incentivizes taxi drivers to bypass those without the money to tip.",
      "Although Uber works hard to distinguish itself as a \u201crequest tool\u201d and not a \u201ctransportation carrier,\u201d according to China\u2019s Anti-Unfair Competition Law, Uber may already be in violation of the law. The law states that it is illegal to make pushing out competition your primary goal.",
      "Certainly, Uber\u2019s position as a luxury cab does not necessarily interfere with the entire taxi market, although following the lowering of base prices from 60 RMB to 30 RMB, local cabbies may become more worried.",
      "Assuming that Uber follows the same path of development in China as it has in all other markets, where it first establishes itself as a luxury brand, then expands to incorporate the entire market, I would not place a bet on Uber lasting long in the Chinese market.",
      "Whereas Uber has thus far been able to bully American politicians into accepting its new business model, China\u2019s leaders do not have to listen to its citizens as closely as the elected officials in Washington. Also, China\u2019s courts and officials have always tended to protect homegrown firms rather than foreign firms, and I don\u2019t see local governments throwing Kuaidi Dache and Didi Dache under the bus to protect American Uber.",
    ],
  },

  "chinas-shadow-banking": {
    slug: "chinas-shadow-banking",
    title: "The New Look of China\u2019s Shadow Banking",
    subtitle: "The rise of peer-to-peer lending",
    date: "FEB 19, 2014",
    readingTime: "4 MIN",
    topic: "FINANCE / CHINA",
    chapterLabel: "POST 005",
    aboutText:
      "As peer-to-peer lending platforms emerged in China, I analyzed how they fit into the broader shadow banking landscape.",
    relatedSlugs: ["uber-china-fail", "chinas-emerging-capitalist-economy"],
    content: [
      "With government crackdowns on investment trusts and risky lending looming ever nearer, it appears the Chinese government may have more issues to deal with soon. Person-to-person lending platforms have noticed the insatiable desire from Chinese investors to find sources of high returns and have begun to establish themselves in the country.",
      "At first glance, this seems to go almost directly against recent government initiatives to cut down on risky lending and stifle the flow of cheap and easy credit to local governments and poorly financed enterprises.",
      "Lending Club\u2019s founder, Soul Htite, has founded a similar P2P lending platform in Shanghai, called Dianrong. While these lending platforms do offer a tremendous option for cash-strapped startups and small and medium size enterprises, the loans can come with harrowing interest rates. This is a natural aspect of all loan markets, but usually those unable to obtain loans from reputable sources such as banks are well-recognized as being a risky bet.",
      "In China this is not necessarily the case. Because the government backs all bank loans, it is impossible for a bank to go bankrupt, or for lenders to really face default on their loans. However, the government does limit the amount of money available for lending. Both of these circumstances combine to form solid incentives for banks to lend to state-owned enterprises who may not use the most profitable business structure, but who are backed by the central government.",
      "Thus, the potentially more profitable and sometimes arguably safer small and medium size enterprises are being overlooked by banks that can offer affordable loans, and instead being picked up by loan sharks, investment trusts, and now P2P lending platforms that offer higher interest rates.",
      "Ultimately, this is not the fault of the P2P lending platforms, but the fault of the government for incentivizing banks to offer cheap credit to the oftentimes riskier debtors. In the long run, China needs to correct its course on this matter, or it will certainly face a stagnant economy that lacks disruptive startups and small businesses and instead relies on bloated, inefficient state-owned enterprises.",
    ],
  },

  "future-of-the-internet": {
    slug: "future-of-the-internet",
    title: "The Future of the Internet",
    subtitle: "Consequences of a Balkanized web",
    date: "AUG 6, 2013",
    readingTime: "5 MIN",
    topic: "TECHNOLOGY / POLICY",
    chapterLabel: "POST 004",
    aboutText:
      "After the Snowden leaks, I wrote about the fragmentation of the internet and what it means for global communication and peace.",
    relatedSlugs: ["newspapers-vs-free-market", "chinas-emerging-capitalist-economy"],
    content: [
      "The age of global internet is ending. Essentially, the United States has managed to destroy worldwide trust in its ability to keep the internet a sacred place for communication and information sharing in part due to Edward Snowden\u2019s leaks. Because the US is home to important internet hubs such as Amazon and Google, most of the information shared online passes through the United States at some point in time, and therefore is picked up by the NSA.",
      "John Naughton of the Guardian predicts that because other countries\u2019 governments, citizens, and businesses do not want their information being shared without their permission, they will stop turning to these American companies for their internet needs. He calls this the *Balkanization*, or the fragmentation of the internet.",
      "Throughout history, mankind has seen many frontiers develop and has subsequently conquered these frontiers, be they physical, economic, or technological. The internet is the new frontier. It serves as the spark plug for economies worldwide. It allows people to communicate faster and in ways never before imagined. However, until now it had managed to be almost completely a mutual endeavor, a worldwide effort to disseminate knowledge and cultural understanding.",
      "Now this is changing. Look at China as an example of what the future of the internet could bring. China\u2019s government does not allow its citizens to use Facebook, Twitter, or Google. It has its own companies that have essentially replicated these websites for Chinese use (Renren, Weibo, and Baidu respectively). Unless an American citizen creates an account on Weibo or Renren, their connectivity and ability to communicate with people living in China is greatly diminished.",
      "North Korea and Iran serve as two other examples of internet freedom stifled by government. In North Korea, outside of a few government officials, no one has internet access at all. Prior to the recent presidential poll in Iran, internet access was restricted to a degree that was previously unimaginable. The fact that technology in the wrong hands can limit a people\u2019s access to internet in such a manner that there is no method to escape censorship is absolutely terrifying.",
      "If the internet *Balkanizes* as Naughton predicts, this could devastate worldwide information sharing and the speed of technological advancement, as well as harming cultural understandings along the way. The fragmentation of the internet endangers the existence of these opportunities and threatens to render these experiences a piece of the past. Not only this, but with a lack of cultural understanding, the fragmentation of the internet threatens peace and diplomacy. Maybe \u201cBalkanize\u201d is a more fitting term than it seems.",
    ],
  },

  "chinas-emerging-capitalist-economy": {
    slug: "chinas-emerging-capitalist-economy",
    title: "China\u2019s Emerging Capitalist Economy",
    subtitle: "Interest rate reform in layman\u2019s terms",
    date: "JUL 22, 2013",
    readingTime: "6 MIN",
    topic: "ECONOMICS / CHINA",
    chapterLabel: "POST 003",
    aboutText:
      "An attempt to explain China\u2019s complex interest rate reform and its massive economic implications in accessible terms.",
    relatedSlugs: ["chinas-shadow-banking", "china-interest-rate-crisis"],
    content: [
      "If you have been following China economic news lately, you have probably noticed a massive quantity of articles referencing China\u2019s credit problems, shadow banks, and recently, interest rate deregulation. This year could very well mark a turning point in China\u2019s economic structuring.",
      "For the past twenty-plus years, China\u2019s economy has been centered around exports, cheap labor, and inexpensive goods. This export market helped to propel China into its position as the number two ranked GDP in the world. However, if one considers China\u2019s GDP per capita, he will find that this ranking is much lower, around eighty-second overall.",
      "Currently, China\u2019s state owned banks have been offering cheap credit at the government-set rate of around 6 percent to its state owned enterprises. This rate allows China\u2019s massive companies to take out loans that are very easy to payback. Also affecting the net overall cost is the availability of cheap labor. Over the past twenty-plus years, migrant workers have been flooding major Chinese cities to work low paying, labor intensive jobs.",
      "Now, however, the cheap labor is beginning to run out. Most migrant workers have already migrated. These workers are beginning to expect higher wages. The government is beginning to realize it can no longer rely on its export oriented economy, as foreign factories have begun moving to countries with cheaper labor, such as Cambodia, Vietnam, and Myanmar.",
      "China wants to change its economic structuring to focus less on cheap exports and more on domestic consumption. In order to do so, China needs to turn its attention towards fostering small and medium sized business growth and encouraging its citizens to spend, rather than save.",
      "Currently, China\u2019s bank regulations limit its four major government owned banks from extending cheap credit outside of large SOEs. Small and medium sized enterprises are more often than not forced to go to shadow banks to receive loans at rates of up to 24 percent. Clearly, this is not beneficial to fostering private sector business growth.",
      "China\u2019s slow deregulation of interest rates will inevitably encourage investors to begin investing in banks again. With this will more than likely come a real estate market crash. Because of the mass amounts of investment in real estate, prices are above what many consider the actual market levels to be. As this investment stops, prices will drop, and many Chinese citizens will see their life savings disappear before their eyes. This could usher in social instability.",
    ],
  },

  "chinas-trash-problem": {
    slug: "chinas-trash-problem",
    title: "China\u2019s Trash Problem",
    subtitle: "Environmental crisis beyond Beijing and Shanghai",
    date: "JUL 20, 2013",
    readingTime: "4 MIN",
    topic: "ENVIRONMENT / CHINA",
    chapterLabel: "POST 002",
    aboutText:
      "An exploration of China\u2019s growing garbage crisis, from overflowing urban waste to cancer villages in the countryside.",
    relatedSlugs: ["chinas-emerging-capitalist-economy", "future-of-the-internet"],
    content: [
      "China is facing many problems as a result of a developing economy. One problem is the pace of urbanization. With the Chinese hukou system in place, many rural impoverished workers migrate to cities in search of labor intensive, low wage job opportunities. China\u2019s population problem is often accompanied by issues already prevalent in major Chinese cities, such as China\u2019s growing garbage problem.",
      "Everyday, Beijing creates on average 18,400 tons of garbage. If Beijing used standard dump trucks to transport this trash out of the city, the line of dump trucks would make an entire loop around Beijing\u2019s Third Ring Road. Beijing\u2019s trash management system can only handle around 10,300 tons of trash per day. This leaves approximately eight thousand tons of trash unaccounted for. Everyday. And Beijing\u2019s trash output is growing at a rate of 8 percent per year.",
      "Everyday, Shanghai creates on average more than twenty thousand tons of garbage. If all of this garbage was collected, around every two weeks Shanghai would be able to fill the Jin Mao Tower \u2014 an eighty-eight story building that upon completion in 1998 was the tallest in China.",
      "However, this garbage problem is not merely limited to cities. It also plagues China\u2019s rural countryside. Nearly six hundred thousand rural village governments do not have any form of environmental protection infrastructure. The lack of government funding in these small villages has done little to change their attitude towards garbage.",
      "It isn\u2019t just the impact of pollution on these areas\u2019 harvests that is worrisome, it is also the growing number of *cancer villages* that are appearing across eastern China. One area in Guangdong province serves as home to around four hundred Chinese citizens. To solve their garbage problem, behind their town, the citizens created a \u201cmountain of trash.\u201d Within the last ten years, twelve people in this town have died of cancer.",
      "The Huaihe River, which flows through the Anhui, Jiangsu, and Henan provinces is so polluted that even one area which has been protected for the past ten years still can barely sustain a fish population. These fish suffer from spiral shaped backbones, extra layers of scales, and various other defects stemming from the amount of pollution that exists in the water.",
      "China needs to clean up its act, and fast. The people are relying on the government to assist them. The Chinese government doesn\u2019t even necessarily have to help through financial means \u2014 simply a better program for recycling used goods, or clearer explanations of existing programs can help resolve this issue.",
    ],
  },

  "china-interest-rate-crisis": {
    slug: "china-interest-rate-crisis",
    title: "\u4e2d\u56fd\u653f\u5e9c\u538b\u5236\u5229\u7387\u4f1a\u4e0d\u4f1a\u5bfc\u81f4\u7ecf\u6d4e\u5371\u673a\uff1f",
    subtitle: "Government rate suppression and economic risk",
    date: "JUL 20, 2013",
    readingTime: "5 MIN",
    topic: "ECONOMICS / CHINA",
    chapterLabel: "POST 001",
    aboutText:
      "\u7528\u4e2d\u6587\u5199\u7684\u4e00\u7bc7\u5173\u4e8e\u4e2d\u56fd\u5229\u7387\u6539\u9769\u7684\u6587\u7ae0\u3002An essay on China\u2019s interest rate reform, written in Chinese.",
    relatedSlugs: ["chinas-emerging-capitalist-economy", "chinas-shadow-banking"],
    content: [
      "\u73b0\u5728\u5728\u4e2d\u56fd\u653f\u5e9c\u63a7\u5236\u7ecf\u6d4e\u3002\u867d\u7136\u8fd9\u4e2a\u7ecf\u6d4e\u7ed3\u6784\u65e2\u5177\u6709\u597d\u5904\u4e5f\u5177\u6709\u574f\u5904\uff0c\u4f46\u662f\u6211\u8ba4\u4e3a\u56e0\u653f\u5e9c\u538b\u5236\u5229\u7387\u800c\u5e26\u6765\u7684\u574f\u5904\u5360\u4e3b\u8981\u65b9\u9762\u3002\u4ece\u5386\u53f2\u6027\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u4e2d\u56fd\u6539\u9769\u5f00\u653e\u4ee5\u540e\uff0c\u653f\u5e9c\u9700\u8981\u5e2e\u52a9\u56fd\u6709\u4f01\u4e1a\u540c\u5168\u4e16\u754c\u7684\u79c1\u6709\u4f01\u4e1a\u6fc0\u70c8\u5730\u7ade\u4e89\u3002\u5728\u4e2d\u56fd\u653f\u5e9c\u5458\u7684\u773c\u4e2d\uff0c\u538b\u5236\u5229\u7387\u662f\u6700\u597d\u7684\u529e\u6cd5\u3002\u4f46\u662f\uff0c\u5728\u8fc7\u53bb24\u5e74\u5185\uff0c\u4e2d\u56fd\u7ecf\u6d4e\u7ed3\u6784\u88ab\u6539\u53d8\u4e86\u3002\u4ece\u5de5\u4e1a\u7ecf\u6d4e\u5230\u6d88\u8d39\u7ecf\u6d4e\uff0c\u4ece\u5b8c\u5168\u56fd\u6709\u7ecf\u6d4e\u5230\u90e8\u5206\u79c1\u6709\u7ecf\u6d4e\u3002",
      "\u4e2d\u56fd\u653f\u5e9c\u4e0d\u4ec5\u538b\u5236\u5229\u7387\uff0c\u4e5f\u9650\u5236\u56fd\u6709\u94f6\u884c\u53ef\u501f\u51fa\u7684\u8d37\u6b3e\u91d1\u989d\u3002\u8fd9\u4e24\u4e2a\u7b80\u5355\u51b3\u7b56\u4f7f\u878d\u8d44\u73af\u5883\u9519\u7efc\u590d\u6742\u3002\u56e0\u4e3a\u56fd\u4f01\u7ecf\u5e38\u5f88\u5927\uff0c\u8d22\u5bcc\u6bd4\u4e2d\u5c0f\u578b\u4f01\u4e1a\u591a\uff0c\u6240\u4ee5\u56fd\u4f01\u5f97\u5230\u5927\u90e8\u5206\u7684\u8d37\u6b3e\u3002\u538b\u5236\u5229\u7387\u4e5f\u521b\u9020\u4e0d\u516c\u5e73\u7684\u7ade\u4e89\u3002\u56fd\u4f01\u5f97\u5230\u5229\u7387\u8f83\u4f4e\u7684\u8d37\u6b3e\uff0c\u4f46\u662f\u79c1\u6709\u4e2d\u5c0f\u578b\u4f01\u4e1a\u5f97\u5230\u5229\u7387\u6bd4\u8fc7\u53bb\u8d37\u6b3e\u7684\u5229\u7387\u4e09\u56db\u500d\u9ad8\uff01",
      "\u56e0\u4e3a\u653f\u5e9c\u4e0d\u76d1\u7763\u5f71\u5b50\u94f6\u884c\uff0c\u5b83\u4eec\u7684\u8d37\u6b3e\u5229\u7387\u66f4\u597d\u4ee3\u8868\u7ecf\u6d4e\u5e02\u573a\u7684\u771f\u5b9e\u5229\u7387\u3002\u73b0\u5728\u8fd9\u4e2a\u65e0\u76d1\u7763\u7684\u5229\u7387\u662f\u5dee\u4e0d\u591a24\uff05\u3002\u6211\u8ddf\u6211\u7684\u8001\u5e08\u540c\u610f\u4e2d\u5c0f\u578b\u4f01\u4e1a\u4f9d\u9760\u5f71\u5b50\u94f6\u884c\u80af\u5b9a\u4f1a\u4f24\u5bb3\u4e2d\u56fd\u7ecf\u6d4e\u7684\u53d1\u5c55\u3002",
      "\u65f6\u81f3\u4eca\u65e5\uff0c\u56e0\u4e3a\u4e2d\u56fd\u901a\u818a\u7387\u6bd4\u5229\u7387\u9ad8\uff0c\u6240\u4ee5\u771f\u5b9e\u5229\u7387\u662f\u8d1f\u6570\u3002\u7531\u4e8e\u771f\u5b9e\u5229\u7387\u662f\u8d1f\u6570\uff0c\u4eba\u4eec\u628a\u6d3b\u94b1\u6295\u8d44\u5728\u94f6\u884c\u5b58\u6b3e\u4e0d\u6269\u5927\u8d22\u5bcc\u3002\u653f\u5e9c\u538b\u5236\u5229\u7387\u610f\u5473\u7740\u9f13\u52b1\u4eba\u4eec\u6295\u8d44\u5728\u66f4\u9ad8\u5229\u7387\u7684\u5e02\u573a\uff0c\u6bd4\u5982\u5f71\u5b50\u94f6\u884c\u6216\u8005\u623f\u5730\u4ea7\u3002\u5728\u6211\u770b\u6765\uff0c\u653f\u5e9c\u5176\u5b9e\u662f\u5728\u589e\u52a0\u623f\u5730\u4ea7\u6ce1\u6cab\uff01",
      "\u867d\u7136\u6bcf\u4e2a\u4eba\u90fd\u7406\u89e3\u6ca1\u6709\u597d\u529e\u6cd5\u7ea0\u6b63\u8fd9\u79cd\u7ecf\u6d4e\u72b6\u51b5\uff0c\u4f46\u662f\u4e00\u4f4d\u5f88\u6709\u540d\u7684\u4e2d\u56fd\u94f6\u884c\u5bb6\u5f20\u5316\u6865\u8bf4\u8fc7\u4e3a\u4e86\u7ea0\u6b63\u8fd9\u4e2a\u72b6\u51b5\uff0c\u6700\u597d\u7684\u529e\u6cd5\u5c31\u662f\u4e2d\u56fd\u4eba\u6c11\u94f6\u884c\u9a6c\u4e0a\u628a\u5229\u7387\u63d0\u9ad8\u4e00\u4e24\u4e2a\u767e\u5206\u70b9\u3002\u6211\u8ba4\u4e3a\u4ed6\u7684\u60f3\u6cd5\u6709\u9053\u7406\uff0c\u4f46\u662f\u8fd8\u4f1a\u7ed9\u4e2d\u56fd\u7ecf\u6d4e\u5e26\u6765\u95ee\u9898\u3002\u603b\u4e4b\uff0c\u8fd9\u4e2a\u7ea0\u6b63\u7684\u529e\u6cd5\u6709\u597d\u5904\u4e5f\u6709\u574f\u5904\uff0c\u4f46\u662f\u73b0\u5728\u8fd8\u53ef\u80fd\u662f\u6700\u5408\u9002\u7684\u529e\u6cd5\u3002",
    ],
  },
};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(posts);
}

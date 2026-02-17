export type ContentBlock =
  | string
  | { heading: string }
  | { code: string; language?: string }
  | { image: string };

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
    chapterLabel: "POST 028",
    aboutText:
      "I worked on a lot of personal AI projects in 2024, and decided to open source all of them. Each project pushed the boundaries of what LLMs could do for software development.",
    relatedSlugs: ["rag-vs-big-context-windows", "emerging-personalized-economy"],
    content: [
      "I worked on a lot of personal AI projects in 2024, and have decided to open source all of them. I think the work done in a lot of them is pretty interesting and there may be some novel insights gained by looking at the code.",
      { heading: "ui-builder" },
      "This is a drag and drop website builder with a few twists. An LLM writes all of the frontend state management code, and the LLM can help you to redesign or beautify your site. It has some novel ways of switching between edit and preview modes that uses some potentially unsafe javascript eval in your browser, but enables some very cool features. One of which is live editing the code in a small window, which is far more convenient than toggling buttons or moving sliders to do things like change colors or adjust font sizes. Instead, just edit your component\u2019s tailwind classes. It uses tailwind, React, and shadcn components. [View project](/projects/ui-builder) \u00b7 [GitHub](https://github.com/EarlywormTeam/ui-builder)",
      { heading: "react-component-agent" },
      "An AI Agent that builds your frontend components. It first formulates a plan which you can see appear in the interface, then goes step by step building the component. As it completes steps, there is a live demo view of the component available for you to play with and a view of the code it has produced on the right side of the page as well. It has some special tricks for building components that use contenteditable. As of early 2024, it worked fairly reliably and had surprisingly good results but it was expensive to run and took a while. [View project](/projects/component-builder) \u00b7 [GitHub](https://github.com/christopherhwood/react-component-agent)",
      { heading: "agent2" },
      "This is a poorly named project \u2014 it is actually a Node.js code generator application. It works with existing repositories similar to how Devin works (but created several months before Devin was announced), and produces a ton of artifacts besides just the code change pull request. It also spins off PRDs based on the task, technical design docs, coding style guides, and more report style artifacts that it uses internally. It worked well enough to start improving itself although the reliability was a bit questionable and like most LLM projects in early 2024 it was slow and expensive. [View project](/projects/agent2) \u00b7 [GitHub](https://github.com/christopherhwood/agent2)",
      { heading: "qckfx-ads" },
      "This was actually launched and used by others for a bit. It uses ComfyUI workflows to generate images that contain products from ecommerce brands. It was interesting working with ComfyUI and all of the image manipulation tools out there. I was able to generate pretty high quality product images straight out of the flux model without having to \u201cphotoshop in\u201d the product photo, which blew my mind. [View project](/projects/qckfx-ads) \u00b7 [GitHub](https://github.com/EarlywormTeam/qckfx-ads)",
    ],
  },

  "emerging-personalized-economy": {
    slug: "emerging-personalized-economy",
    title: "Implications of the Emerging Personalized Economy",
    subtitle: "AI, AR/VR, and the shift to small business",
    date: "MAY 3, 2023",
    readingTime: "5 MIN",
    topic: "ECONOMICS / AI",
    chapterLabel: "POST 026",
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
    chapterLabel: "POST 027",
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
    chapterLabel: "POST 025",
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
    chapterLabel: "POST 023",
    aboutText:
      "A follow-up to my 2016 post, chronicling my journey from Niuwa to DayDayCook \u2014 first technical hire, iOS team lead, and a year of incredible growth.",
    relatedSlugs: ["goodbye-2015", "why-china"],
    content: [
      "I started 2016 having worked at Niuwa for about one and a half months following the merger of Stubank and Niuwa. Because of the depth of talent at Niuwa and since I entered via a merger, I was relatively low on the iOS developer totem pole (we had 5 developers for one app). In late January I left Niuwa and joined DayDayCook as their first technical hire after the CTO.",
      { image: "/images/blog/2017/1-daydaycook.jpeg" },
      "DayDayCook is a company that creates recipes, videos, and other content. The company distributes this content through various video platforms both in and outside of China as well as through our award-winning iOS and Android apps. Our CEO, Norma Chu, was born in Hong Kong, raised in the US, and returned to Hong Kong after graduating college. She founded DayDayCook in Hong Kong in 2012, and expanded into mainland China in 2015.",
      { image: "/images/blog/2017/2-app.jpeg" },
      "Prior to my joining DayDayCook, the app development had been outsourced in order to quickly get the app up and running. From January to May I worked alongside our outsource company in developing, testing, and debugging the App. I also worked alongside our angel investors and product managers to design the Apple TV and Apple Watch MVP versions.",
      "In March our company announced a $5 million dollar A Round of investment led by 500 Startups and MFund and we began hiring more talent for the app and our content development team.",
      "Starting in May, another iOS developer colleague and I began work on a complete redesign of the iOS app in preparation for a global relaunch. We soon added a third iOS developer and worked day and night through May and June to prepare the new iPhone, iPad, Apple Watch, and Apple TV apps for a global launch in three different languages (Simplified Chinese, Traditional Chinese, and English). Once we finally finished development and testing and submitted the app, we were rewarded with a week on the front page of the App Store in mainland China, Hong Kong, and Taiwan. In Hong Kong, our app rose to the #3 spot on the Free Download ranks.",
      { image: "/images/blog/2017/3-appstore.jpeg" },
      "Following our promotion in July, I was promoted to iOS Team Leader. This was something that was almost completely unfathomable to me \u2014 a self-taught developer without significant experience. I\u2019m tremendously grateful for the opportunity.",
      "The end of the year was quite eventful as well. In September, we released our iMessage app simultaneously with the release of iOS 10 and were again promoted to the front page of the App Store. In October we raised a $5 million A+ round of investment from Alibaba. And we ended the year with the App Store naming us one of the top ten apps in Hong Kong and Macau.",
      { image: "/images/blog/2017/4-topten.png" },
      "I was incredibly lucky to land at such a wonderful company as DayDayCook, and even luckier to join the company at such a perfect time in its development. Many of my 2016 goals went unaccomplished, but I also succeeded in many unanticipated ways. After all is said and done, goals are just a concrete way to express personal growth intentions. I may not have achieved all of my goals, but my personal growth this past year has far exceeded my expectations.",
      { image: "/images/blog/2017/5-growth.jpeg" },
      { image: "/images/blog/2017/6-closing.jpeg" },
    ],
  },

  "why-china": {
    slug: "why-china",
    title: "Why China",
    subtitle: "Why I came to China and what I found",
    date: "NOV 5, 2017",
    readingTime: "5 MIN",
    topic: "PERSONAL / STARTUPS",
    chapterLabel: "POST 024",
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
    chapterLabel: "POST 022",
    aboutText:
      "A year-end reflection on teaching myself Swift, building my first app, and landing a job at a Shanghai fintech startup.",
    relatedSlugs: ["2017", "why-china"],
    content: [
      "Going into the beginning of 2015 I had set out a few vague goals for the year. These mainly revolved around me finding my way into a technology company, preferably a startup. At the time, I had already spent about four months slowly teaching myself iOS programming with Swift.",
      "I continued learning Swift and in February had an idea for an app that I thought could provide me challenges beginning with user interface and continuing all the way to big data analysis and natural language processing. I started work on the app, and quickly realized I had no idea what I was doing and this is not something that would be easy.",
      "After about two and a half months of making a lot of mistakes, I decided to completely scrap my heap of spaghetti code and start all over from the top. I somehow got the idea that instead of just aiming for a job at a tech startup, I should shoot for a job at a Chinese tech startup to make use of my six years of Chinese study. In order to prove my coding ability, I would need to have at least a demo of my app available for the interviews.",
      { image: "/images/blog/goodbye-2015/1-mascot.jpeg" },
      "Around May 15, I began applying to as many jobs as I could through China\u2019s 51job.com and lagou.com. I had interviews with five or six companies ranging from Alibaba\u2019s international marketing division to a tech startup in Chengdu. I was lucky enough to interview with a Shanghai financial tech company named Stubank two days before I left for the US. One week after returning home, I received a phone call from the CEO offering me a full time position as their second iOS developer and 23rd employee.",
      { image: "/images/blog/goodbye-2015/2-waterballoon.jpeg" },
      { image: "/images/blog/goodbye-2015/3-debate.jpeg" },
      "I had managed to create a semi-stable first version of my own app, Earlyworm, that I demoed during my interview. Earlyworm is a combined Read It Later and Flashcard app for Chinese learners. It uses real life articles from sites like 36Kr.com and Caijing.com.cn, and generates flashcards plus handles your deck automatically using spaced repetition.",
      "Although I loved working at Stubank, our CEO called a meeting to inform all thirty of us that we were moving too slowly and the competition was getting more fierce. We soon realized we were being merged with a larger startup called Niuwa. That afternoon I printed out my resume, hopped in a cab with some of my coworkers and headed to the downtown offices of Niuwa for interviews.",
      { image: "/images/blog/goodbye-2015/4-matrix.jpeg" },
      { image: "/images/blog/goodbye-2015/5-nameplate.jpeg" },
      "Although I loved working at Stubank, I also love Niuwa \u2014 both for very different reasons. Stubank\u2019s organizational structure was super flat, and developers had a lot more freedom and input. At Niuwa, the company is structured much more like I would expect a larger company to be, but the management is amazing and I am learning as much about writing good code as I am about how a company should be run.",
      { image: "/images/blog/goodbye-2015/6-swag.jpeg" },
    ],
  },

  "2-seconds": {
    slug: "2-seconds",
    title: "2 Seconds",
    subtitle: "Cognitive science of reading and language learning",
    date: "MAY 1, 2015",
    readingTime: "5 MIN",
    topic: "COGNITIVE SCIENCE",
    chapterLabel: "POST 021",
    aboutText:
      "Your brain can only hold new information in working memory for two seconds. I explored what this means for reading and second language learning.",
    relatedSlugs: ["goodbye-2015"],
    content: [
      { image: "/images/blog/2-seconds/header.jpeg" },
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
    chapterLabel: "POST 019",
    aboutText:
      "BuzzFeed had just raised $50M at an $850M valuation. I wrote about what this meant for the future of news and digital media.",
    relatedSlugs: ["newspapers-vs-free-market"],
    content: [
      "BuzzFeed just raised $50 million and is valued at $850 million. Andreessen Horowitz, one of the most respected VC firms, made the investment and has predicted a changing media landscape that could grow 10x-100x in the next five years.",
      "News has always been received in a quick, glancing kind of way. Newspapers were published daily or weekly, sold cheaply, and intended to be skimmed and dismissed. Now, these publications have moved to digital, but have not transformed with the new medium. It\u2019s near impossible to read a newspaper article on a cell phone while boarding the subway.",
      { image: "/images/blog/buzzfeed/media.jpeg" },
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
    chapterLabel: "POST 020",
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
    chapterLabel: "POST 010",
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
    chapterLabel: "POST 009",
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
    chapterLabel: "POST 005",
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
    chapterLabel: "POST 004",
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
    chapterLabel: "POST 003",
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
    chapterLabel: "POST 002",
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

  "china-middle-east-oil": {
    slug: "china-middle-east-oil",
    title: "\u81f3\u4e8e\u77f3\u6cb9\u4e2d\u56fd\u4e0e\u4e2d\u4e1c\u7684\u5173\u7cfb",
    subtitle: "China\u2019s energy security and Middle East oil dependency",
    date: "DEC 14, 2012",
    readingTime: "9 MIN",
    topic: "ENERGY / CHINA",
    chapterLabel: "POST 001",
    aboutText: "\u7528\u4e2d\u6587\u5199\u7684\u4e00\u7bc7\u5173\u4e8e\u4e2d\u56fd\u80fd\u6e90\u5b89\u5168\u548c\u4e2d\u4e1c\u77f3\u6cb9\u4f9d\u8d56\u7684\u8bba\u6587\u3002A paper on China\u2019s energy security and its oil relationship with the Middle East, written in Chinese at UVA.",
    relatedSlugs: ["china-interest-rate-crisis", "asian-currency-zone"],
    content: [
      { image: "/images/blog/uva/page-1.png" },
      { image: "/images/blog/uva/page-2.png" },
      { image: "/images/blog/uva/page-3.png" },
      { image: "/images/blog/uva/page-4.png" },
      { image: "/images/blog/uva/page-5.png" },
      { image: "/images/blog/uva/page-6.png" },
      { image: "/images/blog/uva/page-7.png" },
      { image: "/images/blog/uva/page-8.png" },
      { image: "/images/blog/uva/page-9.png" },
    ],
  },

  "asian-currency-zone": {
    slug: "asian-currency-zone",
    title: "\u5173\u4e8e\u7ec4\u6210\u4e00\u79cd\u4e9a\u6d32\u5c01\u95ed\u8d27\u5e01\u533a\uff1a\u4e2d\u56fd\u7684\u89d2\u8272",
    subtitle: "RMB internationalization and an Asian currency bloc",
    date: "JAN 7, 2014",
    readingTime: "8 MIN",
    topic: "ECONOMICS / CHINA",
    chapterLabel: "POST 006",
    aboutText: "\u7528\u4e2d\u6587\u5199\u7684\u4e00\u7bc7\u5173\u4e8e\u4eba\u6c11\u5e01\u56fd\u9645\u5316\u548c\u4e9a\u6d32\u5c01\u95ed\u8d27\u5e01\u533a\u7684\u8bba\u6587\u3002A paper on RMB internationalization and China\u2019s role in forming an Asian currency bloc, written in Chinese at the Hopkins-Nanjing Center.",
    relatedSlugs: ["china-middle-east-oil", "chinas-emerging-capitalist-economy"],
    content: [
      { image: "/images/blog/hnc/page-1.png" },
      { image: "/images/blog/hnc/page-2.png" },
      { image: "/images/blog/hnc/page-3.png" },
      { image: "/images/blog/hnc/page-4.png" },
      { image: "/images/blog/hnc/page-5.png" },
      { image: "/images/blog/hnc/page-6.png" },
      { image: "/images/blog/hnc/page-7.png" },
      { image: "/images/blog/hnc/page-8.png" },
    ],
  },

  "us-china-corn-trade": {
    slug: "us-china-corn-trade",
    title: "US-China Corn Trade Fiasco",
    subtitle: "GMOs, tariffs, and the fight for food security",
    date: "FEB 7, 2014",
    readingTime: "4 MIN",
    topic: "TRADE / CHINA",
    chapterLabel: "POST 007",
    aboutText:
      "An analysis of how China\u2019s food security policies and GMO regulations disrupted the US corn export market.",
    relatedSlugs: ["chinas-emerging-capitalist-economy", "whats-going-on-with-rmb"],
    content: [
      "How does China\u2019s Third Plenum affect corn producers in America? Why would using a genetically modified strand of corn, proven to be resilient against crop-killing pests, hurt farmers\u2019 bottom lines?",
      "China\u2019s leadership has already emphasized one of the biggest challenges the country faces is reducing geographic income disparity. Currently, the urbanites who live primarily on the prosperous east coast of China make three times the income of poor farmers in central and western China.",
      "As the rich have proceeded to get richer, their tastes have changed. Now, China\u2019s burgeoning middle and upper classes are demanding more meat and processed foods, rather than their old diet that primarily consisted of noodles and rice.",
      "The increasing demand for meat has in turn increased demand for livestock feed, which is composed of mostly corn and soybeans. These crops require massive amounts of arable land, something that China severely lacks. Therefore, most Chinese farmers choose to focus on more economic crops, like fruit, which require more labor than land.",
      "The Chinese government fears relying on other countries to feed China\u2019s citizens, and thus has created a set of schemes to support farmers and encourage them to grow crops that may otherwise appear economically unfeasible. These programs can be divided into four categories: direct payments, price supports, agricultural infrastructure projects, and regulatory reforms.",
      "So, although according to competitive advantage, the Chinese should rely on nations with large amounts of arable land like the US to supply them with corn and soybeans, they instead have chosen to subsidize native corn growers.",
      "Although Chinese corn growers are incentivized to grow this important crop, American corn is oftentimes still cheaper than the native Chinese corn. To prevent cheap American corn from flooding the Chinese market and putting the subsidized corn growers out of business, the government has instituted a tariff quota rate (TQR). In addition to this TQR, American farmers also face the Chinese value added tax (VAT), from which Chinese domestic farmers are excluded.",
      "A tariff quota rate (TQR) is simply a tariff combined with a quota. The Chinese government lets its state-owned stockpiling companies and traders like Sinograin determine the amount of corn that they will need for the year\u2019s stockpile. The government incentivizes these state-owned firms to purchase corn grown by the subsidized farmers by paying them for buying this corn, essentially giving them a discount. The amount of corn that is still required is imported and charged a lesser tariff, and any amount of corn more than that amount (the quota) is taxed with what is essentially a prohibitive tariff.",
      "In 2010 and 2011, China relied on the US for 96% of corn imports. In 2012, that percentage rose to 98%. Apparently, Xi Jinping and the new Chinese leadership felt that they were becoming too reliant on the US, as 2013\u2019s percentage dropped to 91%, and December of 2013 saw the US only supplying 76%.",
      { heading: "How Did This Happen?" },
      "First, China has recently signed agreements to import corn from Argentina, Brazil, and Ukraine. In December of 2013, Ukraine exported 108,866 tons of corn to China. This amount composed the majority of the 24% stake the US lost.",
      "Second, American corn growers have begun using a genetically modified strand of corn produced by Syngenta and known as MIR 162. China requires that all GMOs be registered both in their home country as well as in China. China has yet to accept this new strand of corn that the US is producing, and has been using this as a barrier to entry for over 600,000 tons of American corn since November of last year.",
      { heading: "What Does the Future Hold?" },
      "Chances are, China won\u2019t start accepting the new strand of corn until late Spring, when most of the quotas have already been filled. Furthermore, it is unlikely that after other countries like Ukraine have established a foothold within the Chinese corn market that the US farmers will be able to reestablish their previously held stake in the market.",
      "Until the Chinese leadership decides that there are better methods to solving income inequality, or that corn self-sufficiency is not necessarily a critical element of national security, I don\u2019t see much hope for the US corn export market.",
    ],
  },

  "mobile-taxi-apps": {
    slug: "mobile-taxi-apps",
    title: "Mobile Taxi Apps in China",
    subtitle: "Uber, Didi, and the battle for ride-hailing",
    date: "FEB 17, 2014",
    readingTime: "5 MIN",
    topic: "TECHNOLOGY / CHINA",
    chapterLabel: "POST 008",
    aboutText:
      "An early look at China\u2019s mobile taxi app wars, from Didi Dache to Uber\u2019s luxury entry into the Chinese market.",
    relatedSlugs: ["uber-china-fail", "chinas-automobile-industry"],
    content: [
      "With the recent expansion of 4G networks and the growing number of smart phone users, China\u2019s mobile app markets have become a hotbed for innovation. Although the range of apps currently in development is very broad, this post will focus on the taxi apps, specifically concerning Uber\u2019s emergence in the Chinese market.",
      "Before Uber came to China in November of 2013, Chinese natives had already identified a need and thus a market for better taxi services. If you have ever been to Beijing you have certainly paid witness to this issue. The local governments control both the base fare that all taxis can charge, as well as the number of licensed taxi drivers in the area. Naturally, the government required low rates and limit placed on drivers limit the supply of cabs, and many customers find themselves waiting anywhere from 30 minutes to an hour for a vacant cab.",
      "Chinese apps like Didi Dache, Kuaidi Dache, Yongche, Da Huangfeng Dache, and Yaoyao Zhaoche have set out to help solve this issue using market economy techniques. These techniques typically include having customers book rides in advance, with the promise of a tip (up to a certain maximum, usually 20 RMB, which is about twice the normal base fare) for picking them up. Unfortunately, the Chinese government has not taken too kindly to these apps, and fear that their tip-based system will destabilize the taxi system and could upset customers who are either unwilling to pay the needed tip, or do not have a smart phone.",
      "Although all of these apps are home grown, and use other Chinese technology, including Alibaba\u2019s Alipay (Kuaidi Dache and Da Huangfeng Dache) and Tencent\u2019s Wechat (Didi Dache), local governments are still taking offense, some even to the point of creating a ban on the apps. Recently, Shenzhen has banned these apps that require tips, and Shanghai\u2019s Transportation Bureau has made a public announcement condemning the practice.",
      "This sets the stage for Uber, an app from San Francisco that thus far has differentiated itself within the Chinese marketplace thanks to its use of high class automobiles such as Audi A6\u2019s, Mercedes Benz S350\u2019s, and BMW\u2019s. While these cars guarantee Uber a soft place in the hearts of the growing middle class looking to protect their image, the cost (one user reported an RMB 88 Uber ride that cost RMB 30 in a normal cab) is prohibitive to most consumers.",
      "Additionally, Uber faces challenges in securing the loyalty of the cab drivers they hire. One of the biggest issues within the taxi app market is locking down drivers. In order to do so, many apps are offering subsidies. Kuaidi Dache offers cab drivers who use the app for at least five rides per month 10 RMB per month. While this seems a small fee, when multiplied by the taxi base that Kuaidi Dache supports in just Huangzhou, it comes out to about RMB 210,000 per month. Multiplied over multiple cities, this is an unfathomable amount of money for merely securing taxi drivers\u2019 loyalties.",
      "While the tip system was in effect, most apps allowed the cab drivers to keep the tips in exchange for their loyalty. Now that that system is largely banned or condemned, these app companies are forced to pay out of pocket. Where does the money come from? Most taxi hailing apps in China are making money solely from in-app advertisements. Subtract the amounts they are offering cab drivers as subsidies and very few are turning a big profit, if they are even making a profit at all.",
      "According to some critics, this is the biggest threat facing the industry. Cut-throat competition is not only leading these companies to offering subsidies and accepting minimal profits, but also leading smear campaigns targeting the other taxi apps. One of Didi Dache\u2019s drivers reported that the company sent mass texts to its drivers warning them of smaller companies that \u201coffered huge incentives then disappear after a month and give personal contact information to advertisers.\u201d",
      "It seems Uber has managed to avoid government snares that have largely caught its competition; however, whether they can continue to thrive in a system that more and more rewards local firms remains to be seen. Regardless, it is \u201cfare\u201d to say that customers and taxi drivers both are benefitting from these technological advances and will most likely continue to do so for the foreseeable future.",
    ],
  },

  "chinas-automobile-industry": {
    slug: "chinas-automobile-industry",
    title: "China\u2019s Automobile Industry",
    subtitle: "Foreign brands dominate a booming market",
    date: "FEB 24, 2014",
    readingTime: "3 MIN",
    topic: "BUSINESS / CHINA",
    chapterLabel: "POST 011",
    aboutText:
      "A data-driven overview of China\u2019s booming automobile sector and the foreign brands dominating sales.",
    relatedSlugs: ["chinas-auto-industry-reform", "mobile-taxi-apps"],
    content: [
      "Although Chinese cities are beginning to implement car-buying limitations, China\u2019s automobile sector remains a staple for growth. Further good news for foreign companies and investors lies in the fact that foreign automobile companies accounted for 91.8% of January sales.",
      "On top of this, the Chinese government is actively looking to further open the Chinese automobile sector to foreign growth, citing hope that foreign management expertise and technology will spread to Chinese companies more effectively if foreign firms are given greater incentives to enter the market. Currently foreign firms must enter into at most a 50-50 joint venture with a Chinese company.",
      "China is home to more than 250 million cars. Thirty one cities each host 1 million cars. Eight of these (Beijing, Shanghai, Guangzhou, Chengdu, Tianjin, Shenzhen, Suzhou, and Hangzhou) house more than 2 million cars. Beijing itself claims 5 million of the nation\u2019s 250 million automobiles.",
      "While five cities (Beijing, Shanghai, Guangzhou, Guiyang, and Tianjin) have established car-buying limitations and more cities are expected to join them in the future, China still has amazing growth potential. China has around 179 cars per thousand people. This ratio has grown dramatically since 2009, when it stood at 34 cars per thousand people. To further put this growth potential in perspective, the US boasts a ratio of approximately 800 cars per thousand people. Sales and production in China have ranked number one in the world for the past five years.",
      "The top five brands in China rank as follows: Volkswagen recorded sales of 2.4 million units and the nation\u2019s second most popular car (VW Lavida). GM recorded sales of 2.1 million units and the nation\u2019s third most popular car (Buick Excelle). Hyundai-Kia recorded sales of 1.6 million units. Toyota recorded sales of 900 thousand units. Nissan recorded sales of 800 thousand units.",
      "Other notable performers: Ford recorded sales of 700 thousand units and the nation\u2019s most popular car with 403,000 sales of its own (Ford Focus), with the car itself seeing an increase of 36.2% year-on-year. Geely had the highest sales of any Chinese car brand at 600 thousand units. Chang\u2019an\u2019s sales increased by 77.38%.",
      "The outlook on 2014 seems positive. John Lawler of Ford looks for the Chinese auto industry to increase another 7.5% to 8% this year, and Ford expects to beat the market\u2019s growth. GM is expecting sales to increase 8% to 10% in 2014. Shi Jianhua, deputy secretary-general of the China Association of Automobile Manufacturers (CAAM) explained that China\u2019s auto market is still in a period of rapid expansion, with growth gradually shifting to small-sized cities where demand is significant.",
      "For those interested in the top Chinese brands, ranked by 2013 total sales: Greatwall at 627,434 units (increase of 28.72%), Geely at 553,128 units (increase of 12.55%), BYD at 506,189 units (increase of 10.99%), Chery at 423,200 units (decrease of 19.68%), and Chang\u2019an at 409,600 units (increase of 77.38%).",
    ],
  },

  "chinas-auto-industry-reform": {
    slug: "chinas-auto-industry-reform",
    title: "Should China\u2019s Auto Industry Be Reformed?",
    subtitle: "The case for loosening joint venture restrictions",
    date: "FEB 26, 2014",
    readingTime: "5 MIN",
    topic: "LAW / CHINA",
    chapterLabel: "POST 012",
    aboutText:
      "An examination of whether China should reform its automobile joint venture regulations to give foreign companies more freedom.",
    relatedSlugs: ["chinas-automobile-industry", "chinas-emerging-capitalist-economy"],
    content: [
      "In the wake of the 2008 financial crisis, China overhauled its automobile industry. In the law itself it was acknowledged that the change was bound to happen, and the financial crisis only sped it up.",
      "The first sentence of the \u201cProgram for the Adjustment and Rejuvenation of the Auto Industry\u201d reads roughly as follows: \u201cThe auto industry is an important pillar industry for the people, it has a long industrial chain, high level of connections, high employment potential, a large pull on consumers, and has an important role in the development of the people\u2019s economy and society.\u201d",
      "The goals for the law consisted of increasing local firms\u2019 market control to forty percent, have new energy vehicles compose five percent of the market, create national champions out of domestic firms that could enter the international market, increase credit to car consumers, and increase urban infrastructure projects.",
      "These goals now seem damning because the country faces: a massive credit crisis, heavy local government debt in part due to infrastructure spending, and still no sign of strong domestic auto firms.",
      "So, it\u2019s only natural that the government made an announcement on November 19, 2013 that soon enough the auto industry joint venture regulation (limiting foreign firms to at most a fifty percent stake in any Chinese branch, and forcing foreign firms to partner with domestic firms) would soon be changed to give more leeway to foreign companies.",
      "Isn\u2019t that a complete turn around from what the government was saying only five years before? First of all, the fifty-fifty joint venture law has been in place for almost twenty years, and China\u2019s domestic auto producers are still lagging far behind.",
      "There is adequate reason to believe this is because the majority of the Chinese sides of the joint ventures are held by state-owned enterprises. The main evidence for this is that it is not possible for foreign companies to own land in China, so they need government connections. Thus, local governments backed certain state-owned companies that partnered up with foreign firms and rested on the foreign companies\u2019 brand appeal, technological advantages, management techniques, etc. all while not working at all to improve their own operations. All these state-owned firms had to do was supply land and labor to foreign firms dying to enter a huge market, then sit back and count half of every RMB that these companies made.",
      "Clearly, the technology spillover didn\u2019t quite work the way the government had planned. So given these arguments, why are some people, like the Vice President of the Chinese Association of Automobile Manufacturers not supporting a revision of the law?",
      "It can be argued that the benefits the law has provided lie in the fact that more and more foreign firms are relocating R&D centers to China. Therefore, Chinese auto workers have increased ability to learn from within these established firms and increase the rate of technology spillover. Granted, this hasn\u2019t worked in the last twenty years, so I wouldn\u2019t bank on there being a technological breakthrough soon.",
      "There seems to have been a slow trickle of spillover though, as independent Chinese brands managed to conquer the low cost market for a brief enough stint of time for two producers to work their way into China\u2019s top 10 auto company list. Unfortunately for them, foreign companies are now breaching this market, with inexpensive cars like Toyota Corollas, Honda Fits, and the Japanese-made Yangguang.",
      "The worry is that by allowing foreign companies to more freely operate within the Chinese market, the government risks completely stomping out all of the small independent manufacturers that they have worked so hard over the past twenty years to protect.",
      "The only problem with this argument is that one of the most successful independent Chinese companies\u2019 board members has spoken out in favor of giving foreign companies more freedom. Geely\u2019s board member, Li Shufu has made the argument that he doesn\u2019t believe foreign firms can operate on their own in China, primarily because they need Chinese companies to help with government relations in order to receive the government support that they need.",
      "I\u2019m not sure that this is the best stance for Mr. Li to take, considering that it seems the government is looking to wean off state-owned enterprises\u2019 dominance of the fifty-fifty joint venture contracts. If this is the case, then don\u2019t expect local governments to be so stingy on helping out foreign companies, especially if China\u2019s economy hits a rough patch...or a hard landing.",
    ],
  },

  "chinas-pmi": {
    slug: "chinas-pmi",
    title: "China\u2019s PMI Released",
    subtitle: "What declining manufacturing means for transformation",
    date: "MAR 3, 2014",
    readingTime: "3 MIN",
    topic: "ECONOMICS / CHINA",
    chapterLabel: "POST 013",
    aboutText:
      "Analysis of China\u2019s declining manufacturing PMI and what it signals about the country\u2019s economic transformation under Xi Jinping.",
    relatedSlugs: ["whats-going-on-with-rmb", "chinas-emerging-capitalist-economy"],
    content: [
      "China\u2019s latest PMI came out today and it seems the media is taking a cautiously negative approach to the numbers. The manufacturing index fell to 48.5% according to HSBC, and 50.2% according to state sources.",
      "While these numbers reflect a declining manufacturing sector that brings some issues to the region, it also represents progress towards China\u2019s political economic goals.",
      "The falling manufacturing index negatively impacts surrounding Asian nations that in the past were dependent on an infrastructure-crazed China\u2019s imports. China\u2019s manufacturing, steel, and iron sectors had been fueled by massive construction and city infrastructure projects for years, serving as the motor for China\u2019s rapid economic climb. It\u2019s only natural that the nations nearby adjusted their economies to feed the infrastructure behemoth.",
      "Problems have begun to plague China\u2019s old economic approach, as pollution is climbing the charts towards becoming the most popular complaint of Chinese citizens, rampant apartment construction has led to runaway speculation and a housing bubble as well as ghost cities like Ordos, and lending to local governments has led to poor banking practices and an overabundance of credit.",
      "To remedy these problems, the new Chinese leadership under Xi Jinping and Li Keqiang have pledged to transform the economy from one dependent on infrastructure, construction, and cheap exports to one that relies on domestic consumers. Once this change was declared, it was only a matter of time before the markets began to take note of declining manufacturing and export numbers in China. That is exactly what we are seeing now.",
      "Certainly, some of the slowing can be pinned on the Lunar New Year festival, which fell at the end of January and beginning of February, but overall there has been a downward trend in areas that most analysts have been accustomed to seeing prosper. The important thing now for analysts is to have patience and continue to watch domestic economic measurements, like the service sector, which posted growth across the holiday season.",
      "As for neighboring Asian countries, it\u2019s time to switch from commodity exports and towards exports that can feed the coming onslaught of Chinese consumerism. Chinese consumers may see their incomes begin to increase in the future, especially if more capital enters China as its capital market continues to open.",
    ],
  },

  "whats-going-on-with-rmb": {
    slug: "whats-going-on-with-rmb",
    title: "What\u2019s Going on with the RMB?",
    subtitle: "Why China deliberately weakened its currency",
    date: "MAR 4, 2014",
    readingTime: "3 MIN",
    topic: "FINANCE / CHINA",
    chapterLabel: "POST 014",
    aboutText:
      "An explanation of why the Chinese government deliberately weakened the RMB and the economic dilemma of battling hot money and a credit bubble simultaneously.",
    relatedSlugs: ["yuebao-china-economy", "chinas-shadow-banking"],
    content: [
      "Over the past two weeks, the renminbi has dropped 1.3 percent against the dollar. After eight or nine years of constant gains, this sudden drop has certainly shocked investors.",
      "But why did the currency just change direction like that? The answer: the Chinese government. Why would the Chinese government do such a thing? A tougher answer.",
      "The most apparent reason is to make these investors and speculators think twice before continuing to buy up Chinese assets. If any one lesson can be gleaned from recent crises, particularly the Euro crisis and the Asian financial crisis, it is that an excess of hot money in the form of foreign capital inflows can be deadly for an economy. Once these inflows stop, which they inevitably will, that nation is left holding buckets of debt that were funded by these inflows.",
      "The primary problem is the mismatch in timing. Hot money is looking for short term investment that can easily make high returns, for example: speculating on the rise of China\u2019s currency. These inflows are then fed into longer term investments. The crisis lies in the moment that investors begin to pull their short-term investments out, but the money is locked into the longer-term investments and can\u2019t be accessed. This is the fundamental liquidity problem that we have seen time and time again, in the Asian financial crisis in the 1990s, in the US financial crisis in 2008, and most recently the Euro Crisis.",
      "Another problem for China is that in addition to the hot money that has been encouraging investment, primarily in real estate and now in shadow banking, there is currently more of this hot money looking for a home. Investors are pulling out of Southeast Asian countries where investments relied on feeding China\u2019s now slumping manufacturing sector. Lastly, as the US tapers its QE program, the last bastions of consumption bubbles will soon be disappearing, further causing capital to flee these export reliant Southeast Asian economies.",
      "The economic dilemma that China faces is that it is trying to battle hot money and a rapidly inflating domestic credit bubble at the same time, and the cures are polar opposites. The answer to hot money is a depreciating RMB, which is what we are seeing now. The negative effects of which are more liquidity in the Chinese domestic economy.",
      "This added liquidity gives more leeway to banks, real estate investors, and shadow bankers to place bets on riskier investments than they normally would. China\u2019s government has been fighting this since June with a sequence of interbank loan interest rate spikes that have caused scares of potential bank bankruptcies. These bankruptcies would again be due to the short term hot money (this time from the government) being reeled in and leaving banks and shadow bankers with long term risky investments out to dry.",
      "It seems that China has found itself between a rock and a hard place. It\u2019ll be interesting to see how the leadership responds in the coming weeks and months.",
    ],
  },

  "yuebao-china-economy": {
    slug: "yuebao-china-economy",
    title: "Yu\u2019E\u2019Bao and the New Schism in China\u2019s Economy",
    subtitle: "How Alibaba disrupted banking and created systemic risk",
    date: "MAR 12, 2014",
    readingTime: "6 MIN",
    topic: "FINANCE / CHINA",
    chapterLabel: "POST 015",
    aboutText:
      "How Alibaba\u2019s Yu\u2019E\u2019Bao disrupted Chinese banking by offering 6% returns on demand deposits, and why it created systemic risk in the interbank loan market.",
    relatedSlugs: ["chinas-shadow-banking", "whats-going-on-with-rmb"],
    content: [
      "If you think that shadow banking is all the rage in China right now then you\u2019re behind the times.",
      "While it appears the Chinese government and market have combined to potentially solve the issue of shadow banking\u2019s loan sharks with five experimental private banks that could offer credit to small and medium sized enterprises at a rate that undercuts loan sharks but is more accessible than the major banks, China has a new problem that is quickly emerging.",
      "Alibaba is one of three emerging mobile internet companies in China (the other two being messaging app WeChat\u2019s owner Tencent and Google-like search engine Baidu). Alibaba\u2019s main claim to fame used to be Alipay, which was a mobile payment application similar to Paypal in the US.",
      "Now, thanks to Chinese business regulations requiring a minimum capital reserve equal to 10% of daily transactions, Alibaba\u2019s namesake has become its roughly eight month old internet finance company Yu\u2019E\u2019Bao. In order to avoid the issue of the capital reserve, Alibaba created Yu\u2019E\u2019Bao to attract a capital flight from Alipay. It did so by letting investors invest any amount of money and allowing them to withdraw that money whenever they please. Additionally, and most importantly, they offer a return of 6% whereas banks are limited to offering a measly .35% for the same deal (called demand deposits). Even if investors want to suck it up and agree to leave their money in the bank for a full year they can only get 3% returns. The choice here is obvious.",
      "What Alibaba has done is revolutionize the investing game in China. Now anyone, regardless of how much money they have, can invest in Yu\u2019E\u2019Bao and get 6% returns. Additionally, because more of the youth in China is engaged with mobile internet, most of the money invested in Yu\u2019E\u2019Bao is believed to come from their pockets. Thanks to growing incomes fueled by 20 years of greater than 7% GDP growth and the one-child policy, these \u201clittle princes\u201d are beholden to more cash than maybe ever before in history. They\u2019re also inheriting their parents\u2019 health care costs thanks to a lack of government-provided social welfare. What does this mean? They\u2019re saving lots of money, most likely now on Yu\u2019E\u2019Bao and other similar platforms.",
      "So now that we see that the savings of the youth are all being moved to these internet finance companies, let\u2019s see where the trouble lies.",
      "Yu\u2019E\u2019Bao (actually Tianhong Asset Management company, of which Alibaba owns 51% and handles all of Yu\u2019E\u2019Bao\u2019s investment decisions) has publicly admitted that it invests close to 90% of its savings in interbank loans (loans that are extended to banks, from other banks). Right now, thanks to shadow banking and related wealth management products, the major banks have begun to invest in riskier investments (evidenced by the recent bankruptcy of the Jilin trust loan, sold through Chinese Construction Bank, to heavily indebted Liansheng coal company), which in turn have required more emergency funding via the interbank loans.",
      "Last year the Chinese government allowed interbank loan rates to freely fluctuate four times, each time watching rates rocket to levels that were close to causing bankruptcies among major banks before the government interfered. This is part of what has been fueling Yu\u2019E\u2019Bao\u2019s high rates of return.",
      "However, we all know that once supply is high, demand drops and prices slump. Well, as Yu\u2019E\u2019Bao has grown to be the 4th largest money market fund worldwide, supply has also largely grown. This means that there is now more money sitting in the interbank loan markets, and rates will most likely not continue to float so high. Subsequently, Yu\u2019E\u2019Bao will not be able to continue to offer such high returns. Thus is the nature of the economic equilibrium.",
      "It is perhaps the cooling nature that Yu\u2019E\u2019Bao brings to the interbank loan market that keeps the government from interfering in the internet finance domain. The government has plans to eventually allow deposit interest rates at major banks to rise (most likely in the next two years), which will also decrease demand for Yu\u2019E\u2019Bao. It appears that one of the first steps the government plans to take towards this end is that of freeing their hold on the interbank loan market and therefore no longer implicitly backing banks\u2019 risky lending.",
      "The problem is that at the rate that Yu\u2019E\u2019Bao has been growing (it now caters to more investors than the Chinese equity market), the interbank market could become flooded before the Chinese government floats major banks\u2019 deposit rates. This would lead to a lowering in the rate of return for Yu\u2019E\u2019Bao, and if the rate fell enough that there were better alternatives, it eventually could lead to a massive withdraw of funds (bank run). Yu\u2019E\u2019Bao is not subject to the same rules as banks, and does not have capital reserve requirements. Therefore, a bank run on Yu\u2019E\u2019Bao could lead to problems with liquidity and a massive bankruptcy that shakes the entire Chinese economy and therefore the entire world.",
      "Is that the only problem? Nope. As money leaves traditional banks (who are dependent on short-term, or demand deposits, for 50% of its total deposits) and enters Yu\u2019E\u2019Bao, banks have to find ways to increase returns. The easiest way to do this is through shadow banking channels, which leads lending to high-risk debtors who have now started defaulting. This means that the minority of people who choose to invest in banks to supposedly stay safe from risk are actually also putting their money at risk of default.",
    ],
  },

  "china-us-real-estate-policy": {
    slug: "china-us-real-estate-policy",
    title: "2008\u5e74\u91d1\u878d\u5371\u673a\u540e\uff1a\u4e2d\u7f8e\u623f\u5730\u4ea7\u8c03\u63a7\u653f\u7b56\u6bd4\u8f83",
    subtitle: "Post-crisis real estate regulation compared",
    date: "APR 21, 2014",
    readingTime: "3 MIN",
    topic: "ECONOMICS / CHINA",
    chapterLabel: "POST 016",
    aboutText:
      "\u7528\u4e2d\u6587\u5199\u7684\u5173\u4e8e2008\u5e74\u91d1\u878d\u5371\u673a\u540e\u4e2d\u7f8e\u623f\u5730\u4ea7\u8c03\u63a7\u653f\u7b56\u6bd4\u8f83\u7684\u6587\u7ae0\u3002A comparison of US and China real estate regulation after the 2008 financial crisis, written in Chinese.",
    relatedSlugs: ["china-interest-rate-crisis", "chinas-emerging-capitalist-economy"],
    content: [
      "\u867d\u7136\u0032\u0030\u0030\u0038\u5e74\u91d1\u878d\u5371\u673a\u5bf9\u6bcf\u4e00\u4e2a\u56fd\u5bb6\u6709\u5f71\u54cd\uff0c\u4f46\u662f\u6bcf\u4e00\u4e2a\u56fd\u5bb6\u7684\u56de\u7b54\u4e0d\u4e00\u6837\u3002\u5177\u4f53\u8bf4\uff0c\u7f8e\u56fd\u548c\u4e2d\u56fd\u7684\u56de\u7b54\u7279\u522b\u4e0d\u4e00\u6837\u3002\u5f88\u5927\u7684\u539f\u56e0\u5c31\u662f\u7f8e\u56fd\u7684\u623f\u5730\u4ea7\u6ce1\u6cab\u5df2\u7ecf\u7834\u88c2\u4e86\uff0c\u53ef\u662f\u4e2d\u56fd\u623f\u5730\u4ea7\u6ce1\u6cab\u8303\u56f4\u8fd8\u662f\u8d8a\u6765\u8d8a\u5927\u7684\uff0c\u98ce\u9669\u4e5f\u8fd8\u662f\u8d8a\u6765\u8d8a\u5927\u7684\u3002\u4ece\u4ed6\u4eec\u7684\u4e0d\u4e00\u6837\u60c5\u51b5\u6765\u770b\uff0c\u5c31\u662f\u81ea\u7136\u7684\u4ed6\u4eec\u7684\u56de\u7b54\u4e0d\u4e00\u6837\u3002\u4e2d\u56fd\u0032\u0030\u0030\u0038\u5e74\u540e\u653f\u7b56\u76ee\u6807\u662f\u505c\u6b62\u623f\u5730\u4ea7\u6ce1\u6cab\u7684\u589e\u957f\u3002\u7f8e\u56fd\u653f\u7b56\u76ee\u6807\u662f\u66f4\u597d\u4fdd\u62a4\u6d88\u8d39\u8005\u548c\u9650\u5236\u94f6\u884c\u6709\u98ce\u9669\u7684\u6d3b\u52a8\u3002",
      "\u5371\u673a\u540e\uff0c\u4e2d\u56fd\u5b9e\u65bd\u4e86\u4e09\u4e2a\u91cd\u8981\u6cd5\u5f8b\uff0d\u0032\u0030\u0030\u0038\u5e74\u7684\u5173\u4e8e\u4fc3\u8fdb\u623f\u5730\u4ea7\u5e02\u573a\u5065\u5eb7\u53d1\u5c55\u7684\u82e5\u5e72\u610f\u89c1\uff0c\u0032\u0030\u0031\u0030\u5e74\u7684\u5173\u4e8e\u4fc3\u8fdb\u623f\u5730\u4ea7\u5e02\u573a\u5e73\u7a33\u5065\u5eb7\u53d1\u5c55\u7684\u901a\u77e5\u8fd8\u6709\u0032\u0030\u0031\u0030\u5e74\u7684\u5173\u4e8e\u575a\u51b3\u904f\u5236\u90e8\u5206\u57ce\u5e02\u623f\u4ef7\u8fc7\u5feb\u4e0a\u6da8\u7684\u901a\u77e5\u3002\u4e2d\u56fd\u0032\u0030\u0031\u0030\u5e74\u7684\u8c03\u63a7\u653f\u7b56\u5347\u7ea7\u7684\u76ee\u6807\u662f\u9650\u5236\u623f\u5730\u4ea7\u7684\u4e70\u5356\u6d3b\u52a8\u3002\u8fd9\u4e2a\u653f\u7b56\u5305\u62ec\u76f4\u63a5\u9650\u5236\u6d88\u8d39\u8005\u8d2d\u4e70\u7684\u80fd\u529b\uff0c\u94f6\u884c\u7ed9\u8d37\u6b3e\u7684\u80fd\u529b\uff0c\u9650\u5236\u623f\u5730\u4ea7\u5f00\u53d1\u9879\u76ee\uff0c\u52a0\u5f3a\u7533\u8bf7\u7684\u8981\u6c42\uff0c\u53d6\u6d88\u4e86\u8d2d\u623f\u4f18\u60e0\u653f\u7b56\u548c\u52a0\u5927\u4fdd\u969c\u6027\u4f4f\u623f\u5efa\u8bbe\u529b\u5ea6\u3002\u4ece\u6211\u81ea\u5df1\u89d2\u5ea6\u6765\u770b\uff0c\u56e0\u4e3a\u5927\u90e8\u5206\u7684\u6d88\u8d39\u8005\u4f7f\u7528\u8d37\u6b3e\u4e70\u623f\u5b50\uff0c\u6240\u4ee5\u5dee\u522b\u5316\u4fe1\u8d37\u653f\u7b56\u662f\u6700\u91cd\u8981\u7684\u3002\u8fd9\u4e2a\u653f\u7b56\u8bf4\u9996\u4ed8\u6b3e\u6bd4\u4f8b\u4e0d\u5f97\u4f4e\u4e8e\u767e\u5206\u4e4b\u4e09\u5341\u3002\u5bf9\u8d37\u6b3e\u8d2d\u4e70\u7b2c\u4e8c\u5957\u4f4f\u623f\u7684\uff0c\u9996\u4ed8\u6b3e\u6bd4\u4f8b\u4e0d\u5f97\u4f4e\u4e8e\u767e\u5206\u4e4b\u4e94\u5341\u3002\u53e6\u5916\uff0c\u4ed8\u6b3e\u5229\u7387\u4e0d\u5f97\u4f4e\u4e8e\u57fa\u51c6\u5229\u7387\u7684\u0031\u002e\u0031\u500d\u3002\u6700\u540e\u6761\u6240\u8bf4\u5bf9\u8d37\u6b3e\u8d2d\u4e70\u7b2c\u4e09\u5957\u4f4f\u623f\u7684\uff0c\u5c31\u505c\u6b62\u53d1\u653e\u4f4f\u623f\u8d37\u6b3e\u3002\u8fd9\u4e2a\u653f\u7b56\u7684\u76ee\u6807\u662f\u9650\u5236\u623f\u5730\u4ea7\u6ce1\u6cab\u7684\u589e\u957f\u548c\u505c\u6b62\u6d88\u8d39\u8005\u6362\u4e0d\u4e86\u8d37\u6b3e\u7684\u8d8b\u52bf\u3002",
      "\u5371\u673a\u540e\uff0c\u7f8e\u56fd\u5b9e\u65bd\u4e86\u4e00\u4e2a\u975e\u5e38\u5927\uff0c\u975e\u5e38\u91cd\u8981\u7684\u653f\u7b56\u3002\u8fd9\u4e2a\u653f\u7b56\u88ab\u79f0\u4e3a\u7f8e\u56fd\u7684\u591a\u5fb7\uff0d\u5f17\u5170\u514b\u653f\u7b56\u3002\u5728\u8fd9\u4e2a\u653f\u7b56\u91cc\u9762\uff0c\u7b2c\u6761\u89e3\u91ca\u7f8e\u56fd\u653f\u5e9c\u5bf9\u94f6\u884c\u548c\u8d37\u6b3e\u8d2d\u4e70\u4f4f\u623f\u7684\u65b0\u653f\u7b56\u3002\u867d\u7136\u8fd9\u4e9b\u653f\u7b56\u6bd4\u4e2d\u56fd\u7684\u653f\u7b56\u590d\u6742\u5f97\u591a\uff0c\u4f46\u57fa\u672c\u4e0a\u8bf4\u94f6\u884c\u5e94\u8be5\u66f4\u6311\u5254\u5730\u9009\u62e9\u53d7\u5230\u8d37\u6b3e\u8005\u3002\u8fd9\u4e9b\u653f\u7b56\u76ee\u6807\u8ddf\u4e2d\u56fd\u653f\u7b56\u76ee\u6807\u4e00\u6837\uff0d\u51cf\u5c11\u6362\u4e0d\u4e86\u8d37\u6b3e\u7684\u6d88\u8d39\u8005\u6570\u91cf\u3002\u4f46\u662f\uff0c\u7f8e\u56fd\u4e5f\u4f7f\u7528\u522b\u7684\u653f\u7b56\u5c1d\u8bd5\u4fc3\u8fdb\u7ecf\u6d4e\u6d3b\u52a8\uff0c\u4fc3\u8fdb\u7ecf\u6d4e\u589e\u957f\u3002\u8fd9\u662f\u56e0\u4e3a\u4ece\u91d1\u878d\u5371\u673a\u7f8e\u56fd\u7ecf\u6d4e\u500d\u53d7\u635f\u5bb3\u6bd4\u4e2d\u56fd\u7ecf\u6d4e\u500d\u53d7\u635f\u5bb3\u5927\u3002\u518d\u4fc3\u8fdb\u7ecf\u6d4e\u589e\u957f\u7684\u4e00\u5927\u90e8\u5206\u5c31\u662f\u300a\u95ee\u9898\u8d44\u4ea7\u6551\u52a9\u8ba1\u5212\u300b\u3002\u8fd9\u4e2a\u653f\u7b56\u7ed9\u7f8e\u56fd\u94f6\u884c\u5f88\u591a\u94b1\u5e2e\u52a9\u4ed6\u4eec\u514b\u670d\u91d1\u878d\u5371\u673a\u7684\u95ee\u9898\u3002",
      "\u4ece\u8fd9\u7bc7\u8bba\u6587\u7684\u5185\u5bb9\u53ef\u4e00\u770b\u5230\u7f8e\u56fd\u548c\u4e2d\u56fd\u5728\u5371\u673a\u540e\u7684\u56de\u7b54\u4e0a\u6709\u4ec0\u4e48\u540c\u6837\u548c\u4ec0\u4e48\u533a\u522b\u3002\u4e2d\u56fd\u653f\u5e9c\u5728\u5c1d\u8bd5\u9884\u9632\u623f\u5730\u4ea7\u6ce1\u6cab\u7834\u88c2\uff0c\u4f46\u662f\u8fd8\u6ca1\u5f97\u5230\u9884\u671f\u7684\u76ee\u6807\u3002\u7f8e\u56fd\u653f\u5e9c\u5728\u5c1d\u8bd5\u4ece\u623f\u5730\u4ea7\u6ce1\u6cab\u7834\u88c2\u6062\u590d\u3002\u5b83\u4eec\u4e24\u4e2a\u4e0d\u4e00\u6837\u7684\u60c5\u51b5\u5851\u9020\u4e86\u4e24\u4e2a\u4e0d\u592a\u4e00\u6837\u7684\u653f\u7b56\u56de\u7b54\u3002",
    ],
  },

  "asean-challenges": {
    slug: "asean-challenges",
    title: "\u4e1c\u76df\u5efa\u8bbe\u9762\u4e34\u7684\u6311\u6218\u548c\u524d\u666f",
    subtitle: "ASEAN: The Challenges of Formation and Future Prospects",
    date: "APR 22, 2014",
    readingTime: "9 MIN",
    topic: "GEOPOLITICS",
    chapterLabel: "POST 017",
    aboutText:
      "\u7528\u4e2d\u6587\u5199\u7684\u5173\u4e8e\u4e1c\u76df\u5efa\u8bbe\u9762\u4e34\u6311\u6218\u7684\u6f14\u8bb2\u7a3f\uff0c\u9644\u82f1\u6587\u7ffb\u8bd1\u3002A student presentation analyzing ASEAN\u2019s formation challenges, written in Chinese with English translation.",
    relatedSlugs: ["future-of-the-internet", "china-express-delivery"],
    content: [
      "\u8001\u5e08\u597d\uff0c\u5927\u5bb6\u597d\u3002\u4eca\u5929\u6211\u8981\u89e3\u91ca\u4e00\u4e0b\u4e1c\u76df\u5171\u540c\u4f53\u5efa\u8bbe\u9762\u4e34\u7684\u6311\u6218\u4e0e\u524d\u666f\u3002\u4e1c\u76df\u5171\u540c\u4f53\u5efa\u8bbe\u7684\u7406\u89e3\u5e2e\u52a9\u4f60\u66f4\u597d\u4e86\u89e3\u4e1c\u76df\u7684\u672a\u6765\uff0c\u56e0\u6b64\u8fd9\u7bc7\u8bba\u6587\u7684\u5185\u5bb9\u662f\u5f88\u91cd\u8981\u7684\u3002\u6bd4\u5982\u8bf4\uff0c\u4f5c\u8005\u4f7f\u7528\u8fd9\u7bc7\u8bba\u6587\u4e3a\u4e86\u6bd4\u8f83\u4e1c\u76df\u548c\u6b27\u76df\u7684\u6027\u8d28\u548c\u53d1\u5c55\u3002\u4ed6\u5230\u5e95\u51b3\u5b9a\u4e86\u56e0\u4e3a\u4e1c\u76df\u548c\u6b27\u76df\u7684\u4e00\u4f53\u5316\u7a0b\u5ea6\u4e0d\u4e00\u6837\uff0c\u4f60\u5e76\u4e0d\u80fd\u6bd4\u8f83\u8fd9\u4e24\u4e2a\u5171\u540c\u4f53\u7684\u53d1\u5c55\u8fc7\u7a0b\u3002",
      "\u6211\u4eca\u5929\u8981\u8bf4\u4e00\u8bf4\u4e1c\u76df\u5171\u540c\u4f53\u5efa\u8bbe\u7684\u77db\u76fe\u53ca\u56f0\u96be\u548c\u5b83\u7684\u524d\u666f\u3002\u56e0\u4e3a\u4e1c\u76df\u7684\u77db\u76fe\u548c\u56f0\u96be\u662f\u5b83\u7684\u7279\u8272\u4e4b\u4e00\uff0c\u6240\u4ee5\u6211\u8981\u7279\u522b\u91cd\u89c6\u8fd9\u4e9b\u77db\u76fe\u548c\u56f0\u96be\uff0c\u6bd4\u5982\u8bf4\u5730\u7406\uff0c\u6587\u5316\uff0c\u7ecf\u6d4e\u548c\u8ffd\u6c42\u7684\u5229\u76ca\u3002",
      "\u4e1c\u76df\u5171\u540c\u4f53\u5efa\u8bbe\u662f\u201c\u5728\u591a\u6837\u5316\u4e2d\u6c42\u7edf\u4e00\u201d\uff0c\u5c3d\u7ba1\u9762\u4e34\u7740\u8bb8\u591a\u56f0\u96be\u548c\u77db\u76fe\uff0c\u4f46\u5404\u56fd\u4e4b\u95f4\u5408\u4f5c\u53d1\u5c55\u7684\u201c\u7edf\u4e00\u6027\u201d\u662f\u5b58\u5728\u7684\u3002\u51b7\u6218\u4e4b\u540e\uff0c1992\u5e74\u4e1c\u76df\u56fd\u5bb6\u51b3\u5b9a\u4e86\u5efa\u7acb\u4e1c\u76df\u81ea\u7531\u8d38\u6613\u533a\u30021994\u5e74\u4e1c\u5357\u4e9a\u5341\u56fd\u53d1\u8868\u4e86\u300a\u4e1c\u5357\u4e9a\u5341\u56fd\u5173\u4e8e\u5efa\u7acb\u4e1c\u5357\u4e9a\u5171\u540c\u4f53\u8bbe\u60f3\u7684\u58f0\u660e\u300b\u30021999\u5e744\u6708\uff0c\u67ec\u57d4\u5be8\u7684\u52a0\u5165\u6807\u5fd7\u7740\u4e1c\u5357\u4e9a\u5728\u7ec4\u7ec7\u4e0a\u7684\u4e00\u4f53\u5316\u6700\u7ec8\u5f62\u6210\u3002",
      "\u4f5c\u8005\u8bf4\u867d\u7136\u4e1c\u76df\u5efa\u8bbe\u9762\u4e34\u4e86\u516d\u4e2a\u4e25\u8083\u7684\u95ee\u9898\uff0c\u4f46\u662f\u8fd9\u4e9b\u56fd\u5bb6\u4e4b\u95f4\u8fd8\u5408\u4f5c\u53d1\u5c55\u7684\u201c\u7edf\u4e00\u6027\u201d\u5b58\u5728\u7684\u3002\u7b2c\u4e00\u4e2a\u6311\u6218\u662f\u5404\u56fd\u5730\u7406\u548c\u8d44\u6e90\u7684\u60c5\u51b5\u600e\u4e48\u5f71\u54cd\u5b83\u4eec\u7684\u53d1\u5c55\u3002\u7b2c\u4e8c\u4e2a\u56f0\u96be\u662f\u5404\u56fd\u6c11\u65cf\uff0c\u5b97\u6559\u548c\u6587\u5316\u5f62\u6001\u7684\u590d\u6742\u591a\u5143\u6027\uff0c\u4e1c\u5357\u4e9a\u5168\u533a\u5171\u6709400\u591a\u6c11\u65cf\u548c\u90e8\u65cf\u3002\u7b2c\u4e09\u662f\u7ecf\u6d4e\u53d1\u5c55\u6c34\u5e73\u7684\u5dee\u5f02\u3002\u7b2c\u56db\u4e2a\u77db\u76fe\u662f\u793e\u4f1a\u5236\u5ea6\u548c\u653f\u5e9c\u5236\u5ea6\u7684\u4e0d\u540c\u3002\u7b2c\u4e94\u4e2a\u56f0\u96be\u662f\u8fb9\u754c\uff0c\u9886\u571f\u548c\u9886\u6d77\u4e89\u8bae\u3002\u7b2c\u516d\u4e2a\u95ee\u9898\u662f\u5404\u56fd\u8ffd\u6c42\u7684\u5229\u76ca\u4e0d\u540c\u3002",
      "\u4f5c\u8005\u5230\u5e95\u89c9\u5f97\u56e0\u4e3a\u4e1c\u76df\u5171\u540c\u4f53\u5404\u56fd\u4e4b\u95f4\u6709\u8fd9\u4e48\u591a\u5dee\u5f02\uff0c\u5c31\u4e0d\u53ef\u80fd\u7528\u4e1c\u76df\u5bf9\u522b\u7684\u5730\u533a\u56fd\u5bb6\u7ec4\u7ec7\u505a\u6bd4\u8f83\u3002\u4e1c\u76df\u5e76\u4e0d\u8ddf\u7740\u6b27\u76df\u7684\u8d85\u56fd\u5bb6\u673a\u6784\u5efa\u8bbe\u8fc7\u7a0b\uff0c\u53cd\u800c\u4e1c\u76df\u5efa\u8bbe\u8fc7\u7a0b\u5f3a\u8c03\u4e86\u5c0a\u91cd\u5404\u56fd\u7684\u72ec\u7acb\uff0c\u4e3b\u6743\u548c\u9886\u571f\u3002",
      { heading: "English Translation" },
      "Today I want to explain the challenges that ASEAN faced while developing, and the prospects for its future. To understand ASEAN\u2019s future, we must first understand its development. The author uses his essay to compare ASEAN with the European Union, and finds that these two organizations\u2019 degrees of unity are not the same, and thus we cannot compare their developments.",
      "ASEAN was formed by finding unity among a sea of differences. Although the organization faced many challenges, it still managed to emerge as a united identity. After the Cold War, in 1992, ASEAN countries decided to establish a Southeast Asia Free Trade Zone. In 1994, the ten countries of Southeast Asia announced the ASEAN Regional Forum. In April of 1999, Cambodia joined ASEAN, which symbolized the completion of the group.",
      "The author says that although during formation, ASEAN faced many problems, these nations still managed to work together to create a united identity. From a broad viewpoint, we can place each of these problems into three separate categories: geopolitics, regional economic and trade practices, and security and defense mentalities.",
      "The first challenge is the varying geographies and natural resources of each Southeast Asian nation. Every nation\u2019s minerals, energy sources, animals, and agricultural resources situation were different. The second difficulty is each country\u2019s unique ethnicities, religions, and culture. Southeast Asia as a whole has more than 400 ethnicities. The third problem is the different levels of economic development. Singapore is the only developed nation, with Malaysia and Thailand as emerging industrialized nations, Indonesia and Philippines advancing towards that status, and Vietnam, Laos, Cambodia, and Myanmar in the bottom tier.",
      "The fourth contradiction is the difference in government systems: group rule (Thailand, Malaysia), republican rule (Indonesia, Singapore, Philippines), and absolute group rule (Brunei). The fifth difficulty is border and territorial disputes that have simmered but not been fully resolved. The sixth problem is that each nation is pursuing its own individual interests within the scope of ASEAN.",
      "In the end, the author believes that due to the differences between ASEAN nations, we cannot compare ASEAN with other supra-national groups. ASEAN has not followed the European Union\u2019s path of development; rather, it has developed on a path that respects national sovereignty and independence.",
    ],
  },

  "china-express-delivery": {
    slug: "china-express-delivery",
    title: "Foreign Entry into Chinese Express Delivery",
    subtitle: "Why M&A is the path for foreign logistics firms",
    date: "AUG 8, 2014",
    readingTime: "7 MIN",
    topic: "BUSINESS / CHINA",
    chapterLabel: "POST 018",
    aboutText:
      "An analysis of foreign investment opportunities in China\u2019s booming express delivery sector through mergers and acquisitions.",
    relatedSlugs: ["chinas-emerging-capitalist-economy", "chinas-automobile-industry"],
    content: [
      { heading: "Market Outlook" },
      "The Chinese government has used the last few years to begin transitioning their economy from an export-led to domestic consumer fueled model. Throughout this period, the logistics sector has been undergoing perhaps the largest transition of all, as it shifts from international-focused infrastructure, technology, and employee training to a domestic-focused market. Speeding this transition is the boom of online ecommerce companies like Alibaba\u2019s Taobao, JD, and Yihaodian.",
      "China\u2019s ecommerce sales equaled 5.66 trillion yuan ($912 billion) for the first half of 2014, a 30.1% increase year-on-year. Of total sales, 1.1 trillion yuan ($176 billion) was in B2C deals, up 33.4% year-on-year. Ecommerce sales in this period accounted for 8.4% of the nation\u2019s overall retail sales.",
      "China\u2019s logistics market has begun to respond in turn. The rapid transition from high volume, low frequency manufacturing based cargo transport to low volume, high frequency consumer good transport has left most state-owned firms behind. Firms like Cosco Container Lines and Sinotrans are struggling to maintain profitability and have recently been forced to close regional offices in the US and issue stock, respectively.",
      "Conversely, more specialized and generally privately owned courier companies have developed to satisfy consumer needs. Companies like EMS, S.F. Express, and Shentong Express have begun conquering the consumer driven market and drawn investment both from within and outside of China. Citic Capital recently purchased a 25% stake in S.F. Express and Carlyle Group has invested in seventeen warehouses that will be rented to companies operating in the ecommerce sector.",
      { heading: "Rise of the Express Courier" },
      "The market is dominated by six major players: EMS (22% market share), S.F. Express (18%), Shentong Express (12%), Yuantong Express (9%), Zhongtong Express (9%), and Huitong Express (9%).",
      "According to the State Post Bureau, the express delivery market in China reported revenues of 89.8 billion yuan ($14.5 billion) in the first half of 2014, representing a 42.5% year-on-year increase. The express delivery sector now constitutes nearly 60% of the nation\u2019s mail sector revenues.",
      { heading: "Barriers to Entry" },
      "Due to government restrictions on foreign involvement in some areas of delivery services, foreign firms\u2019 participation in the express courier market is subject to some barriers. Most noticeable among these restrictions is the ruling against a foreign entity being the majority owner of a transport airplane company, heavily guarded rail and water transport sectors, and a completely restricted post sector. However, these restrictions should not fully extinguish the hopes of a foreign express delivery firm. While the market may appear near impossible to enter via green field investment, joint venture and acquisition both have the potential to offer high returns.",
      { heading: "Merger and Acquisition Rationale" },
      "Although the fastest growing segment of express deliveries is that which is within the same city, the largest segment by total revenue is that which is between cities. Unfortunately, due to Chinese foreign investment restrictions the most efficient methods of intercity transport are off limits to foreign express delivery firms operating in China. Therefore, it seems foreign express transport firms\u2019 green field ambitions are limited to either the localized and highly competitive same city delivery market, or the slower growing international delivery market.",
      "A closer inspection of the domestic market leaders indicates a lack of express delivery management systems, technology, and capital. Only EMS, SF Express, and Yuantong Express fully own cargo aircraft. The other major players have chartered planes, although they risk losing significant market share as the two leaders continue to expand their fleet.",
      "In an attempt to keep the industry responsible to a certain level of customer satisfaction, the State Postal Bureau publishes a monthly listing of complaints filed against express delivery organizations. The speed with which the express delivery sector has developed in China has left it sorely lacking for proper management and customer service. Shentong Express leads in complaints at 28%, followed by Huitong Express at 16%, while S.F. Express and Yuantong Express maintain relatively low complaint rates at around 6%.",
      "All three problems facing the lesser players \u2014 management, technology, and capital \u2014 can be resolved through foreign investment in the form of either a joint venture or acquisition. Foreign companies have been competing in Europe and the US express delivery markets for fifteen or more years. These companies have developed the management structure and warehouse and logistics technology that Chinese firms desire. In return, Chinese firms have local expertise, established distribution channels, brand recognition, and permission to use necessary transport channels for success in the express delivery industry.",
      { heading: "Exit Opportunities" },
      "Foreign firms may be wary of entering a foreign investment sensitive industry during a period of economic transition. However, the current economic situation offers various potential exit opportunities. Recent stock market successes in the Hang Seng, NASDAQ, and New York Stock Exchange have created potentially lucrative IPO markets. Opportunities for a successful exit also exist in the private equity sector as Citic Capital, Oriza Holdings, China Merchant\u2019s Group, and Carlyle Group\u2019s recent investments indicate.",
      { heading: "Conclusion" },
      "In summary, it appears that the current Chinese express delivery market is primed for foreign investment in the form of joint ventures or acquisitions. The primary reason for foreign firms to consider these two forms of market entry instead of green field investment is the strict government control over key aspects of the industry. The key reasons for Chinese firms to consider partnering or being purchased by foreign companies are: foreign companies have considerable expertise in creating effective management structures, foreign firms have access to advanced warehouse and logistics technology that can increase margins, and foreign firms have excess capital that Chinese firms will need as competition increases and market share becomes more concentrated.",
    ],
  },
};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(posts);
}

function getChapterNum(post: BlogPost): number {
  return parseInt(post.chapterLabel.replace("POST ", ""), 10);
}

const chronologicalSlugs: string[] = Object.values(posts)
  .sort((a, b) => getChapterNum(a) - getChapterNum(b))
  .map((p) => p.slug);

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const idx = chronologicalSlugs.indexOf(slug);
  return {
    prev: idx > 0 ? posts[chronologicalSlugs[idx - 1]] : null,
    next:
      idx < chronologicalSlugs.length - 1
        ? posts[chronologicalSlugs[idx + 1]]
        : null,
  };
}

import emoji from "react-easy-emoji";

export const greetings = {
	name: "Aakanksha Jaiswar",
	title: "Hi all, I'm Aakanksha ",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with HTML CSS JavaScript MongoDB React.js, Node.js, Next.js.",
	resumeLink:
		"https://docs.google.com/document/d/1I0DKRKgEGs7K3JxXE77Q7GrWoXnxtN-h/edit?usp=sharing&ouid=118266368304734030679&rtpof=true&sd=true",
};

export const openSource = {
	githubUserName: "aakanksha180102",
};

export const contact = {};

export const socialLinks = {

	instagram: "https://www.instagram.com/toska_wal.dein.sam.keit/",
	twitter: "https://twitter.com/aakanksha180102",
	github: "https://github.com/aakanksha1801",
	linkedin: "https://www.linkedin.com/in/aakanksha-jaiswar-949392201/100/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				// emoji("⚡ Building responsive static websites using Next.js"),
				
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				
			],
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "DELHI TECHNOLOGICAL UNIVERSITY",
		subHeader: "B.Tech in Information Technology",
		duration: "Dec 2020 - Current date",
		desc: "Currently Student in DTU,  Full stack web developer and exploring more in tech and real world. ",
		descBullets: [
			"Active Member of Rotaract Club.",
			" Exploring more in Technology.",
		],
	},
];

export const experience = [
	
	{
		role: "Morgan Stanley Mentee",
		company: "Morgan Stanley",
		companylogo: "/img/icons/common/morganstanley.jpg",
		date: " 5 Jun 2022 – 14 Jun 2022",
		desc: "#CODETOGIVE Hackathon, Built a chatbot using the rasa framework, a tool for custom AI chatbots using Python and natural language understanding (NLU) which is button based chatbot help to give choices and answer questions asked by the user with experienced gained while training the model.",
	},
	{
		role: "Web developmenr Intern",
		company: "ITEX Company",
		companylogo: "/img/icons/common/itex.jpg",
		date: "25 Dec 2021- 25 Mar 2022",
		desc: "Built multiple web apps using React as a front-end framework.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Operation Intern ",
		company: "Campustrail",
		companylogo: "/img/icons/common/campustrail.jpg",
		date: "Sept 2021",
		desc: "Ensure all operations are carried on in an appropriate, cost-effective way Improve operational management systems, processes, and best practices Purchase materials, plan inventory and oversee warehouse efficiency Help the organization’s processes remain legally compliant.Formulate strategic and operational objectives",
	},
];

export const projects = [
	{
		name: "Blog app website",
		desc: " Blog app website, write your own thoughts and express yourself. Catergories according to your interest post with CRUD operations. Post pictures and write your own blogs.",
		github: "https://github.com/aakanksha1801/blog.website",
		link: "",
	},
	
	{
		name: "Textutils",
		desc: "Here you will convert alphabets into Uppercase or lowercase, can remove extra space and copy text. You can also see previews and time taken to read that paragraph.",
		 github: "https://github.com/aakanksha1801/textutils",
		link: "",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/aakanksha1801/portfolio",
		link: "",
	},
];

export const feedbacks = [
	{
		name: "BLOCKCHAIN ",
		feedback:
			"",
	},
	{
		name: "Machine Learning ",
		feedback:
			"",
	},
	{
		name: "Artificial Intelligence ",
		feedback:
			"",
	},
	{
		name: "Cloud Computing",
		feedback:
			"",
	},
];

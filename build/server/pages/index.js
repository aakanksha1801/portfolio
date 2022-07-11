"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(6842);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.jsx




function SEO({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "Aakanksha Jaiswar"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: data.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: data.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: data.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: data.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: data.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: data.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: data.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: data.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: data.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
SEO.prototype = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string.isRequired,
        description: (external_prop_types_default()).string,
        image: (external_prop_types_default()).string,
        url: (external_prop_types_default()).string,
        keywords: external_prop_types_default().arrayOf((external_prop_types_default()).string)
    }).isRequired
};
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: ./pages/index.js



const Navigation = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(311), __webpack_require__.e(952), __webpack_require__.e(910), __webpack_require__.e(664), __webpack_require__.e(703)]).then(__webpack_require__.bind(__webpack_require__, 9703)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(567), __webpack_require__.e(686)]).then(__webpack_require__.bind(__webpack_require__, 9686)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 598).then(__webpack_require__.bind(__webpack_require__, 7660)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 424).then(__webpack_require__.bind(__webpack_require__, 9424)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 351).then(__webpack_require__.bind(__webpack_require__, 5351)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 833).then(__webpack_require__.bind(__webpack_require__, 4833)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 295).then(__webpack_require__.bind(__webpack_require__, 9295)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 754).then(__webpack_require__.bind(__webpack_require__, 7754)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/ZFeedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(311), __webpack_require__.e(910), __webpack_require__.e(675), __webpack_require__.e(567), __webpack_require__.e(546)]).then(__webpack_require__.bind(__webpack_require__, 3546)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/GithubProfileCard"
        ]
    }
});


function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {
                data: {
                    title: "my portfolio",
                    description: "A passionate Full Stack Web Developer .",
                    // image: "",
                    // url: "",
                    keywords: [
                        "Aakanksha ", 
                    ]
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Proficiency, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedbacks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                prof: githubProfileData
            })
        ]
    });
};
Home.prototype = {
    githubProfileData: (external_prop_types_default()).object.isRequired
};
async function getStaticProps(_) {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.js

const greetings = {
    name: "Aakanksha Jaiswar",
    title: "Hi all, I'm Aakanksha ",
    description: "I'm passionate Full Stack web developer having an experience of web applications with HTML CSS JavaScript MongoDB React.js, Node.js, Next.js.",
    resumeLink: "https://docs.google.com/document/d/1I0DKRKgEGs7K3JxXE77Q7GrWoXnxtN-h/edit?usp=sharing&ouid=118266368304734030679&rtpof=true&sd=true"
};
const openSource = {
    githubUserName: "aakanksha180102"
};
const contact = {};
const socialLinks = {
    instagram: "https://www.instagram.com/toska_wal.dein.sam.keit/",
    twitter: "https://twitter.com/aakanksha180102",
    github: "https://github.com/aakanksha1801",
    linkedin: "https://www.linkedin.com/in/aakanksha-jaiswar-949392201/100/"
};
const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            skills: [
                external_react_easy_emoji_default()("\u26A1 Building responsive Single-Page-Apps (SPA) & PWA in React.js"), 
            ],
            softwareSkills: [
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html"
                },
                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css"
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript"
                },
                {
                    skillName: "Reactjs",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs"
                },
                {
                    skillName: "Nextjs",
                    fontAwesomeClassname: "vscode-icons:file-type-light-next"
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "logos:python"
                },
                {
                    skillName: "NPM",
                    fontAwesomeClassname: "logos:npm-icon"
                }, 
            ]
        }, 
    ]
};
const SkillBars = [
    {
        Stack: "Frontend/Design",
        progressPercentage: "90"
    },
    {
        Stack: "Backend",
        progressPercentage: "70"
    },
    {
        Stack: "Programming",
        progressPercentage: "60"
    }, 
];
const educationInfo = [
    {
        schoolName: "DELHI TECHNOLOGICAL UNIVERSITY",
        subHeader: "B.Tech in Information Technology",
        duration: "Dec 2020 - Current date",
        desc: "Currently Student in DTU,  Full stack web developer and exploring more in tech and real world. ",
        descBullets: [
            "Active Member of Rotaract Club.",
            " Exploring more in Technology.", 
        ]
    }, 
];
const experience = [
    {
        role: "Morgan Stanley Mentee",
        company: "Morgan Stanley",
        companylogo: "/img/icons/common/morganstanley.jpg",
        date: " 5 Jun 2022 \u2013 14 Jun 2022",
        desc: "#CODETOGIVE Hackathon, Built a chatbot using the rasa framework, a tool for custom AI chatbots using Python and natural language understanding (NLU) which is button based chatbot help to give choices and answer questions asked by the user with experienced gained while training the model."
    },
    {
        role: "Web developmenr Intern",
        company: "ITEX Company",
        companylogo: "/img/icons/common/itex.jpg",
        date: "25 Dec 2021- 25 Mar 2022",
        desc: "Built multiple web apps using React as a front-end framework."
    },
    {
        role: "Operation Intern ",
        company: "Campustrail",
        companylogo: "/img/icons/common/campustrail.jpg",
        date: "Sept 2021",
        desc: "Ensure all operations are carried on in an appropriate, cost-effective way Improve operational management systems, processes, and best practices Purchase materials, plan inventory and oversee warehouse efficiency Help the organization\u2019s processes remain legally compliant.Formulate strategic and operational objectives"
    }, 
];
const projects = [
    {
        name: "Blog app website",
        desc: " Blog app website, write your own thoughts and express yourself. Catergories according to your interest post with CRUD operations. Post pictures and write your own blogs.",
        github: "https://github.com/aakanksha1801/blog.website",
        link: ""
    },
    {
        name: "Textutils",
        desc: "Here you will convert alphabets into Uppercase or lowercase, can remove extra space and copy text. You can also see previews and time taken to read that paragraph.",
        github: "https://github.com/aakanksha1801/textutils",
        link: ""
    },
    {
        name: "Developer-Portfolio",
        desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/aakanksha1801/portfolio",
        link: ""
    }, 
];
const feedbacks = [
    {
        name: "BLOCKCHAIN ",
        feedback: ""
    },
    {
        name: "Machine Learning ",
        feedback: ""
    },
    {
        name: "Artificial Intelligence ",
        feedback: ""
    },
    {
        name: "Cloud Computing",
        feedback: ""
    }, 
];


/***/ }),

/***/ 5895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 4931:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(9902)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "zQ": () => (/* binding */ getPostBySlug)
/* harmony export */ });
/* unused harmony exports getPostSlugs, getFileContentBySlug */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "posts");
function getPostSlugs() {
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields));
    return posts;
}
// Get Markdown File Content 
function getFileContentBySlug(fileName, postsPath) {
    const postFilePath = join(postsPath, `${fileName}.md`);
    const fileContents = fs.readFileSync(postFilePath, "utf8");
    const { data , content  } = matter(fileContents);
    return {
        data,
        content
    };
}


/***/ }),

/***/ 7778:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5166);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_3__]);
_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const WidgetCategory = ({ catData  })=>{
    const uniqueCategory = removeDuplicates(catData, "cate");
    return /*#__PURE__*/ _jsx("div", {
        className: "axil-single-widget widget widget_categories mb--30",
        children: /*#__PURE__*/ _jsx("ul", {
            children: uniqueCategory.slice(0, 4).map((data)=>/*#__PURE__*/ _jsx("li", {
                    className: "cat-item",
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: `/category/${slugify(data.cate)}`,
                        children: /*#__PURE__*/ _jsxs("a", {
                            className: "inner",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "thumbnail",
                                    children: /*#__PURE__*/ _jsx(Image, {
                                        src: data.cate_img,
                                        alt: data.cate,
                                        height: 50,
                                        width: 50,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "content",
                                    children: /*#__PURE__*/ _jsx("h5", {
                                        className: "title",
                                        children: data.cate
                                    })
                                })
                            ]
                        })
                    })
                }, data.slug))
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WidgetCategory)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9535:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_instagram_instagram_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6489);



const WidgetInstagramPost = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "axil-single-widget widget widget_instagram mb--30",
        children: [
            /*#__PURE__*/ _jsx("h5", {
                className: "widget-title",
                children: "Instagram"
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: "instagram-post-list-wrapper",
                children: InstaData.map((data)=>/*#__PURE__*/ _jsx("li", {
                        className: "instagram-post-list",
                        children: /*#__PURE__*/ _jsx("a", {
                            href: data.url,
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: data.image,
                                height: 105,
                                width: 105,
                                alt: "Instagram Images"
                            })
                        })
                    }, data.id))
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WidgetInstagramPost)));


/***/ }),

/***/ 4478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_SubscribeFormStacked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_forms_SubscribeFormStacked__WEBPACK_IMPORTED_MODULE_1__]);
_components_forms_SubscribeFormStacked__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const WidgetNewsletter = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "axil-single-widget widget widget_newsletter mb--30",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "newsletter-inner text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "title mb--15",
                    children: "Never Miss A Post!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "b2 mb--30",
                    children: [
                        "Sign up for free and be the first to ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " get notified about updates."
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_SubscribeFormStacked__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetNewsletter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const WidgetPostList = ({ postData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "axil-single-widget widget widget_postlist mb--30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "widget-title",
                children: "Popular Posts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "post-medium-block",
                children: postData.slice(0, 3).map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content-block post-medium mb--20",
                        children: [
                            data.featureImg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "post-thumbnail",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/post/${data.slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: data.featureImg,
                                            alt: data.title,
                                            height: 100,
                                            width: 100,
                                            priority: true
                                        })
                                    })
                                })
                            }) : "",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "post-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "title",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: `/post/${data.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: data.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "post-meta",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "post-meta-list",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: data.date
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: data.post_views
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }, data.slug))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetPostList);


/***/ }),

/***/ 8207:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const WidgetSearch = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "axil-single-widget widget widget_search mb--30",
        children: [
            /*#__PURE__*/ _jsx("h5", {
                className: "widget-title",
                children: "Search"
            }),
            /*#__PURE__*/ _jsx("form", {
                action: "#",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "axil-search form-group",
                    children: [
                        /*#__PURE__*/ _jsx("button", {
                            type: "submit",
                            className: "search-button",
                            children: /*#__PURE__*/ _jsx("i", {
                                className: "fal fa-search"
                            })
                        }),
                        /*#__PURE__*/ _jsx("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Search"
                        })
                    ]
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WidgetSearch)));


/***/ }),

/***/ 9478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidebar_WidgetSocialShare)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/social/SocialData.json
const SocialData_namespaceObject = JSON.parse('{"km":{"H":"https://twitter.com/EV_Initiative","q":"fab fa-twitter"},"CR":{"H":"https://www.instagram.com/ev_initiative/","q":"fab fa-instagram"},"PO":{"H":"https://www.tiktok.com/@ev_initiative","q":"fab fa-tiktok"},"Q4":{"H":"https://www.linkedin.com/company/ev-initiative/about/","q":"fab fa-linkedin-in"}}');
;// CONCATENATED MODULE: ./src/common/components/sidebar/WidgetSocialShare.jsx


const WidgetSocialShare = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "axil-single-widget widget widget_social mb--30",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "widget-title",
                children: "Stay In Touch"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "social-icon md-size justify-content-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: SocialData_namespaceObject.CR.H,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: SocialData_namespaceObject.CR.q
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: SocialData_namespaceObject.km.H,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: SocialData_namespaceObject.km.q
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: SocialData_namespaceObject.PO.H,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: SocialData_namespaceObject.PO.q
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: SocialData_namespaceObject.Q4.H,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: SocialData_namespaceObject.Q4.q
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sidebar_WidgetSocialShare = (WidgetSocialShare);


/***/ }),

/***/ 5166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": () => (/* binding */ SortingByDate),
/* harmony export */   "lV": () => (/* binding */ slugify)
/* harmony export */ });
/* unused harmony exports removeDuplicates, HoverActiveClass */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([luxon__WEBPACK_IMPORTED_MODULE_1__]);
luxon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const slugify = function(text) {
    return text.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};
function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    for(var i in originalArray){
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for(i in lookupObject){
        newArray.push(lookupObject[i]);
    }
    return newArray;
}
const SortingByDate = function(posts) {
    return posts.sort((post1, post2)=>{
        const beforeDate = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromFormat(post1.date, "LLL dd yyyy");
        const afterDate = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromFormat(post2.date, "LLL dd yyyy");
        return afterDate - beforeDate;
    });
};
const HoverActiveClass = function(hoverRef) {
    const { 0: refLists , 1: setrefLists  } = useState([]);
    useEffect(()=>{
        const refContainer = hoverRef.current.childNodes;
        setrefLists(refContainer);
    }, []);
    refLists.forEach((f)=>{
        f.addEventListener("mouseenter", function() {
            refLists.forEach((e)=>{
                var div = e.querySelector(".content-block");
                div.classList.add("axil-control");
                div.classList.remove("is-active");
            });
            this.querySelector(".content-block").classList.add("is-active");
        });
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ** Third Party Imports


const SubscribeFormStacked = ()=>{
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Subscribe");
    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        setSubmitting("Subscribing");
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default().sendForm("service_oebog49", "template_hbe2laq", form.current, "9W-xgroL596bRE0WK").then((result)=>{
            console.log(result.text);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Thanks for subscribing! Check your email weekly for EV Initiative updates.", {
                style: {
                    borderRadius: "10px"
                },
                duration: 6000
            });
            setSubmitting("Subscribed!");
        }, (error)=>{
            console.log(error.text);
            console.log("message NOT sent");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Sorry, there was an issue subscribing. Please try again.");
        });
        e.target.reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "newsletter-form position-relative mb-5",
            ref: form,
            onSubmit: sendEmail,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "email",
                    className: "input-newsletter form-control mb-3",
                    placeholder: "Enter your email",
                    name: "email",
                    required: "",
                    autoComplete: "off"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "submit",
                    value: submitting,
                    className: "btn btn-primary w-100 mt-3 mt-lg-0 mt-md-0"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscribeFormStacked);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6489:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"/images/small-images/instagram-md-01.webp","url":"#"},{"id":2,"image":"/images/small-images/instagram-md-02.webp","url":"#"},{"id":3,"image":"/images/small-images/instagram-md-03.webp","url":"#"},{"id":4,"image":"/images/small-images/instagram-md-04.webp","url":"#"},{"id":5,"image":"/images/small-images/instagram-md-05.webp","url":"#"},{"id":6,"image":"/images/small-images/instagram-md-06.webp","url":"#"}]');

/***/ })

};
;
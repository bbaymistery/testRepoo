exports.id = 9595;
exports.ids = [9595];
exports.modules = {

/***/ 4899:
/***/ ((module) => {

// Exports
module.exports = {
	"car_section": "styles_car_section__5VZ8U",
	"car_container": "styles_car_container__LVjVC",
	"header": "styles_header__fynUt",
	"header_title": "styles_header_title__KpUVD",
	"body": "styles_body__4R6n5",
	"body_content": "styles_body_content__OxoLL",
	"content_car_wrap": "styles_content_car_wrap__PBlfi",
	"owl_stage": "styles_owl_stage__oSwyY",
	"car_item": "styles_car_item__00SdO",
	"card_img_div": "styles_card_img_div__aMyTw",
	"card_image_link": "styles_card_image_link__94yag",
	"img": "styles_img__7wZvE",
	"card_body": "styles_card_body__Qu0qh",
	"card_body_title": "styles_card_body_title__5KkWH",
	"card_body_attributes": "styles_card_body_attributes__Joscu",
	"card_atr_ul": "styles_card_atr_ul__DPLBK",
	"card_atr_li": "styles_card_atr_li__By2w2",
	"li_icon": "styles_li_icon__w9J8s",
	"content_nav": "styles_content_nav__1Xo9w",
	"owl_prev": "styles_owl_prev__6AYfX",
	"owl_next": "styles_owl_next__e2VKc",
	"next_icon": "styles_next_icon__U_F_U",
	"content_dots": "styles_content_dots__IHVWB",
	"dot": "styles_dot__24rkH",
	"dotActive": "styles_dotActive__vWcBP"
};


/***/ }),

/***/ 9595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ widgets_CarsSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/widgets/CarsSlider/styles.module.scss
var styles_module = __webpack_require__(4899);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/constants/carss/index.js
const carsItems = [
    {
        carImage: "/images/ourfleet/normal-saloon-v2.png",
        carName: "Saloon",
        passenger: 3,
        suitcase: 3,
        id: 1
    },
    {
        carImage: "/images/ourfleet/normal-8-seaters-v2.png",
        carName: "8 Seater",
        passenger: 8,
        suitcase: 8,
        id: 2
    },
    {
        carImage: "/images/ourfleet/normal-mpv-v2.png",
        carName: "MPV",
        passenger: 5,
        suitcase: 5,
        id: 3
    },
    {
        carImage: "/images/ourfleet/vip-saloon-v2.png",
        carName: "Executive Saloon",
        passenger: 3,
        suitcase: 3,
        id: 4
    },
    {
        carImage: "/images/ourfleet/vip-mpv-v2.png",
        carName: "Executive MPV",
        passenger: 5,
        suitcase: 5,
        id: 5
    },
    {
        carImage: "/images/ourfleet/executive8seater.png",
        carName: "Executive 8 Seater",
        passenger: 8,
        suitcase: 8,
        id: 6
    }
];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/widgets/CarsSlider/CarItem.js






const CarItem = ({ sliderRef  })=>{
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).owl_stage,
        ref: sliderRef,
        children: carsItems.map((car, i)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).car_item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).card_img_div,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (styles_module_default()).card_image_link,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: car.carImage,
                                className: (styles_module_default()).img,
                                fill: true,
                                alt: car.carName,
                                sizes: "(max-width: 768px) 100vw, 50vw"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).card_body,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: `${direction} ${(styles_module_default()).card_body_title}`,
                                children: car.carName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).card_body_attributes,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (styles_module_default()).card_atr_ul,
                                        direction: String(direction === "rtl"),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: (styles_module_default()).card_atr_li,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: `fa-solid fa-suitcase ${(styles_module_default()).li_icon}`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (styles_module_default()).li_desc,
                                                    children: [
                                                        "No of Suitcases ",
                                                        car.suitcase
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (styles_module_default()).card_atr_ul,
                                        direction: String(direction === "rtl"),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: (styles_module_default()).card_atr_li,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: `fa-solid fa-users ${(styles_module_default()).li_icon}`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (styles_module_default()).li_desc,
                                                    children: [
                                                        "No of Passengers ",
                                                        car.passenger
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, car.id);
        })
    });
};
/* harmony default export */ const CarsSlider_CarItem = (CarItem);

;// CONCATENATED MODULE: ./src/components/widgets/CarsSlider/index.js




const itemsCarWrapperRef = /*#__PURE__*/ external_react_default().createRef(null); //in order to click right or left and change lsider
const sliderRef = /*#__PURE__*/ external_react_default().createRef(null); //total all sliders length (width)
const sliderConRef = /*#__PURE__*/ external_react_default().createRef(null);
class CarsSlider extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            isScrolling: false,
            clientX: 0,
            scrollX: 0,
            steps: 2,
            selectedStep: 1,
            visibleItems: sliderConRef?.current?.clientWidth / 400
        };
    }
    componentDidMount() {
        this.getPoint();
        window.addEventListener("resize", ()=>{
            this.getPoint();
        });
    }
    // click to left arrow
    scrollDirection(direction) {
        const el = itemsCarWrapperRef.current;
        let { selectedStep , steps  } = this.state;
        if (direction === "right") {
            selectedStep--;
            if (selectedStep < 1) {
                selectedStep = 1;
            }
        } else {
            selectedStep++;
            if (selectedStep > steps) {
                selectedStep = steps;
            }
        }
        el.scrollTo({
            left: el.scrollLeft + (direction == "right" ? -400 : 400) * this.state.visibleItems,
            behavior: "smooth"
        });
        this.setState({
            selectedStep
        });
    }
    onMouseMove(e) {
        if (itemsCarWrapperRef && itemsCarWrapperRef.current && !itemsCarWrapperRef.current.contains(e.target)) {
            return;
        }
        e.preventDefault();
        const { clientX , scrollX , isScrolling , selectedStep  } = state;
        //changing => when 6 items visible and we have 6 dots
        if (isScrolling) {
            itemsCarWrapperRef.current.scrollLeft = scrollX + e.clientX - clientX;
            let sX = scrollX + e.clientX - clientX;
            let cX = e.clientX;
            this.setState({
                scrollX: sX,
                clientX: cX
            });
        }
    }
    onMouseUp(e) {
        if (itemsCarWrapperRef && itemsCarWrapperRef.current && !itemsCarWrapperRef.current.contains(e.target)) {
            return;
        }
        e.preventDefault();
        this.setState({
            isScrolling: false
        });
    }
    onMouseDown(e) {
        if (itemsCarWrapperRef && itemsCarWrapperRef.current && !itemsCarWrapperRef.current.contains(e.target)) {
            return;
        }
        e.preventDefault();
        // itemsCarWrapperRef.current.style.cursor = "grabbing";
        this.setState({
            isScrolling: true,
            clientX: e.clientX
        });
    }
    getPoint() {
        let silderConWidth;
        if (sliderConRef?.current?.clientWidth) {
            silderConWidth = sliderConRef?.current?.clientWidth;
        }
        let items = 3;
        if (sliderConRef?.current?.clientWidth > 1200) {
            items = Math.floor(silderConWidth / 400);
        } else if (sliderConRef?.current?.clientWidth < 1200) {
            items = Math.floor(silderConWidth / 320); //290+30
        } else if (sliderConRef?.current?.clientWidth < 992) {
            items = Math.ceil(silderConWidth / 350);
        } else if (sliderConRef?.current?.clientWidth < 768) {
            items = Math.floor(silderConWidth / 540);
        }
        let silderWidth;
        if (sliderRef?.current?.clientWidth) {
            silderWidth = sliderRef?.current?.clientWidth;
        }
        let steps = Math.floor(silderWidth / (400 * items)) + 1;
        if (steps === 4) {
            steps = 3;
        }
        if (steps > 6) {
            steps = 6;
        }
        this.setState({
            visibleItems: items,
            steps: steps
        });
    }
    changeSlideWithNavigationButton(i) {
        let left = this.state.visibleItems * 400 * i;
        //responsivness whenever card image width and container change
        if (sliderConRef?.current?.clientWidth < 960) {
            left = this.state.visibleItems * 360 * i;
        }
        if (sliderConRef?.current?.clientWidth < 720) {
            left = this.state.visibleItems * 540 * i;
        }
        if (sliderConRef?.current?.clientWidth < 540) {
            left = this.state.visibleItems * 360 * i;
        }
        if (sliderConRef?.current?.clientWidth < 500) {
            left = this.state.visibleItems * 425 * i;
        }
        if (sliderConRef?.current?.clientWidth < 415) {
            left = this.state.visibleItems * 430 * i;
        }
        if (sliderConRef?.current?.clientWidth < 391) {
            left = this.state.visibleItems * 370 * i;
        }
        if (sliderConRef?.current?.clientWidth < 361) {
            left = this.state.visibleItems * 360 * i;
        }
        document.getElementById("slider").scrollTo({
            left: left,
            behavior: "smooth"
        });
        //set active blue dot
        this.setState({
            selectedStep: i + 1
        });
    }
    componentWillUnmount() {
        this.getPoint();
        try {
            window.removeEventListener("mousedown");
            window.removeEventListener("mouseup");
            window.removeEventListener("mousemove");
            window.removeEventListener("resize", getPoint);
        } catch (error) {}
    }
    render() {
        const { bggray =false , noborder =false  } = this.props;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).car_section,
            bggray: String(bggray),
            style: {
                border: `${noborder ? "none" : "1px solid transparent"}`
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).car_container,
                ref: sliderConRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).header,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (styles_module_default()).header_title,
                            children: "Our Fleet "
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).body,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).body_content,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).content_car_wrap,
                                    ref: itemsCarWrapperRef,
                                    id: "slider",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CarsSlider_CarItem, {
                                        sliderRef: sliderRef
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).content_nav,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).owl_prev,
                                            onClick: (e)=>this.scrollDirection("right"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `fa-solid fa-angle-left ${(styles_module_default()).prev_icon}`
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).owl_next,
                                            onClick: (e)=>this.scrollDirection("left"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `fa-solid fa-angle-right ${(styles_module_default()).next_icon}`
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).content_dots,
                                    children: this.state.steps && Array.from(new Array(this.state.steps)).map((x, i)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: ()=>this.changeSlideWithNavigationButton(i),
                                            className: `${(styles_module_default()).dot} ${this.state.selectedStep === i + 1 ? (styles_module_default()).dotActive : ""}`
                                        }, i);
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const widgets_CarsSlider = (CarsSlider);
CarsSlider.defaultProps = {
    bggray: false
};


/***/ })

};
;
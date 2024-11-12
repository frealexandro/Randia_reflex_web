/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { BarChart2Icon as LucideBarChart2Icon, BrainCircuitIcon as LucideBrainCircuitIcon, CheckIcon as LucideCheckIcon, CircleCheckBigIcon as LucideCircleCheckBigIcon, FileStackIcon as LucideFileStackIcon, InstagramIcon as LucideInstagramIcon, LayersIcon as LucideLayersIcon, LinkedinIcon as LucideLinkedinIcon, MenuIcon as LucideMenuIcon, PackageSearchIcon as LucidePackageSearchIcon, RefreshCcwIcon as LucideRefreshCcwIcon, SlidersVerticalIcon as LucideSlidersVerticalIcon, TrendingUpIcon as LucideTrendingUpIcon, WifiOffIcon as LucideWifiOffIcon, ZapIcon as LucideZapIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import NextHead from "next/head"



export function Button_d24465576905e2080c4aa9c6d821e541 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_b16c0daa6f484fc2e1cff644cd23952b = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["fontWeight"] : "600", ["color"] : "#1F2937", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem" })} onClick={on_click_b16c0daa6f484fc2e1cff644cd23952b}>
  {"RandiA"}
</button>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {"Ooops...Unknown Reflex error has occured:"}
</p>
  <p css={({ ["color"] : "red" })}>
  {error.message}
</p>
  <p>
  {"Please contact the support."}
</p>
</div>
                    );
                }
            

export function Button_d47055685dc89a1d5548c99de594fba0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_b16c0daa6f484fc2e1cff644cd23952b = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["cursor"] : "pointer", ["background"] : "none", ["border"] : "none", ["padding"] : "0", ["marginRight"] : "0.75rem" })} onClick={on_click_b16c0daa6f484fc2e1cff644cd23952b}>
  <img alt={"RandIA-negro-logo.png"} css={({ ["height"] : "2.5rem", ["marginRight"] : "0.75rem", ["width"] : "2.5rem" })} src={"/RandIA-negro-logo.png"}/>
</button>
  )
}

export function Button_beee2e74313d49115a13b08411f9ecd5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_e481b59fd6e5b5245c521d39ce5e5965 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "https://app.suuper.co/auth/sign-in", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["fontWeight"] : "500", ["&:hover"] : ({ ["color"] : "#111827" }), ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["color"] : "#374151", ["fontSize"] : "1rem", ["lineHeight"] : "1.25rem" })} onClick={on_click_e481b59fd6e5b5245c521d39ce5e5965}>
  {"Login"}
</button>
  )
}

export function Button_488dcbcb82bc8734026d4516f1eeb521 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_83cedf79e2a89051bff5e93fd463e7cd = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.rand_ia___states___states____page_state.toggle_mobile_menu", ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["ariaControls"] : "mobile-menu", ["ariaExpanded"] : "false", ["&:focus"] : ({ ["outline-style"] : "none", ["box-shadow"] : "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)", ["--ring-color"] : "#6366F1", ["--tw-ring-inset"] : "inset" }), ["&:hover"] : ({ ["background-color"] : "#F3F4F6", ["color"] : "#6B7280" }), ["display"] : "inline-flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "0.5rem", ["borderRadius"] : "0.375rem", ["color"] : "#9CA3AF" })} onClick={on_click_83cedf79e2a89051bff5e93fd463e7cd} type={"button"}>
  <RadixThemesText as={"span"} css={({ ["position"] : "absolute", ["width"] : "1px", ["height"] : "1px", ["padding"] : "0", ["margin"] : "-1px", ["overflow"] : "hidden", ["clip"] : "rect(0, 0, 0, 0)", ["whiteSpace"] : "nowrap", ["borderWidth"] : "0" })}>
  {"Open main menu"}
</RadixThemesText>
  <LucideMenuIcon css={({ ["alt"] : "Menu Icon", ["display"] : "block", ["height"] : "1.5rem", ["width"] : "1.5rem", ["color"] : "var(--current-color)" })}/>
</button>
  )
}

export function Fragment_e521b13e556da291bcec5187a783ea81 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((connectErrors.length > 0)) ? (
  <Fragment>
  <LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_15fc25beb105b36b02f7a417bc97fed3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_93cb22d2ee885109226b6204203f262b = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/products", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#FFBE76", ["fontWeight"] : "500", ["&:hover"] : ({ ["background-color"] : "#1D4ED8" }), ["marginLeft"] : "1rem", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["borderRadius"] : "0.375rem", ["fontSize"] : "0.875rem", ["lineHeight"] : "1.25rem", ["color"] : "#ffffff" })} onClick={on_click_93cb22d2ee885109226b6204203f262b}>
  {"AI Products"}
</button>
  )
}

export function Fragment_930688acaa7cee2ac5be14f136f31798 () {
  const reflex___state____state__rand_ia___states___states____page_state = useContext(StateContexts.reflex___state____state__rand_ia___states___states____page_state)
  const ref_mobile_menu = useRef(null); refs["ref_mobile_menu"] = ref_mobile_menu;



  return (
    <Fragment>
  {isTrue(reflex___state____state__rand_ia___states___states____page_state.is_mobile_menu_open) ? (
  <Fragment>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["display"] : "none" }) })} id={"mobile-menu"} ref={ref_mobile_menu}>
  <RadixThemesBox css={({ ["display"] : "flex", ["flexDirection"] : "column", ["paddingBottom"] : "0.75rem", ["paddingTop"] : "0.5rem", ["gap"] : "0.25rem" })}>
  <a css={({ ["display"] : "block", ["fontWeight"] : "500", ["&:hover"] : ({ ["background-color"] : "#F9FAFB", ["color"] : "#111827" }), ["paddingLeft"] : "0.75rem", ["paddingRight"] : "0.75rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["fontSize"] : "1rem", ["lineHeight"] : "1.5rem", ["color"] : "#374151" })} href={"/products"}>
  {"Productos"}
</a>
  <a css={({ ["display"] : "block", ["fontWeight"] : "500", ["&:hover"] : ({ ["background-color"] : "#F9FAFB", ["color"] : "#111827" }), ["paddingLeft"] : "0.75rem", ["paddingRight"] : "0.75rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["fontSize"] : "1rem", ["lineHeight"] : "1.5rem", ["color"] : "#374151" })} href={"https://app.suuper.co/auth/sign-in"}>
  {"Iniciar Sesi\u00f3n"}
</a>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_d692b9f0f4362390575f6cd7049d893d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_93cb22d2ee885109226b6204203f262b = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/products", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#ffffff", ["transitionDuration"] : "300ms", ["fontWeight"] : "600", ["&:hover"] : ({ ["background-color"] : "#1D4ED8", ["color"] : "#ffffff" }), ["paddingLeft"] : "2rem", ["paddingRight"] : "2rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem", ["borderRadius"] : "9999px", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", ["color"] : "#FFBE76", ["transitionProperty"] : "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform", ["transitionTimingFunction"] : "cubic-bezier(0.4, 0, 0.2, 1)" })} onClick={on_click_93cb22d2ee885109226b6204203f262b}>
  {"Find AI Products"}
</button>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Button_ae05e4fff6ab9e703ed50cdf8a935252 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_93cb22d2ee885109226b6204203f262b = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/products", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#FFBE76", ["transitionDuration"] : "300ms", ["fontWeight"] : "600", ["&:hover"] : ({ ["background-color"] : "#1D4ED8", ["color"] : "#ffffff" }), ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem", ["borderRadius"] : "9999px", ["color"] : "#ffffff", ["textAlign"] : "center", ["transitionProperty"] : "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform", ["transitionTimingFunction"] : "cubic-bezier(0.4, 0, 0.2, 1)" })} onClick={on_click_93cb22d2ee885109226b6204203f262b}>
  {"Find AI Products"}
</button>
  )
}

export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
  )
}

export function Button_2601d34f1551c70317e0fae40b111b0a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_93cb22d2ee885109226b6204203f262b = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/products", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#ffffff", ["transitionDuration"] : "300ms", ["fontWeight"] : "600", ["&:hover"] : ({ ["background-color"] : "#1D4ED8", ["color"] : "#ffffff" }), ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem", ["borderRadius"] : "9999px", ["color"] : "#FFBE76", ["textAlign"] : "center", ["transitionProperty"] : "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform", ["transitionTimingFunction"] : "cubic-bezier(0.4, 0, 0.2, 1)" })} onClick={on_click_93cb22d2ee885109226b6204203f262b}>
  {"Find AI Products"}
</button>
  )
}

export function Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export default function Component() {
  const ref_hero = useRef(null); refs["ref_hero"] = ref_hero;
  const ref_pricing = useRef(null); refs["ref_pricing"] = ref_pricing;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_24a2e81d0c5d3cb5b5f786fdef44e514/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Fragment>
  <link href={"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"} rel={"stylesheet"}/>
  <link href={"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"} rel={"stylesheet"}/>
  <style suppressHydrationWarning>
  {"\n        @font-face {\n            font-family: 'LucideIcons';\n            src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');\n        }\n    "}
</style>
  <RadixThemesBox className={"font-['Inter']"} css={({ ["backgroundColor"] : "#F3F4F6" })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <RadixThemesBox css={({ ["maxWidth"] : "80rem", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["@media screen and (min-width: 0px)"] : ({ ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem" }), ["@media screen and (min-width: 640px)"] : ({ ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem" }), ["@media screen and (min-width: 1024px)"] : ({ ["paddingLeft"] : "2rem", ["paddingRight"] : "2rem" }) })}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["height"] : "4rem", ["justifyContent"] : "space-between" })}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center" })}>
  <Button_d47055685dc89a1d5548c99de594fba0/>
  <Button_d24465576905e2080c4aa9c6d821e541/>
</RadixThemesFlex>
  <RadixThemesBox css={({ ["@media screen and (min-width: 0px)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 640px)"] : ({ ["display"] : "flex", ["alignItems"] : "center", ["marginLeft"] : "1.5rem" }) })}>
  <Button_beee2e74313d49115a13b08411f9ecd5/>
  <Button_15fc25beb105b36b02f7a417bc97fed3/>
</RadixThemesBox>
  <RadixThemesFlex css={({ ["@media screen and (min-width: 0px)"] : ({ ["display"] : "flex" }), ["@media screen and (min-width: 640px)"] : ({ ["display"] : "none" }), ["alignItems"] : "center" })}>
  <Button_488dcbcb82bc8734026d4516f1eeb521/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <Fragment_930688acaa7cee2ac5be14f136f31798/>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#FFBE76", ["paddingTop"] : "5rem", ["paddingBottom"] : "5rem", ["color"] : "#ffffff" })} id={"hero"} ref={ref_hero}>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem", ["textAlign"] : "center" })}>
  <RadixThemesHeading as={"h1"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1rem", ["fontSize"] : "2.25rem", ["lineHeight"] : "2.5rem" })}>
  {"THE BIGGEST AI MARKETPLACE IN THE WORLD"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "2rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem" })}>
  {"Stop looking for different solutions for your artificial intelligence problems, at RandiA you will find everything you need for your company."}
</RadixThemesText>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "2rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem" })}>
  {" High Quality | Infinite Solutions | Innovation | Artificial intelligence "}
</RadixThemesText>
  <Button_d692b9f0f4362390575f6cd7049d893d/>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["paddingTop"] : "4rem", ["paddingBottom"] : "4rem" })}>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem" })}>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "2rem", ["lineHeight"] : "2.25rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"You'll Love The Artificial Intelligence Products In Our Marketplace!"}
</RadixThemesHeading>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "1rem", ["lineHeight"] : "1rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"All our products have a free credit trial period, so you can try them before subscribing."}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["gap"] : "2rem", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(3, minmax(0, 1fr))" }) })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F9FAFB", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <LucidePackageSearchIcon css={({ ["alt"] : "Data Visualization", ["height"] : "3rem", ["marginBottom"] : "1rem", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Select Your Product"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Choose your artificial intelligence product that best suits your needs. It won't take you more than 2 minutes! If you don't know which one to choose, we will advise you!!"}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F9FAFB", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <LucideBrainCircuitIcon css={({ ["alt"] : "Predictive Analytics", ["height"] : "3rem", ["marginBottom"] : "1rem", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Pay For Your Product"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Pay for your artificial intelligence product securely and quickly, with different payment methods, if you have any doubts during the payment process, do not hesitate to contact us!!"}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F9FAFB", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <LucideRefreshCcwIcon css={({ ["alt"] : "Data Integration", ["height"] : "3rem", ["marginBottom"] : "1rem", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Renew Your Product"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Renew your artificial intelligence product when you need it, if you have doubts during the renewal process or any inconvenience, do not hesitate to contact us!!"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F3F4F6", ["paddingTop"] : "4rem", ["paddingBottom"] : "4rem" })}>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem" })}>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "2rem", ["lineHeight"] : "2.25rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"Why Choose Us?"}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["gap"] : "2rem", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(2, minmax(0, 1fr))" }) })}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "flex-start" })}>
  <LucideCircleCheckBigIcon css={({ ["alt"] : "circle_check_big", ["height"] : "1.5rem", ["marginRight"] : "1rem", ["color"] : "#FFBE76", ["width"] : "1.5rem" })}/>
  <RadixThemesBox>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Quality Guaranteed"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"solve real problems with artificial intelligence and solve micro-problems with the best possible quality."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "flex-start" })}>
  <LucideZapIcon css={({ ["alt"] : "zap", ["height"] : "1.5rem", ["marginRight"] : "1rem", ["color"] : "#FFBE76", ["width"] : "1.5rem" })}/>
  <RadixThemesBox>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Low Costs"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Our costs are the lowest in the market, and you can acquire credits to try our products before subscribing."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "flex-start" })}>
  <LucideFileStackIcon css={({ ["alt"] : "file-stack", ["height"] : "1.5rem", ["marginRight"] : "1rem", ["color"] : "#FFBE76", ["width"] : "1.5rem" })}/>
  <RadixThemesBox>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Always Updated"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Our products are always updated, so you will always have the latest version of the product you have acquired."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "flex-start" })}>
  <LucideSlidersVerticalIcon css={({ ["alt"] : "sliders_vertical", ["height"] : "1.5rem", ["marginRight"] : "1rem", ["color"] : "#FFBE76", ["width"] : "1.5rem" })}/>
  <RadixThemesBox>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Easy to Use"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Our products are designed to be easy to use, so you can start using them without any problems."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["paddingTop"] : "4rem", ["paddingBottom"] : "4rem" })} id={"pricing"} ref={ref_pricing}>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem" })}>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "2rem", ["lineHeight"] : "2.25rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"Comming Soon"}
</RadixThemesHeading>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "1rem", ["lineHeight"] : "1rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"Our costs are the lowest in the market, and you can acquire credits to try our products before subscribing."}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["gap"] : "2rem", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(3, minmax(0, 1fr))" }) })}>
  <RadixThemesFlex css={({ ["backgroundColor"] : "#F9FAFB", ["display"] : "flex", ["flexDirection"] : "column", ["padding"] : "2rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.5rem", ["lineHeight"] : "2rem", ["color"] : "#1F2937" })}>
  {"Basic"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1.5rem", ["fontSize"] : "2.25rem", ["lineHeight"] : "2.5rem", ["color"] : "black" })}>
  {"$50"}
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "400", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem" })}>
  {"/month"}
</RadixThemesText>
</RadixThemesText>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "none", ["flexGrow"] : "1", ["marginBottom"] : "2rem" })}>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"2000 credits per month"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"1 user"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"use your credits at any time"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"basic products"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"support 24/7"}
</RadixThemesText>
</li>
</ul>
  <Button_ae05e4fff6ab9e703ed50cdf8a935252/>
</RadixThemesFlex>
  <RadixThemesFlex className={"transform"} css={({ ["backgroundColor"] : "#FFBE76", ["display"] : "flex", ["flexDirection"] : "column", ["padding"] : "2rem", ["borderRadius"] : "0.5rem", ["transform"] : "scale(1.05)", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["color"] : "#ffffff" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1px", ["fontSize"] : "1rem", ["lineHeight"] : "1rem", ["color"] : "#1F2937" })}>
  {"\u00a1Most Popular!"}
</RadixThemesHeading>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.5rem", ["lineHeight"] : "2rem", ["color"] : "#1F2937" })}>
  {"Pro"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1.5rem", ["fontSize"] : "2.25rem", ["lineHeight"] : "2.5rem", ["color"] : "black" })}>
  {"$100"}
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "400", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem" })}>
  {"/month"}
</RadixThemesText>
</RadixThemesText>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "none", ["flexGrow"] : "1", ["marginBottom"] : "2rem" })}>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#6EE7B7", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"7000 credits per month"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#6EE7B7", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"4 users"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#6EE7B7", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"use your credits at any time"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#6EE7B7", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"exclusive products"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#6EE7B7", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"support 24/7"}
</RadixThemesText>
</li>
</ul>
  <Button_2601d34f1551c70317e0fae40b111b0a/>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["backgroundColor"] : "#F9FAFB", ["display"] : "flex", ["flexDirection"] : "column", ["padding"] : "2rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.5rem", ["lineHeight"] : "2rem", ["color"] : "#1F2937" })}>
  {"Enterprise"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1.5rem", ["fontSize"] : "2.25rem", ["lineHeight"] : "2.5rem", ["color"] : "black" })}>
  {"$150"}
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "400", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem" })}>
  {"/month"}
</RadixThemesText>
</RadixThemesText>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "none", ["flexGrow"] : "1", ["marginBottom"] : "2rem" })}>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"10000 credits per month"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"10 users"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"use your credits at any time"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"exclusive products"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"support 24/7"}
</RadixThemesText>
</li>
  <li css={({ ["display"] : "flex", ["alignItems"] : "center", ["marginBottom"] : "0.75rem", ["color"] : "black" })}>
  <LucideCheckIcon css={({ ["alt"] : "Checkmark", ["height"] : "1.25rem", ["marginRight"] : "0.5rem", ["color"] : "#10B981", ["width"] : "1.25rem" })}/>
  <RadixThemesText as={"span"}>
  {"API access"}
</RadixThemesText>
</li>
</ul>
  <Button_ae05e4fff6ab9e703ed50cdf8a935252/>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["paddingTop"] : "4rem", ["paddingBottom"] : "4rem" })}>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1.5rem", ["paddingRight"] : "1.5rem" })}>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "2rem", ["lineHeight"] : "2.25rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"Your AI Marketplace"}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["gap"] : "2rem", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(3, minmax(0, 1fr))" }) })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F9FAFB", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <LucideBarChart2Icon css={({ ["alt"] : "Data Visualization", ["height"] : "3rem", ["marginBottom"] : "1rem", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Save time"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Our marketplace allows you to find the AI products you need in one place, without having to search on different platforms."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F9FAFB", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <LucideTrendingUpIcon css={({ ["alt"] : "Predictive Analytics", ["height"] : "3rem", ["marginBottom"] : "1rem", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Find what you're looking for"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Find high-quality artificial intelligence products with endless solutions, innovation, and AI technology."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#F9FAFB", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <LucideLayersIcon css={({ ["alt"] : "Data Integration", ["height"] : "3rem", ["marginBottom"] : "1rem", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Experiment with the latest AI technology"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Use state-of-the-art artificial intelligence solutions to improve your company's efficiency and productivity."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#1F2937", ["paddingTop"] : "2rem", ["paddingBottom"] : "2rem", ["color"] : "#ffffff" })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#1F2937", ["paddingTop"] : "2.5rem", ["paddingBottom"] : "2.5rem", ["color"] : "#ffffff" })}>
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem" })}>
  <RadixThemesBox css={({ ["gap"] : "2px", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 640px)"] : ({ ["gridTemplateColumns"] : "repeat(2, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(4, minmax(0, 1fr))" }) })}>
  <RadixThemesBox css={({ ["textAlign"] : "center" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem" })}>
  {"RandiA"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#9CA3AF" })}>
  {"Find the best AI solutions for your business with RandiA, the world's largest AI marketplace."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["textAlign"] : "center" })}>
  <RadixThemesHeading as={"h4"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem" })}>
  {"Quick Links"}
</RadixThemesHeading>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "none", ["gap"] : "0.5rem", ["display"] : "flex", ["flexDirection"] : "column" })}>
  <li>
  <a css={({ ["&:hover"] : ({ ["color"] : "#93C5FD" }) })} href={"/products"}>
  {"Products"}
</a>
</li>
</ul>
</RadixThemesBox>
  <RadixThemesBox css={({ ["textAlign"] : "center" })}>
  <RadixThemesHeading as={"h4"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem" })}>
  {"Cont\u00e1ct Us"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "0.5rem" })}>
  {"Call Us: +57 3058195931"}
</RadixThemesText>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "0.5rem" })}>
  {"Mail: randia.team@randia.io "}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["textAlign"] : "center" })}>
  <RadixThemesHeading as={"h4"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem" })}>
  {"Follow Us"}
</RadixThemesHeading>
  <RadixThemesFlex css={({ ["display"] : "flex", ["justifyContent"] : "center", ["columnGap"] : "1rem" })}>
  <a css={({ ["&:hover"] : ({ ["color"] : "#D1D5DB" }) })} href={"https://www.instagram.com/soy_randia?igsh=cW15MHU1dTlhcHQ4"}>
  <LucideInstagramIcon css={({ ["alt"] : "Instagram", ["height"] : "1.5rem", ["width"] : "1.5rem", ["color"] : "var(--current-color)" })}/>
</a>
  <a css={({ ["&:hover"] : ({ ["color"] : "#D1D5DB" }) })} href={"https://www.linkedin.com/company/105248815/admin/page-posts/published/"}>
  <LucideLinkedinIcon css={({ ["alt"] : "LinkedIn", ["height"] : "1.5rem", ["width"] : "1.5rem", ["color"] : "var(--current-color)" })}/>
</a>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["borderColor"] : "#374151", ["borderTopWidth"] : "1px", ["marginTop"] : "2rem", ["paddingTop"] : "2rem", ["textAlign"] : "center" })}>
  <RadixThemesText as={"p"} css={({ ["color"] : "#9CA3AF", ["fontSize"] : "0.875rem", ["lineHeight"] : "1.25rem" })}>
  {"\u00a9 2023 RandIA. All rights reserved."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
  <NextHead>
  <title>
  {"RandiA | THE BIGGEST AI MARKETPLACE"}
</title>
  <meta content={"THE BIGGEST AI MARKETPLACE"} name={"description"}/>
  <meta content={"https://randia.reflex.run/randia_preview.png"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

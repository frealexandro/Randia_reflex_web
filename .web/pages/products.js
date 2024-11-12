/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { CheckIcon as LucideCheckIcon, CircleCheckBigIcon as LucideCircleCheckBigIcon, FileStackIcon as LucideFileStackIcon, InstagramIcon as LucideInstagramIcon, LinkedinIcon as LucideLinkedinIcon, MenuIcon as LucideMenuIcon, UsersIcon as LucideUsersIcon, WifiOffIcon as LucideWifiOffIcon, ZapIcon as LucideZapIcon } from "lucide-react"
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

export function Button_f6e11463152d926ab0fe680d9543bf37 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9542bb2a837864ef6e090b14fe9584a4 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "https://sentiment-analyzer-pro-randia.replit.app/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#FFBE76", ["fontWeight"] : "500", ["&:hover"] : ({ ["background-color"] : "#1D4ED8" }), ["marginLeft"] : "1rem", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["borderRadius"] : "0.375rem", ["fontSize"] : "0.875rem", ["lineHeight"] : "1.25rem", ["color"] : "#ffffff", ["border"] : "1.5px solid #1D4ED8" })} onClick={on_click_9542bb2a837864ef6e090b14fe9584a4}>
  {"Try it now"}
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


export function Button_50131a9170416129937a698a366c70a8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3e3681627fc7f61cf819f37db39ccac1 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "https://podcast-insight-ai.replit.app/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#FFBE76", ["fontWeight"] : "500", ["&:hover"] : ({ ["background-color"] : "#1D4ED8" }), ["marginLeft"] : "1rem", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["borderRadius"] : "0.375rem", ["fontSize"] : "0.875rem", ["lineHeight"] : "1.25rem", ["color"] : "#ffffff", ["border"] : "1.5px solid #1D4ED8" })} onClick={on_click_3e3681627fc7f61cf819f37db39ccac1}>
  {"Try it now"}
</button>
  )
}

export function Button_b95222b14392f4ca40d4a893719db6ef () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_c3815097f44eb1a9126655a180f6a5f5 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "https://seo-content-optimizer.replit.app/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <button css={({ ["backgroundColor"] : "#FFBE76", ["fontWeight"] : "500", ["&:hover"] : ({ ["background-color"] : "#1D4ED8" }), ["marginLeft"] : "1rem", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "0.5rem", ["paddingBottom"] : "0.5rem", ["borderRadius"] : "0.375rem", ["fontSize"] : "0.875rem", ["lineHeight"] : "1.25rem", ["color"] : "#ffffff", ["border"] : "1.5px solid #1D4ED8" })} onClick={on_click_c3815097f44eb1a9126655a180f6a5f5}>
  {"Try it now"}
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

export default function Component() {
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
  <RadixThemesBox css={({ ["backgroundColor"] : "#F3F4F6", ["fontFamily"] : "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ["--default-font-family"] : "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" })}>
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
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "2rem", ["paddingBottom"] : "2rem" })}>
  <RadixThemesBox css={({ ["marginBottom"] : "3rem" })}>
  <RadixThemesHeading as={"h1"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "2rem", ["fontSize"] : "2.25rem", ["lineHeight"] : "2.5rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"A Whole Marketplace Of Products To Explore"}
</RadixThemesHeading>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "3rem", ["fontSize"] : "1rem", ["lineHeight"] : "1rem", ["textAlign"] : "center", ["color"] : "#1F2937" })}>
  {"All our products have a free credit trial period, so you can try them before subscribing."}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["gap"] : "1.5rem", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(3, minmax(0, 1fr))" }) })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["overflow"] : "hidden", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["&:hover"] : ({ ["background-color"] : "#FFBE76" }) })}>
  <RadixThemesBox css={({ ["position"] : "relative" })}>
  <img alt={"Data Analyzer"} css={({ ["height"] : "12rem", ["objectFit"] : "cover", ["width"] : "100%" })} src={"/muestra_2_analizador_textos.png"}/>
  <RadixThemesBox css={({ ["position"] : "absolute", ["backgroundColor"] : "#FFBE76", ["paddingLeft"] : "0.75rem", ["paddingRight"] : "0.75rem", ["paddingTop"] : "0.25rem", ["paddingBottom"] : "0.25rem", ["right"] : "1rem", ["borderRadius"] : "9999px", ["top"] : "1rem" })}>
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "700", ["color"] : "black" })}>
  {"Free"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "1rem" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"\ud83d\udcca Data Analyzer"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"This tool allows you to analyze text data from various Excel files. You can classify text into custom categories, such as emotions, feelings, or any other tags you define."}
</RadixThemesText>
  <a className={"text-[black]"} css={({ ["fontWeight"] : "600" })}>
  {"Features"}
</a>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Conect and analyze your files automatically, automating the process without the need for manual intervention."}
</RadixThemesText>
  <Button_f6e11463152d926ab0fe680d9543bf37/>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["overflow"] : "hidden", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["&:hover"] : ({ ["background-color"] : "#FFBE76" }) })}>
  <RadixThemesBox css={({ ["position"] : "relative" })}>
  <img alt={"SEO Analysis & Optimization"} css={({ ["height"] : "12rem", ["objectFit"] : "cover", ["width"] : "100%" })} src={"/muestra_2_seo_optimizer.png"}/>
  <RadixThemesBox css={({ ["position"] : "absolute", ["backgroundColor"] : "#FFBE76", ["paddingLeft"] : "0.75rem", ["paddingRight"] : "0.75rem", ["paddingTop"] : "0.25rem", ["paddingBottom"] : "0.25rem", ["right"] : "1rem", ["borderRadius"] : "9999px", ["top"] : "1rem" })}>
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "700", ["color"] : "black" })}>
  {"Free"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "1rem" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"\ud83c\udf10 SEO Analysis & Optimization"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Advanced SEO analysis with AI: optimize content, enhance performance metrics, and efficiently process multiple URLs or entire websites."}
</RadixThemesText>
  <a className={"text-[black]"} css={({ ["fontWeight"] : "600" })}>
  {"Features"}
</a>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Professional SEO analysis: AI-powered suggestions, content optimization, performance metrics, and bulk URL processing."}
</RadixThemesText>
  <Button_b95222b14392f4ca40d4a893719db6ef/>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["overflow"] : "hidden", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["&:hover"] : ({ ["background-color"] : "#FFBE76" }) })}>
  <RadixThemesBox css={({ ["position"] : "relative" })}>
  <img alt={"Search for Technical Documentation by AI"} css={({ ["height"] : "12rem", ["objectFit"] : "cover", ["width"] : "100%" })} src={"/muestra_2_podcast.png"}/>
  <RadixThemesBox css={({ ["position"] : "absolute", ["backgroundColor"] : "#FFBE76", ["paddingLeft"] : "0.75rem", ["paddingRight"] : "0.75rem", ["paddingTop"] : "0.25rem", ["paddingBottom"] : "0.25rem", ["right"] : "1rem", ["borderRadius"] : "9999px", ["top"] : "1rem" })}>
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "700", ["color"] : "black" })}>
  {"Free"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "1rem" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"\ud83c\udfa7 Podcast Insights AI"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Advanced AI-driven podcast analysis: transcribe, extract key insights, and analyze speaker data from any Spotify podcast."}
</RadixThemesText>
  <a className={"text-[black]"} css={({ ["fontWeight"] : "600" })}>
  {"Features"}
</a>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Professional podcast analysis: AI-powered transcription, speaker identification, topic extraction, and full episode breakdown."}
</RadixThemesText>
  <Button_50131a9170416129937a698a366c70a8/>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["overflow"] : "hidden", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["&:hover"] : ({ ["background-color"] : "#FFBE76" }) })}>
  <RadixThemesBox css={({ ["position"] : "relative" })}>
  <img alt={"AI Advanced Customer Service Chatbot"} css={({ ["height"] : "12rem", ["objectFit"] : "cover", ["width"] : "100%" })} src={"/muestra_2_construction.png"}/>
  <RadixThemesBox css={({ ["position"] : "absolute", ["backgroundColor"] : "#FFBE76", ["paddingLeft"] : "0.75rem", ["paddingRight"] : "0.75rem", ["paddingTop"] : "0.25rem", ["paddingBottom"] : "0.25rem", ["right"] : "1rem", ["borderRadius"] : "9999px", ["top"] : "1rem" })}>
  <RadixThemesText as={"span"} css={({ ["fontWeight"] : "700", ["color"] : "black" })}>
  {"Free"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "1rem" })}>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"\ud83e\udd16 AI Advanced Customer Service Chatbot"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Chatbot specialized in answering frequently asked questions using AI, improving efficiency in response times."}
</RadixThemesText>
  <a className={"text-[black]"} css={({ ["fontWeight"] : "600" })}>
  {"Features"}
</a>
  <RadixThemesText as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "#4B5563" })}>
  {"Chatbot specialized in answering frequently asked questions using AI, improving efficiency in response times."}
</RadixThemesText>
  <Button_b95222b14392f4ca40d4a893719db6ef/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["gap"] : "1.5rem", ["display"] : "grid", ["marginBottom"] : "3rem" })}>
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
  <RadixThemesBox>
  <RadixThemesHeading as={"h2"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1.5rem", ["fontSize"] : "1.5rem", ["lineHeight"] : "2rem", ["color"] : "#1F2937" })}>
  {"\u00bfPor qu\u00e9 RandIA?"}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["gap"] : "1.5rem", ["display"] : "grid", ["@media screen and (min-width: 0px)"] : ({ ["gridTemplateColumns"] : "repeat(1, minmax(0, 1fr))" }), ["@media screen and (min-width: 768px)"] : ({ ["gridTemplateColumns"] : "repeat(2, minmax(0, 1fr))" }), ["@media screen and (min-width: 1024px)"] : ({ ["gridTemplateColumns"] : "repeat(4, minmax(0, 1fr))" }) })}>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["textAlign"] : "center" })}>
  <LucideZapIcon css={({ ["alt"] : "zap", ["height"] : "3rem", ["marginBottom"] : "1rem", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"High-quality products"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Our products are developed by experts in artificial intelligence and are designed to be easy to use."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["textAlign"] : "center" })}>
  <LucideFileStackIcon css={({ ["alt"] : "file-stack", ["height"] : "3rem", ["marginBottom"] : "1rem", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"All-in-one platform"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"Our platform allows you to find all the AI products you need in one place, without having to search on different platforms."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["textAlign"] : "center" })}>
  <LucideUsersIcon css={({ ["alt"] : "users", ["height"] : "3rem", ["marginBottom"] : "1rem", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"Support 24/7"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"We offer technical support at any time of the day, so you can resolve your doubts quickly."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#ffffff", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", ["textAlign"] : "center" })}>
  <LucideCircleCheckBigIcon css={({ ["alt"] : "circle_check_big", ["height"] : "3rem", ["marginBottom"] : "1rem", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["width"] : "3rem", ["color"] : "#FFBE76" })}/>
  <RadixThemesHeading as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem", ["color"] : "#1F2937" })}>
  {"We develop the latest technologies"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#4B5563" })}>
  {"We are constantly updating our products to offer you the latest in artificial intelligence technology."}
</RadixThemesText>
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

/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { InstagramIcon as LucideInstagramIcon, LinkedinIcon as LucideLinkedinIcon, MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import Script from "next/script"
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
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
  <RadixThemesBox className={"bg-teal-100"} css={({ ["fontFamily"] : "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", ["--default-font-family"] : "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" })}>
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
  <RadixThemesBox css={({ ["@media screen and (min-width: 640px)"] : ({ ["max-width"] : "640px" }), ["@media screen and (min-width: 768px)"] : ({ ["max-width"] : "768px" }), ["@media screen and (min-width: 1024px)"] : ({ ["max-width"] : "1024px" }), ["@media screen and (min-width: 1280px)"] : ({ ["max-width"] : "1280px" }), ["@media screen and (min-width: 1536px)"] : ({ ["max-width"] : "1536px" }), ["width"] : "100%", ["marginLeft"] : "auto", ["marginRight"] : "auto", ["paddingLeft"] : "1rem", ["paddingRight"] : "1rem", ["paddingTop"] : "2rem", ["paddingBottom"] : "2rem" })}>
  <RadixThemesHeading as={"h1"} css={({ ["fontWeight"] : "700", ["marginBottom"] : "1.5rem", ["fontSize"] : "2.25rem", ["lineHeight"] : "2.5rem", ["color"] : "#000000", ["textAlign"] : "center" })}>
  {"\u00a1Empecemos a lo grande con tu primer pedido!"}
</RadixThemesHeading>
  <RadixThemesBox css={({ ["backgroundColor"] : "#FFBE76", ["marginBottom"] : "2rem", ["padding"] : "1.5rem", ["borderRadius"] : "0.5rem", ["boxShadow"] : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" })}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["@media screen and (min-width: 0px)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 768px)"] : ({ ["flexDirection"] : "row" }), ["gap"] : "2rem" })}>
  <RadixThemesBox css={({ ["flex"] : "1 1 0%" })}>
  <RadixThemesHeading align={"center"} as={"h2"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "1rem", ["fontSize"] : "1.5rem", ["lineHeight"] : "2rem", ["color"] : "black" })}>
  {"Reuni\u00f3n inicial de 30 minutos"}
</RadixThemesHeading>
  <RadixThemesText align={"center"} as={"p"} css={({ ["marginBottom"] : "1rem", ["color"] : "black" })}>
  {"En esta reuni\u00f3n, discutiremos los siguientes temas:"}
</RadixThemesText>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["marginBottom"] : "1.5rem", ["paddingLeft"] : "1.5rem" })}>
  <li css={({ ["color"] : "black", ["textAlign"] : "center", ["listStyleType"] : "none" })}>
  {"Tus objetivos y necesidades de software"}
</li>
  <li css={({ ["color"] : "black", ["textAlign"] : "center", ["listStyleType"] : "none" })}>
  {"Nuestro proceso de desarrollo"}
</li>
  <li css={({ ["color"] : "black", ["textAlign"] : "center", ["listStyleType"] : "none" })}>
  {"Estimaciones preliminares de tiempo y costo"}
</li>
  <li css={({ ["color"] : "black", ["textAlign"] : "center", ["listStyleType"] : "none" })}>
  {"Pr\u00f3ximos pasos para tu proyecto"}
</li>
</ul>
  <RadixThemesBox>
  <RadixThemesText align={"center"} as={"p"} css={({ ["fontWeight"] : "600", ["fontSize"] : "1.125rem", ["lineHeight"] : "1.75rem", ["color"] : "black" })}>
  {"Duraci\u00f3n de la reuni\u00f3n: 30 minutos"}
</RadixThemesText>
  <RadixThemesBox css={({ ["backgroundColor"] : "#EDE9FE", ["marginTop"] : "1rem", ["padding"] : "1rem", ["borderRadius"] : "0.5rem" })}>
  <RadixThemesHeading align={"center"} as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["color"] : "#6D28D9", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem" })}>
  {"Sin compromisos ni tarifas ocultas"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#6D28D9" })}>
  {"Esta reuni\u00f3n inicial es completamente gratuita y sin compromiso. Nuestro objetivo es entender tus necesidades y ofrecerte la mejor soluci\u00f3n posible."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "#D0E8D4", ["marginTop"] : "1rem", ["padding"] : "1rem", ["borderRadius"] : "0.5rem" })}>
  <RadixThemesHeading align={"center"} as={"h3"} css={({ ["fontWeight"] : "600", ["marginBottom"] : "0.5rem", ["color"] : "#2E8B57", ["fontSize"] : "1.25rem", ["lineHeight"] : "1.75rem" })}>
  {"7 d\u00edas gratis para tu primer pedido"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["color"] : "#2E8B57" })}>
  {"Agendemos una llamada de 30 minutos para conocernos, darte la bienvenida y ponernos en marcha con un primer pedido"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={({ ["scrollbar-width"] : "none", ["-ms-overflow-style"] : "none", ["backgroundColor"] : "#F3F4F6", ["borderRadius"] : "6rem", ["flex"] : "1 1 0%", ["maxWidth"] : "800px", ["maxHeight"] : "600px", ["overflow"] : "auto", ["&:after"] : ({ ["content"] : "''", ["display"] : "block", ["height"] : "0", ["width"] : "0" }), ["&:webkit-scrollbar"] : ({ ["display"] : "none" }) })}>
  <div className={"rx-Html"} dangerouslySetInnerHTML={({ ["__html"] : "<div class=\"meetings-iframe-container\" data-src=\"https://meetings.hubspot.com/santiago-novoa?embed=true\"></div>" })}/>
  <Script src={"https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"} strategy={"afterInteractive"}/>
</RadixThemesBox>
</RadixThemesFlex>
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

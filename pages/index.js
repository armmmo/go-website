import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import '../public/assets/scripts.js';
import React, {useEffect, useState} from 'react';




export default function Home() {


  function scrollToTargetWithNavigationOffset(t, e) {
    if (process.browser) {
      e = e || -70;
      var o = document.getElementById(t).getBoundingClientRect().top + window.pageYOffset + e;
      window.scrollTo({
          top: o,
          behavior: "smooth"
      })
      console.log(t,e)
    }
  }

  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hospedagem WordPress I Suporte 24/7 I A Partir De R$ 4,99</title>
        <link media="all" rel="stylesheet" href="assets/2020-78c9c00efe.css" />
        <meta name="description" content="Hospedagem WordPress rápida e fácil de instalar. Planos anuais Premium e Business com domínio grátis - promoção imperdível!" />
        <meta name="keywords" content="WordPress, Hospedagem, Servidores otimizados" />
        <meta name="dcterms.subject" content="WordPress, Hospedagem, Servidores otimizados" />
        <meta name="dcterms.type" content="Service" />
        <meta name="dcterms.language" content="pt-br" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="msapplication-config" content="none" />
        <link rel="canonical" href="index.html" />
        <link rel="alternate" hrefLang="x-default" href="https://www.hostinger.com/wordpress-hosting" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <link rel="publisher" href="https://plus.google.com/+hostingerglobal" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="preconnect" href="//connect.facebook.net" />
        <link rel="preconnect" href="//platform.twitter.com" />
        <link rel="dns-prefetch" href="//apis.google.com" />
        <link rel="preconnect" href="//apis.google.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//support.hostinger.io" />
        <link rel="preconnect" href="//support.hostinger.io" />
        <link rel="shortcut icon" href="assets/images/favicons/favicon-97d9192479.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicons/favicon-57x57-38caedd7ea.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicons/favicon-114x114-839ca9ebf6.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicons/favicon-72x72-507e6906a7.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicons/favicon-144x144-60c1386b00.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicons/favicon-60x60-10c61905ff.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicons/favicon-120x120-00c74cbc6a.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicons/favicon-76x76-650be12282.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicons/favicon-152x152-4de16d26c9.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/favicon-180x180-ed46867a30.png" />
        <link rel="icon" type="image/png" href="assets/images/favicons/favicon-192x192-85201bedb6.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="assets/images/favicons/favicon-160x160-d01b6cf48e.png" sizes="160x160" />
        <link rel="icon" type="image/png" href="assets/images/favicons/favicon-96x96-61f24ceb7c.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="assets/images/favicons/favicon-16x16-2e98191cb3.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="assets/images/favicons/favicon-32x32-ff3a0706aa.png" sizes="32x32" />
        {/*[if lt IE 9]><![endif]*/}
        <meta property="fb:app_id" content={740015746038020} />
        <meta property="og:locale" content="pt_br" />
        <meta property="og:url" content="https://www.hostinger.com.br/hospedagem-wordpress" />
        <meta property="og:title" content="Hospedagem WordPress I Suporte 24/7 I A Partir De R$ 4,99" />
        <meta property="og:image" content="https://www.hostinger.com.br/assets/images/logo-400x400-7d3d5942f5.png" />
        <meta property="og:description" content="Hospedagem WordPress rápida e fácil de instalar. Planos anuais Premium e Business com domínio grátis - promoção imperdível!" />
        <meta property="og:site_name" content="Hostinger" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hostingercom" />
        <meta name="twitter:title" content="Hospedagem WordPress I Suporte 24/7 I A Partir De R$ 4,99" />
        <meta name="twitter:description" content="Hospedagem WordPress rápida e fácil de instalar. Planos anuais Premium e Business com domínio grátis - promoção imperdível!" />
        <meta name="twitter:image" content="https://www.hostinger.com.br/assets/images/logo-400x400-7d3d5942f5.png" />
        <meta name="twitter:creator" content="@hostingercom" />
        <link rel="apple-touch-icon" href="assets/images/apple/apple-touch-icon-8fa14fa73c.jpg" />
        <link rel="apple-touch-icon" sizes="57x57" href="assets/images/apple/apple-touch-icon-57x57-8fa14fa73c.jpg" />
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple/apple-touch-icon-72x72-706248dc51.jpg" />
        <link rel="apple-touch-icon" sizes="76x76" href="assets/images/apple/apple-touch-icon-76x76-85c98b34c5.jpg" />
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple/apple-touch-icon-114x114-144830b283.jpg" />
        <link rel="apple-touch-icon" sizes="120x120" href="assets/images/apple/apple-touch-icon-120x120-189ce919bc.jpg" />
        <link rel="apple-touch-icon" sizes="144x144" href="assets/images/apple/apple-touch-icon-144x144-77a053007e.jpg" />
        <link rel="apple-touch-icon" sizes="152x152" href="assets/images/apple/apple-touch-icon-152x152-965c0f182b.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple/apple-touch-icon-180x180-ff83074b64.jpg" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp%7CMuli:400,600,800,900&display=swap" media="all" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "/**\n * Swiper 5.4.5\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://swiperjs.com\n *\n * Copyright 2014-2020 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: June 16, 2020\n */\n\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-container-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-container-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-container-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-button-next.swiper-button-white {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-button-next.swiper-button-black {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n:root {\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n" }} />

        <script src="assets/additionaljsvue-114e50a8a0.js"></script>
        <script src="assets/vueapp-474dc5df66.js"></script>
        <script type="text/javascript" src="/assets/scripts.js"></script>


      </Head>

      <div id="nav"  className="cart-off">
              <div id="navigation2" className=" bestwishes2020">
                  <div className="z-index-200 fixed-container">
                      <div className="w-100 z-index-200 navigation-holder d-flex flex-column colored-transparent">
                          <div className="pt-20 pb-20 pl-15 pr-15 pr-40-sm pl-40-sm d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <a data-v-d95ab4c8="" href="/" className="mr-40-sm mr-10">
                                  <svg data-v-d95ab4c8="" width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-none d-sm-block">
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M45.1114 8.89822H47.9253V21.3612H45.1114V16.0739H40.3857V21.3612H37.5718V8.89822H40.3857V13.6637H45.1114V8.89822Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M54.4949 15.1209C54.4949 15.732 54.5698 16.2835 54.7201 16.7752C54.8704 17.267 55.0871 17.6895 55.3698 18.0431C55.6518 18.3972 55.9978 18.6695 56.4069 18.8612C56.8155 19.0535 57.2843 19.1496 57.8137 19.1496C58.3305 19.1496 58.7966 19.0535 59.2117 18.8612C59.6261 18.6695 59.9752 18.3972 60.2574 18.0431C60.5399 17.6895 60.7568 17.267 60.9071 16.7752C61.0574 16.2835 61.1326 15.732 61.1326 15.1209C61.1326 14.5091 61.0574 13.9546 60.9071 13.4569C60.7568 12.9595 60.5399 12.5342 60.2574 12.1802C59.9752 11.8266 59.6261 11.5535 59.2117 11.3621C58.7966 11.1702 58.3305 11.0744 57.8137 11.0744C57.2843 11.0744 56.8155 11.1732 56.4069 11.3709C55.9978 11.5688 55.6518 11.8447 55.3698 12.1985C55.0871 12.5521 54.8704 12.9776 54.7201 13.475C54.5698 13.9729 54.4949 14.5214 54.4949 15.1209ZM64.0369 15.1209C64.0369 16.1877 63.8773 17.1262 63.5593 17.935C63.2402 18.7445 62.8041 19.4219 62.2513 19.9672C61.6982 20.5131 61.0397 20.9235 60.2762 21.1991C59.5128 21.4753 58.6918 21.6131 57.8144 21.6131C56.9604 21.6131 56.1551 21.4753 55.3974 21.1991C54.6398 20.9235 53.9782 20.5131 53.4133 19.9672C52.8478 19.4219 52.4034 18.7445 52.0786 17.935C51.754 17.1262 51.5913 16.1877 51.5913 15.1209C51.5913 14.0537 51.7598 13.1154 52.0965 12.3064C52.4329 11.4969 52.8872 10.8164 53.4584 10.2649C54.0292 9.71341 54.6907 9.29998 55.4426 9.02411C56.1937 8.74799 56.9846 8.60993 57.8144 8.60993C58.6679 8.60993 59.4734 8.74799 60.2313 9.02411C60.9887 9.29998 61.65 9.71341 62.2152 10.2649C62.7802 10.8164 63.2253 11.4969 63.5499 12.3064C63.8748 13.1154 64.0369 14.0537 64.0369 15.1209Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M71.1123 19.2212C71.5091 19.2212 71.8367 19.1885 72.0952 19.1221C72.3537 19.0565 72.5613 18.9667 72.7174 18.852C72.8735 18.7386 72.982 18.6038 73.0423 18.4479C73.1025 18.2922 73.1326 18.1182 73.1326 17.9263C73.1326 17.5189 72.9399 17.1797 72.5552 16.9104C72.1704 16.6403 71.5091 16.3498 70.5713 16.0375C70.1623 15.8942 69.7534 15.7289 69.3446 15.5433C68.9358 15.3578 68.569 15.1239 68.2444 14.842C67.9201 14.5603 67.6553 14.2186 67.451 13.8164C67.2464 13.4151 67.1443 12.9267 67.1443 12.3511C67.1443 11.7755 67.2525 11.2569 67.4689 10.7954C67.6855 10.3337 67.992 9.94143 68.389 9.61728C68.7857 9.29338 69.2664 9.04517 69.8316 8.87089C70.3968 8.69737 71.0339 8.60986 71.7436 8.60986C72.5853 8.60986 73.3129 8.70039 73.9263 8.87995C74.5391 9.05975 75.0443 9.25792 75.441 9.47368L74.6297 11.6857C74.2806 11.5059 73.8927 11.3469 73.4662 11.2089C73.0392 11.0713 72.5252 11.0019 71.9242 11.0019C71.2506 11.0019 70.7666 11.0955 70.472 11.2811C70.1774 11.4669 70.0298 11.7518 70.0298 12.1351C70.0298 12.3632 70.0843 12.5553 70.1925 12.7107C70.3005 12.8666 70.4541 13.0074 70.6523 13.1334C70.8508 13.2592 71.0793 13.3733 71.3381 13.4749C71.5961 13.577 71.8818 13.6817 72.1948 13.7895C72.8438 14.0297 73.409 14.2663 73.8902 14.5002C74.3709 14.7341 74.7709 15.0069 75.0897 15.3185C75.408 15.6301 75.6456 15.996 75.8022 16.4157C75.9581 16.8357 76.0365 17.3449 76.0365 17.9439C76.0365 19.107 75.6274 20.0093 74.8098 20.6506C73.9921 21.2924 72.7595 21.6133 71.1123 21.6133C70.5592 21.6133 70.0601 21.5801 69.6152 21.5142C69.1703 21.4478 68.7766 21.3671 68.4339 21.2712C68.0913 21.1754 67.7965 21.0736 67.5498 20.9657C67.3034 20.8576 67.0961 20.756 66.9276 20.6597L67.7216 18.4298C68.0939 18.634 68.5539 18.8166 69.1015 18.978C69.6483 19.1402 70.3189 19.2212 71.1123 19.2212Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M88.4327 8.89829V11.2903H84.6629V21.3613H81.8492V11.2903H78.0792V8.89829H88.4327Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M91.5579 21.3616H94.3718V8.89834H91.5579V21.3616Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M106.967 21.3613C106.162 19.9347 105.29 18.5261 104.352 17.135C103.414 15.744 102.416 14.4313 101.358 13.1963V21.3613H98.58V8.89832H100.871C101.267 9.29364 101.706 9.77925 102.187 10.3549C102.668 10.9305 103.158 11.5451 103.657 12.1985C104.156 12.8518 104.652 13.5293 105.145 14.2304C105.638 14.9318 106.101 15.606 106.534 16.2535V8.89832H109.33V21.3613H106.967Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M119.634 11.0564C118.324 11.0564 117.376 11.419 116.793 12.1443C116.21 12.8698 115.919 13.8616 115.919 15.121C115.919 15.7319 115.99 16.2869 116.135 16.7843C116.279 17.2815 116.496 17.71 116.784 18.0699C117.073 18.4297 117.433 18.7086 117.866 18.9065C118.299 19.1042 118.804 19.203 119.381 19.203C119.694 19.203 119.962 19.197 120.184 19.1852C120.406 19.1733 120.602 19.1495 120.77 19.1132V14.7793H123.584V20.9478C123.247 21.0798 122.706 21.2204 121.961 21.37C121.215 21.5196 120.295 21.5951 119.201 21.5951C118.263 21.5951 117.412 21.451 116.649 21.1635C115.885 20.8753 115.233 20.4561 114.692 19.9044C114.151 19.3531 113.733 18.6754 113.438 17.8722C113.143 17.0695 112.996 16.1521 112.996 15.121C112.996 14.0777 113.159 13.1545 113.484 12.351C113.808 11.548 114.252 10.867 114.818 10.3098C115.383 9.75224 116.047 9.32976 116.811 9.04207C117.575 8.75413 118.389 8.60978 119.255 8.60978C119.844 8.60978 120.376 8.64926 120.851 8.72697C121.326 8.80518 121.735 8.89496 122.078 8.99706C122.421 9.09865 122.703 9.20352 122.926 9.31165C123.148 9.41954 123.307 9.50378 123.404 9.56364L122.592 11.8113C122.207 11.6076 121.765 11.4311 121.266 11.281C120.767 11.1311 120.223 11.0564 119.634 11.0564Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M127.521 21.3613V8.89832H135.963V11.2542H130.335V13.6998H135.331V16.0021H130.335V19.0055H136.378V21.3613H127.521Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M143.596 11.1462C143.392 11.1462 143.209 11.1522 143.046 11.164C142.884 11.1764 142.731 11.1884 142.586 11.2V14.5809H143.38C144.438 14.5809 145.195 14.4496 145.652 14.1855C146.109 13.9223 146.337 13.4724 146.337 12.8366C146.337 12.225 146.106 11.791 145.643 11.5325C145.18 11.2752 144.498 11.1462 143.596 11.1462ZM143.435 8.75414C145.311 8.75414 146.748 9.08659 147.746 9.75225C148.744 10.4177 149.243 11.4517 149.243 12.8547C149.243 13.7296 149.042 14.4405 148.639 14.986C148.236 15.5312 147.656 15.9602 146.898 16.2716C147.151 16.5836 147.415 16.9402 147.692 17.3418C147.968 17.7437 148.242 18.1634 148.513 18.601C148.783 19.0386 149.045 19.494 149.297 19.9673C149.549 20.4413 149.784 20.9058 150 21.3612H146.855C146.625 20.9536 146.393 20.5401 146.158 20.1204C145.922 19.701 145.681 19.2931 145.434 18.8972C145.187 18.5014 144.941 18.1272 144.701 17.7736C144.459 17.4195 144.217 17.0989 143.976 16.8107H142.587V21.3612H139.774V9.07754C140.387 8.95834 141.021 8.87384 141.676 8.82631C142.332 8.77803 142.918 8.75414 143.435 8.75414Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M0.000249566 14.046V0.000497794L7.08916 3.78046V10.1086L16.4735 10.1132L23.6774 14.046H0.000249566ZM18.3925 8.95058V0L25.6725 3.6859V13.1797L18.3925 8.95058ZM18.3924 26.1177V19.8441L8.93577 19.8375C8.9446 19.8793 1.6123 15.8418 1.6123 15.8418L25.6725 15.9547V30L18.3924 26.1177ZM0 26.1177L0.000252212 16.9393L7.08916 21.0683V29.8033L0 26.1177Z"></path>
                                      </svg> <svg data-v-d95ab4c8="" width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-block d-sm-none">
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M30.0743 5.93215H31.9502V14.2408H30.0743V10.7159H26.9238V14.2408H25.0479V5.93215H26.9238V9.10915H30.0743V5.93215Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M36.3299 10.0806C36.3299 10.488 36.3799 10.8557 36.4801 11.1834C36.5803 11.5114 36.7247 11.793 36.9132 12.0287C37.1012 12.2648 37.3319 12.4464 37.6046 12.5741C37.877 12.7024 38.1896 12.7664 38.5425 12.7664C38.887 12.7664 39.1977 12.7024 39.4745 12.5741C39.7508 12.4464 39.9835 12.2648 40.1716 12.0287C40.3599 11.793 40.5045 11.5114 40.6047 11.1834C40.705 10.8557 40.7551 10.488 40.7551 10.0806C40.7551 9.67273 40.705 9.30306 40.6047 8.97127C40.5045 8.63966 40.3599 8.35616 40.1716 8.12011C39.9835 7.88439 39.7508 7.70232 39.4745 7.57474C39.1977 7.44682 38.887 7.38294 38.5425 7.38294C38.1896 7.38294 37.877 7.44883 37.6046 7.5806C37.3319 7.71255 37.1012 7.89646 36.9132 8.13234C36.7247 8.36806 36.5803 8.65173 36.4801 8.98334C36.3799 9.31529 36.3299 9.68094 36.3299 10.0806ZM42.6913 10.0807C42.6913 10.7918 42.5848 11.4175 42.3728 11.9567C42.1601 12.4964 41.8694 12.948 41.5008 13.3115C41.1321 13.6755 40.6931 13.9491 40.1841 14.1328C39.6751 14.3169 39.1278 14.4088 38.5429 14.4088C37.9736 14.4088 37.4367 14.3169 36.9316 14.1328C36.4265 13.9491 35.9855 13.6755 35.6088 13.3115C35.2318 12.948 34.9356 12.4964 34.719 11.9567C34.5026 11.4175 34.3942 10.7918 34.3942 10.0807C34.3942 9.36916 34.5065 8.74365 34.731 8.20431C34.9553 7.66464 35.2581 7.21098 35.6389 6.84332C36.0194 6.47566 36.4605 6.20004 36.9617 6.01612C37.4624 5.83204 37.9897 5.74 38.5429 5.74C39.1119 5.74 39.6489 5.83204 40.1542 6.01612C40.6591 6.20004 41.1 6.47566 41.4768 6.84332C41.8534 7.21098 42.1502 7.66464 42.3666 8.20431C42.5831 8.74365 42.6913 9.36916 42.6913 10.0807Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M47.4082 12.8141C47.6727 12.8141 47.8911 12.7923 48.0635 12.7481C48.2358 12.7043 48.3742 12.6445 48.4783 12.568C48.5823 12.4924 48.6546 12.4025 48.6948 12.2986C48.735 12.1948 48.755 12.0788 48.755 11.9509C48.755 11.6793 48.6266 11.4531 48.3701 11.2736C48.1136 11.0935 47.6727 10.8999 47.0475 10.6917C46.7748 10.5961 46.5023 10.486 46.2297 10.3622C45.9571 10.2385 45.7127 10.0826 45.4963 9.89465C45.28 9.70688 45.1035 9.47904 44.9673 9.21097C44.8309 8.94339 44.7628 8.61781 44.7628 8.23406C44.7628 7.8503 44.835 7.50461 44.9792 7.19697C45.1237 6.88916 45.328 6.62762 45.5926 6.41152C45.8571 6.19558 46.1776 6.03011 46.5544 5.91393C46.9312 5.79825 47.3559 5.73991 47.8291 5.73991C48.3902 5.73991 48.8752 5.80026 49.2842 5.91996C49.6927 6.03984 50.0295 6.17194 50.294 6.31579L49.7531 7.79045C49.5204 7.67058 49.2618 7.56463 48.9775 7.47259C48.6928 7.38088 48.3501 7.33461 47.9495 7.33461C47.5003 7.33461 47.1777 7.39697 46.9813 7.5207C46.7849 7.6446 46.6865 7.83455 46.6865 8.09005C46.6865 8.24211 46.7229 8.37019 46.795 8.4738C46.867 8.57774 46.9694 8.67163 47.1015 8.75562C47.2338 8.83945 47.3862 8.91556 47.5587 8.98329C47.7307 9.05136 47.9212 9.1211 48.1299 9.19303C48.5625 9.35313 48.9393 9.51089 49.2601 9.66681C49.5806 9.82273 49.8473 10.0046 50.0598 10.2123C50.272 10.4201 50.4304 10.664 50.5348 10.9438C50.6387 11.2238 50.691 11.5633 50.691 11.9626C50.691 12.738 50.4183 13.3396 49.8732 13.7671C49.328 14.1949 48.5063 14.4088 47.4082 14.4088C47.0395 14.4088 46.7067 14.3867 46.4101 14.3428C46.1135 14.2985 45.8511 14.2447 45.6225 14.1808C45.3942 14.117 45.1977 14.0491 45.0332 13.9771C44.8689 13.905 44.7307 13.8373 44.6184 13.7731L45.1477 12.2865C45.3959 12.4227 45.7026 12.5444 46.0676 12.652C46.4321 12.7602 46.8792 12.8141 47.4082 12.8141Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M58.9551 5.93219V7.52689H56.4419V14.2408H54.5661V7.52689H52.0527V5.93219H58.9551Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M61.0386 14.241H62.9145V5.93223H61.0386V14.241Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M71.3115 14.2409C70.7745 13.2898 70.1934 12.3508 69.5679 11.4233C68.9424 10.496 68.2771 9.62088 67.5719 8.79755V14.2409H65.72V5.93221H67.247C67.5113 6.19576 67.8041 6.51949 68.1249 6.90325C68.4455 7.287 68.7719 7.69674 69.1048 8.1323C69.4374 8.56786 69.7681 9.01952 70.0969 9.48693C70.4254 9.95451 70.7341 10.404 71.0228 10.8357V5.93221H72.8867V14.2409H71.3115Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M79.7557 7.37094C78.8824 7.37094 78.2509 7.61269 77.862 8.0962C77.4732 8.57987 77.279 9.24109 77.279 10.0807C77.279 10.4879 77.3269 10.8579 77.4231 11.1895C77.5195 11.521 77.6637 11.8067 77.8559 12.0466C78.0486 12.2865 78.2889 12.4724 78.5776 12.6043C78.8661 12.7361 79.2026 12.802 79.5874 12.802C79.7958 12.802 79.9743 12.798 80.1228 12.7901C80.2709 12.7822 80.4012 12.7663 80.5134 12.7422V9.85285H82.3893V13.9652C82.1647 14.0532 81.8042 14.1469 81.307 14.2467C80.8101 14.3464 80.1968 14.3967 79.4672 14.3967C78.8421 14.3967 78.2747 14.3006 77.766 14.109C77.2567 13.9169 76.8218 13.6374 76.461 13.2696C76.1007 12.9021 75.8219 12.4503 75.6255 11.9148C75.4288 11.3797 75.3309 10.7681 75.3309 10.0807C75.3309 9.3851 75.4392 8.76965 75.6558 8.23401C75.872 7.69869 76.1683 7.24469 76.5454 6.87318C76.9222 6.50149 77.3649 6.21984 77.8741 6.02805C78.383 5.83608 78.9261 5.73985 79.5034 5.73985C79.8961 5.73985 80.2507 5.76617 80.5675 5.81798C80.8841 5.87012 81.1565 5.92997 81.385 5.99804C81.6137 6.06577 81.8022 6.13568 81.9505 6.20777C82.099 6.27969 82.2047 6.33585 82.2691 6.37576L81.728 7.87423C81.4713 7.73843 81.1767 7.62074 80.8443 7.52065C80.5114 7.42073 80.1488 7.37094 79.7557 7.37094Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M85.0142 14.2409V5.93221H90.6417V7.50277H86.8899V9.13318H90.2208V10.668H86.8899V12.6703H90.9184V14.2409H85.0142Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M95.7309 7.43079C95.5946 7.43079 95.4727 7.43482 95.3643 7.4427C95.2563 7.45091 95.154 7.45896 95.0577 7.46667V9.72058H95.5868C96.2919 9.72058 96.797 9.63307 97.1014 9.45703C97.4062 9.2815 97.5583 8.98157 97.5583 8.55775C97.5583 8.15002 97.404 7.86065 97.0954 7.68831C96.7868 7.5168 96.332 7.43079 95.7309 7.43079ZM95.6233 5.83609C96.8739 5.83609 97.8316 6.05773 98.497 6.5015C99.1623 6.94511 99.4952 7.63449 99.4952 8.56982C99.4952 9.15308 99.3611 9.62703 99.0924 9.99067C98.824 10.3541 98.4371 10.6401 97.932 10.8477C98.1005 11.0558 98.2767 11.2935 98.461 11.5612C98.6453 11.8291 98.8279 12.1089 99.0083 12.4007C99.1885 12.6924 99.3631 12.996 99.5314 13.3115C99.6995 13.6275 99.8559 13.9372 100 14.2408H97.9031C97.7501 13.969 97.5951 13.6934 97.4385 13.4136C97.2815 13.134 97.1209 12.862 96.9556 12.5982C96.7912 12.3343 96.6276 12.0848 96.467 11.8491C96.3058 11.613 96.1447 11.3993 95.9841 11.2071H95.058V14.2408H93.1824V6.05169C93.5911 5.97223 94.014 5.91589 94.4508 5.88421C94.8877 5.85202 95.2784 5.83609 95.6233 5.83609Z"></path>
                                          <path data-v-d95ab4c8="" fill-rule="evenodd" clip-rule="evenodd" d="M0.000249566 9.36418V0.000497794L4.72619 2.52047V6.73926L10.9824 6.74227L15.785 9.36418H0.000249566ZM12.2616 5.96706V0L17.115 2.45727V8.78646L12.2616 5.96706ZM12.2616 17.4118V13.2294L5.9572 13.225C5.96308 13.2529 1.07489 10.5612 1.07489 10.5612L17.115 10.6365V20L12.2616 17.4118ZM0 17.4118L0.000168141 11.2928L4.72611 14.0455V19.8689L0 17.4118Z"></path>
                                  </svg>
                                </a>

                              </div>
                              <div className="align-items-center d-none d-xl-flex pl-30-md">
                                  <div className="position-relative d-none d-xl-block" material="storefront">
                                      <div data-qa="online-stores-menu" className="navigation-color mr-30 cursor-pointer hover-opacity-6 fw-600"><a href="/loja-virtual" className="fs-15 fs-17-xxl">Loja Virtual</a></div>
                                      
                                  </div>
                                  <div className="position-relative d-none d-xl-block" material="view_compact">
                                      <div data-qa="website-builder-menu" className="navigation-color mr-30 cursor-pointer hover-opacity-6 fw-600"><a href="/criar-um-site" className="fs-15 fs-17-xxl">Criador de Sites</a></div>
                                      
                                  </div>
                                  <div className="position-relative d-none d-xl-block" dropdown="true">
                                      <div data-qa="hosting-menu" className="navigation-color mr-30 cursor-pointer hover-opacity-6 fw-600">
                                          <p className="d-flex align-items-center fs-15 fs-17-xxl">
                                              Hospedagem
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D1E20" width="24px" height="24px">
                                                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                              </svg></p>
                                      </div>
                                      
                                  </div>
                                  <div className="position-relative d-none d-xl-block" dropdown="true">
                                      <div data-qa="vps-menu" className="navigation-color mr-30 cursor-pointer hover-opacity-6 fw-600">
                                          <p className="d-flex align-items-center fs-15 fs-17-xxl">
                                              VPS
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D1E20" width="24px" height="24px">
                                                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                              </svg></p>
                                      </div>
                                      
                                  </div>
                                  <div className="position-relative d-none d-xl-block" dropdown="true">
                                      <div data-qa="domain-menu" className="navigation-color mr-30 cursor-pointer hover-opacity-6 fw-600">
                                          <p className="d-flex align-items-center fs-15 fs-17-xxl">
                                              Domínio
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D1E20" width="24px" height="24px">
                                                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                              </svg></p>
                                      </div>
                                      
                                  </div>
                                  <div className="position-relative d-none d-xl-block" nameispricing="true" material="attach_money">
                                      <div data-qa="pricing-menu" className="navigation-color mr-30 cursor-pointer hover-opacity-6 fw-600"><a href="/precos" className="fs-15 fs-17-xxl">Preços</a></div>
                                      
                                  </div> <a data-qa="login-menu" href="/cpanel-login" className="navigation-color ml-10 d-flex border-radius-round pl-20 pr-20 p-2 border-h-dark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D1E20" width="24px" height="24px">
                                          <g fill="none">
                                              <path d="M0 0h24v24H0V0z"></path>
                                              <path d="M0 0h24v24H0V0z" opacity=".87"></path>
                                          </g>
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                      </svg>
                                      <p className="fs-15 ml-10 fw-600 fs-17-xxl">Entrar</p>
                                  </a> <a data-qa="cart-menu" href="/cart" className="hover-opacity-6 d-flex ml-20 align-items-center navigation-color"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                                          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                      </svg>
                                      <p className="fs-17 fw-600 ml-n2 d-none d-sm-block ml-10">Carrinho</p>
                                  </a>
                              </div>
                              <div className="d-flex d-xl-none"><a data-qa="cart-menu" href="/cart" className="hover-opacity-6 d-flex ml-20 align-items-center navigation-color"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                                          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                      </svg>
                                      <p className="fs-17 fw-600 ml-n2 d-none d-sm-block ml-10">Carrinho</p>
                                  </a> <i className="hover-opacity-6 notranslate material-icons cursor-pointer navigation-color ml-10 ml-40-sm">menu</i></div>
                              
                              
                          </div>
                          
                          
                      </div>
                  </div>
              </div>
      </div>   


      <div id="modal-web-hosting" className="bestwishes-2020">{/**/}</div>
      <div className="header-padding wordpress-hosting-header-2020 bg-lazy header-bg text-white bg-lazy-loaded">
        <div className="container container-2020">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-10 col-lg-5 mb-50 mb-0-lg align-items-center">
              <h1 className="mb-20 fw-800 text-center text-lg-left text-h-meteorite-dark">Tudo para Hospedagem WordPress</h1>
              <p className="subtitle mb-40 w-90 w-75-sm text-center text-lg-left text-h-meteorite-dark mx-auto mx-lg-0">Uma solução de hospedagem WordPress rápida e segura, com 99,99% de uptime garantido</p>
              <div className="d-flex justify-content-center justify-content-lg-start"><a className="hb hb--primary hb--header scrollTo mw-260 max-w-260 pt-15 pb-15" data-offset={30} id="wordpress-hosting-header-cta-get_started" href="#pricing">Comece Agora</a></div>
            </div>
            <div className="col-lg-7 col-12 d-flex justify-content-center align-items-center"><img id="header-image-2020" className="w-100" src="assets/images/wordpress-hosting-2020/header-image-14e40bb0b0.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="section-spaces">
        <div className="container container-2020">
          <div id="trust-signals">{/**/}</div>
        </div>
      </div>
      <div className="section-spaces">
          <div className="pricing-table-new  pricing-table--new-4 pricing-table--new-2020 pt-0    " id="pricing">
              <div className="container pricing-table-container">
                  <div className="d-flex align-items-center flex-column">
                      <div id="pricing-table-scroll-to"></div>
                      <h2>Escolha seu Plano de Hospedagem WordPress</h2>
                      <p className="subtitle text-content-grey text-center">Garantia de Reembolso de 30 Dias.</p>
                      <div className="pricing-table pricing-table__holder justify-content-center d-flex mb-n20 w-100
                  mt-40 mt-50-md mt-70-xxl
                  pricing-table__holder--4">
                          <div id="pricing-table-plan-hosting-wp-hostinger-single" data-ga-inview="wordpress-hosting_main_pricing_table_wordpress_products_4" data-ga-products="{&quot;id&quot;:&quot;hosting:wp_hostinger_single&quot;,&quot;name&quot;:&quot;hosting:wp_hostinger_single&quot;,&quot;dimension6&quot;:4.9900000000000002,&quot;dimension7&quot;:7.9900000000000002,&quot;dimension8&quot;:23.989999999999998,&quot;dimension9&quot;:79}" data-ga-position="1" data-ga-product-group="pricing-table" className="pricing-table-plan bg-white position-relative w-100 
              pricing-table--2020 pricing-table-shadow-2020">
                              <div className="h-100 d-flex justify-content-between flex-column">
                                  <div className="pricing-table-plan__padding pt-35 pb-40 h-100 d-flex justify-content-between flex-column">
                                      <div className="d-flex flex-column ">
                                          <p className="text-center pt-title text-h-meteorite-dark">
                                              WordPress Single
                                          </p>
                                          <p className="mt-10 text-center mh-50-md pt-description text-h-meteorite-dark">Solução ideal para iniciantes</p>
                                          <div className="d-flex align-items-center justify-content-center mt-20"><s className="currency-selector-price-symbol mr-5 text-content-gray pt-discounted-price white-space-no-wrap" data-original-price="23.99">R$23,99</s>
                                              <div className="body l200 fw-700 p-1 border-radius-round pr-10 pl-10 text-center text-white primary meteorite  small discount-labels-pricing-table">
                                                  ECONOMIZE 79% </div>
                                          </div>
                                          <div className="price-block ">
                                              <div className="price-block-wrapper  pricing-table__price">
                                                  <div className="text-h-black text-center fw-700 lh-1 mt-5 pricing-table-plan__price d-flex justify-content-center"><span className="price__symbol pricing-table-price__symbol currency-selector-symbol">R$</span><span className="price__price pricing-table-price__price currency-selector-price">4,99</span><span className="pt-title align-self-end lh-1">/mês</span></div>
                                              </div>
                                          </div>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>1 Website</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>1 Conta de Email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>10 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>Largura de Banda Limitada (100 GB)</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--disabled pt-features  d-flex">
                                                  <div>Jetpack Grátis</div>
                                              </li>
                                          </ul>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left d-none">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>1 Website</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>1 Conta de Email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>10 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>Largura de Banda Limitada (100 GB)</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--disabled pt-features mb-15 d-flex">
                                                  <div>Jetpack Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>LiteSpeed Cache</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Aceleração WordPress</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WooCommerce</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Proteção Cloudflare</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Integração com Github</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Suporte 24/7</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Garantia de Uptime de 99.9%</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciamento DNS</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciador de acessos</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>2 Banco de Dados MySQL</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>2 Subdomínios</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>1 Conta FTP</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>2 Cronjobs</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--disabled pt-features mb-15 d-flex">
                                                  <div>Registro de Domínio Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--disabled pt-features mb-15 d-flex">
                                                  <div>Acesso SSH</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features  d-flex">
                                                  <div>Backups Semanais</div>
                                              </li>
                                          </ul>
                                      </div>
                                      <div>
                                          <div className="mt-60  w-100 mw-350 pricing-table-bottom-button m-auto"><a data-ga-button="" data-ga-button-parent="pricing-table" className="d-flex" href="cart/add/hosting-wp-hostinger-single_list_wordpress-hosting_main_pricing_table_wordpress_products_4.html" id="hgrwordpress-hosting-pricing_table-add_to_cart-hosting-wp-hostinger-single"><button className=" w-100 text-white button m-auto pt-10 pb-10 border-radius-3 ripple-primary-rounded">Adicionar ao Carrinho</button></a></div>
                                          <p className="currency-selector-price-symbol-additional pricing-table-renewal-price renewal-price text-center text-content-grey pt-renewal mt-15" data-original-price="7.99" data-original-string-with-variable="%price%/mensal quando você renovar">R$7,99/mensal quando você renovar</p>
                                          <div onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-hostinger-single')} className="mt-5 text-center cursor-pointer text-h-primary fw-700 body pricing-table-see-additional-features-link">
                                              <div className="pricing-table-see-additional-features-link-text-see" id="hgrwordpress-hosting-pricing_table-click_here_to_see_all_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Veja todas as características <i className="material-icons notranslate"> keyboard_arrow_down </i></div>
                                              </div><a onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-hostinger-single')} className="pricing-table-see-additional-features-link-text-hide text-h-primary fw-700 d-none" id="hgrwordpress-hosting-pricing_table-click_here_to_see_less_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Ver menos características <i className="material-icons notranslate"> keyboard_arrow_up </i></div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div id="pricing-table-plan-hosting-wp-hostinger-business" data-ga-inview="wordpress-hosting_main_pricing_table_wordpress_products_4" data-ga-products="{&quot;id&quot;:&quot;hosting:wp_hostinger_business&quot;,&quot;name&quot;:&quot;hosting:wp_hostinger_business&quot;,&quot;dimension6&quot;:18.989999999999998,&quot;dimension7&quot;:29.989999999999998,&quot;dimension8&quot;:34.990000000000002,&quot;dimension9&quot;:46}" data-ga-position="2" data-ga-product-group="pricing-table" className="pricing-table-plan bg-white position-relative w-100 
              pricing-table--2020 pricing-table-shadow-2020
              ">
                              <div className="h-100 d-flex justify-content-between flex-column">
                                  <div className="pricing-table-plan__padding pt-35 pb-40 h-100 d-flex justify-content-between flex-column">
                                      <div className="d-flex flex-column ">
                                          <p className="text-center pt-title text-h-meteorite-dark">
                                              Business WordPress
                                          </p>
                                          <p className="mt-10 text-center mh-50-md pt-description text-h-meteorite-dark">Otimizado para pequenos e médios negócios</p>
                                          <div className="d-flex align-items-center justify-content-center mt-20"><s className="currency-selector-price-symbol mr-5 text-content-gray pt-discounted-price white-space-no-wrap" data-original-price="34.99">R$34,99</s>
                                              <div className="body l200 fw-700 p-1 border-radius-round pr-10 pl-10 text-center text-white primary meteorite  small discount-labels-pricing-table">
                                                  ECONOMIZE 46% </div>
                                          </div>
                                          <div className="price-block ">
                                              <div className="price-block-wrapper  pricing-table__price">
                                                  <div className="text-h-black text-center fw-700 lh-1 mt-5 pricing-table-plan__price d-flex justify-content-center"><span className="price__symbol pricing-table-price__symbol currency-selector-symbol">R$</span><span className="price__price pricing-table-price__price currency-selector-price">18,99</span><span className="pt-title align-self-end lh-1">/mês</span></div>
                                              </div>
                                          </div>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>100 Websites</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Contas de email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Largura de Banda <span className="pricing-table-tooltip cursor-pointer" data-toggle="tooltip" data-placement="top" title="">Ilimitada</span></div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Domínio e SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features  d-flex">
                                                  <div>Jetpack Grátis</div>
                                              </li>
                                          </ul>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left d-none">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>100 Websites</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Contas de email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Largura de Banda <span className="pricing-table-tooltip cursor-pointer" data-toggle="tooltip" data-placement="top" title="">Ilimitada</span></div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Domínio e SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>Jetpack Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>LiteSpeed Cache</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Aceleração WordPress</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WooCommerce</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Proteção Cloudflare</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Integração com Github</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Suporte 24/7</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Garantia de Uptime de 99.9%</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciamento DNS</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciador de acessos</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Bases de Dados MySQL Ilimitadas</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Subdomínios</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Contas FTP Ilimitadas</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Cronjobs Ilimitados</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Acesso SSH</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features  d-flex">
                                                  <div>Backup Diário </div>
                                              </li>
                                          </ul>
                                      </div>
                                      <div>
                                          <div className="mt-60  w-100 mw-350 pricing-table-bottom-button m-auto"><a data-ga-button="" data-ga-button-parent="pricing-table" className="d-flex" href="cart/add/hosting-wp-hostinger-business_list_wordpress-hosting_main_pricing_table_wordpress_products_4.html" id="hgrwordpress-hosting-pricing_table-add_to_cart-hosting-wp-hostinger-business"><button className=" w-100 text-white button m-auto pt-10 pb-10 border-radius-3 ripple-primary-rounded">Adicionar ao Carrinho</button></a></div>
                                          <p className="currency-selector-price-symbol-additional pricing-table-renewal-price renewal-price text-center text-content-grey pt-renewal mt-15" data-original-price="29.99" data-original-string-with-variable="%price%/mensal quando você renovar">R$29,99/mensal quando você renovar</p>
                                          <div onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-hostinger-business')} className="mt-5 text-center cursor-pointer text-h-primary fw-700 body pricing-table-see-additional-features-link">
                                              <div className="pricing-table-see-additional-features-link-text-see" id="hgrwordpress-hosting-pricing_table-click_here_to_see_all_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Veja todas as características <i className="material-icons notranslate"> keyboard_arrow_down </i></div>
                                              </div><a onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-hostinger-business')} className="pricing-table-see-additional-features-link-text-hide text-h-primary fw-700 d-none" id="hgrwordpress-hosting-pricing_table-click_here_to_see_less_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Ver menos características <i className="material-icons notranslate"> keyboard_arrow_up </i></div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div id="pricing-table-plan-hosting-wp-cloud-economy" data-ga-inview="wordpress-hosting_main_pricing_table_wordpress_products_4" data-ga-products="{&quot;id&quot;:&quot;hosting:wp_cloud_economy&quot;,&quot;name&quot;:&quot;hosting:wp_cloud_economy&quot;,&quot;dimension6&quot;:62.990000000000002,&quot;dimension7&quot;:69.989999999999995,&quot;dimension8&quot;:95.989999999999995,&quot;dimension9&quot;:34}" data-ga-position="3" data-ga-product-group="pricing-table" className="pricing-table-plan bg-white position-relative w-100 
              pricing-table--2020 pricing-table-shadow-2020
              ">
                              <div className="h-100 d-flex justify-content-between flex-column">
                                  <div className="pricing-table-plan__padding pt-35 pb-40 h-100 d-flex justify-content-between flex-column">
                                      <div className="d-flex flex-column ">
                                          <p className="text-center pt-title text-h-meteorite-dark">
                                              WordPress Pro
                                          </p>
                                          <p className="mt-10 text-center mh-50-md pt-description text-h-meteorite-dark">Solução avançada para empresas com foco em receita</p>
                                          <div className="d-flex align-items-center justify-content-center mt-20"><s className="currency-selector-price-symbol mr-5 text-content-gray pt-discounted-price white-space-no-wrap" data-original-price="95.99">R$95,99</s>
                                              <div className="body l200 fw-700 p-1 border-radius-round pr-10 pl-10 text-center text-white primary meteorite  small discount-labels-pricing-table">
                                                  ECONOMIZE 34% </div>
                                          </div>
                                          <div className="price-block ">
                                              <div className="price-block-wrapper  pricing-table__price">
                                                  <div className="text-h-black text-center fw-700 lh-1 mt-5 pricing-table-plan__price d-flex justify-content-center"><span className="price__symbol pricing-table-price__symbol currency-selector-symbol">R$</span><span className="price__price pricing-table-price__price currency-selector-price">62,99</span><span className="pt-title align-self-end lh-1">/mês</span></div>
                                              </div>
                                          </div>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left width-100">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>300 Websites</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Contas de email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Largura de Banda <span className="pricing-table-tooltip cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="Isso significa que nós não iremos definir um limite para a quantidade de largura de bandas ou de sites que você pode usar na operação normal de um site pessoal ou de um pequeno negócio, desde que ele cumpra nosso Acordo de Uso.">Ilimitada</span></div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Domínio e SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features  d-flex">
                                                  <div>Jetpack Pessoal</div>
                                              </li>
                                          </ul>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left width-100 d-none">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>300 Websites</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Contas de email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Largura de Banda <span className="pricing-table-tooltip cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="Isso significa que nós não iremos definir um limite para a quantidade de largura de bandas ou de sites que você pode usar na operação normal de um site pessoal ou de um pequeno negócio, desde que ele cumpra nosso Acordo de Uso.">Ilimitada</span></div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Domínio e SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Jetpack Pessoal</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>LiteSpeed Cache</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Aceleração WordPress</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WooCommerce</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Proteção Cloudflare</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Integração com Github</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Suporte 24/7</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Garantia de Uptime de 99.9%</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciamento DNS</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciador de acessos</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Bases de Dados MySQL Ilimitadas</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Subdomínios</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Contas FTP Ilimitadas</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Cronjobs Ilimitados</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Acesso SSH</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features  d-flex">
                                                  <div>Backup Diário </div>
                                              </li>
                                          </ul>
                                      </div>
                                      <div>
                                          <div className="mt-60  w-100 mw-350 pricing-table-bottom-button m-auto"><a data-ga-button="" data-ga-button-parent="pricing-table" className="d-flex" href="cart/add/hosting-wp-cloud-economy_list_wordpress-hosting_main_pricing_table_wordpress_products_4.html" id="hgrwordpress-hosting-pricing_table-add_to_cart-hosting-wp-cloud-economy"><button className=" w-100 text-white button m-auto pt-10 pb-10 border-radius-3 ripple-primary-rounded">Adicionar ao Carrinho</button></a></div>
                                          <p className="currency-selector-price-symbol-additional pricing-table-renewal-price renewal-price text-center text-content-grey pt-renewal mt-15" data-original-price="69.99" data-original-string-with-variable="%price%/mensal quando você renovar">R$69,99/mensal quando você renovar</p>
                                          <div onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-cloud-economy')} className="mt-5 text-center cursor-pointer text-h-primary fw-700 body pricing-table-see-additional-features-link">
                                              <div className="pricing-table-see-additional-features-link-text-see" id="hgrwordpress-hosting-pricing_table-click_here_to_see_all_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Veja todas as características <i className="material-icons notranslate"> keyboard_arrow_down </i></div>
                                              </div><a onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-cloud-economy')} className="pricing-table-see-additional-features-link-text-hide text-h-primary fw-700 d-none" id="hgrwordpress-hosting-pricing_table-click_here_to_see_less_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Ver menos características <i className="material-icons notranslate"> keyboard_arrow_up </i></div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div id="pricing-table-plan-hosting-wp-hostinger-premium" data-ga-inview="wordpress-hosting_main_pricing_table_wordpress_products_4" data-ga-products="{&quot;id&quot;:&quot;hosting:wp_hostinger_premium&quot;,&quot;name&quot;:&quot;hosting:wp_hostinger_premium&quot;,&quot;dimension6&quot;:8.9900000000000002,&quot;dimension7&quot;:12.99,&quot;dimension8&quot;:25.989999999999998,&quot;dimension9&quot;:65}" data-ga-position="4" data-ga-product-group="pricing-table" className="pricing-table-plan bg-white position-relative w-100 
              pricing-table--2020 pricing-table-shadow-2020
              pricing-table-plan--red mt-15-xl pricing-table-plan--order-2">
                              <div className="h-100 d-flex justify-content-between flex-column">
                                  <div className="pricing-table__most-popular text-center w-100 bg-red border-radius-3 text-white  fw-700 pl-15 pr-15 pt-2 pb-2 text-uppercase label pt-10 pb-10">Mais popular</div>
                                  <div className="pricing-table-plan__padding pt-35 pb-40 h-100 d-flex justify-content-between flex-column">
                                      <div className="d-flex flex-column ">
                                          <p className="text-center pt-title text-h-meteorite-dark">
                                              WordPress Starter
                                          </p>
                                          <p className="mt-10 text-center mh-50-md pt-description text-h-meteorite-dark">Perfeito para sites pessoais</p>
                                          <div className="d-flex align-items-center justify-content-center mt-20"><s className="currency-selector-price-symbol mr-5 text-content-gray pt-discounted-price white-space-no-wrap" data-original-price="25.99">R$25,99</s>
                                              <div className="body l200 fw-700 p-1 border-radius-round pr-10 pl-10 text-center text-white secondary danger  small discount-labels-pricing-table">
                                                  ECONOMIZE 65% </div>
                                          </div>
                                          <div className="price-block ">
                                              <div className="price-block-wrapper  pricing-table__price">
                                                  <div className="text-h-black text-center fw-700 lh-1 mt-5 pricing-table-plan__price d-flex justify-content-center"><span className="price__symbol pricing-table-price__symbol currency-selector-symbol">R$</span><span className="price__price pricing-table-price__price currency-selector-price">8,99</span><span className="pt-title align-self-end lh-1">/mês</span></div>
                                              </div>
                                          </div>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left width-100">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>100 Websites</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Contas de email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>20 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Largura de Banda <span className="pricing-table-tooltip cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="Isso significa que nós não iremos definir um limite para a quantidade de largura de bandas ou de sites que você pode usar na operação normal de um site pessoal ou de um pequeno negócio, desde que ele cumpra nosso Acordo de Uso.">Ilimitada</span></div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Domínio e SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features  d-flex">
                                                  <div>Jetpack Grátis</div>
                                              </li>
                                          </ul>
                                          <ul className="mt-20 mt-40-lg pricing-table__features text-left width-100 d-none">
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>100 Websites</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Contas de email</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>20 GB de Armazenamento SSD</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Largura de Banda <span className="pricing-table-tooltip cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="Isso significa que nós não iremos definir um limite para a quantidade de largura de bandas ou de sites que você pode usar na operação normal de um site pessoal ou de um pequeno negócio, desde que ele cumpra nosso Acordo de Uso.">Ilimitada</span></div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Domínio e SSL Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WordPress Gerenciado</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features mb-15 d-flex">
                                                  <div>Jetpack Grátis</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>LiteSpeed Cache</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Aceleração WordPress</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>WooCommerce</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Proteção Cloudflare</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Integração com Github</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Suporte 24/7</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Garantia de Uptime de 99.9%</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciamento DNS</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Gerenciador de acessos</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Bases de Dados MySQL Ilimitadas</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>100 Subdomínios</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Contas FTP Ilimitadas</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Cronjobs Ilimitados</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature-- pt-features mb-15 d-flex">
                                                  <div>Acesso SSH</div>
                                              </li>
                                              <li className=" pricing-table-new-holder-tables-holder-table-bottom-features-feature--limited pt-features  d-flex">
                                                  <div>Backups Semanais</div>
                                              </li>
                                          </ul>
                                      </div>
                                      <div>
                                          <div className="mt-60  w-100 mw-350 pricing-table-bottom-button m-auto"><a data-ga-button="" data-ga-button-parent="pricing-table" className="d-flex" href="cart/add/hosting-wp-hostinger-premium_list_wordpress-hosting_main_pricing_table_wordpress_products_4.html" id="hgrwordpress-hosting-pricing_table-add_to_cart-hosting-wp-hostinger-premium"><button className=" w-100 text-white button m-auto pt-10 pb-10 border-radius-3 ripple-secondary-rounded">Adicionar ao Carrinho</button></a></div>
                                          <p className="currency-selector-price-symbol-additional pricing-table-renewal-price renewal-price text-center text-content-grey pt-renewal mt-15" data-original-price="12.99" data-original-string-with-variable="%price%/mensal quando você renovar">R$12,99/mensal quando você renovar</p>
                                          <div onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-hostinger-premium')} className="mt-5 text-center cursor-pointer text-h-red fw-700 body pricing-table-see-additional-features-link">
                                              <div className="pricing-table-see-additional-features-link-text-see" id="hgrwordpress-hosting-pricing_table-click_here_to_see_all_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Veja todas as características <i className="material-icons notranslate"> keyboard_arrow_down </i></div>
                                              </div><a onClick={() => scrollToTargetWithNavigationOffset('pricing-table-plan-hosting-wp-hostinger-premium')} className="pricing-table-see-additional-features-link-text-hide text-h-red fw-700 d-none" id="hgrwordpress-hosting-pricing_table-click_here_to_see_less_features-">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                      Ver menos características <i className="material-icons notranslate"> keyboard_arrow_up </i></div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
     
      <div className="pt-35 pt-40-sm pt-50-lg pt-65-xxl">
        <div className="container">
          <h2 className="text-h-meteorite-dark text-center">Está procurando mais alguma coisa?</h2>
        </div>
        <div id="web-hosting-carousel">{/**/}</div>
      </div>
      <div className="section-spaces section-spaces--bottom faq faq-new-2020">
        <div className="container">
          <h2 className="text-center">Perguntas Frequentes sobre Hospedagem WordPress</h2>
          <p className="mt-15 mt-20-md text-center paragraph">Encontre respostas para perguntas frequentes sobre WordPress</p>
          <div className="panel-group faq-block mt-15 mt-50-md mt-70-xxl" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default border box-shadow border-radius-6 mt-20 mt-30-md">
              <div className="panel-heading border-0" role="tab" id="heading1">
                <div className="faq-button" role="button" data-target="#collapse1" data-toggle="collapse" aria-expanded="true">
                  <h5 className="w-85">O que é o WordPress?</h5>
                </div>
              </div>
              <div id="collapse1" className="panel-collapse collapse show" role="tabpanel">
                <div className="panel-body text-h-dark-gray paragraph fw-400 fw-600-md">
                  <p className>O WordPress é um sistema de gestão de conteúdo do mais alto nível. Ele é a melhor ferramenta de criação de sites no mundo hoje. É fácil de usar, eficiente, bem construído e altamente customizável, com milhões de plugins, temas e tutoriais disponíveis na internet. Desde classificados de empregos até blogs, portfólios digitais e lojas e ecommerce; todos os tipos de site podem ser (e são) turbinados pelo CMS WordPress. Muitos sites de renome têm o WordPress rodando por trás das cenas; TechCrunch, The New Yorker e Sony Music são alguns exemplos.</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default border box-shadow border-radius-6 mt-20 mt-30-md">
              <div className="panel-heading border-0" role="tab" id="heading2">
                <div className="faq-button" role="button" data-target="#collapse2" data-toggle="collapse" aria-expanded="true">
                  <h5 className="w-85">Para que o WordPress é usado?</h5>
                </div>
              </div>
              <div id="collapse2" className="panel-collapse collapse show" role="tabpanel">
                <div className="panel-body text-h-dark-gray paragraph fw-400 fw-600-md">
                  <p className>O WordPress está atualmente no coração de 34% dos sites da internet; o que é muito mais do que qualquer outra ferramenta ou framework. Isso mostra o quão versátil, multipropósito e eficiente é o WordPress. Não importa se você é um desenvolvedor web ou dono de pequeno negócio; o WordPress vai aparecer numa conversa sobre criação de site.</p>
                  <p className="mt-20">Não importa se você está pensando em criar um portfólio digital ou se está pensando em criar um índice de empregos para o seu negócio; se você quer começar a vender seus produtos online ou se quer criar um blog para o site da sua empresa; o WordPress pode ser a resposta.</p>
                  <p className="mt-20">Existem várias razões pela qual o WP é tão popular. Primeiro, é de código aberto e possui um oceano de plugins e temas gratuitos que podem facilitar a sua vida. Segundo, é fácil de usar, e, mesmo se você precisar de ajuda em algum momento, há milhares de tutoriais úteis disponíveis que podem ajudá-lo!</p>
                  <p className="mt-20">Portanto, se você está se perguntando se pode criar o site dos seus sonhos com o WordPress, provavelmente a resposta é "sim". Mas, claro, fique à vontade para entrar em contato conosco e vamos acionar nossos especialistas em WordPress para te aconselhar!</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default border box-shadow border-radius-6 mt-20 mt-30-md">
              <div className="panel-heading border-0" role="tab" id="heading3">
                <div className="faq-button" role="button" data-target="#collapse3" data-toggle="collapse" aria-expanded="true">
                  <h5 className="w-85">O que é hospedagem WordPress?</h5>
                </div>
              </div>
              <div id="collapse3" className="panel-collapse collapse show" role="tabpanel">
                <div className="panel-body text-h-dark-gray paragraph fw-400 fw-600-md">
                  <p className>Assim como você aluga um apartamento para armazenar todas as coisas que você possui na sua casa, você aluga uma hospedagem WordPress para armazenar todos os arquivos e pastas que compõe seu site. Normalmente, uma hospedagem WordPress significa um host de servidores da web otimizados e ajustados para executar sites WordPress com máximo desempenho.</p>
                  <p className="mt-20">A instalação da hospedagem WordPress na Hostinger leva apenas um clique. Dentro de alguns momentos da instalação, você estará pronto para ajustar seu site e adicionar conteúdo como quiser. Ele vem com plugins de cache pré-instalados e aprimoramentos de segurança que ajudam você a ficar online mais rápido do que imagina!</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default border box-shadow border-radius-6 mt-20 mt-30-md">
              <div className="panel-heading border-0" role="tab" id="heading4">
                <div className="faq-button" role="button" data-target="#collapse4" data-toggle="collapse" aria-expanded="true">
                  <h5 className="w-85">O que é Hospedagem WordPress Gerenciada?</h5>
                </div>
              </div>
              <div id="collapse4" className="panel-collapse collapse show" role="tabpanel">
                <div className="panel-body text-h-dark-gray paragraph fw-400 fw-600-md">
                  <p className>Uma hospedagem gerenciada do WordPress tem como responsabilidades a otimização do site/ servidor, ajustes técnicos, gerenciamento de atualizações, etc. Enquanto a turma da Hostinger mantém em dia a lista de coisas que tem pra fazer, você tem tempo suficiente para se concentrar no que é mais importante: produzir e publicar conteúdo e gerar mais tráfego.</p>
                  <p className="mt-20">Além disso, uma hospedagem gerenciada do WordPress vem com servidores que foram ajustados precisamente para a execução do WordPress. Além de uma instalação simples, também otimizamos tudo e aplicamos medidas de segurança, para que, em alguns instantes, seu site esteja pronto para ser publicado.</p>
                  <p className="mt-20">Em suma, se você não é especialista em hospedagem WordPress ou não tem muito tempo disponível, uma hospedagem WordPress gerenciada será ideal para você.</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default border box-shadow border-radius-6 mt-20 mt-30-md">
              <div className="panel-heading border-0" role="tab" id="heading5">
                <div className="faq-button" role="button" data-target="#collapse5" data-toggle="collapse" aria-expanded="true">
                  <h5 className="w-85">Qual a diferença entre Hospedagem de Site e hospedagem WordPress?</h5>
                </div>
              </div>
              <div id="collapse5" className="panel-collapse collapse show" role="tabpanel">
                <div className="panel-body text-h-dark-gray paragraph fw-400 fw-600-md">
                  <p className>A principal diferença entre uma hospedagem de site simples e uma hospedagem WordPress é que essa última é construída com o único propósito de impulsionar sites WordPress. Isso significa que os servidores usados para uma hospedagem WordPress são configurados de tal maneira que eles podem rodar qualquer quantidade de sites WordPress com máximo desempenho e velocidade. Fazer o mesmo com uma simples hospedagem de sites iria exigir vários ajustes no nível da máquina, instalações de plugins e ajustes de memória.</p>
                  <p className="mt-20">Além da velocidade e desempenho, a hospedagem WordPress Hostinger também vem com medidas de segurança pré-configuradas. Você não precisa configurar regras de firewall ou executar testes de malware, como faria em uma hospedagem de site simples. Você se preocupa em criar conteúdo de alta qualidade e promover seu site.</p>
                  <p className="mt-20">E mais, com a hospedagem WordPress Hostinger, você recebe suporte dedicado 24/7/365 de profissionais altamente capacitados em WordPress. Eles sabem tudo sobre sua conta de hospedagem e podem fornecer uma solução instantânea para problemas aparentemente complicados do WordPress. Por outro lado, com uma hospedagem de site simples, você também terá ajuda, mas o nível de experiência com WordPress na prática é outro!</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default border box-shadow border-radius-6 mt-20 mt-30-md">
              <div className="panel-heading border-0" role="tab" id="heading6">
                <div className="faq-button" role="button" data-target="#collapse6" data-toggle="collapse" aria-expanded="true">
                  <h5 className="w-85">Como criar um site WordPress?</h5>
                </div>
              </div>
              <div id="collapse6" className="panel-collapse collapse show" role="tabpanel">
                <div className="panel-body text-h-dark-gray paragraph fw-400 fw-600-md">
                  <p className>A melhor parte de criar um site WordPress é que qualquer um pode fazer o seu! Veja como:</p>
                  <li className="bullet mt-20">Use a pesquisa de domínio da Hostinger para escolher um nome de domínio para seu site.</li>
                  <li className="bullet mt-20">Tenha um plano de hospedagem WordPress gerenciado pela Hostinger e registre seu domínio WordPress de graça!</li>
                  <li className="bullet mt-20">Use o instalador de 1 clique na sua conta de hospedagem WordPress da Hostinger para instalar o WordPress no seu site.</li>
                  <li className="bullet mt-20">Acesse a base de conhecimento com tutoriais de WordPress da Hostinger para saber tudo sobre o WordPress.</li>
                  <li className="bullet mt-20">Instale um tema do WordPress na sua conta.</li>
                  <li className="bullet mt-20">Defina e encontre os plugins essenciais do WordPress e instale-os na sua conta.</li>
                  <li className="bullet mt-20">Comece a criar e publicar conteúdos no seu site, que agora já deve estar no ar!</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-new " id="footer">
        <div className="container">
          <div className="footer-new__holder">
            <div className="footer-new-holder__left"><img src="assets/images/logo-homepage2020-f9c79137d7.svg" alt="Brand logo" className="footer-new-holder-right-holder__brand" />
              <p className="footer-new-holder-right-holder__text">A Hostinger é líder mundial em oferecer hospedagem de sites para milhões de pessoas que realmente gostam de economizar, sem perder as vantagens de um host com qualidade.</p>
              <div className="footer-new-holder-right-holder__socials"><a id="hgr-footer-footer-link-social_linkedin" href="https://www.linkedin.com/company/hostingerbrasil" rel="noopener noreferrer nofollow" target="_blank"><img src="assets/images/footer/socials/2020/linked-in-9e151ae65e.svg" alt="Linked-in logo" /></a><a id="hgr-footer-footer-link-social_instagram" href="https://www.instagram.com/hostinger.br/" rel="noopener noreferrer nofollow" target="_blank"><img src="assets/images/footer/socials/2020/instagram-94f23c2897.svg" alt="Instagram logo" /></a><a id="hgr-footer-footer-link-social_facebook" href="https://www.facebook.com/Hostinger.com.br/" rel="noopener noreferrer nofollow" target="_blank"><img src="assets/images/footer/socials/2020/facebook-2c67b6b239.svg" alt="Facebook logo" /></a><a id="hgr-footer-footer-link-social_twitter" href="https://twitter.com/HostingerBrasil" rel="noopener noreferrer nofollow" target="_blank"><img src="assets/images/footer/socials/2020/twitter-2433310c32.svg" alt="Twitter logo" /></a></div>
              <ul className="footer-new-holder-right-holder__payments">
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/visa-5d68dadf24.png" src="assets/images/payments/homepage-2020-payments/visa-5d68dadf24.png" alt="visa" /></li>
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png" src="assets/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png" alt="mastercard" /></li>
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/amex-3bde454827.png" src="assets/images/payments/homepage-2020-payments/amex-3bde454827.png" alt="amex" /></li>
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/jcb-221f9eb145.png" src="assets/images/payments/homepage-2020-payments/jcb-221f9eb145.png" alt="jcb" /></li>
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/discover-1e5edf3f39.png" src="assets/images/payments/homepage-2020-payments/discover-1e5edf3f39.png" alt="discover" /></li>
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/elo-1429607d42.png" src="assets/images/payments/homepage-2020-payments/elo-1429607d42.png" alt="elo" /></li>
                <li className="footer-new-holder-right-holder-payments__payment"><img className="h-100 lazy-load-image lazy-loaded-src" data-src="assets/images/payments/homepage-2020-payments/hipercard-ee2c34f5d8.png" src="assets/images/payments/homepage-2020-payments/hipercard-ee2c34f5d8.png" alt="hipercard" /></li>
                <li className="footer-new-holder-right-holder-payments__link"><a href="pagamentos.html" id="hgr-footer-footer-link-add_more">E Mais</a></li>
              </ul>
            </div>
            <div className="footer-new-holder__right">
              <div className="footer-new-holder-right__holder">
                <div className="footer-new__list">
                  <h5 className="footer-new-list__title">Hospedagem</h5>
                  <ul className="footer-new-list__holder">
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-web_hosting">Hospedagem de Sites</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-vps_hosting">Servidor VPS Linux</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-minecraft-server-hosting">Servidores de Minecraft</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-cloud_hosting">Hospedagem Cloud</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-wordpress_hosting">Hospedagem WordPress</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-email_hosting">Hospedagem de Email</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-cms_hosting">Hospedagem para CMS</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-ecommerce_hosting">Hospedagem de Loja Virtual</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-free_hosting">Hospedagem Grátis</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-website_builder">Construtor de Sites Grátis</a></li>
                  </ul>
                </div>
                <div className="d-none d-md-block">
                  <div className="footer-new__list">
                    <h5 className="footer-new-list__title">Companhia</h5>
                    <ul className="footer-new-list__holder">
                      <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-about_us">Sobre a Hostinger</a></li>
                      <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-contacts">Fale Conosco</a></li>
                      <li className="footer-new-list-holder__item"><a href="index.html" rel="nofollow" id="hgr-footer-footer-link-career_page">Carreira</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-new-holder-right__holder">
                <div className="footer-new__list">
                  <h5 className="footer-new-list__title">Domínios</h5>
                  <ul className="footer-new-list__holder">
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-domain_checker">Registro de Domínio</a></li>
                    <li className="footer-new-list-holder__item"><a href="transferencia-de-dominio.html" id="hgr-footer-footer-link-transfer_domain">Transferência de Dominio</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-free_domain">Registro de Domínio Grátis</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-free_xyz">Domínio XYZ</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-buy_ssl">Comprar SSL</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-whois">Pesquisar WHOIS</a></li>
                  </ul>
                </div>
                <div className="d-none d-md-block">
                  <div className="footer-new__list">
                    <h5 className="footer-new-list__title">Ajuda</h5>
                    <ul className="footer-new-list__holder">
                      <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-report_abuse">Denunciar Abuso</a></li>
                      <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-knowledge_base">Base de Conhecimento</a></li>
                      <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-tutorials">Tutoriais</a></li>
                      <li className="footer-new-list-holder__item"><a href="https://www.hostinger.com/blog/" id="hgr-footer-footer-link-blog">Blog </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-new-holder-right__holder">
                <div className="footer-new__list">
                  <h5 className="footer-new-list__title">Informações</h5>
                  <ul className="footer-new-list__holder">
                    <li className="footer-new-list-holder__item"><a href="https://stats.hostinger.com" id="hgr-footer-footer-link-server_status">Status do servidor</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-affiliate_program">Programa de Afiliados</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-user_reviews">Avaliações</a></li>
                    <li className="footer-new-list-holder__item"><a href="pagamentos.html" id="hgr-footer-footer-link-payments">Métodos de Pagamento</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-wall_of_fame">Prêmio</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-influencers">Influenciadores do YouTube</a></li>
                  </ul>
                </div>
                <div className="footer-new__list">
                  <h5 className="footer-new-list__title">legal</h5>
                  <ul className="footer-new-list__holder">
                    <li className="footer-new-list-holder__item"><a href="index.html" rel="nofollow" id="hgr-footer-footer-link-privacy">Política de Privacidade</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" rel="nofollow" id="hgr-footer-footer-link-terms">Termos de Serviço</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-new-holder-right__holder d-md-none">
                <div className="footer-new__list">
                  <h5 className="footer-new-list__title">Companhia</h5>
                  <ul className="footer-new-list__holder">
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-about_us">Sobre a Hostinger</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-contacts">Fale Conosco</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" rel="nofollow" id="hgr-footer-footer-link-career_page">Carreira</a></li>
                  </ul>
                </div>
                <div className="footer-new__list">
                  <h5 className="footer-new-list__title">Ajuda</h5>
                  <ul className="footer-new-list__holder">
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-report_abuse">Denunciar Abuso</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-knowledge_base">Base de Conhecimento</a></li>
                    <li className="footer-new-list-holder__item"><a href="index.html" id="hgr-footer-footer-link-tutorials">Tutoriais</a></li>
                    <li className="footer-new-list-holder__item"><a href="https://www.hostinger.com/blog/" id="hgr-footer-footer-link-blog">Blog </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-new__bottom ">
            <p className="footer-new-bottom__copyright footer-new-bottom__text">© 2004-2020 hostinger.com.br - Serviço de domínio barato e a melhor hospedagem barata.</p>
            <p className="footer-new-bottom__no-vat footer-new-bottom__text">Preços listados sem VAT</p>
          </div>
        </div>
      </footer>
      <meta name="google-site-verification" content="c8lYJUmmC9bGRSxxnQg0Uy8okfesMTUMK5a5GP8xJLc" />
      <script src="//code.tidio.co/p2elkxzohremonjhpzr3vzyx8hyyka2w.js" async></script>
    </>
  )
}

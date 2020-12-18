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
                                  <svg width="125" height="25" viewBox="0 0 125 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.9987 12.1589C25.0072 12.8086 24.9735 13.4583 24.8893 14.108C24.7966 14.7578 24.6619 15.3989 24.4681 16.023C24.426 16.1769 24.3671 16.3307 24.3165 16.4932L24.2323 16.724L24.1397 16.9548C24.0807 17.1087 24.0218 17.2626 23.9544 17.4079L23.7523 17.8524C23.4659 18.4423 23.1374 19.0065 22.7753 19.5366C22.4047 20.0752 22.0004 20.571 21.5625 21.0412C21.1161 21.5114 20.6445 21.9474 20.1475 22.3406C19.6422 22.7339 19.1116 23.0929 18.5557 23.4007C17.9999 23.717 17.4272 23.982 16.8292 24.2043C16.2396 24.4265 15.6248 24.5975 15.01 24.7343C14.3952 24.8625 13.7719 24.948 13.1487 24.9822C12.5254 25.0164 11.9022 24.9993 11.2874 24.948C10.6725 24.8882 10.0577 24.7856 9.45973 24.6317C8.86175 24.4778 8.27219 24.2898 7.7079 24.0504C7.14362 23.811 6.59617 23.5374 6.07399 23.2211C5.55181 22.9048 5.0549 22.5543 4.58326 22.1611C4.12003 21.7678 3.67366 21.3575 3.26939 20.9129C2.86512 20.4599 2.49454 19.9897 2.15765 19.4853C1.82076 18.9894 1.52599 18.4594 1.25648 17.9208C0.995386 17.3823 0.776408 16.818 0.591119 16.2538C0.40583 15.681 0.271075 15.0997 0.170008 14.5098C0.0689409 13.92 0.0184076 13.3301 0.00156309 12.7317C-0.00685914 12.1418 0.0184076 11.5519 0.0857854 10.9621C0.161585 10.3722 0.262652 9.79086 0.414252 9.21808C0.565853 8.64531 0.751142 8.08963 0.986964 7.5425C1.90499 5.37109 3.42941 3.49889 5.34968 2.17381C5.82975 1.8404 6.33508 1.54974 6.84884 1.28473C7.37102 1.02826 7.91004 0.80599 8.46591 0.617914L8.88702 0.489681C9.0302 0.446937 9.17337 0.412741 9.30813 0.378546L9.51868 0.327253L9.72924 0.284508C9.87242 0.258862 10.0156 0.224666 10.1588 0.199019C10.7315 0.0964329 11.321 0.0365908 11.9022 0.00239528H11.9443C13.334 -0.0574468 14.5046 1.01116 14.5804 2.40463C14.6562 3.7981 13.6035 4.98639 12.2306 5.06333C12.1296 5.07188 12.0201 5.06333 11.919 5.06333C10.5378 4.96074 9.13126 5.34544 7.95215 6.12339C6.77304 6.90134 5.83817 8.06398 5.33284 9.38906C5.19808 9.71392 5.10543 10.0644 5.02963 10.4064C4.95384 10.7483 4.91172 11.0988 4.88646 11.4493C4.86961 11.7998 4.86961 12.1589 4.89488 12.5094C4.92857 12.8599 4.9791 13.2104 5.06332 13.5438C5.39179 14.8945 6.14137 16.117 7.15204 16.9976C7.4047 17.2113 7.67422 17.4165 7.95215 17.596C8.23008 17.7755 8.52486 17.9208 8.81964 18.0576C9.11442 18.1859 9.42604 18.2884 9.72924 18.3739C10.0409 18.4594 10.3525 18.5107 10.6641 18.5449C10.9757 18.5791 11.2958 18.5877 11.6074 18.5791C11.919 18.562 12.2306 18.5278 12.5338 18.468C12.837 18.4081 13.1318 18.3397 13.4182 18.2371C13.7045 18.1346 13.9825 18.0234 14.252 17.8781C15.3216 17.331 16.2144 16.4761 16.8123 15.4673C16.9639 15.2194 17.0903 14.9544 17.2082 14.6894C17.3261 14.4243 17.4187 14.1508 17.503 13.8772L17.5619 13.672C17.5788 13.6037 17.5956 13.5267 17.6124 13.4583C17.6209 13.4241 17.6293 13.3899 17.6377 13.3557L17.6546 13.2446C17.663 13.1762 17.6882 13.0993 17.6967 13.0309C17.7388 12.7402 17.764 12.4496 17.7893 12.1589L17.8062 11.9452C17.9578 9.92764 19.6843 8.42304 21.672 8.56837C23.5333 8.70515 24.9651 10.2867 24.9987 12.1589Z" fill="#468EF1"/>
                                    <path d="M19.1684 7.60402C21.0104 7.60402 22.5036 6.08834 22.5036 4.21867C22.5036 2.34899 21.0104 0.833313 19.1684 0.833313C17.3264 0.833313 15.8332 2.34899 15.8332 4.21867C15.8332 6.08834 17.3264 7.60402 19.1684 7.60402Z" fill="#FF6BC1"/>
                                    <path d="M32.3188 21.3361H35.7854V3.56522H32.3188V21.3361Z" fill="#468EF1"/>
                                    <path d="M48.8177 21.3361H52.2843V13.0617C52.2843 9.16635 50.0062 7.02773 46.812 7.02773C45.054 7.02773 43.5683 7.79152 42.6769 8.98813V7.23141H39.2104V21.3361H42.6769V13.5454C42.6769 11.2795 43.8902 10.0574 45.7721 10.0574C47.6044 10.0574 48.8177 11.2795 48.8177 13.5454V21.3361Z" fill="#468EF1"/>
                                    <path d="M66.2281 17.3134C66.129 12.1451 58.5273 13.7491 58.5273 11.1777C58.5273 10.363 59.1959 9.8283 60.4835 9.8283C61.8453 9.8283 62.6872 10.5666 62.7863 11.6614H66.1043C65.9062 8.86083 63.9005 7.00227 60.5825 7.00227C57.1902 7.00227 55.1598 8.88629 55.1598 11.2286C55.1598 16.3969 62.9101 14.7929 62.9101 17.3134C62.9101 18.1282 62.1672 18.7646 60.8054 18.7646C59.4187 18.7646 58.4531 17.9499 58.3293 16.8806H54.8379C54.9865 19.503 57.3883 21.5652 60.8301 21.5652C64.1729 21.5652 66.2281 19.7321 66.2281 17.3134Z" fill="#468EF1"/>
                                    <path d="M69.6184 16.957C69.6184 20.1904 71.3764 21.3361 74.0011 21.3361H76.1801V18.3318H74.5706C73.4811 18.3318 73.1097 17.9245 73.1097 16.9825V10.1593H76.1801V7.23141H73.1097V3.74343H69.6184V7.23141H67.9842V10.1593H69.6184V16.957Z" fill="#468EF1"/>
                                    <path d="M77.782 14.2328C77.782 18.6374 80.5553 21.5652 84.0218 21.5652C86.2008 21.5652 87.7608 20.4959 88.5779 19.2738V21.3361H92.0692V7.23141H88.5779V9.24273C87.7608 8.07158 86.2503 7.00227 84.0466 7.00227C80.5553 7.00227 77.782 9.8283 77.782 14.2328ZM88.5779 14.2837C88.5779 16.957 86.8446 18.4337 84.938 18.4337C83.0809 18.4337 81.3229 16.9061 81.3229 14.2328C81.3229 11.5596 83.0809 10.1338 84.938 10.1338C86.8446 10.1338 88.5779 11.6105 88.5779 14.2837Z" fill="#468EF1"/>
                                    <path d="M108.702 14.2837C108.702 9.8283 105.607 7.00227 101.645 7.00227C97.6834 7.00227 94.5883 9.8283 94.5883 14.2837C94.5883 18.7137 97.5844 21.5652 101.546 21.5652C105.533 21.5652 108.702 18.7137 108.702 14.2837ZM98.1043 14.2837C98.1043 11.4577 99.7633 10.1084 101.596 10.1084C103.428 10.1084 105.137 11.4577 105.137 14.2837C105.137 17.0843 103.378 18.4591 101.546 18.4591C99.6891 18.4591 98.1043 17.0843 98.1043 14.2837Z" fill="#468EF1"/>
                                    <path d="M120.852 21.3361H124.319V13.0617C124.319 9.16635 122.041 7.02773 118.847 7.02773C117.089 7.02773 115.603 7.79152 114.712 8.98813V7.23141H111.245V21.3361H114.712V13.5454C114.712 11.2795 115.925 10.0574 117.807 10.0574C119.639 10.0574 120.852 11.2795 120.852 13.5454V21.3361Z" fill="#468EF1"/>
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

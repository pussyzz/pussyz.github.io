<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Dashboard    </title>
    <link rel="stylesheet" href="https://zyo.lol/template/css/main.css?ver=1370715394">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://zyo.lol/template/css/tippy_scale.css" />
    <link rel="stylesheet" href="https://zyo.lol/template/css/aos.css" />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://zyo.lol/template/css/iziToast.min.css" />
    <link rel="icon" type="image/x-icon" href="./template/img/logo.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="./template/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./template/img/favicon-16x16.png">
    <meta name="KEYWORDS" content="zyo, zyo bio, zyobio, zyobiolink, zyolol, zyo lol, biolink, biolinkdiscordconnect, bio, profile, link, zyolol, zyo.lol, zyo bio, zyo.lol bio link, zyo.lol profile, zyo.lol link, zyo.lol biolink, zyo.lol biolink discord connect, zyo.lol biolink discord">
    <meta name="theme-color" content="#162054">
    <meta name="application-name" content="zyo.lol">
    <meta name="generator" content="zyo.lol">
    <meta property="og:title" content="zyo.lol: All-in-one. Lightning-fast.">
    <meta name="description" content="Build a sleek, modern profile in seconds — with blazing-fast performance and zero hassle. Trusted by thousands worldwide.">
    <meta property="og:description" content="Build a sleek, modern profile in seconds — with blazing-fast performance and zero hassle. Trusted by thousands worldwide.">
    <meta name="twitter:description" content="Build a sleek, modern profile in seconds — with blazing-fast performance and zero hassle. Trusted by thousands worldwide.">
    <meta property="og:url" content="https://zyo.lol">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="zyo.lol: All-in-one. Lightning-fast.">
    <meta property="og:image" content="https://zyo.lol/template/img/site_metadata.png">
    <meta name="twitter:image" content="https://zyo.lol/template/img/site_metadata.png">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://zyo.lol/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zyo.lol/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    </script>
</head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S74ZMJ88EG" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script type="7db7671a2a49827b2b31d7e9-text/javascript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S74ZMJ88EG');
</script>
<noscript>Your browser does not support JavaScript!</noscript>
<nav class="nav" data-aos="fade-down" data-aos-duration="800">
    <div class="nav-module">
        <div class="site-nav" id="nav-bar-landing">
            <div class="nav-container">
                <a href="/" class="left">
                    <img src="https://zyo.lol/template/img/circleLogo.png" alt="logo.png" class="img">
                    <p class="logo-text">zyo<span class="accent">.lol</span></p>
                </a>
                <div class="right">
                    <ul class="list" id="nav_menu">
                        <li class="item"><a href="leaderboard" class="text">Leaderboard</a></li>
                        <li class="item"><a href="pricing" class="text">Premium</a></li>
                        <li class="item"><a href="overview" class="button">Dashboard</a></li>
                    </ul>
                </div>  
                <div class="right-respon">
                    <div class="icon" id="nav-bar-respon" onresize="if (!window.__cfRLUnblockHandlers) return false; removeCrossDashboard()" onclick="if (!window.__cfRLUnblockHandlers) return false; toggleList('nav-list'); toggleBar(this)" data-cf-modified-7db7671a2a49827b2b31d7e9-="">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
            <ul id="nav-list" class="list-respon">
                <div class="top" >
                    <li class="item"><a href="leaderboard" class="text">Leaderboard</a></li>
                    <li class="item"><a href="pricing" class="text">Premium</a></li>
                </div>
                <div class="bottom">
                    <li class="button_item"><a href="overview" class="button">Dashboard</a></li>
                </div>
            </ul>
        </div>
    </div>
    <div id="overlay" class="overlay"></div>
    <script type="7db7671a2a49827b2b31d7e9-text/javascript">
        window.addEventListener('scroll', function() {
            if(scrollY > 50){
                document.getElementById('nav-bar-landing').classList.add('scrolled');
            } else {
                document.getElementById('nav-bar-landing').classList.remove('scrolled');
            }
        });
        document.addEventListener("DOMContentLoaded", () => {
            function hasLoginToken() {
                return document.cookie.split('; ').some(row => row.startsWith('loginState='));
            }
            const loggedIn = hasLoginToken();
            const buttonResponsive = document.querySelector('#nav-list .bottom')
            const headerMenu = document.querySelector('#nav_menu');
            if(loggedIn){
                buttonResponsive.innerHTML = 
                `
                    <li class="button"><a href="overview" class="button">Dashboard</a></li>
                `
                headerMenu.innerHTML = 
                `
                    <li class="item"><a href="leaderboard" class="text">Leaderboard</a></li>
                    <li class="item"><a href="pricing" class="text">Premium</a></li>
                    <li class="item"><a href="overview" class="button">Dashboard</a></li>
                `
            } else {
                buttonResponsive.innerHTML = 
                `
                    <li class="item"><a href="login" class="text">Login</a></li>
                    <li class="button"><a href="register" class="button">Sign Up Now</a></li>
                `
                headerMenu.innerHTML = 
                `
                    <li class="item"><a href="leaderboard" class="text">Leaderboard</a></li>
                    <li class="item"><a href="pricing" class="text">Premium</a></li>
                    <li class="item"><a href="login" class="text">Login</a></li>
                    <li class="item"><a href="register" class="button">Sign Up Now</a></li>
                `
            }
        });
    </script>
</nav>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="7db7671a2a49827b2b31d7e9-|49" defer></script></html><head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
</head>
<body class="landing">
    <div class="grid-pattern"></div>
    <div class="background-glow-top-left"></div>
    <div class="background-glow-bottom-right"></div>
    <main style="overflow: hidden;">
        <section class="hero">
            <div class="hero-glow-top-left"></div>
            <div class="hero-glow-bottom-right"></div>
            <div class="container">
                <div class="grid">
                    <div class="left">
                        <div class="badge" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
                            <div class="dot blue">
                                <div class="ping"></div>
                                <div class="core"></div>
                            </div>
                            <div class="text">Happy New Year</div>
                        </div>
                        <div class="heading">
                            <h1 class="line" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0">All-in-one.</h1>
                            <div class="highlight" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                                <div class="glow"></div>
                                <span class="text">
                                    Lightning-<span class="accent">fast.</span>
                                </span>
                            </div>
                            <h1 class="line" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800">For everyone.</h1>
                        </div>
                        <div class="hero-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
                            <div class="description">
                                Build a sleek, modern profile in seconds — with blazing-fast performance and zero hassle. Trusted by thousands worldwide.
                            </div>
                            <div class="input-flex">
                                <p>zyo.lol/</p>
                                <input placeholder="username" oninput="if (!window.__cfRLUnblockHandlers) return false; linkChangeField(this, 'claimLink')" data-cf-modified-7db7671a2a49827b2b31d7e9-="">
                                <div class="input-glow"></div>
                                <a href="/register" class="btn" id="claimLink">Claim link</a>
                            </div>
                            <div class="stats">
                                <div class="card">
                                    <div class="dot green">
                                        <div class="ping"></div>
                                        <div class="core"></div>
                                    </div>
                                    <div class="content">
                                        <div class="value">13,800+</div>
                                        <div class="label">CREATORS</div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="dot blue">
                                        <div class="ping"></div>
                                        <div class="core"></div>
                                    </div>
                                    <div class="content">
                                        <div class="value">362</div>
                                        <div class="label">PREMIUM</div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="dot orange">
                                        <div class="ping"></div>
                                        <div class="core"></div>
                                    </div>
                                    <div class="content">
                                        <div class="value">945.9K</div>
                                        <div class="label">VIEWS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
                        <div class="card" id="card_preview">
                            <div class="bio_info">
                                <div class="bio_view" data-tippy-content="Profile Views">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"></path></svg>
                                    <p class="seen" style="font-size: 14px;">6,239</p>
                                </div>
                                <div class="bio_view" data-tippy-content="UID">
                                    <svg width="1em" height="1em" viewBox="0 0 20 20" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2" stroke-linecap="round" d="M4 7.25h12m-12 5.5h12M7.75 4l-1 12m6.5-12-1 12"></path></svg>
                                    <p class="seen" style="font-size: 14px;">1</p>
                                </div>
                            </div>
                            <div class="img-container">
                                <img src="https://r2.zyo.lol/avatar_1a4f5fb1ba49.webp" alt="avatar" class="img">
                                <img src="https://cdn.discordapp.com/avatar-decoration-presets/a_55393fb776ecc721bc551823d4ea52df.png" alt="decor" class="img-effect">
                            </div>
                            <p class="username">
                                wowie
                            </p>
                            <div class="badge-container singleColor badgeGlow">
                                <svg data-tippy-content="Bug Hunter" id="bughunter" width="1em" height="1em" fill="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path class="clr-i-solid clr-i-solid-path-1" d="M30.83 20H29a19.3 19.3 0 0 0-1.18-5.73l1.46-.79a1 1 0 0 0-.95-1.76l-3 1.28H10.78L7.7 11.72a1 1 0 0 0-.95 1.76l1.5.8A19.4 19.4 0 0 0 7.07 20h-1.9a1 1 0 0 0 0 2H7.1a14.6 14.6 0 0 0 1.66 6.17l-1.89 1.32A1 1 0 1 0 8 31.12l1.84-1.29A10.3 10.3 0 0 0 17 33.6V15h2v18.6a10.3 10.3 0 0 0 7.16-3.75L28 31.12a1 1 0 1 0 1.15-1.64l-1.86-1.3A14.6 14.6 0 0 0 28.94 22h1.89a1 1 0 0 0 0-2m-19.92-2.26a1.95 1.95 0 1 1 1.95 1.95 1.95 1.95 0 0 1-1.95-1.95M14 27.46a1.58 1.58 0 1 1 1.58-1.58A1.58 1.58 0 0 1 14 27.46m8.43 0A1.58 1.58 0 1 1 24 25.88a1.58 1.58 0 0 1-1.58 1.58Zm1.13-7.77a1.95 1.95 0 1 1 1.95-1.95 1.95 1.95 0 0 1-1.95 1.95"></path><path class="clr-i-solid clr-i-solid-path-2" d="M11.23 5.26a1.7 1.7 0 0 0 .54-.32 6 6 0 0 1 .89.58 7.4 7.4 0 0 1 .95.94 18.5 18.5 0 0 0-2.82 3.24c-.4.57.09 1.28.86 1.28h12.79c.77 0 1.26-.71.86-1.28a18.4 18.4 0 0 0-2.88-3.28 7.3 7.3 0 0 1 .91-.9 6 6 0 0 1 .89-.58 1.69 1.69 0 1 0-.56-1.51 7.5 7.5 0 0 0-1.32.83 9 9 0 0 0-1.19 1.18A5.85 5.85 0 0 0 18 4.3a5.9 5.9 0 0 0-3.17 1.19 9 9 0 0 0-1.22-1.21 7.5 7.5 0 0 0-1.32-.83 1.68 1.68 0 1 0-1.11 1.83Z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                <svg data-tippy-content="Premium" id="premium" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 47.05 47.05" xml:space="preserve"><path d="M43.656 16.983c-.73-2.255.267-5.41-1.1-7.287-1.379-1.895-4.699-1.915-6.594-3.295-1.876-1.365-2.914-4.523-5.168-5.255-2.174-.706-4.859 1.216-7.271 1.216-2.41 0-5.097-1.922-7.271-1.216-2.254.731-3.292 3.89-5.169 5.255-1.895 1.38-5.213 1.4-6.592 3.295-1.365 1.877-.369 5.032-1.1 7.287C2.685 19.157 0 21.114 0 23.525s2.686 4.367 3.393 6.542c.73 2.254-.267 5.41 1.1 7.287 1.379 1.896 4.698 1.915 6.593 3.294 1.876 1.366 2.914 4.524 5.168 5.257 2.175.705 4.86-1.217 7.271-1.217s5.097 1.922 7.271 1.217c2.254-.731 3.292-3.891 5.168-5.256 1.896-1.379 5.214-1.399 6.595-3.295 1.364-1.876.367-5.032 1.098-7.286.707-2.175 3.394-4.133 3.394-6.542-.003-2.412-2.688-4.368-3.395-6.543M23.524 40.031c-9.102 0-16.507-7.403-16.507-16.506 0-9.102 7.405-16.507 16.507-16.507s16.507 7.405 16.507 16.507-7.405 16.506-16.507 16.506"></path><path d="M23.524 9.714c-7.616 0-13.812 6.195-13.812 13.811s6.196 13.812 13.812 13.812c7.617 0 13.812-6.196 13.812-13.812S31.141 9.714 23.524 9.714m9.199 12.188-4.47 3.71 1.435 5.629a.84.84 0 0 1-.317.881.835.835 0 0 1-.935.029l-4.912-3.103-4.91 3.103a.834.834 0 0 1-1.252-.91l1.434-5.629-4.469-3.71a.833.833 0 0 1 .479-1.472l5.796-.376 2.149-5.396a.833.833 0 0 1 1.548 0l2.148 5.396 5.797.376a.83.83 0 0 1 .738.574.84.84 0 0 1-.259.898"></path></svg>
                                <svg data-tippy-content="Verified" id="verify" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m21.56 10.739-1.36-1.58c-.26-.3-.47-.86-.47-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0l-1.57 1.37c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52m-5.4-.63-4.83 4.83a.75.75 0 0 1-1.06 0l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06"></path></svg>
                                <svg data-tippy-content="Developer" id="developer" width="1em" height="1em" fill="currentColor" viewBox="0 -2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631M2.414 8.256 5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.1 1.1 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0 1.1 1.1 0 0 1 0 1.494zm15.172 0L14.05 4.524a1.1 1.1 0 0 1 0-1.493.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0 1.1 1.1 0 0 1 0-1.492z"></path></svg>
                                <svg data-tippy-content="Staff" id="staff" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 386.214 386.214" xml:space="preserve"><path d="M364.427 259.214c-14.051-14.052-32.733-21.79-52.605-21.79-10.619 0-20.888 2.23-30.302 6.431a27.5 27.5 0 0 0-3.799-4.756l-54.188-54.188 95.825-95.825c2.645 2.529 5.363 3.085 7.197 3.085 4.06 0 6.8-2.535 7.308-3.042l22.197-22.197c3.771-3.771 5.563-7.434 5.477-11.197-.135-5.897-4.599-9.968-9.767-14.683-1.53-1.395-3.111-2.838-4.7-4.426s-3.03-3.169-4.426-4.699c-4.782-5.243-8.912-9.771-14.939-9.771-3.676 0-7.255 1.793-10.941 5.48l-22.281 22.281c-2.746 2.746-5.103 9.066.122 14.426l-95.821 95.821-56.131-56.131c4.012-9.232 6.137-19.269 6.137-29.638 0-19.872-7.739-38.555-21.791-52.607C112.95 7.737 94.27 0 74.4 0a74.6 74.6 0 0 0-19.615 2.62c-2.513.684-4.569 2.752-5.238 5.268-.683 2.565.096 5.206 2.121 7.232.266.267 26.668 26.873 35.46 35.665 1.31 1.31 1.193 4.015 1.058 4.81l-.069.489c-1.005 10.964-3.034 24.215-4.565 27.493-3.303 1.581-16.767 3.637-27.911 4.633l-.149-.013-.302.072c-.082.009-.26.024-.508.024-1.253 0-3.096-.349-4.758-2.011-9.151-9.152-34.537-34.35-34.779-34.59-2.06-2.06-4.147-2.492-5.536-2.492-3.225 0-6.112 2.349-7.022 5.713C-4.357 80.592 3 108.214 21.786 127c14.051 14.051 32.733 21.79 52.606 21.79 10.369 0 20.407-2.126 29.639-6.137l56.131 56.131-22.013 22.013a24.95 24.95 0 0 0-11.618-2.839c-6.693 0-12.972 2.592-17.678 7.298l-12.282 12.283a26 26 0 0 0-3.578-.254c-6.692 0-12.971 2.592-17.677 7.298l-64.351 64.35c-4.707 4.706-7.299 10.984-7.299 17.678 0 6.693 2.592 12.971 7.299 17.678l28.44 28.44c4.706 4.706 10.984 7.298 17.678 7.298 6.692 0 12.971-2.592 17.677-7.298l64.35-64.35c4.707-4.706 7.299-10.984 7.299-17.678q-.002-1.815-.254-3.579l12.282-12.282c4.707-4.707 7.299-10.984 7.299-17.678 0-4.121-.986-8.082-2.839-11.618l22.013-22.013 54.188 54.188a27.6 27.6 0 0 0 4.755 3.798c-4.201 9.414-6.431 19.684-6.431 30.302 0 19.873 7.739 38.555 21.791 52.607 14.048 14.048 32.729 21.785 52.6 21.786h.003c6.63 0 13.23-.882 19.614-2.62 2.513-.684 4.568-2.752 5.236-5.268.682-2.565-.097-5.206-2.122-7.23-.266-.267-26.667-26.874-35.459-35.666-1.31-1.31-1.193-4.015-1.058-4.811l.069-.489c1.005-10.964 3.034-24.214 4.565-27.493 3.303-1.581 16.767-3.637 27.911-4.633l.149.013.301-.072c.083-.009.261-.024.508-.024 1.253 0 3.097.349 4.76 2.012 9.15 9.151 34.536 34.349 34.778 34.589 2.06 2.06 4.147 2.493 5.536 2.493 3.225 0 6.112-2.349 7.023-5.713 6.945-25.677-.413-53.299-19.2-72.086M86.206 329.713l-7.226 7.226c-7.778 7.778-20.506 7.778-28.284 0l-3.94-3.941c-7.778-7.778-7.778-20.506 0-28.284l7.226-7.226c7.778-7.778 20.506-7.778 28.284 0l3.941 3.941c7.777 7.778 7.777 20.506-.001 28.284m159.465-84.042a7.48 7.48 0 0 1-5.304 2.197 7.48 7.48 0 0 1-5.304-2.197l-88.414-88.414a7.5 7.5 0 0 1 10.607-10.607l27.519 27.519 24.749 24.749 36.146 36.147a7.5 7.5 0 0 1 .001 10.606"></path></svg>
                                <svg data-tippy-content="Support" id="support" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.847 223.847" xml:space="preserve"><path d="M203.443 70.344C192.592 29.254 154.992 0 111.926 0 69.125 0 31.57 29.243 20.524 70.321 9.726 72.324 1.521 81.815 1.521 93.186v26.203c0 10.198 6.601 18.884 15.754 22.011v10.959c0 32.902 26.771 59.67 59.677 59.67h7.343c2.933 6.937 9.806 11.817 17.798 11.817h19.652c10.65 0 19.315-8.664 19.315-19.313 0-10.652-8.665-19.317-19.315-19.317h-19.652c-7.99 0-14.862 4.878-17.796 11.813h-7.345c-24.635 0-44.677-20.039-44.677-44.67V135.14a7.5 7.5 0 0 0-7.5-7.5c-4.551 0-8.254-3.702-8.254-8.252V93.186c0-4.551 3.703-8.254 8.219-8.254l1.769.008h.036a7.5 7.5 0 0 0 7.347-5.996C41.475 41.892 74.293 15 111.926 15c37.876 0 70.725 26.873 78.108 63.898a7.5 7.5 0 0 0 7.355 6.033h1.683c4.551 0 8.254 3.703 8.254 8.254v26.203c0 4.55-3.703 8.252-8.254 8.252a7.5 7.5 0 0 0 0 15c12.822 0 23.254-10.431 23.254-23.252V93.186c-.001-11.329-8.144-20.791-18.883-22.842M102.094 200.216h19.652a4.32 4.32 0 0 1 4.315 4.317 4.32 4.32 0 0 1-4.315 4.313h-19.652a4.32 4.32 0 0 1-4.313-4.313 4.32 4.32 0 0 1 4.313-4.317"></path><path d="M111.921 36.041c-38.733 0-70.245 31.509-70.245 70.238 0 38.735 31.512 70.249 70.245 70.249s70.244-31.514 70.244-70.249c0-38.729-31.511-70.238-70.244-70.238m0 125.487c-30.462 0-55.245-24.785-55.245-55.249 0-30.458 24.783-55.238 55.245-55.238s55.244 24.78 55.244 55.238c0 30.465-24.782 55.249-55.244 55.249"></path></svg>
                            </div>
                            <p class="description">
                                Website made in Vietnam.
                            </p>
                            <div class="links"> 
                                <a href="https://roblox.com/users/1425066339/profile" target="_blank" rel="noopener noreferrer" class="link singleColor">
                                    <svg id="robloxSvg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0.16 0 23.68 24">
                                        <path fill="currentColor" d="M5.164 0L.16 18.928L18.836 24L23.84 5.072Zm8.747 15.354l-5.219-1.417l1.399-5.29l5.22 1.418l-1.4 5.29z"></path>
                                    </svg>
                                </a>
                                <button onclick="if (!window.__cfRLUnblockHandlers) return false; copyTextFromParent(this)" class="link singleColor" data-cf-modified-7db7671a2a49827b2b31d7e9-="">
                                    <svg id="discordSvg" viewBox="0 0 24 24" width="1em" height="1em" fill="Currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                                    </svg>
                                    <p class="svg_text" style="display: none; font-size: 14px;">wowie2k</p>
                                </button>
                                <button onclick="if (!window.__cfRLUnblockHandlers) return false; copyTextFromParent(this)" class="link singleColor" data-cf-modified-7db7671a2a49827b2b31d7e9-="">
                                    <svg id="emailSvg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="2 4 20 16">
                                        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path>
                                    </svg>
                                    <p class="svg_text" style="display: none; font-size: 14px;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="462d2a2d2e272821737306212b272f2a6825292b">[email&#160;protected]</a></p>
                                </button>
                                <a href="https://tiktok.com/@kh.wie" target="_blank" rel="noopener noreferrer" class="link singleColor">
                                    <svg id="tiktokSvg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="Currentcolor" viewBox="0 0 448 512">
                                        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suggest">
                <p class="text">Scroll for explore</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 640 640"><path d="M297.4 470.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 402.7 150.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
            </div>
            <div class="bottom-gradient"></div>
        </section>
        <section class="feature">
            <div class="container">
                <div class="heading">
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                        <div class="label">The Toolbox</div>
                        <h2 class="title">
                            Everything you need
                            <br>
                            to shine online.
                        </h2>
                    </div>
                    <div class="description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                        A powerful suite of tools designed to help you build, grow, and manage your digital presence with ease.
                    </div>
                </div>
                <div class="feature-flex">
                    <div class="card large" data-aos="fade-right" data-aos-duration="800" data-aos-delay="0">
                        <div class="glow"></div>
                        <div class="content">
                            <div class="icon">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.39 2.3-1.03.35-.35.6-.78.7-1.27.1-.5.05-1.01-.13-1.48-.15-.38-.2-.8-.14-1.21.07-.4.25-.76.54-1.06.3-.3.66-.47 1.06-.54.41-.06.82-.01 1.21.14.47.18.98.22 1.48.13.49-.1.92-.35 1.27-.7.64-.6 1.03-1.38 1.03-2.3 0-5.5-4.5-10-10-10Z"></path></svg>
                            </div>
                                <h1 class="title">Advanced Customization</h1>
                            <p class="description">Create stunning bio pages with our advanced customization tools and unique effects.</p>
                        </div>
                        <div class="demo">
                            <div class="container" data-aos="fade-up-right" data-aos-duration="1200" data-aos-delay="0">
                                <div class="browser-bar">
                                    <div class="browser-dots">
                                        <span class="dot red"></span>
                                        <span class="dot yellow"></span>
                                        <span class="dot green"></span>
                                    </div>
                                    <div class="browser-url">
                                        <span>zyo.lol/<span id="active-tab-name">overview</span></span>
                                    </div>
                                </div>
                                <div class="browser-content">
                                    <div class="browser-mockup">
                                            <div class="mockup-main">
                                                <div class="overview">
                                                    <div class="top">
                                                        <div class="title">Account</div>
                                                        <div class="tabs">
                                                            <span class="tab active"></span>
                                                            <span class="tab"></span>
                                                            <span class="tab"></span>
                                                        </div>
                                                    </div>
    
                                                    <div class="metric">
                                                        <div class="label"></div>
                                                        <div class="value"></div>
                                                    </div>
                                                    <div class="metric">
                                                        <div class="label"></div>
                                                        <div class="value"></div>
                                                    </div>
                                                    <div class="metric">
                                                        <div class="label"></div>
                                                        <div class="value"></div>
                                                    </div>
                                                    <div class="metric">
                                                        <div class="label"></div>
                                                        <div class="value"></div>
                                                    </div>
    
                                                    <div class="grid">
                                                        <div class="panel chart">
                                                            <div class="title">
                                                                <span class="muted"></span>
                                                            </div>
                                                            <div class="chart-area">
                                                                <div class="chart-grid"></div>
                                                            </div>
                                                        </div>
                                                        <div class="panel manager">
                                                            <div class="title"></div>
                                                            <div class="sub"></div>
                                                            <div class="btns">
                                                                <div class="row"></div>
                                                                <div class="row"></div>
                                                            </div>
                                                            <div class="connect-row">
                                                                <div class="btn"></div>
                                                                <div class="x"></div>
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
                    <div class="group">
                        <div class="card medium" data-aos="fade-left" data-aos-duration="800" data-aos-delay="0">
                            <div class="header">
                                <div class="content">
                                    <div class="flex">
                                        <div class="icon">
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="3"><path d="m13 2-2 10h8L7 22l2-10H1L13 2z"></path></svg>
                                        </div>
                                        <h1 class="title">Lightning Speed</h1>
                                    </div>
                                    <div class="badge">
                                        <div class="dot aqua">
                                            <div class="ping"></div>
                                            <div class="core"></div>
                                        </div>
                                        <div class="text">FASTEST HOSTING</div>
                                    </div>
                                </div>
                            </div>
                            <div class="demo" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                <div class="performance-widget">
                                    <div class="score-header">
                                        <div class="score-label">
                                            <div class="dot aqua">
                                                <div class="ping"></div>
                                                <div class="core"></div>
                                            </div>
                                            <span class="label">PERFORMANCE SCORE</span>
                                        </div>
                                        <div class="score-value">
                                            <span id="score-current">0</span>/100
                                        </div>
                                    </div>
                                    <div class="connection-bar">
                                        <div class="connection-fill" id="connection-fill"></div>
                                        <span class="connection-text">SECURE CONNECTION VERIFIED</span>
                                    </div>
                                    <div class="status-cards">
                                        <div class="card">
                                            <div class="label">STATUS</div>
                                            <div class="value" id="status-value">CHECKING...</div>
                                        </div>
                                        <div class="card">
                                            <div class="label">ASSETS</div>
                                            <div class="value" id="assets-value">LOADING...</div>
                                        </div>
                                        <div class="card">
                                            <div class="label">REGION</div>
                                            <div class="value" id="region-value">DETECTING...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                            <div class="card small">
                                <div class="icon mobile">
                                    <svg width="1em" height="1em" viewBox="-32.5 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M101.184 92.93c0 15.725.028 31.451-.023 47.177a78 78 0 0 1-.562 9.67 13.1 13.1 0 0 1-1.8 5.434c-2.913 4.415-7.38 7.974-12.732 9.092a74 74 0 0 1-13.098 1.772c-14.872.381-29.753.491-44.632.595-3.005.021-6.018-.409-9.022-.688-8.376-.777-12.748-6.245-15.06-13.552-1.152-3.647-1.37-7.606-1.85-11.444C.72 127.58 1.086 114.11 1.257 100.647q.21-16.64.352-33.28c.094-12.71-.005-25.423.263-38.128A58.7 58.7 0 0 1 3.57 16.492C5.477 8.779 10.85 4.81 18.582 3.253c17.953-3.616 36.03-3.13 54.141-2.18 6.41.336 12.154 2.625 17.497 6.091a18.6 18.6 0 0 1 7.828 10.408 49 49 0 0 1 1.89 10.768 1126 1126 0 0 1 1.286 34.539c.205 10.013.043 20.033.043 30.05zm-88.601 39.108a693 693 0 0 1 79.447-2.444c.077-1.35.183-2.403.19-3.457.164-25.524-.324-51.695-.187-77.222a25.5 25.5 0 0 0-.259-3.855c-.862-5.851-1.061-11.059-2.057-16.887a59 59 0 0 0-1.859-7.47 9.05 9.05 0 0 0-5.296-5.719 29 29 0 0 0-11.557-2.679c-4.204-.077-8.416-.027-12.612-.222-12.664-.59-25.186.536-37.663 2.645-3.972.67-6.142 2.824-6.982 6.553a27 27 0 0 0-.647 4.467c-.154 2.794-.209 5.596-.228 8.394q-.244 35.537-.461 71.077c-.046 6.892-.145 13.783-.162 20.675 0 1.904.201 3.809.333 6.144m79 4.991-78.634.927c.514 4.92.274 9.456 1.671 13.771 1.073 3.314 3.371 5.428 7.117 5.491 1.4.024 2.799.135 4.198.141 4.527.016 9.052.007 13.578 0 12.177-.018 24.356.051 36.53-.119a40 40 0 0 0 9.536-1.36c2.869-.756 5.577-2.566 5.9-5.741.423-4.135.105-8.344.105-13.109z"/><path d="M59.234 146.565c-.01 3.453-3.28 6.455-7.111 6.527a6.2 6.2 0 0 1-6.367-6.303 7.087 7.087 0 0 1 6.813-6.857c3.36-.043 6.672 3.255 6.665 6.633"/></g></svg>
                                </div>
                                <div class="title">
                                    Mobile Optimized
                                </div>
                            </div>
                            <div class="card small">
                                <div class="icon secure">
                                    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0m0 66.8v378C394 378 431.1 230.1 432 141.4z"/></svg>
                                </div>
                                <div class="title">
                                    Secure Data
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="platform-features">
            <div class="container">
                <div class="content" >
                    <div class="label" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
                        Platform Features
                    </div>
                    <div class="text-group">
                        <h1 class="title" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
                            Elevate your profile with <span class="accent">powerful features</span>
                        </h1>
                        <p class="description" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" style="transform-origin: left;">
                            Bring links, templates, analytics, and customization together in one clean, beautiful space.
                        </p>
                    </div>
                </div>
                <div class="visual">
                    <div class="glow"></div>
                    <div class="widgets" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                        <div class="widget spotify">
                            <div class="widget-overlay"></div>
                            <svg class="svg" width="1em" height="1em" fill="Currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path></svg>
                        </div>
                        <div class="widget discord">
                            <div class="widget-overlay"></div>
                            <svg class="svg" viewBox="0 0 24 24" width="1em" height="1em" fill="Currentcolor" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                        </div>
                        <div class="widget roblox">
                            <div class="widget-overlay"></div>
                            <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0.16 0 23.68 24"><path fill="currentColor" d="M5.164 0L.16 18.928L18.836 24L23.84 5.072Zm8.747 15.354l-5.219-1.417l1.399-5.29l5.22 1.418l-1.4 5.29z"></path></svg>
                        </div>
                        <div class="widget valorant">
                            <div class="widget-overlay"></div>
                            <svg class="svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M19.8 26.1h-7.4q-.45 0-.6-.3c-2.5-3.2-5.1-6.3-7.6-9.5-.1-.2-.2-.3-.2-.5V6.6c0-.1 0-.2.1-.2h.1c5.2 6.5 10.4 13 15.5 19.5 0 0 0 .1.1.1zm8-9.8c-.7.9-1.5 1.8-2.2 2.8q-.3.3-.6.3h-7.2c-.1 0-.2-.1-.1-.2 0 0 0-.1.1-.1 2.4-3 4.7-5.9 7.1-8.9 1-1.2 2-2.5 2.9-3.7 0-.1.1-.1.2-.1h.1v9.3q-.15.45-.3.6"></path></svg>
                        </div>
                        <div class="widget youtube">
                            <div class="widget-overlay"></div>
                            <svg class="svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48 9.6 9.6 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78 2.5 2.5 0 0 0 .61-1 10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"></path></svg>
                        </div>
                    </div>
                    <div class="features" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0">
                        <div class="feature">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            <p class="text">Links</p>
                        </div>
                        <div class="feature">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
                            <p class="text">Templates</p>
                        </div>
                        <div class="feature">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                            <p class="text">Analytics</p>
                        </div>
                        <div class="feature">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3h7v7H3z"></path><path d="M14 3h7v7h-7z"></path><path d="M14 14h7v7h-7z"></path><path d="M3 14h7v7H3z"></path></svg>
                            <p class="text">Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="community">
            <div class="glow"></div>
            <div class="container">
                <div class="header">
                    <div class="title" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">Join Our Community</div>
                    <div class="desciption-group" data-aos="zoom-out" data-aos-duration="600" data-aos-delay="0">
                        <div class="description">
                            13,800+ users are already here — including 360+ premium members enjoying advanced features.
                        </div>
                        <div class="description">
                            What are you waiting for? Join us and take your content to the next level!
                        </div>
                    </div>
                </div>
                <div class="marquee-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                    <div class="marquee-row marquee-fast">
                        <div class="marquee-content" id="marqueeContent1">
                        </div>
                    </div>
                    <div class="marquee-row marquee-medium">
                        <div class="marquee-content" id="marqueeContent2">
                        </div>
                    </div>
                    <div class="marquee-row marquee-fast">
                        <div class="marquee-content" id="marqueeContent3">
                        </div>
                    </div>
                    <div class="marquee-left-overlay"></div>
                    <div class="marquee-right-overlay"></div>
                </div>
            </div>
            <div class="community-footer" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                <div class="group">
                    <div class="avatars" id="overlap-user">
                        <img alt="User" class="avatar " src="">
                        <img alt="User" class="avatar avatar-overlap" src="">
                        <img alt="User" class="avatar avatar-overlap" src="">
                        <img alt="User" class="avatar avatar-overlap" src="">
                        <div class="avatar-badge avatar-overlap">+12K</div>
                    </div>
                    <span class="text">
                        Used by <span class="accent">13,800+</span> users
                    </span>
                </div>
                <div class="logo">
                    <img src="https://zyo.lol/template/img/circleLogo.png" alt="logo" class="img">
                    <span class="text">
                        zyo<span class="accent">.lol</span>
                    </span>
                </div>
            </div>
        </section>
        <section class="pricing">
            <div class="glow-1"></div>
            <div class="glow-2"></div>
            <div class="container">
                <div class="pricing-header">
                    <h1 class="title" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">
                        Choose Your <span class="accent">Plan</span>
                    </h1>
                    <p class="subtitle" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">
                        Simple pricing for everyone
                    </p>
                </div>
                <div class="pricing-cards" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" style="transform-origin: top center;">
                    <div class="card">
                        <div class="header">
                            <span class="label">Personal</span>
                            <h2 class="name">Free</h2>
                            <div class="price-group">
                                <div class="currency">€</div>
                                <div class="price">0.00</div>
                            </div>
                            <div class="description">
                                Perfect for individuals just starting their digital journey.
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="features">
                            <div class="item">
                                <div class="icon inactive">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text inactive">Basic Customize</span>
                            </div>
                            <div class="item">
                                <div class="icon inactive">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text inactive">Basic Effects</span>
                            </div>
                            <div class="item">
                                <div class="icon inactive">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text inactive">Custom Font</span>
                            </div>
                        </div>
                        <a href="register" class="button">Get Started</a>
                    </div>
                    <div class="card premium">
                        <div class="badge">
                            <span class="text">Most Popular</span>
                        </div>
                        <div class="header">
                            <span class="label premium">Premium Tier</span>
                            <h2 class="name">Premium</h2>
                            <div class="price-group">
                                <div class="currency">€</div>
                                <div class="price">3.99</div>
                                <div class="period">/ life-time</div>
                            </div>
                            <div class="description">
                                Unlock full creative control and professional personalization.
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="features">
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Advanced Customize</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Advanced Effect</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Exclusive Badge</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">More Layout</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Description TypeWriter</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Custom Metadata</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Audio Visualizer</span>
                            </div>
                            <div class="item">
                                <div class="icon active">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="text active">Cursor Effect</span>
                            </div>
                        </div>
                        <a href="pricing" class="button premium">Upgrade Now</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9cdd07353a6c99a9',t:'MTc3MTA3Njk1OQ=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
<footer class="footer">
    <div class="container">
        <div class="grid">
            <div class="brand">
                <div class="logo">
                    <span class="logo-text">zyo<span class="accent">.lol</span></span>
                </div>
                <div class="description">
                    Elevate your online presence with the fastest, most customizable bio link platform built for creators.
                </div>
            </div>
            <div class="column">
                <div class="title">General</div>
                <ul class="links">
                    <li>
                        <a href="login" class="link">Login</a>
                    </li>
                    <li>
                        <a href="register" class="link">Register</a>
                    </li>
                    <li>
                        <a href="pricing" class="link">Pricing</a>
                    </li>
                </ul>
            </div>
            <div class="column">
                <div class="title">Community</div>
                <ul class="links">
                    <li>
                        <a href="leaderboard" class="link">Leaderboard</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/zyo" target="_blank" rel="noopener noreferrer" class="link">Discord</a>
                    </li>
                    <li>
                        <a href="pricing" class="link">Premium</a>
                    </li>
                </ul>
            </div>
            <div class="column">
                <div class="title">Legal</div>
                <ul class="links">
                    <li>
                        <a href="privacy" class="link">Privacy</a>
                    </li>
                    <li>
                        <a href="term" class="link">Terms</a>
                    </li>
                    <li>
                        <a href="copyright" class="link">Copyright</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <p class="copyright">© 2026 ZYO.LOL — ALL RIGHTS RESERVED</p>
            <div class="social">
                <a href="https://facebook.com/khangtyler" target="_blank" rel="noopener noreferrer" class="icon">
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg>
                </a>
                <a href="https://discord.gg/zyo" target="_blank" rel="noopener noreferrer" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="1em" width="1em" fill="currentColor"><path d="M524.5 133.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1.1s-.6.4-.8.8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3.1-.6.4-.8.7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3.1.5.2.8s.3.4.5.6c44.4 32.9 94 58 146.8 74.2.4.1.8.1 1.1 0s.7-.4.9-.7c11.3-15.4 21.4-31.8 30-48.8.1-.2.2-.5.2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6.2-.9.3-.5.6-.7c3.1-2.3 6.2-4.7 9.1-7.1.3-.2.6-.4.9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1.7-.2 1-.2s.7.2.9.4c2.9 2.4 6 4.9 9.1 7.2.2.2.4.4.6.7s.2.6.2.9q0 .45-.3.9t-.6.6c-14.7 8.6-30 15.9-45.9 21.8-.2.1-.5.2-.7.4s-.3.4-.4.7-.1.5-.1.8.1.5.2.8c8.8 17 18.8 33.3 30 48.8.2.3.6.6.9.7s.8.1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2.2-.2.4-.4.5-.6s.2-.5.2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2m195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2"/></svg>    
                </a>
            </div>
        </div>
    </div>
</footer>

<script src="./template/js/iziToast.min.js" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script src="./template/js/typewritter.min.js" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script src="./template/js/main.js?v=1.9.3" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script src="./template/js/aos.js" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script type="7db7671a2a49827b2b31d7e9-text/javascript">
    document.addEventListener("DOMContentLoaded", () => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        })
    })
</script><script src="./template/js/tilt.min.js" type="7db7671a2a49827b2b31d7e9-text/javascript"></script>
<script type="7db7671a2a49827b2b31d7e9-text/javascript">
    $(document).ready(function () {
        var selector = "#card_preview";
        $(selector).each(function () {
            var $el = $(this);
            var height = $el.outerHeight();
            var perspective = Math.max(Math.round(height * 0.7), 350);
            $el.tilt({
                maxTilt: 10,
                speed: 1200,
                perspective: perspective,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
            });
        });
    });
    function copyTextFromParent(parentElement) {
        const paragraph = parentElement.querySelector('p');

        if (paragraph) {
            const textToCopy = paragraph.textContent;

            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand('copy');

            document.body.removeChild(textarea);

            showSuccessPopup('Text copied ' + textToCopy);
        } else {
            showErrorPopup('Something went wrong!');
        }
    }
</script>
<script type="7db7671a2a49827b2b31d7e9-text/javascript">
    function linkChangeField(inputEl, linkEl){
        const loginLink = document.getElementById(linkEl);

        inputEl.addEventListener('input', function() {
            const inputValue = inputEl.value;
            if (inputValue) {
                loginLink.href = `/register?claim=${inputValue}`;
            } else {
                loginLink.href = '/register';
            }
        });
    }
</script>
<script type="7db7671a2a49827b2b31d7e9-text/javascript">
    function animateScore() {
        const scoreElement = document.getElementById('score-current');
        const connectionFill = document.getElementById('connection-fill');
        const targetScore = 100;
        const duration = 2000;
        const delayAfterReset = 2000;
        
        function runAnimation() {
            let currentScore = 0;
            const startTime = performance.now();

            function updateScore(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                currentScore = Math.floor(easeProgress * targetScore);
                
                scoreElement.textContent = currentScore;
                connectionFill.style.width = (easeProgress * 100) + '%';
                
                if (progress < 1) {
                    requestAnimationFrame(updateScore);
                } else {
                    scoreElement.textContent = targetScore;
                    connectionFill.style.width = '100%';
                    
                    setTimeout(() => {
                        scoreElement.textContent = 0;
                        connectionFill.style.width = '0%';
                        
                        setTimeout(() => {
                            runAnimation();
                        }, delayAfterReset);
                    }, 4000);
                }
            }
            
            requestAnimationFrame(updateScore);
        }
        
        runAnimation();
    }

    async function loadRealData() {
        const statusValue = document.getElementById('status-value');
        const assetsValue = document.getElementById('assets-value');
        const regionValue = document.getElementById('region-value');

        if (navigator.onLine) {
            try {
                await fetch(window.location.href, { 
                    method: 'HEAD', 
                    cache: 'no-cache'
                });
                statusValue.textContent = 'LIVE';
                statusValue.classList.add('live');
            } catch {
                statusValue.textContent = 'LIVE';
                statusValue.classList.add('live');
            }
        } else {
            statusValue.textContent = 'OFFLINE';
            statusValue.classList.remove('live');
        }

        if ('caches' in window) {
            try {
                const cacheNames = await caches.keys();
                if (cacheNames.length > 0) {
                    assetsValue.textContent = 'CACHED';
                    assetsValue.classList.add('cached');
                    assetsValue.classList.remove('uncached');
                } else {
                    if ('serviceWorker' in navigator) {
                        const registrations = await navigator.serviceWorker.getRegistrations();
                        if (registrations.length > 0) {
                            assetsValue.textContent = 'CACHED';
                            assetsValue.classList.add('cached');
                            assetsValue.classList.remove('uncached');
                        } else {
                            assetsValue.textContent = 'UNCACHED';
                            assetsValue.classList.remove('cached');
                            assetsValue.classList.add('uncached');
                        }
                    } else {
                        assetsValue.textContent = 'UNCACHED';
                        assetsValue.classList.remove('cached');
                        assetsValue.classList.add('uncached');
                    }
                }
            } catch {
                assetsValue.textContent = 'CACHED';
                assetsValue.classList.add('cached');
                assetsValue.classList.remove('uncached');
            }
        } else {
            assetsValue.textContent = 'CACHED';
            assetsValue.classList.add('cached');
            assetsValue.classList.remove('uncached');
        }

        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const regionParts = timezone.split('/');
            if (regionParts.length > 1) {
                regionValue.textContent = regionParts[regionParts.length - 1].replace(/_/g, ' ').toUpperCase();
            } else {
                regionValue.textContent = 'GLOBAL';
            }
            regionValue.classList.add('global');
        } catch {
            regionValue.textContent = 'GLOBAL';
            regionValue.classList.add('global');
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        animateScore();
        setTimeout(loadRealData, 500);
    });
</script>
<script type="7db7671a2a49827b2b31d7e9-text/javascript">
    
    const users = [
                                    { name: "BeBii", avatar: "https://r2.zyo.lol/avatar_e9f7f8168790.jpg" },
                            { name: "ptdat0809", avatar: "https://r2.zyo.lol/avatar_c13058c76663.jpg" },
                            { name: "nhp", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: ".babiboo_", avatar: "https://r2.zyo.lol/avatar_2cb805e1ea80.jpg" },
                            { name: "khagcute", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "kylraa", avatar: "https://r2.zyo.lol/avatar_028e0909eda7.png" },
                            { name: "Gseven", avatar: "https://r2.zyo.lol/avatar_08c55264da56.png" },
                            { name: "subho", avatar: "https://r2.zyo.lol/avatar_1aedec73f6e0.png" },
                            { name: "nhathuyyeu", avatar: "https://r2.zyo.lol/avatar_ca231e330b16.webp" },
                            { name: "sicolaaa", avatar: "https://r2.zyo.lol/avatar_8f97c6f704cc.webp" },
                            { name: "gobacktohell", avatar: "https://r2.zyo.lol/avatar_196167bc56d0.webp" },
                            { name: "Snopy", avatar: "https://r2.zyo.lol/avatar_8099bfb6a67a.webp" },
                            { name: "mykid", avatar: "https://r2.zyo.lol/avatar_e3ae7f0b9c63.jpg" },
                            { name: "namdaynee_", avatar: "https://cdn.discordapp.com/avatars/1379486928960749758/9065142396a03f93597780396c5531b4" },
                            { name: "itzkennji", avatar: "https://cdn.discordapp.com/avatars/742618466732736543/2a94ce4b75822a8d2df3cdb3f4b314dd" },
                            { name: "vzni", avatar: "https://r2.zyo.lol/avatar_47f38111b0aa.webp" },
                            { name: "zz3r", avatar: "https://r2.zyo.lol/avatar_d35aff340efd.jpg" },
                            { name: "zymeo", avatar: "https://r2.zyo.lol/avatar_916092e3ed67.webp" },
                            { name: "ori15.02", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "CelynUwU", avatar: "https://cdn.discordapp.com/avatars/575694102872719360/6b40df685816eceaa35fc7e7229db3a7" },
                            { name: "Wangg", avatar: "https://r2.zyo.lol/avatar_de27dfe54a73.png" },
                            { name: "pinwgien", avatar: "https://r2.zyo.lol/avatar_969e95b80206.jpeg" },
                            { name: "besnaa", avatar: "https://cdn.discordapp.com/avatars/944539132972122152/cd247b101505eee9c41ea6e9833b7cfa" },
                            { name: "123456789", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "valk", avatar: "https://r2.zyo.lol/avatar_url_e1dc2d1142d2.webp" },
                            { name: "emveiu", avatar: "https://r2.zyo.lol/avatar_85f79e0abc03.jpeg" },
                            { name: "cat1", avatar: "https://r2.zyo.lol/avatar_af2771c47762.png" },
                            { name: "bee", avatar: "https://cdn.discordapp.com/avatars/1178236538107215924/5f1f13a13246405d75f31c560f2308d2" },
                            { name: "softie", avatar: "https://r2.zyo.lol/avatar_f96fd600e61b.webp" },
                            { name: "4mireuxx", avatar: "https://r2.zyo.lol/avatar_5b01aab0d7e0.webp" },
                            { name: "zuzict", avatar: "https://r2.zyo.lol/avatar_7f5bdfc050a2.webp" },
                            { name: "nayor", avatar: "https://r2.zyo.lol/avatar_c3ad9f2c9547.gif" },
                            { name: "pth", avatar: "https://r2.zyo.lol/avatar_44f7ed19ca43.jpg" },
                            { name: "ZicPi", avatar: "https://r2.zyo.lol/avatar_da4519645aae.webp" },
                            { name: "vih_", avatar: "https://r2.zyo.lol/avatar_ab8c06041ef3.jpg" },
                            { name: "arnaqueur", avatar: "https://r2.zyo.lol/avatar_b3256759e298.webp" },
                            { name: "vin", avatar: "https://r2.zyo.lol/avatar_a16cfd25822e.webp" },
                            { name: "babykea", avatar: "https://cdn.discordapp.com/avatars/941905157334106202/feed673c61d0204845874fbf1deb6515" },
                            { name: "tdungg", avatar: "https://r2.zyo.lol/avatar_a45b1fc989c5.webp" },
                            { name: "babiiboo", avatar: "https://r2.zyo.lol/avatar_384b46171f12.webp" },
                            { name: "quochuung", avatar: "https://r2.zyo.lol/avatar_fa0a47114aed.jpg" },
                            { name: "kingiuem", avatar: "https://r2.zyo.lol/avatar_url_6484ed77310b.gif" },
                            { name: "Anmaxx_", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "meo", avatar: "https://r2.zyo.lol/avatar_e4cefc4e4a1d.png" },
                            { name: "hqzzz", avatar: "https://r2.zyo.lol/avatar_ac40279bfa21.png" },
                            { name: "wynjen", avatar: "https://cdn.discordapp.com/avatars/1052855923888099388/76f73acb93739e38b8ae1877f92ca401" },
                            { name: "cindylee", avatar: "https://r2.zyo.lol/avatar_bb1c72b248e4.jpeg" },
                            { name: "lil_Vxid", avatar: "https://r2.zyo.lol/avatar_08b7d2290442.jpg" },
                            { name: "tevomm", avatar: "https://r2.zyo.lol/avatar_c3a21d3d009f.png" },
                            { name: "yolooo", avatar: "https://r2.zyo.lol/avatar_17857b907821.webp" },
                            { name: "_hoangcaf", avatar: "https://r2.zyo.lol/avatar_25c30ebba192.jpg" },
                            { name: "Cina", avatar: "https://r2.zyo.lol/avatar_url_33c41372111f.jpg" },
                            { name: "S0n", avatar: "https://cdn.discordapp.com/avatars/853262170120126474/fbf3b2059a197773da37e6d8d8f6c5d2" },
                            { name: "needquagmjnh", avatar: "https://r2.zyo.lol/avatar_a28f26d5d6aa.webp" },
                            { name: "KAA", avatar: "https://cdn.discordapp.com/avatars/1128412535993933854/ce64a24abc27a95549a2bbf4d81da395" },
                            { name: "khoi", avatar: "https://r2.zyo.lol/avatar_88b6add1e038.webp" },
                            { name: "trljnh", avatar: "https://r2.zyo.lol/avatar_e652eb23e425.jpg" },
                            { name: "Aweisi", avatar: "https://r2.zyo.lol/avatar_19b6061e279d.webp" },
                            { name: "wrionolove", avatar: "https://r2.zyo.lol/avatar_54ba58d7522e.webp" },
                            { name: "ernestaz", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "dannyss", avatar: "https://cdn.discordapp.com/avatars/1051241938428383302/0ef3407e0c15b2bae4e56092b76a4816" },
                            { name: "luisfeangyuma", avatar: "https://r2.zyo.lol/avatar_08396aef5ba5.webp" },
                            { name: "c4py", avatar: "https://r2.zyo.lol/avatar_url_185bbc1e8b27.jpg" },
                            { name: "lori", avatar: "https://r2.zyo.lol/avatar_39c7421f97e6.webp" },
                            { name: "tokionight", avatar: "https://r2.zyo.lol/avatar_d0f3a810d2d5.webp" },
                            { name: "heart", avatar: "https://r2.zyo.lol/avatar_url_a66b10375035.jpg" },
                            { name: "2", avatar: "https://r2.zyo.lol/avatar_url_f7e1a69f854c.jpg" },
                            { name: "sexcall", avatar: "https://cdn.discordapp.com/avatars/1459840773649334455/8ead171c1ee2974530111e1ae121fa3a" },
                            { name: "Yang", avatar: "https://cdn.discordapp.com/avatars/1092682548200607824/f4765f3703dffc23b743bb9c9f58f4b8" },
                            { name: "kuakua", avatar: "https://r2.zyo.lol/avatar_d47fdd39aa75.png" },
                            { name: "lilyskylarr", avatar: "https://cdn.discordapp.com/avatars/1354402685591490603/f7f975d57b0f64bb23080c2edfa73207" },
                            { name: "sleepiiw", avatar: "https://r2.zyo.lol/avatar_4fb2884e16d5.webp" },
                            { name: "zyheki", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "bfmaterial", avatar: "https://r2.zyo.lol/avatar_url_5bc704d68bb4.png" },
                            { name: "kin", avatar: "https://r2.zyo.lol/avatar_a2dfa1770cb3.gif" },
                            { name: "Micha.102", avatar: "https://r2.zyo.lol/avatar_f0618a93ef4b.gif" },
                            { name: "www", avatar: "https://r2.zyo.lol/avatar_ffad7e48dc8e.webp" },
                            { name: "tranhaonem", avatar: "https://r2.zyo.lol/avatar_3bf614b5b77a.png" },
                            { name: "nayxiki", avatar: "https://r2.zyo.lol/avatar_4d8d7969321a.webp" },
                            { name: "tuannigga", avatar: "https://r2.zyo.lol/avatar_a0a7856e6154.gif" },
                            { name: "blooms.iv", avatar: "https://r2.zyo.lol/avatar_d80979058b43.jpg" },
                            { name: "QuinT", avatar: "https://r2.zyo.lol/avatar_cb4b7f1f8fe8.jpg" },
                            { name: "conghaii", avatar: "https://cdn.discordapp.com/avatars/874647102536450109/eafc4e4e7263e9c1a6e3502520a136ca" },
                            { name: "j3rryy", avatar: "https://r2.zyo.lol/avatar_2befd0837dee.jpg" },
                            { name: "koi", avatar: "https://r2.zyo.lol/avatar_bcecf81e577f.jpg" },
                            { name: ".00", avatar: "https://r2.zyo.lol/avatar_f5f877a877f0.gif" },
                            { name: "cambeu", avatar: "https://r2.zyo.lol/avatar_4695b9e6fb02.webp" },
                            { name: ".555", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "charist", avatar: "https://r2.zyo.lol/avatar_a4cfb003c0e5.webp" },
                            { name: "jobby.18x", avatar: "https://r2.zyo.lol/avatar_8b2b5b0a4dea.jpeg" },
                            { name: "hoangtuthainguyen_", avatar: "https://r2.zyo.lol/avatar_4251da7ae965.jpeg" },
                            { name: "LTN911", avatar: "https://r2.zyo.lol/avatar_d023d76a08d6.jpg" },
                            { name: "youngp", avatar: "https://r2.zyo.lol/avatar_9c7e75d530bb.webp" },
                            { name: "bachtu", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "miasociu", avatar: "https://zyo.lol/template/img/blackImg.jpg" },
                            { name: "gim", avatar: "https://cdn.discordapp.com/avatars/1163495835749863504/9fbcbfc3ec538c35aeafb88a38778f6b" },
                            { name: "vera", avatar: "https://r2.zyo.lol/avatar_56d126a409bd.webp" },
                            { name: "luv", avatar: "https://r2.zyo.lol/avatar_cbc03bb3c7bd.webp" },
                            { name: "phucs", avatar: "https://cdn.discordapp.com/avatars/1116267626612658236/e78a84784eda1d60697e99b7d2ee3f28" },
                            { name: "ryolazy", avatar: "https://r2.zyo.lol/avatar_8a7ef7a63c70.jpeg" },
                        ]
    function initializeOverlapUser() {
        const overlapUser = document.getElementById('overlap-user');
        const avatars = overlapUser.querySelectorAll('.avatar');
        avatars.forEach(avatar => {
            avatar.src = users[Math.floor(Math.random() * users.length)].avatar;
            avatar.classList.add('avatar-overlap');
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        initializeMarquee()
        initializeOverlapUser()
    })
    function initializeMarquee() {
        const row1Users = users.slice(0, 33)
        const row2Users = users.slice(33, 66)
        const row3Users = users.slice(66, 99)
        createMarqueeRow("marqueeContent1", row1Users)
        createMarqueeRow("marqueeContent2", row2Users)
        createMarqueeRow("marqueeContent3", row3Users)
    }

    function createMarqueeRow(containerId, userList) {
        const marqueeContent = document.getElementById(containerId)
        if (!marqueeContent) return
        const profilesHTML = userList
            .map(
            (user) => `
                <div class="profile-card" onclick="visitProfile('${user.name}')">
                    <img loading="lazy" src="${user.avatar}" alt="${user.name}" class="profile-avatar">
                    <span class="profile-name">${user.name}</span>
                </div>
            `,
            )
            .join("")

        marqueeContent.innerHTML = profilesHTML + profilesHTML + profilesHTML + profilesHTML
    }
    function visitProfile(username) {
        window.open(`https://zyo.lol/${username.toLowerCase()}`, "_blank")
    }
</script>
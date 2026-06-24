{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function calculateLove()\{\
\
    let boy = document.getElementById("boy").value.trim();\
    let girl = document.getElementById("girl").value.trim();\
\
    if(boy === "" || girl === "")\{\
        alert("Please enter both names");\
        return;\
    \}\
\
    document.getElementById("loading").style.display = "block";\
    document.getElementById("result").innerHTML = "";\
\
    setTimeout(function()\{\
\
        let combined = (boy + girl).toLowerCase();\
\
        let total = 0;\
\
        for(let i = 0; i < combined.length; i++)\{\
            total += combined.charCodeAt(i);\
        \}\
\
        let score = total % 101;\
\
        let message = "";\
\
        if(score <= 30)\{\
            message = "\uc0\u55357 \u56837  Needs More Understanding";\
        \}\
        else if(score <= 70)\{\
            message = "\uc0\u55357 \u56842  Good Connection";\
        \}\
        else\{\
            message = "\uc0\u10084 \u65039  Perfect Match";\
        \}\
\
        document.getElementById("loading").style.display = "none";\
\
        document.getElementById("result").innerHTML =\
        `$\{boy\} \uc0\u10084 \u65039  $\{girl\}<br><br>\
        Love Score: $\{score\}%<br><br>\
        $\{message\}`;\
\
    \},3000);\
\}}
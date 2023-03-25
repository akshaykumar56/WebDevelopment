import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import Loading from './Loading';

export class News extends Component {
  //  Articles is a variable of class 
  articles=[
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "David Williams",
    "title": "No-lo alcohol drinks that are proud of what they are",
    "description": "So often no and low alcohol beverages are simply masquerading as something they aren't, but these drinks are very happy to be just what they say on the labelBlurred Vines Spark Alt Wine (£16, thewinesociety.com) Since writing last week’s column on the steady …",
    "url": "https://www.theguardian.com/food/2023/jan/15/no-lo-alcohol-drinks-that-are-proud-of-what-they-are",
    "urlToImage": "https://i.guim.co.uk/img/media/ecca15d80a6226bb985be17e3d6a454bb6256396/0_382_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=d2f11bde23f48dfde8662223cf7f4f79",
    "publishedAt": "2023-01-15T06:00:06Z",
    "content": "Blurred Vines Spark Alt Wine (£16, thewinesociety.com) Since writing last weeks column on the steady improvement in the quality of non-alcoholic wine, Ive been, as I always am at this time of the yea… [+3077 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple Collecting Feedback From Dispatchers Receiving False 911 Calls From Skiers",
    "description": "Emergency dispatch centers continue to complain about Apple's new Crash Detection feature triggering an influx of false 911 calls from skiers and snowboarders.\n\n\n\n\n\nA report today from the New York Post notes that New York's Greene County and Pennsylvania's C…",
    "url": "https://www.macrumors.com/2023/01/14/apple-feedback-on-false-911-calls/",
    "urlToImage": "https://images.macrumors.com/t/AjinEZgq63hZdpUlLhyz3F4kGoo=/2200x/article-new/2023/01/Apple-Crash-Detection-Skiing.jpeg",
    "publishedAt": "2023-01-15T01:09:39Z",
    "content": "Emergency dispatch centers continue to complain about Apple's new Crash Detection feature triggering an influx of false 911 calls from skiers and snowboarders.\r\nA report today from the New York Post … [+2569 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Fernando Silva",
    "title": "Hands-on: Does this MagSafe Duo alternative solve the problems of Apple's own?",
    "description": "When Apple released the Magsafe Duo back in December 2020, most people (including myself), thought it was a great idea. A MagSafe charger that could charge your iPhone and your Apple Watch in a slim, foldable, and portable design. It was, also, one of the few…",
    "url": "https://9to5mac.com/2023/01/14/hands-on-does-this-magsafe-duo-alternative-solve-the-problems-of-apples-own/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/IMG_4972-min-edited.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-15T00:49:50Z",
    "content": "When Apple released the Magsafe Duo back in December 2020, most people (including myself), thought it was a great idea. A MagSafe charger that could charge your iPhone and your Apple Watch in a slim,… [+2667 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HYPEBEAST"
    },
    "author": "info@hypebeast.com (Hypebeast)",
    "title": "SZA Drops Four-Track Bundle for \"Kill Bill\"",
    "description": "SZA has shared a four-track bundle for her hit single, \"Kill Bill.\"The pack features the original version of the song that appears in her latest album, SOS, along its with sped up, instrumental and vocals-only versions. It arrives shortly after the release of…",
    "url": "https://hypebeast.com/2023/1/sza-kill-bill-single-bundle-sped-up-instrumental-vocals-versions-stream",
    "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F01%2Ftw-sza-kill-bill-single-bundle-sped-up-instrumental-vocals-versions-stream.jpg?w=960&cbr=1&q=90&fit=max",
    "publishedAt": "2023-01-15T04:25:18Z",
    "content": "SZA has shared a four-track bundle for her hit single, “Kill Bill.”\r\nThe pack features the original version of the song that appears in her latest album, SOS, along its with sped up, instrumental and… [+742 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Wwwhatsnew.com"
    },
    "author": "Nelson Herrera",
    "title": "¿Por qué los auriculares con cable son mejores que los inalámbricos? Aquí hay 3 razones que lo afirman",
    "description": "Sí, claro que los auriculares inalámbricos son convenientes, más cómodos y más fáciles de llevar que aquellos que son con cable. No obstante y aunque los inalámbricos tienen sus respectivas peculiaridades, podemos decir que los que tienen cable los superan en…",
    "url": "https://wwwhatsnew.com/2023/01/15/por-que-los-auriculares-con-cable-son-mejores-que-los-inalambricos-aqui-hay-3-razones-que-lo-afirman/",
    "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2023/01/Por-que-los-auriculares-con-cable-son-mejores-que-los-inalambricos-aqui-hay-3-razones-que-lo-afirman.jpg",
    "publishedAt": "2023-01-15T03:00:58Z",
    "content": "Sí, claro que los auriculares inalámbricos son convenientes, más cómodos y más fáciles de llevar que aquellos que son con cable. No obstante y aunque los inalámbricos tienen sus respectivas peculiari… [+2367 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Srad.jp"
    },
    "author": "headless",
    "title": "2022 年第 4 四半期の PC 出荷台数、パンデミック前を下回る",
    "description": "IDC と Gartner がそれぞれ発表した 2022 年第 4 四半期の PC 出荷台数推計値によると、COVID-19 パンデミックの影響で増加していた PC 需要がパンデミック前のレベルを下回っている\n(IDC のプレスリリース、\nGartner のプレスリリース)。\n\n第 4 四半期の PC 出荷台数推計値は IDC が前年同四半期比 2,630 万台減 (28.1 % 減) の 6,720 万台、Gartner が 2,600 万台減 (28.5 % 減) の 6,529 万台。パンデミック前の 20…",
    "url": "https://mobile.srad.jp/story/23/01/15/0123207/",
    "urlToImage": "https://srad.jp/static/topics/notepc_64.png",
    "publishedAt": "2023-01-15T01:45:00Z",
    "content": "IDC Gartner 2022 4 PC COVID-19 PC \r\n(IDC Gartner )4 PC IDC 2,630 (28.1 % ) 6,720 Gartner 2,600 (28.5 % ) 6,529 2019 4 IDC 7,178 Gartner 7,061 2019 Windows 7 PC CPU 2018 4 IDC 6,813 Gartner 6,863 2022… [+229 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GSMArena.com"
    },
    "author": "Peter",
    "title": "Flashback: the Lightning connector was ahead of its time but is now obsolete",
    "description": "The iPod was revolutionary not because it could play MP3s, but because of how easy it made it to organize and load a whole music library into a pocketable device. There were MP3 players before it, including ones with more storage – as that infamous Slashdot c…",
    "url": "https://www.gsmarena.com/flashback_the_lightning_connector-news-57175.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/01/flashback-lightning/-952x498w6/gsmarena_000.jpg",
    "publishedAt": "2023-01-15T00:02:01Z",
    "content": "The iPod was revolutionary not because it could play MP3s, but because of how easy it made it to organize and load a whole music library into a pocketable device. There were MP3 players before it, in… [+5771 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nextpit.de"
    },
    "author": "Jade Bryan",
    "title": "MicroLED: Steroide für Apple Watch Ultra 2 und Samsung Galaxy Watch 6 Pro?",
    "description": "Die Apple Watch Ultra 2 und die Samsung Galaxy Watch 6 Pro könnten die ersten Profiteure der neuen MicroLED-Technologie aus dem TV-Bereich sein.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
    "url": "https://www.nextpit.de/microled-steroide-fuer-apple-watch-ultra-2-und-samsung-galaxy-watch-6",
    "urlToImage": "https://fscl01.fonpit.de/userfiles/7446224/image/apple-watch-ultra/NextPit-apple-watch-ultra-hero2.jpg",
    "publishedAt": "2023-01-15T07:00:00Z",
    "content": "Micro-LED auf der Apple Watch Ultra 2 und der Samsung Galaxy Watch 6 Pro\r\nNicht nur TV-Hersteller verbauen in ihren Smart TVs die Micro-LED-Technologie. Aufgrund der vielen Vorteile von Micro-LEDs be… [+1633 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "WELT",
    "title": "Heil für „sozial differenzierte Direktzahlungen“ an Bürger",
    "description": "Bundesarbeitsminister Hubertus Heil setzt sich für neue Möglichkeiten direkter staatlicher Zahlungen an die Bürger ein. Es müssten ‚die technischen Voraussetzungen für sozial differenzierte Direktzahlungen‘ geschaffen werden, so der SPD-Politiker.",
    "url": "https://www.welt.de/politik/deutschland/article243217045/Energiekrise-Hubertus-Heil-fuer-sozial-differenzierte-Direktzahlungen-an-Buerger.html",
    "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile243217111/0331357917-ci16x9-w1200/Interview-mit-Bundesarbeitsminister-Heil.jpg",
    "publishedAt": "2023-01-15T05:36:32Z",
    "content": "Bundesarbeitsminister Hubertus Heil (SPD) setzt sich für neue Möglichkeiten direkter staatlicher Zahlungen an die Bürgerinnen und Bürger in Deutschland ein. Für die Zukunft müssen die technischen Vor… [+3484 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Inside.com.tw"
    },
    "author": "湯皓茹",
    "title": "中國代購猖獗！日媒：APPLE JAPAN 追繳 130 億日圓消費稅的爆買隱情",
    "description": "日前 NHK 等主流媒體指出，「根據消息，東京國稅局陸續查到、在日本法人直營店發生以轉售為目的的免稅銷售，其中有來自中國的旅客 1 個人就買下數百台 iPhone；或是有代購業者在社群網站招募旅客，透過支付報酬的方式促使他們協助購買免稅品等案例」。",
    "url": "https://www.inside.com.tw/article/30431-APPLE-JAPAN-DutyFree-Chinese-Buyer",
    "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2023/01/d407446f-de9d-4dea-a73c-12fc36723545.png?auto=compress&fit=crop&h=630&w=1200",
    "publishedAt": "2023-01-15T02:52:00Z",
    "content": "12Oolab 2019Oolab 2020 Oolab JANDI ?\r\nJANDI Oolab \r\nJANDI\r\nJANDIOolab OolabAprilMark \r\nOolab Oolab JANDI Mark JANDI \r\nJANDIPhoto CreditJANDI\r\nConnect Oolab JANDI Connect Trello April JANDI Tag@ Trell… [+130 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Karapaia.com"
    },
    "author": "parumo_zaeega",
    "title": "落ち葉にたまった笑気ガスを吸ってハイになる鹿たち",
    "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
    "url": "https://karapaia.com/archives/52319334.html",
    "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/e/b/ebae97bf.jpg",
    "publishedAt": "2023-01-15T06:00:26Z",
    "content": ""
    },
    {
    "source": {
    "id": null,
    "name": "iLounge"
    },
    "author": "Samantha Wiley",
    "title": "AR Shopping to become available on the Apple Store app",
    "description": "Mark Gurman, Bloomberg analyst, claimed that a future update to the Apple Store app will have users able to shop using augmented reality on their iPhones. ...",
    "url": "https://www.ilounge.com/news/ar-shopping-to-become-available-on-the-apple-store-app",
    "urlToImage": "https://www.ilounge.com/wp-content/uploads/2023/01/Apple-3.png",
    "publishedAt": "2023-01-15T04:13:00Z",
    "content": "Mark Gurman, Bloomberg analyst, claimed that a future update to the Apple Store app will have users able to shop using augmented reality on their iPhones.\r\nIn his Power On newsletter, Gurman said tha… [+710 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iLounge"
    },
    "author": "Samantha Wiley",
    "title": "Apple shareholders can attend the annual virtual meeting on March 10",
    "description": "Apple is getting ready for its 2023 shareholders meeting, which will be done virtually on March 10, 9 am PT. Shareholders can attend the virtual event to ...",
    "url": "https://www.ilounge.com/news/apple-shareholders-can-attend-the-annual-virtual-meeting-on-march-10",
    "urlToImage": "https://www.ilounge.com/wp-content/uploads/2023/01/Apple-2.png",
    "publishedAt": "2023-01-15T04:11:17Z",
    "content": "Apple is getting ready for its 2023 shareholders meeting, which will be done virtually on March 10, 9 am PT.\r\nShareholders can attend the virtual event to ask questions and vote by putting in their c… [+750 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iLounge"
    },
    "author": "Samantha Wiley",
    "title": "Apple shares Chinese New Year-themed short story ‘Through the Five Passes’",
    "description": "Apple has recently uploaded a new Shot on iPhone 14 Pro video to celebrate the Chinese New Year. ‘Chinese New Year - Through the Five Passes’ is 18 ...",
    "url": "https://www.ilounge.com/news/apple-shares-chinese-new-year-themed-short-story-through-the-five-passes",
    "urlToImage": "https://www.ilounge.com/wp-content/uploads/2023/01/Chinese-New-Year-Themed.png",
    "publishedAt": "2023-01-15T04:15:01Z",
    "content": "Apple has recently uploaded a new Shot on iPhone 14 Pro video to celebrate the Chinese New Year.\r\n‘Chinese New Year – Through the Five Passes’ is 18 minutes in length and shows the reinvention of the… [+642 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Geekpark.net"
    },
    "author": null,
    "title": "推特被裁员工不能通过集体仲裁索赔；比亚迪在越南投资2.5亿美元建零部件厂；春节档预售总票房破 7000 万元",
    "description": "2022 年中国集成电路进口量下降 15%\n2022 年中国集成电路进口出现近 20 年来首次下降。\n根据海关总署周五公布的数据，去年 IC 进口量下降 15%，从 2021 年的 6356 亿颗降至 5384 亿颗。这是至少自 2004 年彭博开始追踪数据以来的首次年度下降。2021 年进口增长 17%，2020 年增长 22%，2019 年增长 6.6%。（彭博）\n\n美国法官裁定，推特被裁员工不能通过集体仲裁索赔\n推特已获得一项裁决，允许这家社交媒体公司强迫几名因解雇而提起诉讼的下岗工人通过个人仲裁而不是集体…",
    "url": "https://www.geekpark.net/news/314105",
    "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/0f/0d/0f0dcd4ec99348dbcd792cc861510abf.jpg",
    "publishedAt": "2023-01-15T01:40:40Z",
    "content": "2022 15%\r\n2022 20 \r\n IC 15% 2021 6356 5384 2004 2021 17%2020 22%2019 6.6%\r\n· (James Donato) Twitter · (Elon Musk) \r\n Twitter ()\r\n 2.5 \r\n 2.5 2023 \r\n80 \r\n()\r\nApple Watch microLED LG \r\n1 14 DSCC Ross Y… [+597 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Telegraph.co.uk"
    },
    "author": "Lauren Almeida",
    "title": "The French may retire earlier – but British pensions are far better",
    "description": "Here's how Britain's retirement benefits compare to our European neighbours",
    "url": "https://www.telegraph.co.uk/pensions-retirement/news/french-may-retire-earlier-british-pensions-far-better/",
    "urlToImage": "https://www.telegraph.co.uk/content/dam/pensions-retirement/2023/01/13/TELEMMGLPICT000321591913_trans_NvBQzQNjv4BqHqEqWIQYN_HlsJ_HcWHEJKkIgbqFjtqE7VzX64Vv544.jpeg?impolicy=logo-overlay",
    "publishedAt": "2023-01-15T06:00:00Z",
    "content": "While British pensioners will receive the biggest pay rise on record this April, critics maintain that our government is the least generous in Europe when it comes to retirement benefits.\r\nThe full n… [+2535 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Netafull.net"
    },
    "author": "コグレマサト",
    "title": "【iPhone 14】「衝突事故検出」の機能をオフにする方法",
    "description": "「iPhone 14」シリーズでは、車が激しく衝突したことを検知すると緊急通報サービスにつながる「衝突事故検出」という機能が搭載されました。 しかしこの機能が、スキーやスノーボードでの転倒で動作してしまい、スキー場周辺へ...\n投稿 【iPhone 14】「衝突事故検出」の機能をオフにする方法 は ネタフル に最初に表示されました。",
    "url": "https://netafull.net/iphone-14/0124586.html",
    "urlToImage": "https://netafull.net/wp-content/uploads/2023/01/iphone-sos-stop115.jpg",
    "publishedAt": "2023-01-15T03:30:00Z",
    "content": "iPhone 14\r\nNHK\r\nNHK\r\niPhone 14\r\niOSiPhone 14iPhone 14 Pro\r\nwatchOSApple Watch Series 8Apple Watch SE2Apple Watch Ultra\r\nSUV \r\niPhoneApple Watch\r\niPhone 14 ProYouTuber\r\niPhone 14\r\nSOS\r\nSOS\r\nAppleiPhon… [+92 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Spokanepublicradio.org"
    },
    "author": "Anna King/Northwest News Network",
    "title": "Tariffs on imports to India crush business for NW apple farmers - Spokane Public Radio",
    "description": "For decades boatloads of Northwest apples have shipped to India – especially the variety Red Delicious.",
    "url": "https://www.spokanepublicradio.org/2023-01-14/tariffs-on-imports-to-india-crush-business-for-nw-apple-farmers",
    "urlToImage": "https://npr.brightspotcdn.com/dims4/default/f7ef3f7/2147483647/strip/true/crop/1760x924+0+125/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fd5%2F96%2F89bfdb9f4bdd8b8be8308cf5bd4a%2Fapples-in-the-field.WA%20Apple%20Commission.jpeg",
    "publishedAt": "2023-01-15T02:00:00Z",
    "content": "But since Trump-era tariffs on steel and aluminum went into place, retaliatory tariffs have put a crunch on that valuable fruit market. Now, Washington state's full congressional delegation is asking… [+3012 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WBRC"
    },
    "author": "Lauren Harksen",
    "title": "Northport business collecting donations for tornado recovery efforts - WBRC",
    "description": "They’ve made 15 trips across four states and he knows just how much these supplies can help.",
    "url": "https://www.wbrc.com/2023/01/15/northport-business-collecting-donations-tornado-recovery-efforts/",
    "urlToImage": "https://gray-wbrc-prod.cdn.arcpublishing.com/resizer/DHqEVqDQrx0rupN9UJIHKlVBPk8=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/CHD5O3QZ2ZASVODX76F5K2EYSI.jpg",
    "publishedAt": "2023-01-15T04:28:00Z",
    "content": "NORTHPORT, Ala. (WBRC) - Its just the beginning of a long cleanup process for those affected by tornadoes. Many local organizations are doing their part to help the victims of Thursdays storms.\r\nForm… [+1405 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Beast"
    },
    "author": "The Daily Beast",
    "title": "Two Reasons Vince McMahon Would Sell WWE to the Saudis",
    "description": "Jessica Hill/AP/Shutterstock\r\n“It’s completely bonkers that you ended up with a situation by 2018 where a wrestling promoter, [WWE founder and reinstated board member] Vince McMahon, was so powerful and so well connected that his business was arguably a natio…",
    "url": "https://www.thedailybeast.com/two-reasons-vince-mcmahon-would-sell-wwe-to-the-saudis",
    "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1622,w_2884,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1673724247/230114-tna-bonus-vince-mcmahon-hero_a9ttqi",
    "publishedAt": "2023-01-15T04:15:00Z",
    "content": "Its completely bonkers that you ended up with a situation by 2018 where a wrestling promoter, [WWE founder and reinstated board member] Vince McMahon, was so powerful and so well connected that his b… [+1842 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Twistedsifter.com"
    },
    "author": "Matthew Gilligan",
    "title": "This Is What the F1-F12 Keys on Your Computer Actually Do",
    "description": "Find out what the Fs mean!",
    "url": "https://twistedsifter.com/2023/01/this-is-what-the-f1-f12-keys-on-your-computer-actually-do/",
    "urlToImage": "https://twistedsifter.com/wp-content/uploads/2022/11/Three-Images-Without-Border-1-35.jpg",
    "publishedAt": "2023-01-15T04:15:55Z",
    "content": "If you’re anything like me, you’ve probably looked at those F1 through F12 keys a million times and thought…what the heck do those keys actually DO?\r\nWell, we’re all in luck today, because we got the… [+3059 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Taisy0.com"
    },
    "author": "taisy0",
    "title": "Apple、イングランドのプロサッカー1部リーグ｢プレミアリーグ｣の放映権獲得に向け準備中か",
    "description": "9To5Macによると、Appleがまもなく更新時期を迎えるイングランドのプロサッカー1部リーグ「プレミアリーグ」の放映権獲得に向け、サッカー放映権パッケージに入札する方向で準備を進めていることが分かりました。 Appl ...",
    "url": "https://taisy0.com/2023/01/15/167058.html",
    "urlToImage": "https://taisy0.com/wp-content/uploads/2023/01/th_apple-tv-premier-league-streaming.jpg",
    "publishedAt": "2023-01-15T02:09:29Z",
    "content": "9To5MacApple1\r\nAppleMLBMLS2MLS Season PassMLS\r\nSky SportsBT Sport2025Apple\r\n1MLSApple"
    },
    {
    "source": {
    "id": null,
    "name": "Itmedia.co.jp"
    },
    "author": "山本竜也，ITmedia",
    "title": "スマホのパスワード管理でやってはいけないこと、iPhone／Androidで活用すべき機能",
    "description": "Apple IDやGoogleアカウントをはじめ、私たちは、日々大量のパスワードを利用しています。今回は、パスワード管理でやってはいけないことをいくつかまとめました。まず絶対にやってはいけないことの筆頭が、パスワードの使い回しです。",
    "url": "https://www.itmedia.co.jp/mobile/articles/2301/15/news036.html",
    "urlToImage": "https://image.itmedia.co.jp/mobile/articles/2301/15/cover_news036.jpg",
    "publishedAt": "2023-01-15T02:00:00Z",
    "content": "Apple IDGoogleNetflixAmazonPayPay\r\n1\r\n1ID1\r\n1\r\n2\r\nPC\r\nPwC202047123\r\n3\r\n123456abcdefgpasswordsecuritya@o0\r\nNordPassNord Security20221password2123456312345678911234562password31234QWERTY1qaz2wsx\r\n2001\r… [+151 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Celtics Wire",
    "title": "Celtics defeat Hornets 122-106 as Malcolm Brogdon scores 30 off the bench",
    "description": "Malcolm Brogdon scored 30 off the bench as the Celtics erased a 16-point deficit to beat the Hornets on the road Saturday night.",
    "url": "https://celticswire.usatoday.com/lists/celtics-defeat-hornets-122-106-as-malcolm-brogdon-scores-30-off-the-bench/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EkoOrUoFfJJR9si4HlryZw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/celtics_wire_usa_today_sports_articles_699/4e229b051566ef2dfc3df41f8f86d400",
    "publishedAt": "2023-01-15T02:15:17Z",
    "content": "The Boston Celtics grabbed a nice comeback win on the road Saturday night, defeating the Charlotte Hornets 122-106 behind big nights from Jayson Tatum and Malcolm Brogdon. Boston improves to 31-12 on… [+3985 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPad Air5 10.9英寸平板电脑 64GB WiFi版 4499元包邮（需用券）",
    "description": "Apple 苹果 iPad Air5 10.9英寸平板电脑 64GB WiFi版 4499元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
    "url": "https://www.smzdm.com/p/70644310/",
    "urlToImage": "https://qny.smzdm.com/202211/01/6360acd4f97d4386.jpg_d250.jpg",
    "publishedAt": "2023-01-15T00:24:11Z",
    "content": "iPad Air iPad Pro M1 USB-C 2 Apple Pencil \r\n M1 iPad Air 5 CPU 60% 2 iPad Air 5 12MP Center Stage 64GB256GB iPad Air 5 5G \r\n5 Touch ID iPad Air 5  Liquid Retina 500nit iPad Pro"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPhone 13 Pro Max 5G智能手机 512GB 9399元包邮（需用券）",
    "description": "Apple 苹果 iPhone 13 Pro Max 5G智能手机 512GB苍岭绿色 9399元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
    "url": "https://www.smzdm.com/p/70663728/",
    "urlToImage": "https://qny.smzdm.com/202109/15/6140fe29030bf5673.jpg_d250.jpg",
    "publishedAt": "2023-01-15T05:26:22Z",
    "content": "iPhone 13 Pro Max6.7 Super Retina XDR ProMotion10-120Hz1000nit Ceramic Shield 420%\r\niPhone 13 Pro MaxA15iPhone 135GPU16 5G\r\niPhone 13 Pro Max77mm390%2.2\r\niPhone 13 Pro Max128GB256GB512GB1TB"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 Watch Series 8 智能手表 41mm GPS版 2799元包邮（满减）",
    "description": "Apple 苹果 Watch Series 8 智能手表 41mm GPS版 2794元（需用券）,什么值得买甄选出苏宁易购优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
    "url": "https://www.smzdm.com/p/70659753/",
    "urlToImage": "https://qny.smzdm.com/202301/15/63c37803215d88786.jpg_d250.jpg",
    "publishedAt": "2023-01-15T06:56:22Z",
    "content": "Apple Watch Series 8 Apple S8 iOS 16 watch OS 9 \r\nApple Watch Series 83256G\r\nApple Watch Series 8 3618"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPad Air 5 10.9英寸平板电脑 256GB WLAN版 5699元包邮（需用券）",
    "description": "Apple 苹果 iPad（第 5 代）Air 10.9英寸平板电脑 2022年款(256G WLAN版/M1芯片Liquid视网膜屏 MME63CH/A) 紫色 5699元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
    "url": "https://www.smzdm.com/p/70648200/",
    "urlToImage": "https://qny.smzdm.com/202206/30/62bcff536e6a97014.jpg_d250.jpg",
    "publishedAt": "2023-01-15T04:05:52Z",
    "content": "iPad Air iPad Pro M1 USB-C 2 Apple Pencil \r\n M1 iPad Air 5 CPU 60% 2 iPad Air 5 12MP Center Stage 64GB256GB iPad Air 5 5G \r\n5 Touch ID iPad Air 5  Liquid Retina 500nit iPad Pro"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPhone 14 Pro 5G智能手机 128GB 7699元包邮",
    "description": "京东此款目前活动售价7699元，使用plus.1200-50元全品类券到手7649，近期好价。",
    "url": "https://www.smzdm.com/p/70647242/",
    "urlToImage": "https://qny.smzdm.com/202209/08/631951c6bfe886330.jpg_d250.jpg",
    "publishedAt": "2023-01-15T03:23:41Z",
    "content": "iPhone 14 Pro6.12556*1179460PPIApp1000HDR16002000 ProMotion Super Retina XDR 1 Hz120 HzAlways-On\r\niPhone 14 ProA164nm160 6 CPU A1520%A16 Bionic 5 GPU 50% 16 17 iPhone 14 Pro23\r\niPhone 14 Pro48002ProR… [+32 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "FREDZONE"
    },
    "author": "Joël GAHOU",
    "title": "Marché de la SVOD en France : Netflix et Prime Video en tête du classement en 2022",
    "description": "Au début de chaque nouvelle année, la tradition veut que l'on prenne de nouvelles résolutions afin d’attaquer les mois à venir dans les meilleures conditions possibles. Mais avant cela, il faut prendre le temps de s’asseoir afin de faire le point de ce qui a …",
    "url": "https://www.fredzone.org/marche-de-la-svod-en-france-netflix-et-prime-video-415753/",
    "urlToImage": "https://www.fredzone.org/wp-content/uploads/2021/12/Disney-plus-scaled.jpg",
    "publishedAt": "2023-01-15T05:15:45Z",
    "content": "Au début de chaque nouvelle année, la tradition veut que lon prenne de nouvelles résolutions afin dattaquer les mois à venir dans les meilleures conditions possibles. Mais avant cela, il faut prendre… [+3064 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ozbargain.com.au"
    },
    "author": "soda-pop",
    "title": "Logitech K380 Multi-Device Bluetooth Keyboard for Mac, iPad & iPhone (Off-White, Rose). $39.00 Delivered. Amazon AU",
    "description": "Also available in Blueberry.\nhttps://www.amazon.com.au/gp/product/B0BF1CXFGB\n\nAbout this item:\n\n<ul>\n<li>Work from anywhere: This compact Bluetooth keyboard for Mac works with your MacBook, iPad, or iPhone, with a lightweight, minimalist iOS layout that lets …",
    "url": "https://www.ozbargain.com.au/node/751258",
    "urlToImage": "https://files.ozbargain.com.au/n/58/751258x.jpg?h=3a5b0725",
    "publishedAt": "2023-01-15T02:15:37Z",
    "content": "<li>Work from anywhere: This compact Bluetooth keyboard for Mac works with your MacBook, iPad, or iPhone, with a lightweight, minimalist iOS layout that lets you multitask at home or on the go.\r\n</li… [+709 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MMA Fighting"
    },
    "author": "MMA Fighting Newswire",
    "title": "Reaction: Francis Ngannou's free agency, Jon Jones vs. Ciryl Gane title fight, Strickland shines on short notice",
    "description": "MMA Fighting reacts to Dana White announcing Francis Ngannou being an outright free agent and that Jon Jones vs. Ciryl Gane will headline UFC 285 for the vacant heavyweight title, along with fallout of UFC Vegas 67.",
    "url": "https://www.mmafighting.com/2023/1/15/23555876/reaction-francis-ngannou-now-free-agent-jon-jones-vs-ciryl-gane-title-fight-set",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/A_hEv8Ag8Wzp0lFTtuaeop0XdUQ=/0x0:3935x2060/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24361211/1365957889.jpg",
    "publishedAt": "2023-01-15T05:28:49Z",
    "content": "Photo by Chris Unger/Zuffa LLC\r\n\n \n\n Francis Ngannou is officially a free agent, and a new heavyweight champion will be crowned on March 4 as UFC President Dana White confirmed that Jon Jones will re… [+794 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "Patrick McDonald",
    "title": "2023 Sony Open leaderboard, scores: Hayden Buckley leads after Round 3 as he tries for first PGA Tour title",
    "description": "Numerous players will head into Sunday with a legitimate chance to win",
    "url": "https://www.cbssports.com/golf/news/2023-sony-open-leaderboard-scores-hayden-buckley-leads-after-round-3-as-he-tries-for-first-pga-tour-title/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/15/24131936-22ed-4f28-84ba-1280b2a8bf6b/thumbnail/1200x675/c30b299bc0c8ded3bd1ce5e8ecea7be7/gettyimages-1456433939-1.jpg",
    "publishedAt": "2023-01-15T02:17:45Z",
    "content": "Twelve players touched the lead at some point during the third round of the 2023 Sony Open on Saturday. Exchanging hands multiple times, it ultimately fell into the lap of Hayden Buckley who stands a… [+5245 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gadgets Now"
    },
    "author": "Gadgets Now Bureau",
    "title": "iQoo 11, Realme 10 phones launched in India; Lenovo 5G tablet; Apple CEO pay cut and more top tech news of the - Gadgets Now",
    "description": "This week we saw a major launch in India - the first Snapdragon 8 Gen 2-powered smartphone arrived in India – the iQoo 11. Also, we are in for another big launch in the coming week, as Samsung confirmed the launch date for the upcoming Galaxy S23 series. Appl…",
    "url": "https://www.gadgetsnow.com/slideshows/samsung-confirms-galaxy-s23-series-launch-date-iqoo-11-launched-in-india-apple-ceo-tim-cook-takes-a-pay-cut-and-more-top-tech-news-of-the-week/photolist/96993709.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-96993881,width-800,resizemode-4,imgsize-240436/share.jpg",
    "publishedAt": "2023-01-15T03:40:00Z",
    "content": "Samsung has announced the launch date of its next-generation flagship smartphone series, Galaxy S23. The company has scheduled its Galaxy Unpacked event for February 1, 2023. Samsung is expected to u… [+328 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Diariomotor.com"
    },
    "author": "Sergio Álvarez",
    "title": "Por menos de 14.000 euros puedes estrenar un coche urbano alto, llamativo y que no gasta nada",
    "description": "En estos tiempos, cerca del 60% de los coches que se venden en mercados como España son SUV. Burro grande, ande o no ande, como se suele decir. Sin embargo, aun existen muchas personas que buscan coches pequeños, personas a las que han dejado sin apenas opcio…",
    "url": "https://www.diariomotor.com/noticia/oferta-toyota-aygo-x-cross-enero-2023/",
    "urlToImage": "https://www.diariomotor.com/imagenes/2022/05/toyota-aygo-x-cross-chili-red-14-62726fdfe0462.jpg",
    "publishedAt": "2023-01-15T05:22:31Z",
    "content": "En estos tiempos, cerca del 60% de los coches que se venden en mercados como España son SUV. Burro grande, ande o no ande, como se suele decir. Sin embargo, aun existen muchas personas que buscan coc… [+4348 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphone-mania.jp"
    },
    "author": "lunatic",
    "title": "Apple、サッカー英プレミアリーグの放映権獲得に動く?",
    "description": "AppleがApple TVにおいて、サッカーのイングリッシュ・プレミアリーグ(EPL)のイギリスでの放映権を獲得すべく、準備を進めていると、英メディアDaily Mailが報じています。\nスポーツ放映権の獲得に力を入れるApple\n同メディアによると、Appleは、放映権の期限切れが近づいている英プレミアリーグの放映権の入札を目指しているとのことです。\n \nAppleは近年、Apple TVでのスポーツ放映権の獲得に力を入れており、2022年にはアメリカとカナダを含む9つの地域におけるメジャーリーグベースボール…",
    "url": "https://iphone-mania.jp/news-517303/",
    "urlToImage": "https://iphone-mania.jp/uploads/2023/01/15/Apple-TV-MLS-hero_big.large_2x-e1673745288678.jpg",
    "publishedAt": "2023-01-15T01:17:19Z",
    "content": "AppleApple TVEPLDaily MailApple\r\nAppleAppleApple TV20229MLBMLS10\r\n2025\r\nSky SportsBT Sport320259to5MacAppleMLSSPOTV NOWABEMA\r\n Source:Daily Mail via 9to5MacPhoto:Apple(lunatic)"
    },
    {
    "source": {
    "id": null,
    "name": "Iphone-mania.jp"
    },
    "author": "lunatic",
    "title": "ポルシェ、スマホなしでGoogleアプリが車内で利用可能になる？",
    "description": "PorscheシリーズのコックピットにGoogleソフトウェアを統合する話し合いが進められているようです。Reutersが報じています。\nスマホなしでGoogleアプリが車内で利用可能に\nこの話し合いはあくまでGoogleとPorscheブランド間におけるもので、Volkswagen Group全体に及ぶものではなないとのことです。\n \n実現すれば、PorscheユーザーはAndroidスマートフォンがなくても、車内で直接GoogleマップやGoogleアシスタントなどを利用できるようになります。\n以前はGoog…",
    "url": "https://iphone-mania.jp/news-517332/",
    "urlToImage": "https://iphone-mania.jp/uploads/2023/01/15/porsche-logo.jpg",
    "publishedAt": "2023-01-15T02:21:00Z",
    "content": "PorscheGoogleReutersGoogle\r\nGooglePorscheVolkswagen GroupPorscheAndroidGoogleGoogle\r\nGooglePorsche\r\nPorscheCFO202210GoogleAppleBaiduTencentAlibabaITGooglePorsche\r\nReutersPorscheGoogle2023112PorscheGo… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smartmania.cz"
    },
    "author": "Adam Bělunek",
    "title": "Mazda MX-30 R-EV: elektrický crossover bude nově k dispozici také jako plug-in hybrid",
    "description": "Wankelův rotační motor slouží jako generátor elektrické energie Celkový výkon vzrostl na 168 koní Dojezd činí 600 km Mazda MX-30 se dočkala své plug-in hybridní verze. Očekávanou novinku japonská automobilka představila u příležitosti Brussels Motor Show. Ver…",
    "url": "https://smartmania.cz/mazda-mx-30-r-ev-elektricky-crossover-bude-nove-k-dispozici-take-jako-plug-in-hybrid/",
    "urlToImage": "https://smartmania.cz/wp-content/uploads/2023/01/mx-30_e-skyactiv_r-ev_ext_5_l.jpg",
    "publishedAt": "2023-01-15T07:00:00Z",
    "content": "<ul><li>Wankelv rotaní motor slouí jako generátor elektrické energie </li><li>Celkový výkon vzrostl na 168 koní</li><li>Dojezd iní 600 km </li></ul>Mazda MX-30 se dokala své plug-in hybridní verze. O… [+1404 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gadget2ch.com"
    },
    "author": "Gadget 2ch",
    "title": "【悲報】Appleさん、127円台になってもレートを戻さないwwwwww",
    "description": "いつ戻るかなぁ・・・ 1: 風吹けば名無し 2023/01/15(日) 12:11:50.15 ID:MZ1WqwW/0.net 怒っちゃうよ   2: 風吹けば名無し 2023/01/15(日) 12:12:...",
    "url": "http://www.gadget2ch.com/archives/post-202773.html",
    "urlToImage": "https://i0.wp.com/www.gadget2ch.com/wp-content/uploads/2022/12/5d7ca0d2-1-2-1-1-1-1-1-1-1-2-2-1-2-2-1-1-2-1-2-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1.jpg-1-1-1-1-1-1-1.webp?fit=300%2C300",
    "publishedAt": "2023-01-15T04:50:12Z",
    "content": "1: 2023/01/15() 12:11:50.15 ID:MZ1WqwW/0.net\r\n2: 2023/01/15() 12:12:07.23 ID:MZ1WqwW/0.net\r\n4: 2023/01/15() 12:12:54.93 ID:GS7CuE3Z0.net\r\n5: 2023/01/15() 12:13:15.81 ID:MZ1WqwW/0.net\r\n10: 2023/01/15(… [+1834 chars]"
    },
    {
    "source": {
    "id": "die-zeit",
    "name": "Die Zeit"
    },
    "author": "ZEIT ONLINE: Mobil - Dagny Lüdemann",
    "title": "Apple Watch Ultra: 1.000 Euro unter dem Meer",
    "description": "Ein Tauchcomputer steckt in der Apple Watch Ultra. Aber sollte man der Smartwatch für Sportler sein Leben anvertrauen? Unsere Unterwasserreporterin hat es getestet.",
    "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fdigital%2Fmobil%2F2023-01%2Fapple-watch-ultra-tauchen-tauchcomputer-test",
    "urlToImage": null,
    "publishedAt": "2023-01-15T06:59:44Z",
    "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Boston Herald"
    },
    "author": "Tribune News Service",
    "title": "Ravens vs. Bengals scouting report for Sunday's wild-card playoff game: Who has the edge?",
    "description": "The Ravens lost their regular-season finale to the Bengals, 27-16, as third-string quarterback Anthony Brown committed three costly turnovers in the first half. The Ravens have scored just 75 points in six games with Tyler Huntley or Anthony Brown at quarterb…",
    "url": "https://www.bostonherald.com/2023/01/14/ravens-vs-bengals-scouting-report-for-sundays-wild-card-playoff-game-who-has-the-edge/",
    "urlToImage": "https://www.bostonherald.com/wp-content/uploads/2023/01/202301141418TMS_____MNGTRPUB_SPORTS-RAVENS-VS-BENGALS-SCOUTING-REPORT-FOR-1-BZ5.jpg?w=1024&h=576",
    "publishedAt": "2023-01-15T04:54:40Z",
    "content": "The Ravens lost their regular-season finale to the Bengals, 27-16, as third-string quarterback Anthony Brown committed three costly turnovers in the first half. But a determined defensive effort gave… [+7954 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Rg.ru"
    },
    "author": null,
    "title": "B России появятся бюджетные кроссоверы из Китая",
    "description": "Дилер \"Авилон\" привезет в Россию кроссоверы Jetta VS5. Напомним, что Jetta - это не модель, а отдельный бюджетный бренд в Китае. Недорогие автомобили выпускает совместное предприятие FAW-Volkswagen.",
    "url": "https://rg.ru/2023/01/15/v-rossii-poiaviatsia-biudzhetnye-krossovery-iz-kitaia.html",
    "urlToImage": "https://cdnstatic.rg.ru/uploads/images/2023/01/14/88_3ff.jpg",
    "publishedAt": "2023-01-15T07:06:00Z",
    "content": "\" 50 Jetta VS5 Enjoyment Glory. 1,99 2,1 . : , , , \", - \" \" \". \" .\r\nJetta VS5 - Skoda Karoq Seat Ateca, . \r\n 4 419 , - 1 841 , - 1 616 . - 2 630 . Skoda Karoq Seat Ateca.\r\n -, -, , Apple CarPlay Andr… [+116 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Mirror Online"
    },
    "author": "mirrornews@mirror.co.uk (Will Maule)",
    "title": "Fire breaks out at London highrise tower block with 70 firefighters tackling huge blaze",
    "description": "Ten fire engines are in attendance at the highrise block of flats in east London, as crews tackle the massive flat fire that's burnt the whole of the ninth floor",
    "url": "https://www.mirror.co.uk/news/uk-news/fire-breaks-out-london-highrise-28957358",
    "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article28957344.ece/ALTERNATES/s1200/1_FmeHmrVWIAIMp3ujpeg.jpg",
    "publishedAt": "2023-01-15T00:17:05Z",
    "content": "Around 70 firefighters are tackling a flat fire in London, with 10 fire engines deployed to the scene on Chiltern Road, Bow, after the whole of the flat on the ninth floor was reported to be alight.\r… [+1304 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ithome.com"
    },
    "author": null,
    "title": "苹果官方表示正收集相关反馈，以遏制“车祸检测”误报问题",
    "description": "IT之家 1 月 15 日消息，近日在接受《纽约邮报》采访时，苹果官方发言人表示正收集紧急呼叫中心的相关反馈，以遏制“车祸检测”误报问题。但发言人拒绝提供进一步的置评。《纽约邮报》在报告中指出，苹果的“车祸检测”功能导致纽约州 Greene County、宾夕法尼亚州 Carbon County 等滑雪胜地出现了大量 911 误报。IT之家了解到，在圣诞假期中很多美国人都选择了滑雪进行放松，因此格兰德县（Grand County）、伊格尔（Eagle County）、皮特金（Pitkin County）、鲁特县（…",
    "url": "https://www.ithome.com/0/667/876.htm",
    "urlToImage": null,
    "publishedAt": "2023-01-15T01:47:45Z",
    "content": "IT 1 15 \r\nGreene County Carbon County 911 \r\nITGrand CountyEagle CountyPitkin CountyRoutt CountySummit County 12 \r\n Pat Eliasen 2022 700 iPhone\r\nEliasen iPhone 14 Apple Watch \r\nEliasen EMS"
    },
    {
    "source": {
    "id": null,
    "name": "Arigato-ipod.com"
    },
    "author": "Ygn",
    "title": "【豆知識】「フリーボード」アプリで写真を好きな形に切り抜く（図形でマスクする）",
    "description": "iPhone/iPad/Macの「フリーボード」アプリでは、配置した写真や画像を、図形の形に切り抜くことができます。 ▲ 写真を配置したら、切り抜きたい形の図形を配置して、上に重ねます。 写真と図形の両方を同時にタップし...\nThe post 【豆知識】「フリーボード」アプリで写真を好きな形に切り抜く（図形でマスクする） first appeared on アイアリ.",
    "url": "https://arigato-ipod.com/2023/01/knowledge-freeform-mask-the-photo.html",
    "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/01/230115freeformmaskphoto.jpg",
    "publishedAt": "2023-01-15T00:25:26Z",
    "content": "iPhone/iPad/Macの「フリーボード」アプリでは、配置した写真や画像を、図形の形に切り抜くことができます。\n\n\n▲ 写真を配置したら、切り抜きたい形の図形を配置して、上に重ねます。\n写真と図形の両方を同時にタップして選択し、「…」で表示されるメニューから「図形でマスク」を選びます。\n\n▲ 切り取られる部分が、半透明で表示されます。\nプレビューを見ながら、画像の位置を調節します。\nスライ… [+831 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Arigato-ipod.com"
    },
    "author": "Ygn",
    "title": "【編集後記】3年ぶりの北海道外への旅行で更新が遅れていました",
    "description": "1月8日(日)〜11日()の4日間、東京方面に旅行に出かけていたために、今週は更新が遅れていました。 コロナ禍が始まって以来、北海道から出るのは今回がはじめてです。 前回は、2019年12月のApple川崎オープンのと...\nThe post 【編集後記】3年ぶりの北海道外への旅行で更新が遅れていました first appeared on アイアリ.",
    "url": "https://arigato-ipod.com/2023/01/column-23-01-15.html",
    "urlToImage": null,
    "publishedAt": "2023-01-15T05:52:05Z",
    "content": "1月8日(日)〜11日(水)の4日間、東京方面に旅行に出かけていたために、今週は更新が遅れていました。\n\n\nコロナ禍が始まって以来、北海道から出るのは今回がはじめてです。\n前回は、2019年12月のApple川崎オープンのときなので、3年ぶりとなります。\n飛行機に乗るのも3年ぶりで、空港内の施設や、手荷物チェックの方法も変わっていて、戸惑ってしまいました。\n4日間で主に、浅草、東京ディズニーシー… [+1419 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Droidsans.com"
    },
    "author": "Waiwy4.0",
    "title": "รีวิวแอปซูม กล้อง iPhone 14 Pro Max เปรียบเทียบกับ Samsung Galaxy S22 Ultra",
    "description": "แอปซูมใน กล้อง iPhone ช่วงนี้เป็นที่สนใจกันมาก เพราะทาง Samsung เองก็พัฒนากล้องซูมให้ดีขึ้นเรื่อย ๆ อย่างใน Galaxy S22 Ultra ก็เป็นที่ขนานนามกันว่าซูมไกลแล้วยังได้ภาพสวย ทำเอาหลายคนพยายามหาวิธีทดแทนการซูมด้วยแอปต่าง ๆ กันใหญ่ เราเลยอยากพาทุกคนไปชมภาพกันจริง ๆ…",
    "url": "https://droidsans.com/iphone-14-pro-max-zoom-app-vs-galaxy-s22-ultra/",
    "urlToImage": "https://images.droidsans.com/wp-content/uploads/2023/01/photo1673432851-1000x600.jpeg",
    "publishedAt": "2023-01-15T04:14:13Z",
    "content": "iPhone Samsung Galaxy S22 UltraiPhone 14 Pro Max S22 Ultra\r\niPhone 14 Pro Max SuperZoom Camera\r\nSuperZoom Camera App Store \r\n &gt; SuperZoom\r\niPhone 14 Pro Max 15 15 SuperZoom Noise iPhone \r\n iPhone … [+432 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "NBC Sports Philadelphia",
    "title": "Flyers vs. Capitals: John Tortorella's team goes to 7-1-0 since holiday break",
    "description": "The Flyers took down the Capitals again, this time with a 3-1 decision Saturday, as they improved to 7-1-0 since the holiday break. By Jordan Hall",
    "url": "https://www.nbcsports.com/philadelphia/flyers/flyers-vs-capitals-john-tortorellas-team-goes-7-1-0-holiday-break",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/mClwghLV7P4mIGn9uADl3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MTM-/https://media.zenfs.com/en/csnphilly.com/0b88b760df56effd4c074876f3432eec",
    "publishedAt": "2023-01-15T04:16:00Z",
    "content": "Flyers take down Capitals again, improve to 7-1-0 since holiday break originally appeared on NBC Sports Philadelphia\r\nThe Flyers' best hockey under John Tortorella continued Saturday night.\r\nThe club… [+3811 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Softantenna.com"
    },
    "author": "softantenna",
    "title": "Windows版のApple Music、Apple TV、Apple Devicesが公開。ただし 現在ベータ版でダウンロード可能な地域は限定",
    "description": "AppleはmacOSでiTunesを廃止し、Apple MusicやApple TV、Podcastといったいくつかのアプリに既存のiTunesの機能を分割しました。 Windowsでは未だにiTunesが現役ですが、先日、ついにWind",
    "url": "https://softantenna.com/blog/apple-music-beta-for-windows-11/",
    "urlToImage": "https://softantenna.com/blog/wp-content/uploads/2023/01/music-1.jpg",
    "publishedAt": "2023-01-15T00:00:42Z",
    "content": "ApplemacOSiTunesApple MusicApple TVPodcastiTunes\r\nWindowsiTunesWindowsApple MusicApple TVApple Devices(9to5Mac)\r\nMicrosoft Store\r\nApple MusicApple TVWindowsmacOS\r\nApple MusicDolby AtmosmacOSApple Mus… [+88 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SoyaCincau.com"
    },
    "author": "Sudarshan Duke",
    "title": "Must have EV Charging apps in Malaysia | SoyaCincau's EV Buyer's Guide",
    "description": "Whether we petrol heads like it or not, the future of the automobile is electric. Here in Malaysia, the electric vehicle (EV) race has kicked off with models from Hyundai, BMW, Kia, Porsche, Mercedes-Benz, Mini and not to mention Volvo which is locally assemb…",
    "url": "https://soyacincau.com/2023/01/15/ev-buyers-guide-malaysia-charging-apps-to-download-install/",
    "urlToImage": "https://soyacincau.com/wp-content/uploads/2023/01/230115-ev-charging-apps-malaysia-03.jpg",
    "publishedAt": "2023-01-15T03:04:54Z",
    "content": "Whether we petrol heads like it or not, the future of the automobile is electric. Here in Malaysia, the electric vehicle (EV) race has kicked off with models from Hyundai, BMW, Kia, Porsche, Mercedes… [+14514 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Pac-12 Network",
    "title": "No. 7 UCLA extends winning streak to 13, defeats Colorado in Westwood",
    "description": "No. 7 UCLA men's basketball defeats Colorado by a final score of 68-54 on Saturday, Jan. 14 in Westwood. The Bruins improve to 16-2 overall and 7-0 in conference, while the Buffs drop to 11-8 overall and 3-5 in Pac-12 play. Follow Pac-12 men’s basketball this…",
    "url": "https://sports.yahoo.com/no-7-ucla-extends-winning-032852979.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_mmRP5ixcN4htRzdQozB1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://s.yimg.com/hd/cp-video-transcode/production/39a2231d-8401-380c-af57-501d84f00a8b/2023-01-15/03-32-47/ad0f1899-e675-50e7-883e-dff2c0a4c6d8/stream_1280x718x0_v2_3_0.jpg",
    "publishedAt": "2023-01-15T03:28:52Z",
    "content": "No. 7 UCLA men's basketball defeats Colorado by a final score of 68-54 on Saturday, Jan. 14 in Westwood. The Bruins improve to 16-2 overall and 7-0 in conference, while the Buffs drop to 11-8 overall… [+298 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Lavozdegalicia.es"
    },
    "author": "Paula Avendaño",
    "title": "La banca de inversión se suma al recorte de las tecnológicas",
    "description": "El peor año de Wall Street desde el 2008 se salda con miles de despidos de trabajadores cualificados, mientras en otras partes del mundo escasean",
    "url": "https://www.lavozdegalicia.es/noticia/mercados/2023/01/15/banca-inversion-suma-recorte-tecnologicas/0003_202301SM15P6991.htm",
    "urlToImage": "https://www.lavozdegalicia.es/default/2023/01/12/00121673558462726437785/Foto/SME15P6F1_221946.jpg",
    "publishedAt": "2023-01-15T04:00:00Z",
    "content": "En el 2020, miles de hogares estadounidenses se llenaron de bicicletas estticas de ltima generacin que costaban cerca de 2.000 dlares. Las venda Peloton, una mtica empresa especializada en equipo dep… [+6967 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Minatokobe.com"
    },
    "author": "酔いどれ",
    "title": "Apple、イングランド・プレミアリーグのサッカー中継権獲得に向けて準備中か",
    "description": "Appleは昨年、スポーツのライブストリーミングの分野に進出し、メジャーリーグやメジャーリーグサッカーと契約を結びました、AppleはNFLともSunday Ticketの事前交渉に入ったが、最終的にはYouTubeとの契約となりました しかし、同社は野心を緩めてはいないようです、イギリスの新聞Daily Mailは、Appleが近く更新されるイングランド・プレミアリーグのサッカー中継権パッケージの入札準備を進めていると報じています Appleはすでにサッカー競技に大きな関心を示しています まず、Apple TV…",
    "url": "https://minatokobe.com/wp/apple/appl-tv/post-87083.html",
    "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/01/2023-01-15_09-01-42.jpg",
    "publishedAt": "2023-01-15T00:02:32Z",
    "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, Apple TV 4KApple(;´`)\r\nE… [+35 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Minatokobe.com"
    },
    "author": "酔いどれ",
    "title": "Appleの衝突検出機能、スキー客からの偽911コールが続く",
    "description": "Appleの新しい「衝突検出」 機能により、スキーヤーやスノーボーダーからの偽の911通報が殺到しており、緊急出動センターから苦情が出続けているとのことです New York Postの報道によると、ニューヨーク州グリーン郡とペンシルベニア州カーボン郡では、地元のスキー場からの「衝突検出」に起因する偽911コールが厄介なほど増加しているとしています この機能により、iPhoneやApple Watchの最新モデルが深刻な自動車事故を検知し、ユーザーが応答しない場合は自動的に緊急サービスを呼び出すことができますが、…",
    "url": "https://minatokobe.com/wp/apple/post-87092.html",
    "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/01/2023-01-15_11-53-50.jpg",
    "publishedAt": "2023-01-15T02:54:39Z",
    "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, Apple TV 4KApple(;´`)\r\nE… [+35 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Minatokobe.com"
    },
    "author": "酔いどれ",
    "title": "サードパーティ製Twitterアプリの「停止は意図的」、いまだ公の連絡なし",
    "description": "木曜日の夜、サードパーティーのTwitterクライアントが機能を停止し、多くの人が意図的なものと結論付けました、これが事実であることが現在の報告書で確認されていいます The Informationが報じたところによると、Twitterの上級エンジニアが今週、「サードパーティー製アプリの使用停止は意図的なものである」と社内で伝えたとのことです 同メディアが確認したその他の社内 (Slack) の情報によると、Twitterはパートナー向けの「承認された話題」に取り組んでいるが、それがいつになるかはあきらかではあり…",
    "url": "https://minatokobe.com/wp/it-information/post-87089.html",
    "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/01/Twitter-0311.jpg",
    "publishedAt": "2023-01-15T00:53:21Z",
    "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, Apple TV 4KApple(;´`)\r\nE… [+35 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Minatokobe.com"
    },
    "author": "酔いどれ",
    "title": "Apple、iPadのさらなる大型化で何が起きているのか/",
    "description": "これまでの噂 リーカーのMajin Bu氏は、Appleが14.1インチディスプレイとM2チップを搭載したiPadに取り組んでいると主張しました、この噂は、しばしば正確なディスプレイ業界のアナリスト、Ross Young氏によって裏付けられ、彼はそのデバイスがmini-LEDディスプレイを搭載するが120Hzまでの可変リフレッシュレート用のProMotionは搭載されないと付け加えました その後、Young氏は12月にAppleが14.1インチのiPadを発売する計画を棚上げにしたと述べています また、Mark …",
    "url": "https://minatokobe.com/wp/apple/post-87086.html",
    "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/01/2023-01-15_09-28-06.jpg",
    "publishedAt": "2023-01-15T00:29:23Z",
    "content": "Majin BuApple14.1M2iPadRoss Youngmini-LED120HzProMotion\r\nYoung12Apple14.1iPad\r\nMark GurmanApple2023iPadiPad\r\nAppleiPad?\r\nApple1ProMotioniPad Pro\r\nProMotionLCD14.1iPad12.9iPad ProiPad Air\r\niPad AiriPa… [+190 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ausdroid"
    },
    "author": "Neerav Bhatt",
    "title": "Australian MG ZS EV 2022 Excite: 3 likes and 3 dislikes",
    "description": "I recently drove 2005km in a MG ZS EV 2022 Excite model electric car including a road trip from Sydney to Melbourne and back, just before and after Christmas day. At the time of writing the ZS EV 2022 Excite model is Australia’s most affordable electric car, …",
    "url": "https://ausdroid.net/2023/01/15/australian-mg-zs-ev-2022-excite-3-likes-and-3-dislikes/",
    "urlToImage": "https://ausdroid.net/wp-content/uploads/2023/01/mg-zs-ev-1-scaled.webp",
    "publishedAt": "2023-01-15T01:52:43Z",
    "content": "I recently drove 2005km in a MG ZS EV 2022 Excite model electric car including a road trip from Sydney to Melbourne and back, just before and after Christmas day.\r\nAt the time of writing the ZS EV 20… [+5496 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Mail.ru"
    },
    "author": "Полина Малахова",
    "title": "Бэт-сигнал и онлайн-игры: секреты браузеров, o которых вы могли не знать",
    "description": "15 января отмечают День веб-браузера: в 1992 программу для просмотра сайтов выпустил «отец World Wide Web» Бернерс-Ли Тим. Редакция Hi-Tech Mail.ru собрала секретные послания от разработчиков — пасхалки, которые может раскрыть каждый пользователь прямо сейчас…",
    "url": "https://hi-tech.mail.ru/review/61449-browser-day/",
    "urlToImage": "https://resizer.mail.ru/p/63dd4ee5-df4d-50db-aa3c-36d1e900dbe7/AQAKUzsJdXqKXSVeH0xgtPgNDhyvTFO8ZKK_Mydx9vpTkVxdZPaS_HwI5Nhp2bqxBS3NBif_w1pdN5ucB8ykTuBwx4w.jpg",
    "publishedAt": "2023-01-15T06:50:00Z",
    "content": ",    . ,   «»  ,     .    : -   ,     ,         .\r\n   .     ,   .   , «» . ,   8  ,     PAC-MAN   .\r\n      ,       1998   Burning Man.   «»   «Google».\r\nC 2000 :  2023 5000  .  ,       doodleproposal… [+667 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET France"
    },
    "author": "L'équipe CNET France",
    "title": "Cdiscount Mobile : un iPhone 11 offert avec le forfait 100 Go à 29,99 €",
    "description": "Jusqu'au 18 janvier, une offre chez Cdiscount Mobile permet de dénicher un iPhone 11 64 Go reconditionné à 0 € grâce à un forfait 100 Go à 29,99 €/mois.",
    "url": "https://www.cnetfrance.fr/bon-plan/cdiscount-mobile-un-iphone-11-offert-avec-le-forfait-100-go-a-2999-39952602.htm",
    "urlToImage": "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/01/iphone-11-reconditionne-1200.jpg",
    "publishedAt": "2023-01-15T06:00:00Z",
    "content": "LiPhone 11 est sorti en 2019. Cest le modèle le plus accessible de sa gamme, équipé dun écran LCD de 6,1 pouces, dune puce Apple A13 Bionic, de 64 Go de stockage interne et dun double capteur photo d… [+1146 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Pac-12 Network",
    "title": "Drew Peterson joins Pac-12 Networks after USC defeats Utah for 5th Pac-12 victory",
    "description": "USC student-athlete Drew Peterson joins Pac-12 Networks' Don MacLean and Ted Robinson after the Trojans' defeat Utah on Saturday, Jan. 14 in Los Angeles. Follow Pac-12 men’s basketball this season with the Pac-12 Now App. Download the Pac-12 Now App today and…",
    "url": "https://sports.yahoo.com/drew-peterson-joins-pac-12-055314713.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/F2DEFDqClnCUXibfKaFUVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/hd/cp-video-transcode/production/e1454ad0-325a-3924-bec7-6a85842fc94e/2023-01-15/05-56-52/11a383fd-965c-570c-8b4d-21b5544a5c96/stream_1280x720x0_v2_3_0.jpg",
    "publishedAt": "2023-01-15T05:53:14Z",
    "content": "Yahoo Fantasy Football Forecast\r\nAndy Behrens, Dalton Del Don, Matt Harmon, Liz Loza, Scott Pianowski"
    },
    {
    "source": {
    "id": null,
    "name": "Thegatewaypundit.com"
    },
    "author": "Mike LaChance",
    "title": "Mayor Eric Adams Says New York City At A 'Breaking Point' As Migrants Continue To Arrive At Record Pace",
    "description": "New York City Mayor Eric Adams is finally experiencing what people who live near the border have known for years. Adams says New York is at a breaking point due to the number of migrants who keep arriving in the city and needing services. Is Adams going to ca…",
    "url": "https://www.thegatewaypundit.com/2023/01/mayor-eric-adams-says-new-york-city-breaking-point-migrants-continue-arrive-record-pace/",
    "urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/Eric-Adams-2.jpg",
    "publishedAt": "2023-01-15T02:56:00Z",
    "content": "New York City Mayor Eric Adams is finally experiencing what people who live near the border have known for years.\r\nAdams says New York is at a breaking point due to the number of migrants who keep ar… [+2064 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ilgiornale.it"
    },
    "author": "redazione@ilgiornale-web.it (Daniele Villa)",
    "title": "Aiways U6, si aggiornano gli interni e l'infotainment del SUV Coupè",
    "description": "Maggior praticità e sicurezza, con connettività massima per smartphone",
    "url": "https://www.ilgiornale.it/news/automotive/aiways-u6-si-aggiornano-interni-e-l-infotainment-suv-coup-2105132.html",
    "urlToImage": "https://img.ilgcdn.com/sites/default/files/styles/social/public/filefield_paths/Aiways_U6.jpg?_=1673700121",
    "publishedAt": "2023-01-15T06:38:57Z",
    "content": "Continua a gonfie vele il processo di avvicinamento di Aiways al mercato europeo, un costruttore ormai affermato, forte di tecnologie ai vertici del segmento e con un livello di qualità che nulla ha … [+3190 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Habr.com"
    },
    "author": "Physics-for-Humanities",
    "title": "Что можно понять o научной журналистике читая o6 открытии бутылки c шампанским?",
    "description": "06 измерении скорости потока углекислого газа при открытии шампанского написала под новый года вся желтая российская интернет-пресса начиная от шитпостеров «наука и техника»\r\n, до самых базовых реплоидов с Рен-тв\r\n. Читать далее",
    "url": "https://habr.com/ru/post/710646/#post-content-body",
    "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/27e/f4d/d78/27ef4dd7826f4e57814bd815fdbaecfb.jpeg",
    "publishedAt": "2023-01-15T03:32:57Z",
    "content": "-  « »\r\n,   -\r\n.\r\n Midjourney \r\n. , - .\r\n ?\r\n . , , . - . .\r\n - - , : .\r\n - - -\r\n,  YouTube\r\n ( , , ).\r\n 28 2022 . , , , .\r\nPhysics of Fluids : «- 2 \r\n».\r\n . , , . Apple . , . Google Motorola Mobilit… [+636 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "VR headset prices high as Apple bides its time",
    "description": "New devices from Meta and HTC cost more than £1,000, but all eyes are on rumoured Apple glasses.",
    "url": "https://www.bbc.co.uk/news/technology-64237620",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/77F4/production/_128280703_vr1.jpg",
    "publishedAt": "2023-01-15T00:08:47Z",
    "content": "Last week in Las Vegas I boxed, hunted for cute aliens, flew a laser-shooting robot and drew my own masterpiece - all in virtual reality. \r\nSome of the headsets I used to try out these experiences co… [+5689 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Milenio"
    },
    "author": "Jimena Rodrguez",
    "title": "?Superliga: La guerra por el futbol?, la serie que revela la casi aniquilacin del balompi europeo",
    "description": "Este 13 de enero se estren la nueva serie de Apple TV + ?SuperLeague: The War for Football?. Serie documental en cuatro partes que revela a detalle y con entrevistas exclusivas a todos los protagonistas, lo que sucedi en abril de 2021, cuando la polmica Super…",
    "url": "https://www.milenio.com/deportes/futbol-internacional/superliga-la-guerra-por-el-futbol-donde-ver-la-serie-streaming",
    "urlToImage": "https://cdn.milenio.com/uploads/media/2023/01/14/superliga-guerra-futbol-serie-revela.jpg",
    "publishedAt": "2023-01-15T02:58:00Z",
    "content": "Este 13 de enero se estrenó la nueva serie de Apple TV + SuperLeague: The War for Football. Serie documental en cuatro partes que revela a detalle y con entrevistas exclusivas a todos los protagonist… [+4052 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Buddytv.com"
    },
    "author": "Buddy TV",
    "title": "New TV Shows to Watch in January 2023",
    "description": "It can be difficult to decide which shows amongst the plethora of new and returning series in January you want to watch. To make it easier for you, we’ve put together an impressive list of some top-notch television shows that are sure not to disappoint! Check…",
    "url": "https://www.buddytv.com/new-tv-shows-to-watch-in-january-2023/",
    "urlToImage": "https://www.buddytv.com/wp-content/uploads/2023/01/best-tv-shows-january-2023.jpg",
    "publishedAt": "2023-01-15T01:10:31Z",
    "content": "It can be difficult to decide which shows amongst the plethora of new and returning series in January you want to watch. To make it easier for you, we’ve put together an impressive list of some top-n… [+11693 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Maharashtratimes.com"
    },
    "author": null,
    "title": "नेपाळमध्ये मोठा अपघात! पोखराजवळ ७२ प्रवाशांसह विमान कोसळलं; मदतकार्य सुरू",
    "description": "nepal plane crash: नेपाळमध्ये विमानाला मोठा अपघात झाला आहे. नेपाळमधील प्रमुख शहरांपैकी एक असलेल्या पोखराजवळ प्रवासी विमान दुर्घटनाग्रस्त झालं आहे. या विमानात ७२ जण आहेत. अपघाताची माहिती मिळताच मदतकार्याला सुरुवात झाली. राजधानी काठमांडूहून विमान पोखराला जात हो…",
    "url": "https://maharashtratimes.com/international/international-news/nepal-plane-crashes-with-72-passengers-onboard-on-runway-at-pokhara-international-airport/articleshow/97002897.cms",
    "urlToImage": "https://maharashtratimes.com/photo/msid-97002953,imgsize-123/pic.jpg",
    "publishedAt": "2023-01-15T06:27:26Z",
    "content": "<ul><li> ! ; </li><li> ADV- , , Amazon </li><li> ! ; ; </li><li> , ; '' </li><li> , , </li><li> , , '' </li><li> ! . , </li><li> , , ...</li><li> ! ; </li><li> ' ', </li><li> ; </li><li> , ? ... </li… [+53 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Maharashtratimes.com"
    },
    "author": null,
    "title": "कॉलेजमध्ये असतानाच करायचे घरफोडी, एका रात्रीत ५ घरात चोरी, पण एक चूक झाली अन्...",
    "description": "Dhule News Today: स्वतःची हौस पूर्ण करण्यासाठी ते घरफोड्या करत होते. एका संशयितांसह तीन अल्पवयीन बालकांना पिंपळनेर पोलीस स्टेशनचे सहायक पोलीस निरीक्षक सचिन साळुंखे यांच्या पथकाने शिताफीने ताब्यात घेतले आहे.",
    "url": "https://maharashtratimes.com/maharashtra/dhule/five-minors-arrested-in-theft-case-in-dhule/articleshow/96999575.cms",
    "urlToImage": "https://maharashtratimes.com/photo/msid-96999587,imgsize-74444/pic.jpg",
    "publishedAt": "2023-01-15T02:50:08Z",
    "content": "<ul><li> ! . , </li><li> ADV- , , Amazon </li><li>Live Marathi Breaking News Today: </li><li> , , </li><li> ; </li><li> ; </li><li> , </li><li> , ; </li><li> ; </li><li></li><li>- Apple AirPods Pro ,… [+53 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Maharashtratimes.com"
    },
    "author": null,
    "title": "'उसकी हार के चर्चे जीत से ज्यादा हैं'; महाराष्ट्र केसरीत पराभवानंतरही सोशल मीडियावर सिकंदरचीच चर्चा",
    "description": "Pune News Today : महाराष्ट्र केसरीच्या उपांत्य फेरीत सिकंदर शेखला पराभवाचा धक्का सहन करावा लागल्यानंतरही सोशल मीडियात सिंकदरच्या बाजूने सहानुभूतीची लाट निर्माण झाली आहे.",
    "url": "https://maharashtratimes.com/maharashtra/pune-news/wrestler-sikandar-shaikh-social-media-post-after-losing-in-the-semifinals-of-the-maharashtra-kesari-tournament/articleshow/97002178.cms",
    "urlToImage": "https://maharashtratimes.com/photo/msid-97002668,imgsize-123/pic.jpg",
    "publishedAt": "2023-01-15T05:34:44Z",
    "content": ": . . . . . . .\r\n . ' ' . .\r\n' , ', . ' ' .\r\n. . ' ,' .\r\n. , . . . . . . . . .\r\n, . . . . . . . . . . .\r\nMarathi News App: ? .\r\n<ul><li> ; </li><li> ADV- , , Amazon </li><li> ! ; </li><li> ! . , </li… [+201 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Aabhas Sharma",
    "title": "Apple iPad Pro review: Power-packed replacement for a laptop",
    "description": "The 11-inch variant does not get a mini-LED display like its bigger sibling.",
    "url": "https://economictimes.indiatimes.com/magazines/panache/apple-ipad-pro-review-power-packed-replacement-for-a-laptop/articleshow/97000597.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-97000671,width-1070,height-580,imgsize-41304,overlay-etpanache/photo.jpg",
    "publishedAt": "2023-01-15T03:50:04Z",
    "content": "Apple Inc has been pushing its iPad Pro tablet as a suitable replacement for a laptop and its latest iteration comes with a super-fast M2 processor, found in the impressive MacBook Pro and MacBook Ai… [+1563 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "FTW Staff",
    "title": "Los Angeles Chargers vs. Jacksonville Jaguars, live stream, TV channel, time, how to watch Wild Card",
    "description": "Two teams known for their comeback wins this season will collide when the Los Angeles Chargers and the Jacksonville Jaguars square off in an NFL Super Wild Card Weekend playoff game on Saturday nig…",
    "url": "https://ftw.usatoday.com/2023/01/los-angeles-chargers-vs-jacksonville-jaguars-live-stream-tv-channel-time-how-to-watch-wild-card",
    "urlToImage": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2023/01/WC_JAXvsLAC_FB.png?w=1024&h=576&crop=1",
    "publishedAt": "2023-01-15T00:00:37Z",
    "content": "Two teams known for their comeback wins this season will collide when the Los Angeles Chargers and the Jacksonville Jaguars square off in an NFL Super Wild Card Weekend playoff game on Saturday night… [+1690 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.nu.nl"
    },
    "author": "Erik Nusselder",
    "title": "Lifehack: Deze apps helpen je om beter te slapen",
    "description": "Slapen is misschien wel het belangrijkste wat je iedere dag doet. Met deze apps verbeter je je nachtrust en houd je bij hoe goed je slaapt.",
    "url": "https://www.nu.nl/tech/6246785/lifehack-deze-apps-helpen-je-om-beter-te-slapen.html",
    "urlToImage": "https://media.nu.nl/m/qdzxpgva4onu_wd1280/lifehack-deze-apps-helpen-je-om-beter-te-slapen.jpg",
    "publishedAt": "2023-01-15T04:45:34Z",
    "content": "Slapen is misschien wel het belangrijkste wat je iedere dag doet. Met deze apps verbeter je je nachtrust en houd je bij hoe goed je slaapt.\r\nWord je 's ochtends chagrijnig wakker, voel je je de hele … [+2713 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Patrick Reilly",
    "title": "NYC Mayor Eric Adams to tour migrant shelters, visit southern border during El Paso trip",
    "description": "Mayor Eric Adams has a stacked schedule Sunday in El Paso, Texas -- where he'll set eyes on the border crisis that has his own city stretched to the absolute limit.",
    "url": "https://nypost.com/2023/01/14/mayor-adams-to-tour-migrant-shelters-visit-southern-border-during-el-paso-trip/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/01/adams-comp-1.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2023-01-15T04:11:34Z",
    "content": "Mayor Eric Adams has a stacked schedule Sunday in El Paso, Texas — where he’ll set eyes on the border crisis that has his own city stretched to the absolute limit. \r\nHizzoner will spend the day visit… [+2513 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "City A.M."
    },
    "author": "Elena Siniscalco",
    "title": "Open banking success has cracked the code for more tech innovation in the UK",
    "description": "The benefits of new technologies can seem hidden at first - but innovation always brings growth. Open banking is a great example on which the government is basing its strategy, writes Andrew Griffith\nThe post Open banking success has cracked the code for more…",
    "url": "https://www.cityam.com/open-banking-success-has-cracked-the-code-for-more-tech-innovation-in-the-uk/",
    "urlToImage": "https://www.cityam.com/wp-content/uploads/2021/08/monzo-card-2-5b7dcd0e7818a.jpg",
    "publishedAt": "2023-01-15T05:00:00Z",
    "content": "Sunday 15 January 2023 5:00 am\r\nThe benefits of new technologies can seem hidden at first – but innovation always brings growth. Open banking is a great example on which the government is basing its … [+3803 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New Zealand Herald"
    },
    "author": null,
    "title": "Apple's supply chain bet",
    "description": "FiT: Even before violence in China, Apple had plans to make more of its own hardware.",
    "url": "https://www.nzherald.co.nz/business/apples-supply-chain-bet/SJBQP6HFANEGLD3HJHBI47ILQU/",
    "urlToImage": "https://www.nzherald.co.nz/resizer/pYEPvBWf309wBmaV5i4n0W24Cf4=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/DWJTUMA7SBFFPN7N3L3TGBCPVE.jpg",
    "publishedAt": "2023-01-15T04:00:00Z",
    "content": "Even before violence in China and global supply chain disruption with the pandemic, Apple CEO Tim Cook had plans for the company to make more of its own hardware. Photo / Getty ImagesHow much profit … [+4430 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New Zealand Herald"
    },
    "author": null,
    "title": "Microsoft bets big on the creator of ChatGPT in race to dominate AI",
    "description": "New York Times: US$3 billion investment could be followed up with another US$10b.",
    "url": "https://www.nzherald.co.nz/business/microsoft-bets-big-on-the-creator-of-chatgpt-in-race-to-dominate-ai/RNCKCXPERREBRMGFFMSN5J3W6Y/",
    "urlToImage": "https://www.nzherald.co.nz/resizer/5PsbV1uwQ63NUTWlSaFdL0DR1xI=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/N5OFYDTU3ZADVMB7JZ75PY7UO4.jpg",
    "publishedAt": "2023-01-15T02:00:00Z",
    "content": "Sam Altman (left) one of the founders of OpenAI, with Satya Nadella, Microsofts chief executive, at the Microsoft Campus in Redmond, Washington in 2019. As the new chatbot wows the world with its con… [+8523 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Business Standard"
    },
    "author": "IANS",
    "title": "Apple investigating horizontal lines issue in iPhone 14 Pro model",
    "description": "The iPhone 14 Pro customers might 'report that when they power on or unlock their phone, they briefly see horizontal lines flash across the screen,' the memo mentioned",
    "url": "https://www.business-standard.com/article/technology/apple-investigating-horizontal-lines-issue-in-iphone-14-pro-model-123011500133_1.html",
    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/03/full/1672717434-4476.jpg",
    "publishedAt": "2023-01-15T04:54:00Z",
    "content": "Tech giant Apple has confirmed that it is investigating the issue of horizontal lines appearing on the display screen of the iPhone 14 Pro models.\r\nIn a memo, the iPhone maker said that an iOS update… [+1114 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Origo.hu"
    },
    "author": null,
    "title": "Eltűnik az iPhone-ok egyik fontos alkatrésze",
    "description": "Az olcsóbb iPhone 15 mobilok dinamikus szigettel, a jövő évi Pro modellek rejtett Face ID-val érkezhetnek.",
    "url": "https://www.origo.hu/techbazis/20230113-apple-iphone-15-notch-dinamikus-sziget.html",
    "urlToImage": "https://cdn.nwmgroups.hu/s/img/i/2210/20221007apple-iphone-14-pro-max7.jpg?w=1024",
    "publishedAt": "2023-01-15T05:30:00Z",
    "content": "Az olcsóbb iPhone 15 mobilok dinamikus szigettel, a jöv évi Pro modellek rejtett Face ID-val érkezhetnek.A The Elec forrásai szerint az Apple arra készül, hogy mindegyik iPhone 15 modellbe beépíti a … [+737 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Origo.hu"
    },
    "author": null,
    "title": "Nagyon megijedtek az iPhone 14 Prók gazdái",
    "description": "Gyanús csíkok jelenhetnek meg a kijelzőn a bekapcsolásakor és a feloldáskor.",
    "url": "https://www.origo.hu/techbazis/20230114-iphone-14-pro-vizszintes-csik-a-kijelzon.html",
    "urlToImage": "https://cdn.nwmgroups.hu/s/img/i/2301/20230114iphone-14-pro2.jpg?w=1024",
    "publishedAt": "2023-01-15T07:06:00Z",
    "content": "Gyanús csíkok jelenhetnek meg a kijelzn a bekapcsolásakor és a feloldáskor.Az elmúlt idszakban gylni kezdtek a panaszok az iPhone 14 Pro mobilokkal rendelkezktl, hogy a készülékeik bekapcsolásakor és… [+1119 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WGN TV Chicago"
    },
    "author": "Greg Haas",
    "title": "Horses at McDonald's? An odd sight in Las Vegas",
    "description": "A pair of horses parked outside a McDonald's in the north valley turned a few heads Friday afternoon.",
    "url": "https://wgntv.com/news/nexstar-media-wire/horses-at-mcdonalds-an-odd-sight-in-las-vegas/",
    "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2023/01/horses-2-01132023.jpg?w=1280",
    "publishedAt": "2023-01-15T02:34:29Z",
    "content": "LAS VEGAS (KLAS) A pair of horses parked outside a McDonald's in Las Vegas' north valley turned a few heads on Friday afternoon.\r\nSomeone needs to tell them that McDonald’s doesn’t have Horsey Sauce … [+498 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slickdeals.net"
    },
    "author": "daisybeetle",
    "title": "Apple AirPods Pro 2nd Gen w/ MagSafe Charging Case $200 + free shipping",
    "description": "Verizon.com [verizon.com] has *Apple AirPods Pro 2nd Gen w/ MagSafe Charging Case* (MQD83AM/A) on sale for *$199.99 (add to cart for price)*. *Shipping is free *(choose free -5 day ground)",
    "url": "https://slickdeals.net/f/16381777-apple-airpods-pro-2nd-gen-w-magsafe-charging-case-200-free-shipping",
    "urlToImage": "https://static.slickdealscdn.com/attachment/6/3/5/4/7/1/12831667.attach",
    "publishedAt": "2023-01-15T06:46:21Z",
    "content": "Your vote will help the community find the best deals."
    },
    {
    "source": {
    "id": null,
    "name": "Aajtak.in"
    },
    "author": "aajtak.in",
    "title": "Flipkart की सेल शुरू, आधी से भी कम कीमत पर मिल रहे हैं ये फोन्स!",
    "description": "Flipkart Big Saving Days Sale: आज से सभी मेंबर्स के लिए Flipkart की Big Saving Days Sale शुरू हो गई है. इस सेल के दौरान लगभग सभी कैटेगरी के स्मार्टफोन्स पर बंपर डिस्काउंट दिया जा रहा है. इस सेल में कई फोन्स पर बंपर डील दी जा रही है. आप सेल के दौरान Apple iPho…",
    "url": "https://www.aajtak.in/technology/tech-deals-/story/flipkart-big-saving-days-sale-discount-on-these-phones-ttec-1615975-2023-01-15",
    "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/samsung_galaxy_z_flip_3_5g-sixteen_nine.png",
    "publishedAt": "2023-01-15T05:31:25Z",
    "content": "Flipkart Big Saving Days . 20 . . \r\n .   . Apple iPhone 14 . . \r\nSamsung Galaxy Z Flip 3 5G\r\nSamsung Galaxy Z Flip 3 5G . 1 . , 50 . 49,999 . . . \r\niPhone 14 \r\niPhone 14 . 79,900 . 65 . . \r\nNothing P… [+113 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tom's Guide"
    },
    "author": "clioleonard",
    "title": "Des avions autonomes sans pilote, l'ordre chronologique des programmes Marvel, de nouvelles images du tournage d’Avatar 2, c’est le récap’ de la semaine",
    "description": "Airbus teste son premier avion autonome, un coup de pouce pour regarder les films et séries Marvel dans l’ordre, les studios Disney/20th Century Studios partagent des images inédites du tournage d’Avatar 2, c’est le récap’ de la semaine.",
    "url": "https://www.tomsguide.fr/?p=1197985",
    "urlToImage": "https://www.tomsguide.fr/content/uploads/sites/2/2023/01/sans-titre-1-1.png",
    "publishedAt": "2023-01-15T06:00:00Z",
    "content": "Airbus teste son premier avion autonome, un coup de pouce pour regarder les films et séries Marvel dans lordre, les studios Disney/20th Century Studios partagent des images inédites du tournage dAvat… [+3993 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Techweb.com.cn"
    },
    "author": "故渊",
    "title": "苹果官方表示正收集相关反馈，以遏制“车祸检测”误报问题",
    "description": "近日在接受《纽约邮报》采访时，苹果官方发言人表示正收集紧急呼叫中心的相关反馈，以遏制“车祸检测”误报问题。但发言人拒绝提供进一步的置评。《纽约邮报》在报告中指出，苹果的“车祸检测”功能导致纽约州 Greene County、宾夕法尼亚州 Carbon County 等滑雪胜地出现了大量 911 误报。IT之家了解到，在圣诞假期中很多美国人都选择了滑雪进行放松，因此格兰德县（Grand County）、伊格尔（Eagle County）、皮特金（Pitkin County）、鲁特县（Routt County）和萨米…",
    "url": "http://www.techweb.com.cn/it/2023-01-15/2917291.shtml",
    "urlToImage": "http://upload1.techweb.com.cn/s/120/imgs/2023/0115/1673753380341.png",
    "publishedAt": "2023-01-15T03:29:43Z",
    "content": "Greene County Carbon County 911 \r\nITGrand CountyEagle CountyPitkin CountyRoutt CountySummit County 12 \r\n Pat Eliasen 2022 700 iPhone\r\nEliasen iPhone 14 Apple Watch \r\nEliasen EMS"
    },
    {
    "source": {
    "id": null,
    "name": "Macerkopf.de"
    },
    "author": "Admin",
    "title": "„My Kind of Country“: neuer Musikwettbewerb startet am 24. März auf Apple TV+",
    "description": "Apple TV+ hat bekannt gegeben, dass mit „My Kind of Country“ ein neuer Musikwettbewerb am 24. März auf Apples Video-Streaming-Dienst starten wird. Mit von der Partie werden zahlreiche namhafte Country-Singer-Songwriter sein. Apple TV+: „My Kind of Country“ st…",
    "url": "https://www.macerkopf.de/2023/01/15/my-kind-country-musikwettbewerb-maerz/",
    "urlToImage": "https://www.macerkopf.de/wp-content/uploads/2023/01/apple_tv_plus_my_kind_of_country.jpg",
    "publishedAt": "2023-01-15T07:00:14Z",
    "content": "Apple TV+ hat bekannt gegeben, dass mit „My Kind of Country“ ein neuer Musikwettbewerb am 24. März auf Apples Video-Streaming-Dienst starten wird. Mit von der Partie werden zahlreiche namhafte Countr… [+2349 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "WELT",
    "title": "Ukrainischer Botschafter erhöht Druck - „Deutsche Panzer sind überlebenswichtig“",
    "description": "Ohne die Leopard-Panzer sei eine weitere Rückeroberung von Gebieten nicht möglich, sagt der ukrainische Botschafter in Deutschland. Oleksii Makeiev fordert die Bundesregierung eindringlich auf, schnell Leopard-2-Kampfpanzer bereitzustellen. „Deutsche Waffen r…",
    "url": "https://www.welt.de/politik/deutschland/article243217049/Ukrainischer-Botschafter-Makeiev-Deutsche-Panzer-sind-ueberlebenswichtig.html",
    "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile243217051/8401359407-ci16x9-w1200/Epiphany-Singers-Perform-For-Ukrainian-Refugees-At-Tegel-Center.jpg",
    "publishedAt": "2023-01-15T04:20:26Z",
    "content": "Vor den Verhandlungen der westlichen Verbündeten über weitere Waffenlieferungen in die Ukraine hat der ukrainische Botschafter Oleksii Makeiev die Bundesregierung eindringlich aufgefordert, seinem La… [+4043 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "WELT",
    "title": "Raketenangriff auf Wohnhaus - In Dnipro erhöht sich die Zahl der Toten auf mindestens 14",
    "description": "Nach dem Raketenangriff auf ein Wohnhaus in der ukrainischen Stadt Dnipro ist die Zahl der Todesopfer auf 14 gestiegen. Russland hat nach ukrainischen Angaben einen Austausch von Kriegsgefangen in letzter Minute platzen lassen. Mehr im Liveticker.",
    "url": "https://www.welt.de/politik/ausland/article243217047/Ukraine-News-In-Dnipro-erhoeht-sich-die-Zahl-der-Toten-auf-mindestens-14.html",
    "urlToImage": "https://img.welt.de/img/bildergalerien/mobile243217083/4381352167-ci16x9-w1200/Aftermath-of-Dnipro-apartment-block-destruction-following-missile.jpg",
    "publishedAt": "2023-01-15T05:03:49Z",
    "content": "Nach den neuen russischen Raketenattacken auf die Ukraine mit Toten und Verletzten in der Stadt Dnipro hat die Führung des angegriffenen Landes mehr Waffen vom Westen gefordert. Der Terror lasse sich… [+4491 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SB Nation"
    },
    "author": "Elijah Newsome",
    "title": "CHN Radio Episode 190: The Return of the Podfathers",
    "description": "Elijah and Josh return to podcasting",
    "url": "https://cominghomenewcastle.sbnation.com/2023/1/15/23555523/chn-radio-episode-190-the-return-of-the-podfathers",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/CI54pqyZXmcczrQ8-You5f7WmN4=/0x378:5819x3425/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24360669/1246169780.jpg",
    "publishedAt": "2023-01-15T00:01:34Z",
    "content": "Shirtless Trippier Pic | Photo by Richard Sellers/Getty Images\r\n\n \n\n\n Elijah and Josh return to podcasting What’s good CHN Radio Fam?!? We are back at it with another episode of CHN Radio for ya! Jos… [+553 chars]"
    },
    {
    "source": {
    "id": "les-echos",
    "name": "Les Echos"
    },
    "author": "Les Echos",
    "title": "Rebond : Damien Morin, bien parti avec mobile.club",
    "description": "L'aventure de Save, spécialiste de la réparation de smartphones, s'est soldée par un redressement judiciaire et un rachat en 2017. Quelques mois aprés, l'entrepreneur a monté mobile.club dans la location de téléphones. Il boucle une levée de fonds auprès de 1…",
    "url": "https://www.lesechos.fr/start-up/portraits/damien-morin-le-jeune-sage-de-la-french-tech-1895846",
    "urlToImage": "https://business.lesechos.fr/medias/2023/01/11/350658_damien-morin-le-jeune-sage-de-la-french-tech-damien-morin-le-jeune-sage-de-la-french-tech-web-tete-0703170662038-2510862.jpg",
    "publishedAt": "2023-01-15T06:00:00Z",
    "content": "Rare sont les dirigeants à parler sans langue de bois de leurs plus grosses erreurs, leurs mauvaises décisions ou même leurs échecs. Damien Morin fait partie de cette poignée d'entrepreneurs de la Fr… [+5397 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nintendo Life"
    },
    "author": "Liam Doolan",
    "title": "The Simpsons Hit & Run Soundtrack Is Out Now On Spotify And Apple Music",
    "description": "Can we have the game now as well?There have been a number of stories over the years about possibly reviving The Simpsons Hit & Run - a Grand Theft Auto-like title set in the fictional town of Springfield.While we don't seem to be any closer to a comeback, ear…",
    "url": "https://www.nintendolife.com/news/2023/01/the-simpsons-hit-and-run-soundtrack-is-out-now-on-spotify-and-apple-music",
    "urlToImage": "https://images.nintendolife.com/a1855b82d832a/1280x720.jpg",
    "publishedAt": "2023-01-15T05:00:00Z",
    "content": "There have been a number of stories over the years about possibly reviving The Simpsons Hit &amp; Run - a Grand Theft Auto-like title set in the fictional town of Springfield.\r\nWhile we don't seem to… [+1159 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Mail"
    },
    "author": "Shayne Bugden",
    "title": "Chef reveals tennis stars' food secrets at the Australian Open - and the dish Serena Williams loved",
    "description": "Helen Goh had complete freedom to create the menu for some of the sport's biggest names when they were in Melbourne - but one star preferred to bring his own powdered food.",
    "url": "https://www.dailymail.co.uk/sport/tennis/article-11636191/Chef-reveals-tennis-stars-food-secrets-Australian-Open-dish-Serena-Williams-loved.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2023/01/15/04/66586551-0-image-a-24_1673756835850.jpg",
    "publishedAt": "2023-01-15T04:41:38Z",
    "content": "Celebrity chef Helen Goh has opened up on tennis stars' go-to meals after working in the restaurant that served players at the Australian Open - and detailed how she created one dish that made a huge… [+2844 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Microbe.tv"
    },
    "author": "Vincent Racaniello",
    "title": "TWiV 975: Crossing the Ts with Daniela Weiskopf",
    "description": "Daniela joins TWiV to discuss her career and her research on T cells, their role in infection with SARS-CoV-2, T cell epitopes and why a variant that evades T cell immunity is not likely to emerge. Hosts: Vincent Racaniello, Alan Dove, and Brianne Barker Gues…",
    "url": "https://www.microbe.tv/twiv/twiv-975/",
    "urlToImage": null,
    "publishedAt": "2023-01-15T05:00:00Z",
    "content": "Daniela joins TWiV to discuss her career and her research on T cells, their role in infection with SARS-CoV-2, T cell epitopes and why a variant that evades T cell immunity is not likely to emerge.\r\n… [+1070 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Denver Post"
    },
    "author": "Tribune News Service",
    "title": "Ravens vs. Bengals scouting report for Sunday's wild-card playoff game: Who has the edge?",
    "description": "The Ravens lost their regular-season finale to the Bengals, 27-16, as third-string quarterback Anthony Brown committed three costly turnovers in the first half. The Ravens have scored just 75 points in six games with Tyler Huntley or Anthony Brown at quarterb…",
    "url": "https://www.denverpost.com/2023/01/14/ravens-vs-bengals-scouting-report-for-sundays-wild-card-playoff-game-who-has-the-edge/",
    "urlToImage": "https://www.denverpost.com/wp-content/uploads/2023/01/202301141418TMS_____MNGTRPUB_SPORTS-RAVENS-VS-BENGALS-SCOUTING-REPORT-FOR-1-BZ5.jpg?w=1024&h=576",
    "publishedAt": "2023-01-15T04:55:06Z",
    "content": "The Ravens lost their regular-season finale to the Bengals, 27-16, as third-string quarterback Anthony Brown committed three costly turnovers in the first half. But a determined defensive effort gave… [+7954 chars]"
    }
    ]
       
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }

  async UpdateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc0a9b7b55984f7899cc8a1d2c5ab5ad&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true})
   let data = await fetch(url);
   let parsedData=  await data.json()
   console.log(parsedData.articles)
   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }


   async componentDidMount(){
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc0a9b7b55984f7899cc8a1d2c5ab5ad&page=1&pageSize=${this.props.pageSize}`;
   this.setState({loading:true})
   let data = await fetch(url);
   let parsedData=  await data.json()
   console.log(parsedData.articles)
   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }

  handlePrevClick=  async()=>{
  // console.log("handle previous click")
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc0a9b7b55984f7899cc8a1d2c5ab5ad&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true})
  // let data = await fetch(url);
  // let parsedData=  await data.json()
  // console.log(parsedData.articles)
  // this.setState({
  //   page:this.state.page-1,
  //   articles:parsedData.articles,
  //   loading:false
  // })

  this.setState({page:this.state.page-1});
  this.UpdateNews();
}
  

handleNextClick= async ()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc0a9b7b55984f7899cc8a1d2c5ab5ad&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  // let data = await fetch(url);
  // let parsedData=  await data.json()
  // console.log(parsedData.articles)
  // this.setState({
  //   page:this.state.page+1,
  //   articles:parsedData.articles,
  //   loading:false
  //   })
  this.setState({page:this.state.page+1});
  this.UpdateNews();

  
}
  render() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
      <div className="container my-3">
        <h2 className='d-flex justify-content-center my-3'>NewsApp-Top {capitalize(this.props.category)} News</h2>
        {this.state.loading && <Loading/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map(element=>{
         return <div className="col-md-4" key={element.url}>
             <NewsComponent date={element.publishedAt} title={element.title} description={element.description} imgURL={element.urlToImage} newsURL={element.url} author={element.author} source={element.source}/>
        </div>
          
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
         <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
       </div>
    )
  }

}
export default News

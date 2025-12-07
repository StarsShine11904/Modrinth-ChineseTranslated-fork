// ==UserScript==
// @name         Modrinth-Traditional-Chinese
// @namespace    http://tampermonkey.net/
// @version      1
// @description  讓Modrinth繁中化！
// @author       Stars Shine
// @match        https://modrinth.com/*
// @grant        none
// @license      GPL-3.0
// @downloadURL 
// @updateURL 
// @supportURL 
// ==/UserScript==

(function () {
  "use strict";

  // 翻譯詞典
  const translations = {
    "Discover content": "發現內容",
    "Host a server": "託管伺服器",
    "Modrinth App": "Modrinth 應用程式",
    "New project": "新建項目",
    "New collection": "新建收藏夾",
    "New organization": "新建組織",
    "The place for Minecraft mods plugins data packs shaders resource packs modpacks":
      "Minecraft 模組、插件、資料包、光影包、資源包和模組包的家園",
    "Discover, play, and share Minecraft content through our open-source platform built for the community.":
      "透過我們為社區構建的開源平台發現、遊玩和分享 Minecraft 內容。",
    Mods: "模組",
    mods: "模組",
    Plugins: "插件",
    plugins: "插件",
    "Data Packs": "資料包",
    "data packs": "資料包",
    Shaders: "光影包",
    shaders: "光影包",
    "resource packs": "資源包",
    "Resource Packs": "資源包",
    Modpacks: "模組包",
    modpacks: "模組包",
    Servers: "伺服器",
    servers: "伺服器",
    "Upgrade to Modrinth+": "升級到 Modrinth+",
    "Saved projects": "儲存的項目",
    "My servers": "我的伺服器",
    Notifications: "通知",
    from: "來自",
    project: "項目",
    Revenue: "收入",
    Analytics: "分析",
    "Sign out": "登出",
    "Discover, play, and share Minecraft content through our open-source platform built for the community.":
      "透過我們為社區打造的開源平台發現、遊玩和分享 Minecraft 內容。",
    "Discover mods": "發現模組",
    "Go to dashboard": "前往儀錶板",
    "For Players": "面向玩家",
    "Discover over 50,000 creations": "發現超過 50,000 個創作",
    "From magical biomes to cursed dungeons, you can be sure to find content to bring your gameplay to the next level.":
      "從魔法生物群繫到詛咒的地牢，你肯定能找到能提升遊戲體驗的內容。",
    "Find what you want, quickly and easily": "快速輕鬆地找到你想找的內容",
    "Modrinth's lightning-fast search and powerful filters let you find what you want as you type.":
      "Modrinth 的超快搜尋和強大的篩選功能讓你在輸入時就能找到想要的內容。",
    "View:": "顯示:",
    "List view": "列表視圖",
    "Grid view": "網格視圖",
    "Gallery view": "畫廊視圖",
    "Sort by:": "排序:",
    Relevance: "相關性",
    Downloads: "下載",
    Follows: "追蹤",
    download: "下載",
    follower: "追蹤",
    "Date updated": "更新時間",
    "Date published": "發布時間",
    "Follow projects you love": "追蹤你喜歡的項目",
    "Get notified every time your favorite projects update and stay in the loop":
      "每次你追蹤的項目更新時都會收到通知，不錯過任何動態",
    "Give an online home to your creations and reach a massive audience of dedicated players":
      "為你創作的內容提供在線家園，並觸及大量忠實玩家",
    "Play with your favorite launcher": "使用你喜愛的啟動器遊玩",
    "Modrinth's open-source API lets launchers add deep integration with Modrinth. You can use Modrinth through":
      "Modrinth 的開源 API 讓啟動器能夠深度集成 Modrinth。你可以透過",
    "our own app": "我們自己的應用程式",
    "and some of the most popular launchers like ATLauncher, MultiMC, and Prism Launcher.":
      "和一些最受歡迎的啟動器(如 ATLauncher、MultiMC 和 Prism Launcher)使用 Modrinth。",
    "For Creators": "創作者專區",
    "Share your content with the world": "與世界分享你的內容",
    "Give an online home to your creations and reach a massive audience of dedicated players": "為你創作的內容提供線上家園，並觸及大量忠實玩家",
    Discovery: "發現",
    "Get your project discovered by thousands of users through search, our home page, Discord server, and more ways to come in the future!":
      "透過搜尋、我們的首頁、Discord 伺服器以及未來更多方式，讓你的項目被成千上萬的使用者發現！",
    "Team Management": "團隊管理",
    "Invite your teammates and manage roles and permissions with ease":
      "輕鬆邀請隊友並管理角色和權限",
    Monetization: " 收益",
    "Get paid ad revenue from your project pages and withdraw your funds at any time":
      "從你的項目頁面獲得廣告收入，並隨時提現",
    "Diverse Ecosystem": "多樣化的生態系統",
    "Integrate with your build tools through Minotaur for automatic uploads right when you release a new version":
      "透過 Minotaur 與構建工具集成，實現在發布新版本時自動上傳",
    "Data and Statistics": "資料和統計",
    "Get detailed reports on page views, download counts, and revenue":
      "取得詳細的頁面瀏覽量、下載次數和收入報告",
    "Constantly Evolving": "不斷進化",
    "Get the best modding experience possible with constant updates from the Modrinth team":
      "透過 Modrinth 團隊的持續更新，獲得最佳的模組製作體驗",
    "Latest news from Modrinth": "來自更多Modrinth的新聞"
    "View all news": "查看更多新聞"
    "Read more about": "了解更多關於",
    "Visit the blog": "存取部落格",
    "Modrinth is": "Modrinth 是 ",
    "open source": "開源的",
    ".": "。",
    Company: "公司",
    Terms: "條款",
    Privacy: "隱私",
    Rules: "規則",
    Careers: "職位",
    Resources: "資源",
    Support: "支援",
    About: "關於",
    News: "新聞",
    Blog: "部落格",
    Docs: "文件",
    Status: "狀態",
    "Rewards Program": "獎勵計劃",
    Products: "產品",
    "Modrinth Servers": "Modrinth 伺服器",
    "Help Center": "協助中心",
    Translate: "翻譯",
    "Report issues": "回報問題",
    "View source": "查看原始碼",
    "Visit wiki": "存取wiki",
    "Join Discord server": "加入Discord伺服器",
    "Donate on Ko-fi": "在Ko-fi上捐贈",
    "Donate on Patreon": "在Patreon上捐贈",
    "Donate on PayPal": "在PayPal上捐贈",
    "Sponsor on GitHub": "GitHub上的贊助商",
    "API documentation": "API 文件",
    Legal: "法律",
    "Content Rules": "內容規則",
    "Terms of Use": "使用條款",
    "Security Notice": "安全聲明",
    "Copyright Policy and DMCA": "版權政策與數位千禧年著作權法案",
    Interact: "互動",
    "X (Twitter)": "X (推特)",
    "Get Modrinth App": "取得 Modrinth 應用程式",
    "Sign in": "登入",
    "Sign up": "註冊",
    "Sign in with": "使用以下方式登入",
    "Or use a password": "或使用密碼",
    "Create an account": "建立帳戶",
    "Enter two-factor code": "輸入兩步驗證碼",
    "Please enter a two-factor code to proceed.": "請輸入兩步驗證碼以繼續。",
    "Change theme": "更改主題",
    "NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.":
      "這不是官方的 Minecraft 服務。未經 Mojang 或 Microsoft 批准或關聯。",
    "Join the conversation": "加入討論",
    "Loading...": "載入中...",
    "No results found": "未找到結果",
    Home: "首頁",
    Login: "登入",
    Register: "註冊",
    Profile: "個人資料",
    Settings: "設定",
    Logout: "登出",
    Dashboard: "儀錶板",
    "My Projects": "我的項目",
    "My Organizations": "我的組織",
    "My Collections": "我的收藏夾",
    "Create Project": "建立項目",
    "Create Collection": "建立收藏夾",
    "Create Organization": "建立組織",
    "Latest News": "最新新聞",
    Featured: "精選",
    "Support us": "支援我們",
    "Help & Support": "協助和支援",
    Documentation: "文件",
    "Terms of Service": "服務條款",
    "Privacy Policy": "隱私政策",
    Categories: "分類",
    Features: "特點",
    Trending: "趨勢",
    "Featured Packs": "精選包",
    "Recent Activity": "最近活動",
    Community: "社區",
    Popular: "流行",
    "Search results for": "搜尋結果",
    Submit: "提交",
    Apply: "套用",
    Cancel: "取消",
    Username: "使用者名稱",
    Password: "密碼",
    "Confirm Password": "確認密碼",
    "Submit your mod": "提交你的模組",
    "Edit Project": "編輯項目",
    "Delete Project": "刪除項目",
    "Project Settings": "項目設定",
    "Manage Organization": "管理組織",
    "Your Projects": "你的項目",
    "Your Collections": "你的收藏夾",
    "Your Organizations": "你的組織",
    "Add New Mod": "新增新模組",
    "Add New Collection": "新增新收藏夾",
    "Add New Organization": "新增新組織",
    "Minecraft Version": "Minecraft 版本",
    "Game Version": "遊戲版本",
    "Game versions": "遊戲版本",
    "Choose File": "選擇文件",
    Upload: "上傳",
    Download: "下載",
    "Install Instructions": "安裝說明",
    "Change Log": "更新紀錄",
    Links: "連結",
    Creators: "作者",
    Details: "詳情",
    "Report an Issue": "回報問題",
    "View Project": "查看項目",
    "Version History": "版本歷史",
    "Modrinth API": "Modrinth API",
    "About Us": "關於我們",
    Contact: "聯絡方式",
    Support: "支援",
    "API Documentation": "API 文件",
    "Privacy Settings": "隱私設定",
    "Invite a member": "邀請成員",
    "Manage Members": "管理成員",
    "Organization Settings": "組織設定",
    "Request Access": "請求存取",
    "Create New Project": "建立新項目",
    "Project Version": "項目版本",
    Resources: "資源",
    "Installation Instructions": "安裝說明",
    "Review and Ratings": "留言與評分",
    "View Comments": "查看留言",
    "Add Comment": "新增留言",
    "Add Review": "新增評分",
    Approve: "批准",
    Reject: "拒絕",
    Draft: "草稿",
    Publish: "發布",
    Published: "發布於",
    Unpublished: "未發布",
    Starred: "收藏",
    Favorites: "收藏夾",
    "User Reviews": "使用者留言",
    Organization: "團隊",
    Developer: "開發者",
    Owner: "所有者",
    "Created by": "建立者",
    "Version Notes": "版本說明",
    "Mods and Add-ons": "模組和附加組件",
    Contribute: "貢獻",
    Donate: "捐贈",
    "Download Now": "立即下載",
    "Latest Release": "最新版本",
    "Upcoming Updates": "即將更新",
    "Install Now": "立即安裝",
    Required: "必需",
    Optional: "可選",
    "Add to Favorites": "加入收藏夾",
    "View Details": "查看詳情",
    "Related Projects": "相關項目",
    "Related Mods": "相關模組",
    "View All": "查看所有",
    New: "新建",
    Version: "版本",
    Versions: "版本",
    "Link to this page": "連結到此頁面",
    "Copy Link": "複製連結",
    Share: "分享",
    "View More": "查看更多",
    Back: "返回",
    "Go Back": "返回",
    Continue: "繼續",
    Next: "下一步",
    Previous: "上一頁",
    "Cancel Subscription": "取消訂閱",
    "Manage Subscription": "管理訂閱",
    "Subscribe Now": "立即訂閱",
    "Notifications Settings": "通知設定",
    Activate: "啟用",
    Deactivate: "停用",
    "Terms and Conditions": "條款與條件",
    "Cookies Policy": "Cookies 政策",
    "Privacy Preferences": "隱私偏好設定",
    "User Agreement": "使用者協議",
    "Sign In": "登入",
    "Sign Up": "註冊",
    "Forgot Password?": "忘記密碼？",
    "Reset Password": "重設密碼",
    "Change Email": "更改電子郵件",
    "Change Username": "更改使用者名稱",
    "Update Profile": "更新個人資料",
    "Account Settings": "帳戶設定",
    "Security Settings": "安全設定",
    "Two-factor Authentication": "兩步驗證",
    "Security Questions": "安全問題",
    "Session Expired": "會話過期",
    "Account Suspended": "帳戶被暫停",
    "Subscription Expired": "訂閱已過期",
    "Confirm Email Address": "確認電子郵件地址",
    "Email Verified": "電子郵件已驗證",
    Error: "錯誤",
    Success: "成功",
    Warning: "警告",
    Information: "資訊",
    Confirmation: "確認",
    "Action Required": "需要操作",
    Retry: "重試",
    Save: "儲存",
    Edit: "編輯",
    Delete: "刪除",
    Close: "關閉",
    Description: "描述",
    Tags: "標籤",
    Comments: "留言",
    Reviews: "評價",
    Rating: "評分",
    Stars: "星標",
    Members: "成員",
    Projects: "項目",
    Collections: "收藏夾",
    Organizations: "組織",
    Followers: "追蹤者",
    Following: "正在追蹤",
    Follow: "追蹤",
    Unfollow: "取消追蹤",
    Joined: "加入日期",
    "Last Updated": "最後更新",
    License: "許可證",
    Permissions: "權限",
    Collaborators: "協作者",
    Admin: "管理員",
    Moderator: "版主",
    Member: "成員",
    Guest: "訪客",
    Public: "公開",
    Private: "私有",
    Team: "團隊",
    Role: "角色",
    Actions: "操作",
    Select: "選擇",
    Filter: "篩選",
    Clear: "清除",
    All: "全部",
    Active: "活躍",
    Inactive: "不活躍",
    Online: "在線",
    Offline: "離線",
    Verified: "已驗證",
    Pending: "待處理",
    Rejected: "已拒絕",
    Approved: "已批准",
    Blocked: "已阻止",
    Banned: "已封禁",
    Suspended: "已暫停",
    Disabled: "已停用",
    Enabled: "已啟用",
    Visible: "可見",
    Hidden: "隱藏",
    Open: "打開",
    Closed: "關閉",
    Locked: "鎖定",
    Unlocked: "解鎖",
    Allowed: "允許",
    Forbidden: "禁止",
    Granted: "授予",
    Revoked: "撤銷",
    Assigned: "分配",
    Unassigned: "未分配",
    Available: "可用",
    Unavailable: "不可用",
    Installed: "已安裝",
    "Not Installed": "未安裝",
    Compatible: "相容",
    Incompatible: "不相容",
    Supported: "支援",
    Unsupported: "不支援",
    "Required Files": "必需文件",
    "Recommended Files": "推薦文件",
    "Optional Files": "可選文件",
    Dependencies: "依賴項",
    Conflict: "衝突",
    Changelog: "更新紀錄",
    Gallery: "畫廊",
    Channels: "來源",
    Compatibility: "相容版本",
    Platforms: "平台",
    Platform: "平台",
    "Supported environments": "運行環境",
    "Client-side": "使用者端",
    "Server-side": "伺服器端",
    "Read more": "閱讀更多",
    "See all": "查看全部",
    "Load more": "載入更多",
    Exclude: "排除",
    "More options": "更多選項",
    Report: "檢舉",
    "Copy ID": "複製ID",
    "Copy permanent link": "複製永久連結",
    Licensed: "許可證 ",
    "Creating a project": "建立項目",
    Name: "名稱",
    "Enter project name...": "輸入項目名稱...",
    Visibility: "可見性",
    "The visibility of your project after it has been approved.":
      "項目審核透過後的可見性。",
    Unlisted: "非公開",
    Summary: "簡介",
    "A sentence or two that describes your project.":
      "一句或兩句來描述你的項目。",
    "Create project": "建立項目",
    "Creating a collection": "建立收藏夾",
    "Enter collection name...": "輸入收藏夾名稱...",
    "A sentence or two that describes your collection.":
      "一句或兩句來描述你的收藏夾。",
    "Your new collection will be created as a public collection with no projects.":
      "你的新收藏夾將被建立為一個沒有項目的公開收藏夾。",
    "Create collection": "建立收藏夾",
    "Creating an organization": "建立組織",
    "Enter organization name...": "輸入組織名稱...",
    "A sentence or two that describes your organization.":
      "一句或兩句來描述你的組織。",
    "You will be the owner of this organization, but you can invite other members and transfer ownership at any time.":
      "你將成為該組織的所有者，但你可以隨時邀請其他成員並轉讓所有權。",
    //Mods頁面補全
    "75% of ad revenue goes to creators": "75% 的廣告收入歸創作者所有",
    "Support creators and Modrinth ad-free with ":
      "透過 Modrinth+ 無廣告地支援創作者和 ",
    "Game version": "遊戲版本",
    "Search...": "搜尋...",
    "Search mods...": "搜尋模組...",
    "Search resource packs..": "搜尋資源包...",
    "Search data packs...": "搜尋資料包...",
    "Search shaders...": "搜尋光影包...",
    "Search modpacks...": "搜尋模組包...",
    "Search plugins...": "搜尋插件...",
    "Show all versions": "顯示所有版本",
    Loader: "載入器",
    "Show more": "顯示更多",
    "Show fewer": "顯示更少",
    Adventure: "冒險",
    Cursed: "鬼畜",
    Decoration: "裝飾",
    Economy: "經濟",
    Equipment: "裝備",
    Food: "食物",
    "Game Mechanics": "遊戲機制",
    Library: "庫",
    Magic: "魔法",
    Management: "管理",
    Minigame: "小遊戲",
    Mobs: "生物",
    Optimization: "最佳化",
    Social: "社交",
    Storage: "儲存",
    Technology: "科技",
    Transportation: "運輸",
    Utility: "實用工具",
    "World Generation": "世界生成",
    Environment: "環境",
    "Client or server": "使用者端或伺服器端",
    "Client and server": "使用者端和伺服器端",
    Client: "使用者端",
    Server: "伺服器端",
    "Open source": "開源",
    Updated: "更新於 ",
    yesterday: "昨天",
    "last week": "上週",
    "last month": "上個月",
    "last year": "去年",
    //資源包頁面補全
    Combat: "戰鬥",
    Modded: "修改",
    Realistic: "寫實",
    Simplistic: "簡潔",
    Themed: "主題",
    Tweaks: "調整",
    "Vanilla-like": "原版風格",
    Audio: "音訊",
    Blocks: "方塊",
    "Core Shaders": "核心光影",
    Entities: "實體",
    Fonts: "字體",
    Items: "物品",
    Locale: "在地化",
    Models: "模型",
    Resolutions: "解析度",
    "8x or lower": "8x或更低",
    "512x or higher": "512x或更高",
    //光影包頁面補全
    Cartoon: "卡通",
    Fantasy: "幻想",
    "Semi-realistic": "半現實",
    Atmosphere: "大氣效果",
    Bloom: "光暈",
    "Colored Lighting": "彩色光照",
    Foliage: "植被",
    "Path Tracing": "路徑追蹤",
    Reflections: "反射",
    Shadows: "陰影",
    "Performance impact": "性能影響",
    High: "高",
    Low: "低",
    Medium: "中",
    Potato: "馬鈴薯",
    Screenshot: "截圖",
    //模組包頁面補全
    Challenging: "硬核",
    "Kitchen Sink": "水槽",
    Lightweight: "輕量",
    Multiplayer: "多人",
    Quests: "任務",
    //插件頁面補全
    Platfrom: "平台",
    //設定頁面補全
    "Save changes": "儲存更改",
    Display: "顯示",
    Appearance: "外觀",
    "Color theme": "顏色主題",
    "Select your preferred color theme for Modrinth on this device.":
      "在此裝置上為 Modrinth 選擇您喜歡的顏色主題。",
    "Sync with system": "與系統同步",
    Light: "淺色",
    Dark: "深色",
    "Project list layouts": "項目列表布局",
    "Select your preferred layout for each page that displays project lists on this device.":
      "為該裝置上顯示項目列表的每個頁面選擇您喜歡的布局。",
    Rows: "列表",
    Grid: "網格",
    "Mods page": "模組頁面",
    "Plugins page": "插件頁面",
    "Data Packs page": "資料包頁面",
    "Shaders page": "光影包頁面",
    "Resource Packs page": "資源包頁面",
    "Modpacks page": "模組包頁面",
    "User profile pages": "使用者個人資料頁面",
    "Toggle features": "切換功能",
    "Advanced rendering": "進階渲染",
    "Open external links in new tab": "在新增分頁中打開外部連結",
    "Right-aligned filters sidebar on search pages":
      "搜尋頁面上右對齊的過濾器側邊欄",
    "Left-aligned sidebar on content pages": "內容頁左對齊側邊欄",
    "Enable or disable certain features on this device.":
      "啟用或停用此裝置上的某些功能。",
    "Enables advanced rendering such as blur effects that may cause performance issues without hardware-accelerated rendering.":
      "啟用進階渲染（例如模糊效果），如果沒有硬體加速渲染，可能會導致性能問題。",
    "Make links which go outside of Modrinth open in a new tab. No matter this setting, links on the same domain and in Markdown descriptions will open in the same tab, and links on ads and edit pages will open in a new tab.":
      "讓 Modrinth 之外的連結在新增分頁中打開。無論此設定如何，同一域名和 Markdown 描述中的連結都會在同一個標​​簽頁中打開，而廣告和編輯頁面上的連結則會在新增分頁中打開。",
    "Aligns the filters sidebar to the right of the search results.":
      "將過濾器側邊欄與搜尋結果的右側對齊。",
    "Aligns the sidebar to the left of the page's content.":
      "將側邊欄與頁面內容左側對齊。",
    "Manage projects": "管理項目",
    Account: "帳戶",
    "Public profile": "公開資料",
    "Profile information": "個人資料資訊",
    "Your profile information is publicly viewable on Modrinth and through the":
      "您的個人資料資訊可在 Modrinth 上以及透過",
    "Modrinth API": " Modrinth API 公開查看",
    "Profile picture": "個人資料頭像",
    "Upload image": "上傳圖片",
    "Remove image": "刪除圖片",
    "A unique case-insensitive name to identify your profile.":
      "一個不區分大小寫的唯一名稱，用於標識您的個人資料。",
    Bio: "簡介",
    "A short description to tell everyone a little bit about you.":
      "簡短的描述，讓大家稍微了解一下您。",
    "Changes saved": "儲存更改",
    "Account and security": "帳戶與安全",
    "Account security": "帳戶安全",
    Email: "電子郵件",
    "Change email": "修改電子郵件",
    "Email address": "電子郵件地址",
    "Enter Your Email Address...": "輸入您的電子郵件地址...",
    "Change": "變更",
    "or remove": "或移除",
    "the password used to login to your account.": "用於登入您帳戶的密碼。",
    "Change password": "設定密碼",
    "Save email": "儲存電子郵件",
    "Add password": "新增密碼",
    "Save password": "儲存密碼",
    "Two-factor authentication": "2FA驗證",
    "Setup two-factor authentication": "設定2FA驗證",
    "Setup 2FA": "設定2FA",
    "Manage authentication providers": "管理身份驗證應用程式",
    "Authentication providers": "身份驗證應用程式",
    "Manage providers": "管理應用程式",
    Provider: "應用程式",
    Add: "新增",
    Remove: "刪除",
    "Data export": "資料導出",
    "Generate export": "生成導出",
    "Delete account": "刪除帳戶",
    "Changes the email associated with your account.":
      "更改與您的帳戶關聯的電子郵件。",
    "Your account information is not displayed publicly.":
      "您的帳戶資訊不會公開顯示。",
    "Set a permanent password to login to your account.":
      "設定永久密碼以登入您的帳戶。",
    "New password": "新密碼",
    "Confirm new password": "確認新密碼",
    "Add an additional layer of security to your account during login.":
      "在登入期間為您的帳戶新增額外的安全層。",
    "Two-factor authentication keeps your account secure by requiring access to a second device in order to sign in.":
      "2FA驗證要求存取第二台裝置才能登入，從而確保您的帳戶安全。",
    "Scan the QR code with": "使用",
    ", or any other 2FA app to begin.":
      "或任何其他 2FA 應用掃描QR code即可開始。",
    "If the QR code does not scan, you can manually enter the secret:":
      "如果QR code掃描不出來，可以手動輸入密碼：",
    "Add or remove sign-on methods from your account, including GitHub, GitLab, Microsoft, Discord, Steam, and Google.":
      "從您的帳戶中新增或刪除登入方法，包括 GitHub、GitLab、Microsoft、Discord、Steam 和 Google。",
    "Request a copy of all your personal data you have uploaded to Modrinth. This may take several minutes to complete.":
      "請求取得您已上傳至 Modrinth 的所有個人資料的副本。這可能需要幾分鐘才能完成。",
    "Once you delete your account, there is no going back. Deleting your account will remove all attached data, excluding projects, from our servers.":
      "帳戶一旦刪除，將無法恢復。刪除帳戶將從我們的伺服器中刪除所有附加資料（項目除外）。",
    "Authorized apps": "授權應用程式",
    "You have not authorized any applications.": "您尚未授權任何應用程式。",
    "When you authorize an application with your Modrinth account, you grant it access to your account. You can manage and review access to your account here at any time.":
      "當您使用 Modrinth 帳戶授權某個應用程式時，即表示您授予該應用程式存取您帳戶的權限。您可以隨時在此管理和查看您帳戶的存取權限。",
    Sessions: "會話",
    "Here are all the devices that are currently logged in with your Modrinth account. You can log out of each one individually.\n\nIf you see an entry you don't recognize, log out of that device and change your Modrinth account password immediately.":
      "以下是當前使用您的 Modrinth 帳戶登入的所有裝置。您可以逐個退出。\n\n如果您看到不認識的條目，請立即退出該裝置並更改您的 Modrinth 帳戶密碼。",
    "Current session": "當前會話",
    "Billing and subscriptions": "計費和訂閱",
    Subscriptions: "訂閱",
    "Manage your Modrinth subscriptions.": "管理您的 Modrinth 訂閱",
    "Payment methods": "付款方式",
    "Add payment method": "新增付款方式",
    "View past charges": "查看過去的費用",
    "You have not added any payment methods.": "您尚未新增任何付款方式。",
    "Personal access tokens": "個人存取令牌",
    "Create a PAT": "建立PAT",
    "PATs can be used to access Modrinth's API. For more information, see":
      "PAT 可用於存取 Modrinth 的 API。更多資訊請參閱 ",
    "Modrinth's API documentation": "Modrinth 的 API 文件",
    ". They can be created and revoked at any time.":
      "。PAT 可以隨時建立和撤銷。",
    "Your applications": "您的應用程式",
    "New Application": " 新申請",
    "Applications can be used to authenticate Modrinth's users with your products. For more information, see":
      "應用程式可用於透過您的產品對 Modrinth 的使用者進行身份驗證。有關更多資訊請參閱 ",
    "You don't have any projects.\nWould you like to":
      "您還沒有任何項目。您想要",
    "create one": "建立一個嗎",
    //儀錶板補全
    Overview: "概述",
    "Active reports": "活動報告",
    Manage: "管理",
    "Visit your profile": "存取您的個人資料",
    "You have no unread notifications.": "您沒有未讀通知。",
    "View notification history": "查看歷史消息記錄",
    "Total downloads": "總下載量",
    "Total followers": "總追蹤量",
    "You don't have any unread notifications.": "您沒有任何未讀通知。",
    Reports: "報告",
    "You don't have any active reports.": "您沒有任何活動報告。",
    Views: "瀏覽量",
    "Refresh the chart": "重新整理圖表",
    "Download this data as CSV": "將此資料下載為 CSV",
    "Toggle project colors": "切換項目顏色",
    "Previous 30 minutes": "最近30分鐘",
    "Previous hour": "最近一小時",
    "Previous 12 hours": "最近12小時",
    "Previous 24 hours": "最近24小時",
    Today: "今天",
    Yesterday: "昨天",
    "This week": "本週",
    "Previous 7 days": "最近7天",
    "This month": "本月",
    "Last month": "上月",
    "Previous 30 days": "最近30天",
    "This quarter": "本季度",
    "Last quarter": "上季度",
    "This year": "今年",
    "Last year": "去年",
    "Previous year": "最近一年",
    "Previous two years": "最近兩年",
    "All Time": "全部時間",
    "You don't have any projects yet. Click the green button above to begin.":
      "您還沒有任何項目。點擊上面的綠色按鈕開始。",
    "Create a project": " 建立一個項目",
    "Make an organization!": "建立一個組織！",
    "Create organization": "建立組織",
    "Create new": "新建",
    "Available now": "立即可用",
    "Total pending": "待處理",
    "Available soon": "即將可用",
    "Click to read about how Modrinth handles your revenue.":
      "點擊查看 Modrinth 如何處理您的收入。",
    Withdraw: "提現",
    "View transfer history": "查看轉帳歷史",
    "By uploading projects to Modrinth and withdrawing money from your account, you agree to the":
      "透過向 Modrinth 上傳項目並從您的帳戶中提取資金，即表示您同意",
    "Rewards Program Terms": "獎勵計劃條款",
    ". For more information on how the rewards system works, see our information page":
      "有關獎勵系統運作方式的更多資訊，請參閱此處的資訊",
    here: "頁面",
    "Payout methods": "支付方式",
    "Connect your PayPal account to enable withdrawing to your PayPal balance.":
      "連接您的 PayPal 帳戶以啟用提現到您的 PayPal 餘額。",
    "Sign in with PayPal": " 使用 PayPal 登入 ",
    "Tremendous payments are sent to your Modrinth email. To change/set your Modrinth email, visit":
      "Tremendous的付款將發送到您的 Modrinth 電子郵件。要更改/設定您的 Modrinth 電子郵件，請存取此",
    "Enter your Venmo username below to enable withdrawing to your Venmo balance.":
      "在下方輸入您的 Venmo 使用者名稱以啟用提現到您的 Venmo 餘額。",
    "Save information": "儲存資訊",
    //News
    Subscribe: "訂閱",
    "Subscribe to the Modrinth newsletter": "訂閱 Modrinth 新聞",
    "RSS feed": "RSS 訂閱",
    "More articles": "更多文章",

    //通知
    "A project you follow": "您追蹤的項目",
    "has been updated": "已更新",
    Received: "收到",
    View: "查看",
    "more notifications": "更多通知",

    //404
    "Project not found": "未找到項目",
    "Why?": "為什麼？",
    "The page you were looking for doesn't seem to exist.":
      "您正在尋找的頁面似乎不存在。",
    "You may have mistyped the project's URL.": "您可能輸入了項目的錯誤 URL。",
    "The project's owner may have changed the URL, made the project private, or deleted it.":
      "項目的所有者可能已更改 URL、將項目設為私有或刪除了它。",
    "The project may have been taken down by Modrinth's moderation team for violating our":
      "該項目可能已被 Modrinth 管理團隊刪除，原因是其違反了我們的",

    // 遍歷頁面內容並替換為翻譯
  };

  // 遍歷頁面內容並替換為翻譯
  const translateText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const originalText = node.textContent.trim();

      // 優先靜態翻譯
      if (translations[originalText]) {
        node.textContent = translations[originalText];
        return;
      }

      // 處理動態時間（如 "3 days ago"）
      const timeRegex =
        /^(\d+)\s+(minute|hour|day|week|month|year)(?:s?)\s+ago$/i;
      const timeMatch = originalText.match(timeRegex);
      if (timeMatch) {
        const count = timeMatch[1];
        const unit = timeMatch[2].toLowerCase();
        const zhUnit =
          {
            minute: "分鐘",
            hour: "小時",
            day: "天",
            week: "周",
            month: "月",
            year: "年",
          }[unit] || unit;
        node.textContent = `${count}${zhUnit}前`;
        return;
      }

      // 處理動態數值（如 "56.13M downloads"）
      const dynamicRegex = /^(\d+\.?\d*)[kKmM] (\w+)$/;
      const dynamicMatch = originalText.match(dynamicRegex);
      if (dynamicMatch) {
        const [_, numberPart, wordPart] = dynamicMatch;
        const translatedWord =
          translations[wordPart.replace(/s$/, "")] || wordPart;
        node.textContent = `${numberPart}${translatedWord}`;
        return;
      }
    }

    // 處理 DOM 元素（含子節點）
    if (node.nodeType === Node.ELEMENT_NODE) {
      // 特殊處理：合併 download + s 的場景
      if (node.classList.contains("stat-label")) {
        const children = Array.from(node.childNodes);
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (
            child.nodeType === Node.TEXT_NODE &&
            ["download", "follower"].includes(child.textContent.trim())
          ) {
            const next = children[i + 1];
            if (
              next?.nodeType === Node.ELEMENT_NODE &&
              next.textContent === "s"
            ) {
              child.textContent =
                translations[child.textContent.trim()] ||
                child.textContent.trim();
              next.remove(); // 刪除多餘的 <span>s</span>
              break;
            }
          }
        }
      }

      // 處理 placeholder 屬性
      if (node.hasAttribute("placeholder")) {
        const originalPlaceholder = node.getAttribute("placeholder").trim();
        if (translations[originalPlaceholder]) {
          node.setAttribute("placeholder", translations[originalPlaceholder]);
        }
      }
      // 繼續遍歷子節點
      for (let child of node.childNodes) {
        translateText(child);
      }
    }
  };

  // 頁面載入後開始翻譯
  const observer = new MutationObserver(() => {
    translateText(document.body);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // 初次載入時立即翻譯
  translateText(document.body);
})();

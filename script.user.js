// ==UserScript==
// @name         Modrinth-Traditional-Chinese
// @namespace    http://tampermonkey.net/
// @version      1
// @description  讓Modrinth繁中化！
// @author       Stars Shine
// @match        https://modrinth.com/*
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function () {
  "use strict";

  // 少量工具函式
  const normalizeKey = (s) => (s || "").replace(/\s+/g, " ").trim();

  // 翻譯詞典（已修正語法錯誤：缺逗號、截斷字串等）
  // 注意：若需要更高命中率，可把 keys 做小寫化，但要注意會有衝突/歧義。
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
    "Discover mods": "發現模組",
    "Go to dashboard": "前往儀錶板",
    "For Players": "面向玩家",
    "Discover over 50,000 creations": "發現超過 50,000 個創作",
    "Find what you want, quickly and easily": "快速輕鬆地找到你想找的內容",
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
      "為你創作的內容提供線上家園，並觸及大量忠實玩家",
    "Play with your favorite launcher": "使用你喜愛的啟動器遊玩",
    "our own app": "我們自己的應用程式",
    "For Creators": "創作者專區",
    "Share your content with the world": "與世界分享你的內容",
    "Give an online home to your creations and reach a massive audience of dedicated players":
      "為你創作的內容提供線上家園，並觸及大量忠實玩家",
    Discovery: "發現",
    "Team Management": "團隊管理",
    "Invite your teammates and manage roles and permissions with ease":
      "輕鬆邀請隊友並管理角色和權限",
    Monetization: "收益",
    "Data and Statistics": "資料和統計",
    "Get detailed reports on page views, download counts, and revenue":
      "取得詳細的頁面瀏覽量、下載次數和收入報告",
    "Constantly Evolving": "不斷進化",
    "Get the best modding experience possible with constant updates from the Modrinth team":
      "透過 Modrinth 團隊的持續更新，獲得最佳的模組製作體驗",
    "Latest news from Modrinth": "來自 Modrinth 的最新消息",
    "View all news": "查看更多新聞",
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
    // 以下略過大量條目以維持示例簡潔；在實際使用時請保留你完整的翻譯表
    // ...
    "Make links which go outside of Modrinth open in a new tab.":
      "讓 Modrinth 之外的連結在新增分頁中打開。",
    "Open external links in new tab": "在新增分頁中打開外部連結",
    "Search...": "搜尋...",
    "Search mods...": "搜尋模組...",
  };

  // 將翻譯 key 做 normalized map 以便更容易命中（例如 collapse 空白）
  const normalizedTranslations = {};
  for (const [k, v] of Object.entries(translations)) {
    normalizedTranslations[normalizeKey(k)] = v;
  }

  // 已處理節點記錄（避免重複處理）
  const processedNodes = new WeakSet();

  // 一個更穩健的處理 text node 的函式
  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    if (processedNodes.has(node)) return;

    let original = node.textContent;
    if (!original || !original.trim()) return;

    // 保留前後空白
    const leading = original.match(/^\s*/)[0] || "";
    const trailing = original.match(/\s*$/)[0] || "";
    const trimmed = original.trim();
    const key = normalizeKey(trimmed);

    // 優先靜態翻譯（直接匹配 normalized key）
    if (normalizedTranslations[key]) {
      node.textContent = leading + normalizedTranslations[key] + trailing;
      processedNodes.add(node);
      return;
    }

    // 處理時間格式（例: "3 days ago"）
    const timeRegex = /^(\d+)\s+(minute|hour|day|week|month|year)s?\s+ago$/i;
    const timeMatch = trimmed.match(timeRegex);
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
      node.textContent = leading + `${count}${zhUnit}前` + trailing;
      processedNodes.add(node);
      return;
    }

    // 處理像 "56.13M downloads" / "1,234 downloads" / "2k followers" 等
    // 支援有/無空格以及 K/M 後綴
    const numRegex = /^([\d,]+(?:\.\d+)?)([kKmM]?)\s*(\w+)$/i;
    const match = trimmed.match(numRegex);
    if (match) {
      let [, numPart, suffix, word] = match;
      // 將千分位逗號去掉
      numPart = numPart.replace(/,/g, "");
      // 對於 k/m 後綴可選處理（例如把 1.2M 保留原樣或轉成中文單位）
      // 這裡僅保留原數字與翻譯單位，並把單位做基礎字詞翻譯
      const baseWord = word.replace(/s$/i, ""); // 嘗試移除複數 s
      const translatedWord =
        normalizedTranslations[normalizeKey(baseWord)] || word;
      const newText = numPart + (suffix ? suffix : "") + translatedWord;
      node.textContent = leading + newText + trailing;
      processedNodes.add(node);
      return;
    }

    // 如果沒有完全匹配，對句中單字進行替換（較保守）
    // 例如 "Downloads" 在句中出現時也替換
    let replaced = trimmed;
    for (const [k, v] of Object.entries(normalizedTranslations)) {
      // 以字邊界為準進行替換（忽略大小寫）
      const re = new RegExp("\\b" + escapeRegExp(k) + "\\b", "gi");
      replaced = replaced.replace(re, v);
    }
    if (replaced !== trimmed) {
      node.textContent = leading + replaced + trailing;
      processedNodes.add(node);
    }
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // 處理元素：翻譯 placeholder 與遞迴處理子節點
  function translateElement(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
    // 不處理 script、style、textarea 裡的內容
    const tag = node.tagName && node.tagName.toLowerCase();
    if (["script", "style", "textarea", "code", "pre"].includes(tag)) return;

    // 處理 placeholder 屬性
    if (node.hasAttribute && node.hasAttribute("placeholder")) {
      const ph = node.getAttribute("placeholder");
      const norm = normalizeKey(ph);
      if (normalizedTranslations[norm]) {
        node.setAttribute("placeholder", normalizedTranslations[norm]);
      }
    }

    // 特殊：在 stat 標籤中嘗試合併 "download" + "s" 的情形（保守處理）
    if (node.classList && node.classList.contains("stat-label")) {
      // 直接將整個 label 合併替換（以節點內部 textContent 為主）
      const text = node.textContent && node.textContent.trim();
      if (text) {
        const norm = normalizeKey(text);
        if (normalizedTranslations[norm]) {
          node.textContent = normalizedTranslations[norm];
          processedNodes.add(node);
        }
      }
    }

    // 遞迴子節點，但只翻譯 text nodes 與 element nodes（避免重複）
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        translateTextNode(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        translateElement(child);
      }
    }
  }

  // 初次載入時進行一次翻譯（只針對 body）
  function translateBodyOnce() {
    translateElement(document.body);
  }

  // MutationObserver：僅處理新增節點或文字改變
  const observer = new MutationObserver((mutations) => {
    // 合併頻繁變動（簡單 debounce）
    if (translateScheduled) return;
    translateScheduled = true;
    setTimeout(() => {
      for (const m of mutations) {
        // 新增節點
        if (m.addedNodes && m.addedNodes.length) {
          for (const n of Array.from(m.addedNodes)) {
            if (n.nodeType === Node.TEXT_NODE) {
              translateTextNode(n);
            } else if (n.nodeType === Node.ELEMENT_NODE) {
              translateElement(n);
            }
          }
        }
        // characterData 改變（文字節點被改）
        if (m.type === "characterData" && m.target) {
          translateTextNode(m.target);
        }
      }
      translateScheduled = false;
    }, 80); // 80ms debounce
  });

  let translateScheduled = false;

  // 開始監聽
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  // 初次翻譯
  translateBodyOnce();
})();

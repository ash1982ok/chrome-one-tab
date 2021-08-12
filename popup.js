// Initialize butotn with users's prefered color
let changeColor = document.getElementById('closeBtn');

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', closeAllTabs);

// The body of this function will be execuetd as a content script inside the
// current page
function closeAllTabs() {
    closeTheTabs();
    storeUrlsToLocalStorage();
    openExtensionTab();
}

const openExtensionTab = () => {
    chrome.tabs.create({
        url: 'newtab.html',
    });
};

const closeTheTabs = () => {
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].active !== true) {
                chrome.runtime.tabs.remove(tabs[i].id);
            }
        }
    });
};

const storeUrlsToLocalStorage = () => {
    chrome.tabs.query({}, function (tabs) {
        let tabsData = {};
        let allUrls = [];
        for (var i = 0; i < tabs.length; i++) {
            allUrls.push(tabs[i].url);
        }
        tabsData['tabDataItem'] = allUrls;

        localStorage.setItem('tabs-data', JSON.stringify(tabsData));
    });
};

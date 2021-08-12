const onLoad = () => {
    var tabsData = localStorage.getItem('tabs-data');
    tabDataItem = JSON.parse(tabsData)['tabDataItem'];

    var ul = document.createElement('ul');

    document.body.appendChild(ul);

    tabDataItem.map((item) => {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `${item}`;
    });
};

onLoad();

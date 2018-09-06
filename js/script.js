(function tabsMenu() {
  let tabs = document.querySelectorAll('.tabs');
  for (let tab of tabs) {
    let menuItems = tab.querySelectorAll('.menu li a');
    let activeTab = tab.querySelector('.menu .active');
    let tabBodies = tab.querySelectorAll('.content > div');

    let i = 1;
    for (let tabBody of tabBodies) {
      tabBody.id = tab.id + '-tab-' + i++;
    }

    i = 1;
    for (let menuItem of menuItems) {
      menuItem.href = "#" + tab.id + '-tab-' + i++;
      menuItem.addEventListener('click', function (e) {
        e.preventDefault();

        let menuActiveItem = tab.querySelector('.menu .active');

        if (menuActiveItem !== null) {
          menuActiveItem.classList.remove('active');
          tab.querySelector('.content > .show').classList.remove('show');

        }
        menuItem.classList.add('active');
        tab.querySelector(menuItem.getAttribute('href')).classList.add('show');
      })
    }
    if (activeTab !== null) {
      let activeBodyItem = tab.querySelector('.content ' + activeTab.getAttribute('href'));
      activeBodyItem.classList.add('show');
    }
  }
})();

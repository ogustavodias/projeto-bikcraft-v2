/* context for menu  */
{
    const menu1 = Array.from(document.querySelectorAll('.menu-1 label'));
    let menuToShow;
    let menuToHide;

    function showSubMenu(event) {
        menuToHide = menuToShow;
        menuToShow = document.querySelector(`div[data-menu="${event.target.getAttribute('data-menu')}"]`);

        menuToShow.classList.add('ativo');
        if (menuToHide !== undefined && menuToHide !== menuToShow) {
            menuToHide.classList.remove('ativo');
        }
    }

    function listening(item) {
        item.addEventListener('click', showSubMenu);
    }

    menu1.forEach(listening);
}

/* context for bike-items  */
{
    const menu2 = Array.from(document.querySelectorAll('.menu-2 label'));
    let detailToShow;
    let detailToHide;

    function showDetails(event) {
        detailToHide = detailToShow;
        detailToShow = document.querySelector(`div[data-bike="${event.target.getAttribute('data-bike')}"]`);
        detailToShow.classList.add('ativo');
        if (detailToHide !== undefined && detailToHide !== detailToShow) {
            detailToHide.classList.remove('ativo');
        }
    }

    function listening(item) {
        item.addEventListener('click', showDetails);
    }

    menu2.forEach(listening);
}
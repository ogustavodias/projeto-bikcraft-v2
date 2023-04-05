const parametros = Array.from(new URLSearchParams(location.search));
/* context for menu  */
{
    const menu1 = Array.from(document.querySelectorAll('.menu-1 label'));
    let menuToShow;
    let menuToHide;

    document.body.onload = function checkMenuItensAfterLoad() {
        const itemToCheck = document.querySelector(`.menu-1 input#${parametros[0][1]}`);
        itemToCheck.checked = true;
        menuToShow = document.querySelector(`div[data-menu="${itemToCheck.getAttribute('data-menu')}"]`);
        menuToShow.classList.add('ativo');
    }

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

/* context for items  */
{
    const menu2 = Array.from(document.querySelectorAll('.menu-2 label'));
    let detailToShow;
    let detailToHide;

    /*     document.body.onload = function checkSubItensAfterLoad() { */
    const itemToCheck = document.querySelector(`input#${parametros[1][1]}`);
    itemToCheck.checked = true;

    if (parametros[0][1] === 'bikcraft') {
        detailToShow = document.querySelector(`div[data-bike="${parametros[1][1]}"`);
        console.log(detailToShow);
        detailToShow.classList.add('ativo');
    }

    /*     } */

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
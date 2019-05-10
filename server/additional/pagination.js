const perPage = 12;

function pagination(array, page) {
    const delta = array.length % perPage == 0 ? 0 : 1;
    const maxPage = parseInt(array.length / perPage) + delta;
    if (page > maxPage) page = maxPage;
    let bound = page * perPage;
    if (bound > array.length) bound = array.length;
    return {
        resultOfPagination:  array.slice(perPage * (page - 1), bound),
        page: page,
        perPage: perPage,
        maxPage: maxPage
    };
}

module.exports = pagination;

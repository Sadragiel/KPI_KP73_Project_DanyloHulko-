const express = require('express');
const router = express.Router();
const Gallery = require('./../modules/gallery');
const Pagination = require('./../additional/pagination')
router.get('/gallery',
    function (req, res) {
        //res.json()
        const currentPage = !req.query.page || isNaN(Number(req.query.page)) || Number(req.query.page) <= 0 ? 1 : Number(req.query.page);
        Gallery.getAll()
            .then(imageSrcArray => {
                let result = Pagination(imageSrcArray, currentPage);
                return res.json({
                    resultOfPagination:  result.resultOfPagination,
                    page: result.page,
                    perPage: result.perPage,
                    maxPage: result.maxPage
                });
            })
            .catch(error => {
                
                return res.status(500).json({message: error})
            })
});

module.exports = router;
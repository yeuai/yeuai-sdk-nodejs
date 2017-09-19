const yeuai = require('yeuai')()

yeuai.word_tokenize('Ngoài thương hiệu, giá cả, thời điểm mua hàng cũng là một yếu tố để có được sản phẩm tốt với giá rẻ.')
    .then((result) => {
        console.log('Result:', result)
    })
Node.js SDK for Yeu.ai
======================

[![npm version](https://img.shields.io/npm/v/yeuai.svg?style=flat)](https://www.npmjs.com/package/yeuai)

Đây là gói thư viện cho phép sử dụng dịch vụ từ [Yeu.ai](https://docs.yeu.ai) cho các tác vụ cơ bản của xử lý ngôn ngữ tự nhiên tiếng Việt. Bạn hoàn toàn có thể tích hợp gói thư viện này vào ứng dụng của bạn và sử dụng nó một cách miễn phí! Chắc chắn là miễn phí :D

* [Installation](#installation)
* [Usage](#usage)
* [API and Documentation](#documentation)

Installation
============

* Cài đặt [Node.js](https://nodejs.org/)
* Cài đặt Yeu.ai SDK sử dụng `npm`:

```shell
npm install yeuai --save
```

Usage
=====

* Tạo 1 file chương trình, đặt tên: `main.js` và viết mã như mẫu sau đây:

```javascript
// file: main.js
var yeuai = require('yeuai')();

// Sử dụng yeuai để tách từ một đoạn văn bản tiếng Việt
yeuai.word_tokenize('Ngoài thương hiệu, giá cả, thời điểm mua hàng cũng là một yếu tố để có được sản phẩm tốt với giá rẻ.')
    .then((result) => {
        console.log(result)
        // output:
        //  { response:
        //    [ 'Ngoài',
        //        'thương hiệu',
        //        ',',
        //        'giá cả',
        //        ',',
        //        'thời điểm',
        //        'mua hàng',
        //        'cũng',
        //        'là',
        //        'một',
        //        'yếu tố',
        //        'để',
        //        'có',
        //        'được',
        //        'sản phẩm',
        //        'tốt',
        //        'với',
        //        'giá',
        //        'rẻ',
        //        '.' ] }
    })

// Sử dụng yeuai để phân tích một câu hỏi tiếng Việt
yeuai.classify_qtype('khi nào chương trình diễn ra?')
    .then((result) => {
        console.log(result)
        // output:
        // {
        //     "success": true,
        //     "response": {
        //         "classes": [{
        //             "confidence": "0.948622",
        //             "label": "WHEN"
        //         }],
        //         "text": "khi nào chương trình diễn ra?"
        //     }
        // }
    })
```
* Chạy chương trình.

```shell
node main.js
```
* Bạn có thể xem thêm các ví dụ trong thư mục [`samples`](samples).

Documentation
====

Tài liệu về api và cách sử dụng yeuai sdk được cập nhật liên tục khi có tính năng mới tại đây: [docs.yeu.ai](https://docs.yeu.ai)

Test
====

Bạn có thể clone repository này về chạy lệnh test, để xem chương trình hoạt động như thế nào!

```shell
git clone https://github.com/yeuai/yeuai-nodejs-client.git
cd yeuai-nodejs-client
npm test
```

License
=======

* Thư viện này sử dụng giấy phép mã nguồn mở [Apache-2.0](LICENSE).
* Bạn có thể đóng góp xây dựng bằng cách sử dụng thư viện, mời bạn bè sử dụng, thông báo lỗi và đặt câu hỏi nếu có thắc mắc.
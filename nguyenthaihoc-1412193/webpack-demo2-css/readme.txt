npm install sass-loader node-sass --save-dev
npm install css-loader style-loader --save-dev (Compiles Sass to CSS)

1 cái cần lưu ý là khi chuyển tất cả vào file bundle nó sẽ làm chậm đi code của chúng ta nếu file JS quá dài
vì thì ta có thể tách riêng ra thành từng file bundle(css) và bundle(js) bởi vì "CSS bundle is loaded in parallel to the JS bundle"

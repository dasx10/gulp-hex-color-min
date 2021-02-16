'use strict';
const gutil = require('gulp-util');
const through = require('through2');
const fs = require('fs');

module.exports = (options) => {
  // Какие-то действия с опциями. Например, проверка их существования,
  // задание значения по умолчанию и т.д.

return through.obj(function(file, enc, cb) {
    // Если файл не существует
    if (file.isNull()) {
        cb(null, file);
        return;
    }

    // Если файл представлен потоком
    if (file.isStream()) {
        cb(new gutil.PluginError('gulp-example-plugin', 'Streaming not supported'));
        return;
    }

    // Код плагина
    let data = file.contents.toString();
    data = data
    .replace(/#000000/g,'#000')

    .replace(/#000011/g,'#001')
    .replace(/#000022/g,'#002')
    .replace(/#000033/g,'#003')
    .replace(/#000044/g,'#004')
    .replace(/#000055/g,'#005')
    .replace(/#000066/g,'#006')
    .replace(/#000077/g,'#007')
    .replace(/#000088/g,'#008')
    .replace(/#000099/g,'#009')
    .replace(/#0000aa/g,'#00a')
    .replace(/#0000bb/g,'#00b')
    .replace(/#0000cc/g,'#00c')
    .replace(/#0000dd/g,'#00d')
    .replace(/#0000ee/g,'#00e')
    .replace(/#0000ff/g,'#00f')

    .replace(/#001100/g,'#010')

    .replace(/#001111/g,'#011')
    .replace(/#001122/g,'#012')
    .replace(/#001133/g,'#013')
    .replace(/#001144/g,'#014')
    .replace(/#001155/g,'#015')
    .replace(/#001166/g,'#016')
    .replace(/#001177/g,'#017')
    .replace(/#001188/g,'#018')
    .replace(/#001199/g,'#019')
    .replace(/#0011aa/g,'#01a')
    .replace(/#0011bb/g,'#01b')
    .replace(/#0011cc/g,'#01c')
    .replace(/#0011dd/g,'#01d')
    .replace(/#0011ee/g,'#01e')
    .replace(/#0011ff/g,'#01f')




    .replace(/#111111/g,'#111')

    .replace(/#222222/g,'#222')
    .replace(/#333333/g,'#333')
    .replace(/#444444/g,'#444')
    .replace(/#555555/g,'#555')
    .replace(/#666666/g,'#666')
    .replace(/#777777/g,'#777')
    .replace(/#888888/g,'#888')
    .replace(/#999999/g,'#999')

    .replace(/#aaaaaa/gi,'#aaa')
    .replace(/#bbbbbb/gi,'#bbb')
    .replace(/#cccccc/gi,'#ccc')
    .replace(/#dddddd/gi,'#ddd')
    .replace(/#eeeeee/gi,'#eee')
    .replace(/#ffffff/gi,'#fff')

    file.contents = new Buffer(data);

    // Возвращаем обработанный файл для следующего плагина
        this.push(file);
        cb();
    });
};
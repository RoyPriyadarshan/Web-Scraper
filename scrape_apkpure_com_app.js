var request = require('request');
var cheerio = require('cheerio');
data = []
request('https://apkpure.com/app', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);

        $(' div.category-template-title').each(function (i, element) {
            data.push({
                title: $(this).find('a').text(),
                link: $(this).find('a').attr('href')
            });
        });
        console.log(data);
        var len = data.length;
        console.log(len)
    }
});
request('https://apkpure.com/app?page=2', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $(' div.category-template-title').each(function (i, element) {
            data.push({
                title: $(this).find('a').text(),
                link: $(this).find('a').attr('href')
            });
        });
        console.log(data);
        var len = data.length;
        console.log(len)
    }
});
request('https://apkpure.com/app?page=3', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $(' div.category-template-title').each(function (i, element) {
            data.push({
                title: $(this).find('a').text(),
                link: $(this).find('a').attr('href')
            });
        });
        console.log(data);
        var len = data.length;
        console.log(len)
    }
});
request('https://apkpure.com/app?page=4', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $(' div.category-template-title').each(function (i, element) {
            data.push({
                title: $(this).find('a').text(),
                link: $(this).find('a').attr('href')
            });
        });
        console.log(data);
        var len = data.length;
        console.log(len)
    }
});
request('https://apkpure.com/app?page=5', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $(' div.category-template-title').each(function (i, element) {
            data.push({
                title: $(this).find('a').text(),
                link: $(this).find('a').attr('href')
            });
        });
        console.log(data);
        var len = data.length;
        console.log(len)
    }
});
let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        // console.log(news);
        angular.copy(news.data.news, newsArray);
    });

    for (let i = 0; i < newsArray.length; i++) {
        newsArray[i].starred = false;
        console.log(newsArray);
    }

    // newsArray.forEach( function (arrayItem) {
    //     arrayItem.starred = false;
    // });

    return {
        getNews: function () {
            return newsArray;
        },

        // star: function (selectedArticle) {
        //     for (let i = 0; i < newsArray.length; i++) {
        //         if (selectedArticle === newsArray[i]) {

        //         }
        //     }
        // }

    }
});

app.controller("NewsController", function ($scope, NewsService) {
    $scope.news = NewsService.getNews();
    console.log(NewsService.getNews());
    $scope.StarTheArticle = function (selectedArticle) {
        // let starred = angular.element(document.querySelector(''))
        // NewsService.star(selectedArticle);
    }
});
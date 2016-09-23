let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        angular.copy(news.data.news, newsArray);

        for (let i = 0; i < newsArray.length; i++) {
            newsArray[i].starred = false;
        }
    });

    return {
        getNews: function () {
            console.log(newsArray);
            return newsArray;
        },

        star: function (id) {
            for (let i = 0; i < newsArray.length; i++) {
                if (id === newsArray[i].id) {
                    console.log(newsArray[i].title);
                    newsArray[i].starred = true;
                }
            }
        }

    }
});

app.controller("NewsController", function ($scope, NewsService) {
    $scope.news = NewsService.getNews();
    $scope.StarTheArticle = function (idNumber) {
        NewsService.star(idNumber);
        if ($scope.class === "hidden") {
            $scope.class = "unhidden";
        } else {
            $scope.class = "hidden";
        }
        
    }
});
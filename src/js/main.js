/**
 * Created by Tony on 2016/11/23.
 *
 * <b>使用单例,保证了变量的唯一性,同时在使用的时候也非常方便。</b>
 */


var loadHTML = {
    container: $("#mr-container"),
    loadPage: function (index) {
        switch (index) {
            case 0:
                this.container.load("myattention.html");
                break;
            case 1:
                this.container.load("recommend.html");
                break;
            case 2:
                this.container.load("nav.html");
                break;
            case 3:
                this.container.load("movie.html");
                break;
        }
    }
}

$(document).ready(
    function () {
        loadHTML.loadPage(0);
    }
);


//用于“更多产品“
var mouseAction = {
    _init: function (id) {
        var control = $(id);
        return control;
    },
    acFadeIn: function (id) {
        var c = this._init(id);
        if (c == null) {
            return;
        } else {
            c.fadeIn();
        }
    },
    acFadeOut: function (id) {
        var c = this._init(id);
        if (c == null) {
            return;
        } else {
            c.fadeOut();
        }
    }
}

var alertSkin={
    _initSkin:$('.skin'),
    openSkin:function () {
        this._initSkin.animate(
            {top: '0px'},
            'slow'
        )
        event.stopPropagation();

    },
    closeSkin:function () {
        if ( this._initSkin.height != 0) {
            this._initSkin.animate(
                {top: '-200px'},
                'slow'
            );

        }
        event.stopPropagation();

    }
}

$(document).click(function (event) {
    alertSkin.closeSkin();
});

//    换肤
var changSkin = {
    _container: $('.container'),
    change: function (id) {
        if (id === 'colgreen') {
            this._container.css('backgroundColor', '#00CC66');
        } else if (id === 'colred') {
            this._container.css('backgroundColor', '#993333');
        } else if (id === 'colyellow') {
            this._container.css('backgroundColor', '#CC9966');
        } else if (id === 'colblue') {
            this._container.css('backgroundColor', '#3399FF');
        }
    }
}

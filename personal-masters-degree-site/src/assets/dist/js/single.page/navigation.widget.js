function NavigationWidget() {
    this.widgets = [];
}

NavigationWidget.prototype._bindOnClickEvent = function () {
    this.widgets.forEach((widget) => {
        jQuery(widget).bind('click.selectPage', (event) => {
            this.widgets.forEach((element) => {
                jQuery(element).removeClass('active');
            });
            jQuery(event.target).addClass('active');

            switch (jQuery(event.target).attr('id')) {
                case 'presentation':
                    jQuery('main').load('dist/js/single.page/Templates/presentation.html');
                    break;
                case 'about-me':
                    jQuery('main').load('dist/js/single.page/Templates/about-me.html');
                    break;
                case 'essay':
                    jQuery('main').load('dist/js/single.page/Templates/essay.html');
                    break;
                default:
                    break;
            }
        });
    });
}

NavigationWidget.prototype._initWidgets = function () {
    this.widgets = jQuery('header nav a.nav-link').toArray();
}

NavigationWidget.prototype.Draw = function () {
    this._initWidgets();
    this._bindOnClickEvent();
}

var navWidget = new NavigationWidget();
navWidget.Draw();
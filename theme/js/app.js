class News {
    constructor(title, url, createDate, category) {
        this.title = title;
        this.url = url;
        this.createDate = createDate;
        this.category = category;
    }
}

class QuickNewsViewModel {
    constructor() {
        // Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nobis voluptates laboriosam ex ducimus inventore dolor obcaecati voluptatum ut nostrum unde molestias, incidunt non qui! Facere dolor excepturi tenetur.
        this.news = ko.observableArray([
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "video",
                createDate: "2 days ago"
            },
            {
                title: "Sit eos nobis voluptates laboriosam ex ducimus inventore",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "design",
                createDate: "5 minutes ago"
            },
            {
                title: "incidunt non qui! Facere dolor excepturi tenetur",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "business",
                createDate: "3 days ago"
            }
        ]);
    }    
}

ko.applyBindings(new QuickNewsViewModel());
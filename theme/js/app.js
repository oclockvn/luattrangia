class News {
    constructor(title, url, createDate, category, creatorName, excerpt) {
        this.title = title;
        this.url = url;
        this.createDate = createDate;
        this.category = category;
        this.creatorName = creatorName;
        this.excerpt = excerpt;
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
                createDate: "2 days ago",
                creatorName: "admin",
                excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nobis voluptates laboriosam ex ducimus inventore dolor obcaecati voluptatum ut nostrum unde molestias, incidunt non qui! Facere dolor excepturi tenetur."
            },
            {
                title: "Sit eos nobis voluptates laboriosam ex ducimus inventore",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "design",
                createDate: "5 minutes ago",
                creatorName: "admin",
                excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nobis voluptates laboriosam ex ducimus inventore dolor obcaecati voluptatum ut nostrum unde molestias, incidunt non qui! Facere dolor excepturi tenetur."
            },
            {
                title: "incidunt non qui! Facere dolor excepturi tenetur",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "business",
                createDate: "3 days ago",
                creatorName: "admin",
                excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nobis voluptates laboriosam ex ducimus inventore dolor obcaecati voluptatum ut nostrum unde molestias, incidunt non qui! Facere dolor excepturi tenetur."
            }
        ]);

        this.posts = ko.observableArray([
            {
                title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "video",
                createDate: "2 days ago",
                creatorName: "admin",
                excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nobis voluptates laboriosam ex ducimus inventore dolor obcaecati voluptatum ut nostrum unde molestias, incidunt non qui! Facere dolor excepturi tenetur."
            },
            {
                title: "Sit eos nobis voluptates laboriosam ex ducimus inventore",
                url: "http://lorem-ipsum-dolor-sit-amet.com",
                category: "design",
                createDate: "5 minutes ago",
                creatorName: "admin",
                excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nobis voluptates laboriosam ex ducimus inventore dolor obcaecati voluptatum ut nostrum unde molestias, incidunt non qui! Facere dolor excepturi tenetur."
            }
        ]);

        this.faq = ko.observableArray([1,2,3,4,5,6]);
        this.ads = ko.observableArray([1,2]);
        this.clients = ko.observableArray([1,2,3,4,5,6]);
        this.tags = ko.observableArray([
            'Lorem ipsum', 'dolor', 'sit amet', 
            'consectetur adipisicing', 'elit', 
            'Laudantium aliquid', 'veritatis voluptatibus', 
            'culpa illo quae', 'illum optio', 
            'ducimus minus ut', 'quaerat excepturi', 
            'quibusdam', 'at ratione repellendus', 
            'perspiciatis', 'impedit explicabo quasi!'
        ]);
        this.services = ko.observableArray([1,2,3,4,5,6]);
    }    
}

ko.applyBindings(new QuickNewsViewModel());

// $('.tilt').tilt({
//     scale: 1.2
// })
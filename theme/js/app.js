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

        this.faq = ko.observableArray([1, 2, 3, 4, 5, 6]);
        this.ads = ko.observableArray([1, 2]);
        this.clients = ko.observableArray([1, 2, 3, 4, 5, 6]);
        this.tags = ko.observableArray([
            'Lorem ipsum', 'dolor', 'sit amet',
            'consectetur adipisicing', 'elit',
            'Laudantium aliquid', 'veritatis voluptatibus',
            'culpa illo quae', 'illum optio',
            'ducimus minus ut', 'quaerat excepturi',
            'quibusdam', 'at ratione repellendus',
            'perspiciatis', 'impedit explicabo quasi!'
        ]);
        this.services = ko.observableArray([1, 2, 3, 4, 5, 6]);
        this.submenu = ko.observableArray([{
            "n": "Mfnt baowu qb lyrtv cbwtb"
        }, {
            "n": "Xdnq dbjmk ay sawzk jfdba"
        }, {
            "n": "Alvn ryzeu gt qnusp psctj"
        }, {
            "n": "Ntvt cxvfn fp uxlnw qonko"
        }, {
            "n": "Mxtd uhhwt uo rttci mjxaa"
        }]);
        this.mostreadnews = ko.observableArray([{
            "n": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
        }, {
            "n": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
        }, {
            "n": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
            "n": "Aliquam non mauris. Morbi non lectus."
        }, {
            "n": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl."
        }, {
            "n": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor."
        }, {
            "n": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        }]);
    }
}

ko.applyBindings(new QuickNewsViewModel());

// $('.tilt').tilt({
//     scale: 1.2
// })
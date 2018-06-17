let news = '';
for (let i = 0; i < 5; i++) {
    news += `
    <div class="news">
        <a href="./project.html" class="news--cover">
          <img src="./images/skyline.svg" alt="news">
        </a>
        <div class="news--title">
          <a href="./project.html">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h4>
          </a>
          <div class="text-right">
            <time datetime="">2 ngay truoc</time>
          </div>
        </div>
      </div>
    `;
}

let proj = '';
for (let i = 0; i < 10; i++) {
    proj += `
  <div class="proj cover--container">
    <a href="#" class="proj__cover cover">
      <img src="./images/proj.jpg" alt="project" class="img-fluid2 cover-front">
      <img src="./images/proj-back.jpg" alt="project" class="img-fluid2 cover-back">
    </a>
    <a href="#" class="proj__title">
      <h5>Nhà phố Vũng Tàu Melody</h5>
    </a>
    <div class="proj__location">Vũng Tàu</div>
  </div>
  `;
}

$("#news-container").append(news);
$("#progress-container").append(news);
$("#projects").append(proj);

$(".grid--line").owlCarousel({
    autoWidth: true,
    margin: 32,
    // freeDrag: true,
    dots: false,
    nav: true,
    navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>']
});

$("#projects").owlCarousel({
    autoWidth: true,
    margin: 32,
    // freeDrag: true,
    dots: true,
    nav: true,
    navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>']
});

var sticky = new Waypoint.Sticky({
    element: $('.proj__nav')[0]
});

var inview = new Waypoint.Inview({
    element: $('.proj__nav')[0],
    entered: function (direction) {        
        const $ele = $(this.element);
        const width = $ele.width();
        $ele.css({width: width});
    },
    exited: function (direction) {        
        if (direction === "up") {
            const $ele = $(this.element);        
            $ele.removeAttr("style");
        }
    }
});

$(document).on("click", ".scroll-to", function(e) {
    e.preventDefault();

    const $self = $(this);
    const $target = $($self.attr("href"));
    $.scrollTo($target, 500, {
        offset: -50
    });
});

// const controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
const controller = new ScrollMagic.Controller();
$(".proj-section").each(function(idx, ele){
    const $this = $(ele);
    const position = $(this).position();
    const element = this.id;
    console.log('trigger element: #' + element);

    if (document.querySelector(`.scroll-to[href*=${element}]`)) { // element exists
        new ScrollMagic.Scene({triggerElement: `#${element}`})
                        .setClassToggle(`.scroll-to[href*=${element}]`, "active")
                        // .addIndicators()
                        // .on("leave", function(evt) {
                        //     console.log(evt)
                        // })
                        .addTo(controller);
    }
});

$(document).on("click", ".scroll-top-button", function(e) {
    e.preventDefault();
    const $self = $(this);
  
    $.scrollTo(0, 500);
  });
  
  var waypoint = new Waypoint({
    element: document.getElementById("header"),
    handler: function(direction) {
      const $btn = $(".scroll-top-button");
  
      if (direction === "up") {
        $btn.removeClass("active");
      } else {
        $btn.addClass("active");
      }
    },
    offset: -400 
  });
const arr = [1,1,1,1];

let html = '';

for (let i=0; i<3; i++) {
    html += '<div class="grid--line carousel--nav owl-carousel">';

    arr.forEach(v => {
        html += `
        <div class="cell-container cover--container">
                      <header class="cell--header is-hot">can ho lavita charm</header>
                      <div class="cell--body">
                        <a href="./project.html" class="cell--body-cover cover">
                          <img src="./images/lavita-front.jpg" alt="lavita" class="cover-front">
                          <img src="./images/lavita-back.png" alt="lavita" class="cover-back">
                        </a>
                      </div>
                      <div class="cell--footer">
                        <div class="cell--footer-line">
                          <strong>Vi Tri</strong>
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </div>
                        <div class="cell--footer-line">
                          <strong>Ban Giao</strong>
                          <span>8/2019</span>
                        </div>
                        <div class="cell--footer-line">
                          <strong>Bang Gia</strong>
                          <span>From 1,2 tỷ</span>
                        </div>
                      </div>
                    </div>
        `;
    });

    html += "</div>"
}

$("#grid-container").append(html);

let news = '';
for (let i=0; i<5; i++) {
    news += `
    <div class="news">
        <a href="#" class="news--cover">
          <img src="./images/skyline.svg" alt="news">
        </a>
        <div class="news--title">
          <a href="#">
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
for (let i=0; i<10; i++) {
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
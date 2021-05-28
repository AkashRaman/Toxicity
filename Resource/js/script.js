$(document).ready(function () {
  $("#section-cover").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-discover").hover(
    function () {
      if ($(window).width() <= "768") {
        $(this).addClass("shadow-pulse");
      } else {
        $(this).addClass("shadow-pulse");
      }
    },

    function () {
      $(this).removeClass("shadow-pulse");
    }
  );

  $(".js--section-synopsis").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").addClass("underline");
      } else {
        $(".about-us").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").removeClass("underline");
      }
      if (direction == "up") {
        $(".about-us").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-moveon").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".moveon").addClass("underline");
      }
      if (direction == "up") {
        $(".moveon").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-pretending").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".moveon").removeClass("underline");
        $(".pretendings").addClass("underline");
      }
      if (direction == "up") {
        $(".moveon").addClass("underline");
        $(".pretendings").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-speakup").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".pretendings").removeClass("underline");
        $(".speakup").addClass("underline");
      }
      if (direction == "up") {
        $(".pretendings").addClass("underline");
        $(".speakup").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-footdown").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".speakup").removeClass("underline");
        $(".footdown").addClass("underline");
      }
      if (direction == "up") {
        $(".speakup").addClass("underline");
        $(".footdown").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--footdown-support-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--footdown-support-1").addClass("footdown-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--footdown-support-1").removeClass("footdown-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--footdown-support-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--footdown-support-2").addClass("footdown-support-ls-hover");
        $(".js--footdown-support-1").removeClass("footdown-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--footdown-support-2").removeClass("footdown-support-ls-hover");
        $(".js--footdown-support-1").addClass("footdown-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--footdown-support-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--footdown-support-3").addClass("footdown-support-rs-hover");
        $(".js--footdown-support-2").removeClass("footdown-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--footdown-support-3").removeClass("footdown-support-rs-hover");
        $(".js--footdown-support-2").addClass("footdown-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--footdown-support-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--footdown-support-4").addClass("footdown-support-ls-hover");
        $(".js--footdown-support-3").removeClass("footdown-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--footdown-support-4").removeClass("footdown-support-ls-hover");
        $(".js--footdown-support-3").addClass("footdown-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--footdown-support-5").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--footdown-support-5").addClass("footdown-support-rs-hover");
        $(".js--footdown-support-4").removeClass("footdown-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--footdown-support-5").removeClass("footdown-support-rs-hover");
        $(".js--footdown-support-4").addClass("footdown-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );


  $(".js--footdown-conclusion").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--footdown-conclusion").addClass("footdown-conclusion-hover");
        $(".js--footdown-support-5").removeClass("footdown-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--footdown-conclusion").removeClass("footdown-conclusion-hover");
        $(".js--footdown-support-5").addClass("footdown-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */

  $(".mobile-nav-icon").click(function () {
    var nav = $(".nav-section");
    var icon = $(".mobile-nav-icon i");
    var isActive = nav.is(":visible");
    nav.slideToggle(200);

    if (isActive == false) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});

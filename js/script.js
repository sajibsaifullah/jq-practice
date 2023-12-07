// Example-01
$(document).ready(function () {
  $("#ex-1 p").on("click", function () {
    $(this).hide();
  });
});

// Example-02
$(document).ready(function () {
  $("#ex-2 button").on("click", function () {
    $("#ex-2 p").hide();
  });
});

// Example-03
$(document).ready(function () {
  $("#ex-3 button").on("click", function () {
    $("#ex-3 #ex-3-p1, #ex-3 #ex-3-p3").hide();
  });
});

// Example-04
$(document).ready(function () {
  $(".ex-4 button").on("click", function () {
    $(".ex-4 .ex-4-p2").hide();
  });
});

// Example-05
$(document).ready(function () {
  $("#ex-5 button").on("click", function () {
    alert("Hello World.");
  });
});

// Example-06
$(document).ready(function () {
  $("#ex-6 button").on("click", function () {
    $("#ex-6 h5").hide();
  });
});

// Example-07
$(document).ready(function () {
  $("#ex-7 button").on("click", function () {
    $("#ex-7 h5").show();
  });
});

// Example-08
$(document).ready(function () {
  $("#ex-8 button").on("click", function () {
    $("#ex-8 h5").toggle(1000);
  });
});

// Example-09
$(document).ready(function () {
  $("#ex-9 button").on("click", function () {
    $("#ex-9 .red-9").fadeIn();
    $("#ex-9 .green-9").fadeIn("slow");
    $("#ex-9 .blue-9").fadeIn(2000);
  });
});

// Example-10
$(document).ready(function () {
  $("#ex-10 button").on("click", function () {
    $("#ex-10 .red-10").fadeOut();
    $("#ex-10 .green-10").fadeOut("slow");
    $("#ex-10 .blue-10").fadeOut(2000);
  });
});

// Example-11
$(document).ready(function () {
  $("#ex-11 button").on("click", function () {
    $("#ex-11 .red-11").fadeToggle();
    $("#ex-11 .green-11").fadeToggle("slow");
    $("#ex-11 .blue-11").fadeToggle(2000);
  });
});

// Example-12
$(document).ready(function () {
  $("#ex-12 button").on("click", function () {
    $("#ex-12 .red-12").fadeTo("slow", 0.5);
  });
});

// Example-13
$(document).ready(function () {
  $(".flip-13").on("click", function () {
    $(".panel-13").slideDown("slow");
  });
});

// Example-14
$(document).ready(function () {
  $(".flip-14").on("click", function () {
    $(".panel-14").slideUp("slow");
  });
});

// Example-15
$(document).ready(function () {
  $(".flip-15").on("click", function () {
    $(".panel-15").slideToggle("slow");
  });
});

// Example-16
$(document).ready(function () {
  $("#ex-16 button").on("click", function () {
    $(".box-16").animate({
      width: "200px",
      height: "200px",
      marginLeft: "150px",
      borderWidth: "10px",
      opacity: "0.5",
    });
  });
});

// Example-17
$(document).ready(function () {
  $("#ex-17 button").on("click", function () {
    $(".box-17")
      .animate({ width: "200px" })
      .animate({ height: "200px" })
      .animate({ marginLeft: "150px" })
      .animate({ borderWidth: "10px" })
      .animate({ opacity: "0.5" });
  });
});

// Example-18
$(document).ready(function () {
  $("#ex-18 button").on("click", function () {
    $(".box-18").animate({ width: "toggle" }, 6000);
  });
});

// Example-19
$(document).ready(function () {
  $(".flip-19").on("click", function () {
    $(".panel-19").slideToggle(6000);
  });
  $("#ex-19 button").on("click", function () {
    $(".panel-19").stop();
  });
});

// Example-20
$(document).ready(function () {
  $("#ex-20 button").on("click", function () {
    $("#ex-20 h5").hide("slow", function () {
      alert("This line is now hidden.");
    });
  });
});

// Example-21
$(document).ready(function () {
  $("#ex-21 #button-1").on("click", function () {
    $("#ex-21 p")
      .animate({ width: "100%" })
      .animate({ fontSize: "45px" })
      .animate({ borderWidth: 30 });
  });
  $("#ex-21 #button-2").on("click", function () {
    $("#ex-21 p").removeAttr("style");
  });
});

// Example-22
$(document).ready(function () {
  $("#ex-22 #btn-1").on("click", function () {
    var para = $("#ex-22 p").text();
    alert(para);
  });
  $("#ex-22 #btn-2").on("click", function () {
    const para = $("#ex-22 p:first").text();
    alert(para);
  });
  $("#ex-22 #btn-3").on("click", function () {
    const para = $("#ex-22 p:last").text();
    alert(para);
  });
});

// Example-23
$(document).ready(function () {
  $("#ex-23 #btn-1").on("click", function () {
    $("#ex-23 p").text("This is demo text!!!");
  });

  $("#ex-23 #btn-2").on("click", function () {
    $("#ex-23 p:first").text("This is another demo text!!!");
  });

  $("#ex-23 #btn-3").on("click", function () {
    $("#ex-23 p.empty").text("This is one more demo text!!!");
  });
});

// Example-24
$(document).ready(function () {
  $("#ex-24 .btn-1").on("click", function () {
    const htmlTag = $("#ex-24 p").html();
    alert(htmlTag);
  });

  $("#ex-24 .btn-2").on("click", function () {
    const htmlTag = $("#ex-24 #container").html();
    alert(htmlTag);
  });
});

// Example-25
$(document).ready(function () {
  $("#ex-25 button").on("click", function () {
    $("#ex-25").html("<p>Hello World</p>");
  });
});

// Example-26
$(document).ready(function () {
  $("#ex-26 .btn-1").on("click", function () {
    const attr = $("#ex-26 p a").attr("href");
    alert(attr);
  });
  $("#ex-26 .btn-2").on("click", function () {
    const attr = $("#ex-26 img#nature").attr("alt");
    alert(attr);
  });
});

// Example-27
$(document).ready(function () {
  $("#ex-27 button").on("click", function () {
    $("#ex-27 input").attr("checked", "checked");
  });
});

// Example-28
$(document).ready(function () {
  $("#ex-28 button").on("click", function () {
    const value = $("#ex-28 input").val();
    alert(value);
  });
});

// Example-29
$(document).ready(function () {
  $("#ex-29 .btn-1").on("click", function () {
    const text = $(this).text();
    $("#ex-29 input").val(text);
  });
  $("#ex-29 .btn-2").on("click", function () {
    const text = $(this).text();
    $("#ex-29 input").val(text);
  });
  $("#ex-29 .btn-3").on("click", function () {
    const text = $(this).text();
    $("#ex-29 input").val(text);
  });
});

// Example-30
$(document).ready(function () {
  $("#ex-30 button").on("click", function () {
    $(".container-30").append("<h5>This is demo text.</h5>");
  });
});

// Example-31
$(document).ready(function () {
  $("#ex-31 button").on("click", function () {
    $(".container-31").prepend("<h5>This is demo text.</h5>");
  });
});

// Example-32
$(document).ready(function () {
  $("#ex-32 .btn-1").on("click", function () {
    $("#ex-32 h1").before('<img src="./images/marker-left.gif" alt="">');
  });
  $("#ex-32 .btn-2").on("click", function () {
    $("#ex-32 h1").after('<img src="./images/marker-right.gif" alt="">');
  });
});

// Example-33
$(document).ready(function () {
  $("#ex-33 button").on("click", function () {
    $(".container-33").empty();
  });
});

// Example-34
$(document).ready(function () {
  $("#ex-34 button").on("click", function () {
    $(".container-34 h1").remove();
  });
});

// Example-35
$(document).ready(function () {
  $("#ex-35 button").on("click", function () {
    $(".container-35 h1").unwrap();
  });
});

// Example-36
$(document).ready(function () {
  $("#ex-36 button").on("click", function () {
    $("#ex-36 h1").addClass("backgroundColor");
  });
});

// Example-37
$(document).ready(function () {
  $("#ex-37 button").on("click", function () {
    $("#ex-37 h1").removeClass("background-color");
  });
});

// Example-38
$(document).ready(function () {
  $("#ex-38 button").on("click", function () {
    $("#ex-38 h1").toggleClass("background-color");
  });
});

// Example-39
$(document).ready(function () {
  $("#ex-39 button").on("click", function () {
    const num1 = $("#ex-39 #num-1").val();
    const num2 = $("#ex-39 #num-2").val();
    const result = parseInt(num1) + parseInt(num2);
    $("#r-39").text(result);
  });
});

// Example-40
$(document).ready(function () {
  $("#ex-40 button").on("click", function () {
    const num1 = $("#ex-40 #num-1").val();
    const num2 = $("#ex-40 #num-2").val();
    const result = parseInt(num1) - parseInt(num2);
    $("#r-40").text(result);
  });
});

// Example-41
$(document).ready(function () {
  $("#ex-41 button").on("click", function () {
    const num1 = $("#ex-41 #num-1").val();
    const num2 = $("#ex-41 #num-2").val();
    const result = parseInt(num1) * parseInt(num2);
    $("#r-41").text(result);
  });
});

// Example-42
$(document).ready(function () {
  $("#ex-42 button").on("click", function () {
    const num1 = $("#ex-42 #num-1").val();
    const num2 = $("#ex-42 #num-2").val();
    const result = parseInt(num1) / parseInt(num2);
    $("#r-42").text(result);
  });
});

// Example-43
$(document).ready(function () {
  $("#ex-43 button").on("click", function () {
    const number = $("#ex-43 #num").val();
    const result = (parseFloat(number) / 12).toFixed(2);
    $("#r-43").text(result);
  });
});

// Example-44
$(document).ready(function () {
  $("#ex-44 button").on("click", function () {
    const number = $("#ex-44 #num").val();
    const result = (parseFloat(number) * 1.61).toFixed(2);
    $("#r-44").text(result);
  });
});

// Example-45
$(document).ready(function () {
  $("#ex-45 button").on("click", function () {
    const number = $("#ex-45 #num").val();
    if (number % 2 == 0) {
      return $("#r-45").text("Even");
    } else {
      return $("#r-45").text("Odd");
    }
  });
});

// Example-46
$(document).ready(function () {
  $("#ex-46 button").on("click", function () {
    const year = $("#ex-46 #num").val();

    if (year % 4 == 0 && year % 100 !== 0) {
      return $("#r-46").text("Leap Year");
    } else if (year % 400 == 0) {
      return $("#r-46").text("Leap Year");
    } else {
      return $("#r-46").text("Not Leap Year");
    }
  });
});

// Example-47
$(document).ready(function () {
  $("#ex-47").on("click", function () {
    const base = $("#base").text();
    const height = $("#height").text();
    const result = 0.5 * parseInt(base) * parseInt(height);
    $("#r-47").text(result);
  });
});

// Example-48
$(document).ready(function () {
  $("#ex-48").on("click", function () {
    const width = $("#width").text();
    const length = $("#length").text();
    const result = parseInt(width) * parseInt(length);
    $("#r-48").text(result);
  });
});

// Example-49
$(document).ready(function () {
    $("#ex-49 #btn-post").on("click", function () {
      const post = $("#ex-49 #post-text").val();
      $("#ex-49 #default-post").text(post);
      $("#ex-49 #post-text").val('');
    });
  });

// Example-50
$(document).ready(function () {
  $("#ex-50 #btn-new-comment").on("click", function () {
    var comment = $("#ex-50 #new-comment").val();
    var newP = document.createElement("p");
    newP.innerHTML = `
      <p>${comment}</p>
    `;
    $("#ex-50 #comment-container").append(newP);

    // $("#ex-50 #comment-container").append(`
    //   <p>${comment}</p>
    // `);

    $("#ex-50 #new-comment").val('');

    // console.log(comment)
  });
});

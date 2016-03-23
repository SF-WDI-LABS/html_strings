console.log('Sanity Check: JS is working!');

$(document).ready(function(){

  // get template source
  var gifSource = $('#yay-gif-template').html();
  // compile the template
  var gifTemplate = Handlebars.compile(gifSource);


  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'GET',
    data: $('form').serialize(),
    success: gifSuccess
  });

  // what to do once request is successfull
  function gifSuccess(json){
    console.log(json.data[0].images.downsized.url);
    // use template to create HTML string
    var gifString = gifTemplate({ url: json.data[0].images.downsized.url });
    // append the new HTML string to the page
    $('#yay-gif').append(gifString);

  }




  var introSource = $('#intro-paragraph-template').html();
  console.log(introSource);

  var introTemplate = Handlebars.compile(introSource);
  console.log(introTemplate);


  var introParagraphString = introTemplate({ cohort: data27.cohort });
  console.log(introParagraphString);

  $('#intro-paragraph').append(introParagraphString);

  // select a template script, and pull out the handlebars and html inside it
  var source = $('#student-li-template').html();
  // console.log(source);

  // compile the handlebars template
  var template = Handlebars.compile(source);

  // use the template function from handlebars to create an HTML string
  // the template function takes in an object where:
    // each key is a variable the html template expects
    // each key's value is the data we want that variable to have
  var studentHtml27 = template({ students: data27.students });

  var studentHtml28 = template({ students: data28.students });

  // append html to the view
  $("#students-list").append(studentHtml27);
  $("#students-list").append(studentHtml28);

});

var data27 = {
  school: "General Assembly",
  cohort: 27,
  room: 1,
  github_schedule: "https://github.com/sf-wdi-27-28/schedule-27",
  students:[
    {
      first_name: 'Rene',
      last_name: 'Arellano',
      github_username: 'relative-rene',
      initials : {
        first: 'R',
        last: 'A'
      },
      favorite_colors: [
        "none",
        "too cool for this",
        "totally love blue tho"
      ]
    },
    {
      first_name: 'Keith',
      last_name: 'Francis',
      github_username: 'kjfrancis'
    },
    {
      first_name: 'Joanne',
      last_name: 'Abad',
      github_username: 'Jabad28'
    },
     {
      first_name: 'Marcelo',
      last_name: 'leon',
      github_username: 'Mel195'
    },
    {
      first_name: 'Kirby',
      last_name: 'Tate III',
      github_username: 'shindomino' //When's Marvel?
    },
    {
      first_name: 'Ayush',
      last_name: 'Jha',
      github_username: 'ayush'
    },
    {
      first_name: 'Jonathan',
      last_name: 'Ortiz',
      github_username: 'jortiz31'
    },
    {
      first_name: 'Herman',
      last_name: 'Chan',
      github_username: 'hermchan'
    },
    {
      first_name: "Phill",
      last_name: "Cheng",
      github_username: "PJC-1"
    },
    {
      first_name: "Justin",
      last_name: "Pettit",
      github_username: "ahza64",
      role: "Master of code destruction"
    },
    {
      first_name: 'Paul',
      last_name: 'Cleary',
      git_username: 'Two-Watch-Boy'
    },
    {
      first_name: "Jacquelyn",
      last_name: "Fambrough",
      github_username: "jacquelynfambrough"
    },
    {
      first_name: "Bryan",
      last_name: "Smith",
      github_username: "smicl11"
    },
    {
      first_name: 'Anna',
      last_name: 'Sobolewska',
      github_username: 'sobolewskaanna'
    },
    {
      first_name: "Ada",
      last_name: "Reid",
      github_username: "adamrobertreid"
    },
    {
      first_name: "Andrea",
      last_name: "Ceballos",
      githubewre_username: "andreaainara10"
    },
    {
      first_name: "Ilter",
      last_name: "Ates",
      git_username: 'ilterates',
      personality: "sassy"
    },
    {
      first_name: "Sarah",
      last_name: "Bannister",
      github_username: "Srhbnnstr"
    },
    {
      first_name: 'Nathan',
      last_name: 'Lee',
      github_username: 'timesize'
    },
    {
      first_name: 'John',
      last_name: 'Ruhsam',
      github_username: 'ruhsam'
    },
    {
      first_name: "Eric",
      last_name: "Han",
      github_username: "scoobaroo"
    },
    {
      first_name: 'Arthur',
      last_name: 'Tonelli',
      github_username: 'altonelli'
   }
  ],
  instructors: [
    {
      last_name: "Fauver",
      first_name: "Cory",
      github_username: "cofauver"
    },
    {
      last_name: "Gaff",
      first_name: "Travis",
      github_username: "tgaff",
      car: {
        make: 'kia',
        model: 'cilantro',
        year: 2019
      }
    },
    {
      last_name: "Veenstra",
      first_name: "Brianna",
      github_username: "bgveenstra"
    },
    {
      role: "DiR",
      first_name: "Wilbot",
      last_name: "Cauthen",
      github_username: "willcauthen"
    }
  ]
};

var data28 = {
  school: "General Assembly",
  name: "Web Development Immersive",
  cohort: 28,
  room: 2,
  github_schedule: "https://github.com/sf-wdi-27-28/schedule-28",
  instructors: [
    "Juliana Lopker",
    "Nathan Allen",
    "Justin Castilla"
  ],
  students: [
    {
      id: 0,
      last_name: "Vilhauer",
      first_name: "Matthew",
      github_username: "matthewvilhauer"
    },
    {
      id: 1,
      last_name: "Beck",
      first_name: "Adam",
      github_username: "mradambeck"
    },
    {
      id: 2,
      last_name: "Brown",
      first_name: "Ameer",
      github_username: "ameer-brown"
    },
    {
      id: 3,
      last_name: "Kliger",
      first_name: "Bob",
      github_username: "bkliger"
    },
    {
      id: 4,
      last_name: "Moses",
      first_name: "Emily",
      github_username:"eamoses"
    },
    {
      id: 5,
      last_name: "Zuniga",
      first_name: "Franklin",
      github_username: "Franklinz23"
    },
    {
      id: 6,
      last_name: "Lam",
      first_name: "Christine",
      github_username: "lamchristine"
    },
    {
      id: 7,
      last_name: "Tam",
      first_name: "Justin",
      github_username: "jtam11"
    },
    {
      id: 8,
      last_name: "Quach",
      first_name:  "Lotus",
      github_username: "lsquach"
    },
    {
      id: 9,
      last_name: "Carlson",
      first_name: "Melissa",
      github_username: "melicarls"
    },
    {
      id: 10,
      last_name: "Silverberg",
      first_name: "Michael",
      github_username: "mbd-s"
    },
    {
      id: 11,
      last_name: "Sharif",
      first_name: "Morgan",
      github_username: "morgansharif"
    },
    {
      id: 12,
      last_name: "Huang",
      first_name: "Samuel",
      github_username: "samuel1008"
    },
    {
      id: 13,
      last_name: "Madrid",
      first_name: "Scott",
      github_username:"samadrid92"
    },
    {
      id: 14,
      last_name: "Van Ho",
      first_name: "Sean",
      github_username: "seanvsville"
    },
    {
      id: 15,
      last_name: "Tekanyo",
      first_name: "Jim",
      github_username: "jimhantrix"
    },
    {
      id: 16,
      last_name: "Vaisler",
      first_name: "Hila",
      github_username: "hilava"
    },
    {
      id: 17,
      last_name: "Schwab",
      first_name: "Anna",
      github_username: "cloverharvest"
    },
    {
      id: 18,
      last_name: "Kitagawa",
      first_name: "Chiyuki",
      github_username: "chyktgw"
    },
    {
      id: 19,
      last_name: "Villagran",
      first_name: "Adriana",
      github_username: "AdrianaVillagran"
    }
  ]
};

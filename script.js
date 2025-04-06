let candidates = [
  {
    firstName: "David",
    lastName: "Beckham",
    age: 40,
    city: "Los Angeles",
    country: "USA",
    gender: "male",
    role: "Leads digital marketing teams.",
    image:
      "https://images.unsplash.com/photo-1611702817692-ee0591608901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Sofia",
    lastName: "Mendes",
    age: 32,
    city: "Lisbon",
    country: "Portugal",
    gender: "female",
    role: "Designs user experiences.",
    image:
      "https://images.unsplash.com/photo-1725987791034-baa54a39e8ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Rajiv",
    lastName: "Sharma",
    age: 28,
    city: "Mumbai",
    country: "India",
    gender: "male",
    role: "Builds frontend interfaces.",
    image:
      "https://images.unsplash.com/photo-1608235882291-02e3b888f3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Emily",
    lastName: "Chen",
    age: 35,
    city: "Vancouver",
    country: "Canada",
    gender: "female",
    role: "Manages agile projects.",
    image:
      "https://images.unsplash.com/photo-1722370023115-a6c093eb6fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Liam",
    lastName: "O'Connor",
    age: 29,
    city: "Dublin",
    country: "Ireland",
    gender: "male",
    role: "Creates content strategies.",
    image:
      "https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Ayaka",
    lastName: "Tanaka",
    age: 27,
    city: "Tokyo",
    country: "Japan",
    gender: "female",
    role: "Optimizes SEO visibility.",
    image:
      "https://images.unsplash.com/photo-1620122303020-87ec826cf70d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Carlos",
    lastName: "Rivera",
    age: 38,
    city: "Madrid",
    country: "Spain",
    gender: "male",
    role: "Develops backend systems.",
    image:
      "https://images.unsplash.com/photo-1664255898007-37e69038d38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Nina",
    lastName: "Petrov",
    age: 31,
    city: "Belgrade",
    country: "Serbia",
    gender: "female",
    role: "Oversees brand identity.",
    image:
      "https://images.unsplash.com/photo-1551749626-2a2fdb374ee3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Jacob",
    lastName: "Lee",
    age: 34,
    city: "Seoul",
    country: "South Korea",
    gender: "male",
    role: "Architects cloud systems.",
    image:
      "https://images.unsplash.com/photo-1620122830785-a18b43585b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Fatima",
    lastName: "Zahra",
    age: 26,
    city: "Casablanca",
    country: "Morocco",
    gender: "female",
    role: "Coordinates product launches.",
    image:
      "https://images.unsplash.com/photo-1504903953708-1a3669833567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Michael",
    lastName: "Novak",
    age: 42,
    city: "Prague",
    country: "Czech Republic",
    gender: "male",
    role: "Analyzes business data.",
    image:
      "https://images.unsplash.com/photo-1686491698615-067e11027f06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Zara",
    lastName: "Ali",
    age: 30,
    city: "Lahore",
    country: "Pakistan",
    gender: "female",
    role: "Develops UI components.",
    image:
      "https://images.unsplash.com/photo-1646979198951-fce8a1ec9da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Thomas",
    lastName: "Müller",
    age: 37,
    city: "Berlin",
    country: "Germany",
    gender: "male",
    role: "Implements DevOps pipelines.",
    image:
      "https://images.unsplash.com/photo-1726741427448-947f63cb7751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Chiara",
    lastName: "Rossi",
    age: 33,
    city: "Rome",
    country: "Italy",
    gender: "female",
    role: "Conducts market research.",
    image:
      "https://images.unsplash.com/photo-1644718847151-fff2271484a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Lucas",
    lastName: "Moreira",
    age: 29,
    city: "São Paulo",
    country: "Brazil",
    gender: "male",
    role: "Leads quality assurance.",
    image:
      "https://images.unsplash.com/photo-1617746652908-91e66c07499a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Anastasia",
    lastName: "Ivanova",
    age: 36,
    city: "Moscow",
    country: "Russia",
    gender: "female",
    role: "Writes persuasive content.",
    image:
      "https://images.unsplash.com/photo-1655839916318-384a74ac27a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Noah",
    lastName: "Jensen",
    age: 25,
    city: "Copenhagen",
    country: "Denmark",
    gender: "male",
    role: "Manages social media.",
    image:
      "https://images.unsplash.com/photo-1632958983989-49773325c326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Mei",
    lastName: "Lin",
    age: 27,
    city: "Beijing",
    country: "China",
    gender: "female",
    role: "Performs user research.",
    image:
      "https://images.unsplash.com/photo-1558007300-d95d2f31ca90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
  {
    firstName: "Oliver",
    lastName: "White",
    age: 41,
    city: "Sydney",
    country: "Australia",
    gender: "male",
    role: "Aligns tech with goals.",
    image:
      "https://images.unsplash.com/photo-1602541848558-a7b831a7924e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxtYW4lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww",
    isConnect: "Connect",
  },
  {
    firstName: "Amina",
    lastName: "Yusuf",
    age: 30,
    city: "Lagos",
    country: "Nigeria",
    gender: "female",
    role: "Improves customer support.",
    image:
      "https://images.unsplash.com/photo-1655839916318-ac734d838512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZlbWFsZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    isConnect: "Connect",
  },
];

let main = document.querySelector("main");
let overlay = document.querySelector(".overlayMale");

function heroFunction(params) {
  let sum = "";

  candidates.forEach(function (e, idx) {
    let genderClass = e.gender === "female" ? "overlayFemale" : "overlayMale";

    sum += `<div class="card">
            <img src=${e.image}" alt="">

            <div id="overlay" class="${genderClass}">
                <div class="blank"></div>
                <div class="info">
                    <h1>${e.firstName} <br> ${e.lastName}</h1>

                    <p class="where">${e.age} years, ${e.city}, ${e.country}</p>
                    <p class="designation">${e.role}</p>

                    <button id="${idx}">${e.isConnect}</button>
                </div>
            </div>
        </div>`;
  });

  main.innerHTML = sum;
}

heroFunction();

main.addEventListener("click", function (e) {
  var gold = candidates[e.target.id];
  gold.isConnect = "connecting";
  heroFunction();

  gold.isConnect = "connected";
  setTimeout(() => {
    heroFunction();
  }, 2500);
});

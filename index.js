var pos = document.getElementsByClassName("position");
var y;

for (y = 0; y < pos.length; y++) {
  pos[y].addEventListener("click", function() {

    this.classList.toggle("active");


    var accordion = this.nextElementSibling;
    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
};
const BalthoNav = `<nav class="navbar navbar-expand-lg bg-body-tertiary" id="baltho-nav">
<div class="container-fluid">
  <div style="background-color: burlywood; border-radius: 15px;"><a href="" style="text-decoration: none; color: aliceblue;"><h2 style="text-align: center;">B.X.</h2><h6>Company</h6></a></div>
  <a class="navbar-brand" href=""></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="">Home</a>
      </li>
      <li class="nav-item">
        <button class="nav-link"  onclick="BalthoAbout()">About</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"  onclick="ClientRequest()">Request</button>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`;
function BalthoAbout() {document.body.innerHTML = `${BalthoNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h5 style="text-align: center">The Baltho Company</h5><br><p>The Baltho Company is a fast-growing company founded by Jude Balthazar at the beginning of the 21st century. When it comes to repairing the kitchen, painting the house, repairing the stairs and remodeling the house, we are a leading company in Florida. If you want to modernize the aspect of the house, our staff is waiting for your call, email or request.</p><div>`;
  };
  function ClientRequest(){ document.body.innerHTML = `${BalthoNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><section class="bottom" style="color: rgb(0, 0, 0); text-align: center;">
  <p style="font-weight:bold; color: rgb(3, 3, 3); text-align: left;">If you are not a client and you wish the free plan service to help you with your house, if you need transportation services; submit your request:</p>
  <fieldset>
      <legend style="font-weight:bold; color: rgb(3, 3, 3); text-align: center;">Select your option:</legend>
    
      <div>
        <input type="radio" id="administration" name="drone" value="administration" checked />
        <label for="administration" style="font-weight:bold; color: rgb(0, 0, 0); text-align: center;">Kitchen</label>
      </div>
    
      <div>
        <input type="radio" id="pedagogy" name="drone" value="pedagogy" />
        <label for="pedagogy" style="font-weight:bold; color: rgb(0, 0, 0); text-align: center;">Paint and remodeling the house</label>
      </div>
   
      <div>
        <input type="radio" id="trasportation" name="drone" value="transportation" />
        <label for="transportation" style="font-weight:bold; color: rgb(0, 0, 0); text-align: center;">Transportation</label>
      </div>

      <div>
          <input type="radio" id="student" name="drone" value="student" />
          <label for="student" style="font-weight:bold; color: rgb(0, 0, 0); text-align: center;">Other</label>
      </div>
    </fieldset>
  <br>

  <label for="name" style="color: rgb(245, 242, 212); text-align: center;"><b>First Name:</b></label>
  <br>
  <input style="color: rgb(245, 242, 212); text-align: center; background-color: rgb(235, 233, 162);" type="text" placeholder="Enter your first name" name="email" required>
<br>
<br>
  <label for="name" style="color: rgb(245, 242, 212); text-align: center;"><b>Last Name:</b></label>
  <br>
  <input style="color: rgb(245, 242, 212); text-align: center; background-color: rgb(219, 224, 146);" type="text" placeholder="Enter your last name" name="email" required>
<br>
<br>
  <label for="email" style="color: rgb(245, 242, 212); text-align: center;"><b>Email:</b></label>
  <br>
  <input style="color: rgb(245, 242, 212); text-align: center; background-color: rgb(236, 232, 169);" type="text" placeholder="Enter your email" name="email" required>
<br>
<br>
  <label for="phone" style="color: rgb(245, 242, 212); text-align: center;"><b>Phone:</b></label>
  <br>
  <input style="color: rgb(245, 242, 212); text-align: center; background-color: rgb(231, 226, 153);" type="phone"  name="phone" placeholder="700 000 1111" required>
<br>
<br>
<label for="Address" style="color: rgb(245, 242, 212); text-align: center;"><b>Address:</b></label>
<br>
<input style="text-align: center; background-color: rgb(230, 224, 152);" type="Address"  name="Address" placeholder="Enter the address with Zip" required>
<br>
<br>
<label for="comment" style="color: rgb(245, 242, 212); text-align: center;"><b>Describe your request:</b></label>
<br>
<textarea style="text-align: center; background-color: rgb(222, 236, 169); width: 90%; height: 80%;" id="comment" type="comment"  name="comment" placeholder="Describe your request in a few words..." required></textarea>
<br>
<input type="submit" value="Submit"><input type="reset" value="Reset"
</section><div>`;
  };
  function CreateAnAccount(){ 
    document.body.innerHTML = `${BalthoNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><form style="text-align: center"><fieldset>
    <legend style="text-align: center;">Select a status:</legend>
  
    <div>
      <input type="radio" name="drone" id="House" checked />
      <label for="House">House Repairing</label>
    </div>
  
    <div>
      <input type="radio" name="drone" id="Transportation" />
      <label for="Transportation">Transportation</label>
    </div>
  
    <div>
        <input type="radio" id="other" name="drone" value="other" />
        <label for="other">Other</label>
      </div>
  </fieldset>
  <br>
  <label for="name"><b>First Name:</b></label>
  <input type="text" placeholder="Enter your first name" name="email" required>
  <br>
  <br>
  <label for="name"><b>Last Name:</b></label>
  <input type="text" placeholder="Enter your last name" name="email" required>
  <br>
  <br>
  <label for="email"><b>Email:   </b></label>
  <input type="text" placeholder="Enter your email" name="email" required>
  <br>
  <br>
  <label for="uname"><b>Username:</b></label>
  <input type="text"  name="uname" placeholder="choose a username" required>
  <br>
  <br>
  <label for="psw"><b>Password:</b></label>
  <input type="password" placeholder="Create a password" name="psw" required>
  <br>
  <br>
  <label for="psw"><b>Confirm:</b></label>
  <input type="password" placeholder="Confirm the password" name="psw" required>
  <br>
  <br>
  <label>
  <input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
  </label> 
  <button type="submit">Submit</button></form><div>`
  };
  function Catalogue(){
    document.body.innerHTML = `${BalthoNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"> <div id="carouselAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="Ju1.jpg" style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="Ju3.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="Ju4.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="Ju5.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="bju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="cju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="eju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="fju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="gju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="hju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="kju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="lju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="mju.jpg"  style="width: 100%; height: 500px">
      </div>
      <div class="carousel-item">
        <img src="nju.jpg"  style="width: 100%; height: 500px">
      </div>
      <div class="carousel-item">
        <img src="pju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="qju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="rju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="sju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="uju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="vju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="wju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="xju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="zju.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="Ju2.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="jua.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="jub.jpg"  style="width: 100%; height: 500px;">
      </div>
      <div class="carousel-item">
        <img src="juc.jpg"  style="width: 100%; height: 500px;">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>`
  }
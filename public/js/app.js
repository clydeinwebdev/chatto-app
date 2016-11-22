"use strict";

class App{
	constructor(){

		}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){
		super();
	}

	recipeLayout(){
		this.reRender(`
 <nav>
    <div class="nav-wrapper">
      <i class="material-icons left">search</i>
      <a href="#" class+"brand-logo">Shout out to my ex</a>
        <ul class="right hide-on-med-and-down">
        <li>
        <a href="#">Music List</a>
        </li>
        <li>
        <a href="#l">Create Music</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="img/LM.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/FM.png"></a>
    <a class="carousel-item" href="#three!"><img src="img/LM.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/FM.png"></a>
    <a class="carousel-item" href="#five!"><img src="img/LM.jpg"></a>
  </div>

     

  <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
       <img src="img/LM.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
                <p>
			Song Title: Shout out to my ex
			<br>
			Album: Glory Days
			<br>
			Artist: Little Mix
			<br>
			Genre: Pop Music</p>
			<br>
			Trivia:<br>
			Little Mix fans were left open-mouthed
			when the band dropped their sassy diss track
			Shout Out To My Ex,
			but it seems the original lyrics were even worse.
        </div>
        <div class="card-action">
          <a href="#">View Music</a>
        </div>
      </div>
    </div>
  </div>


        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
              <div class="chip">
   				 <img src="img/decode.png" alt="Contact Person">
  				  Romelyn Rose Chatto
					 </div>
            © 2016 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>



			`,document.getElementById("app"));
	}
}

let component = new Component();
component.recipeLayout();
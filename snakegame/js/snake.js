function Snake(){
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.total = 0;
	this.tail = []; 
		
	this.dir = function(x,y){
		this.xSpeed = x;
		this.ySpeed = y;
	}
	
	this.eat = function(pos){
		var distance = dist(this.x,this.y,pos.x,pos.y);
		if(distance < 1){
			this.total++;
			score = this.total;
			return true;
		}else{
			return false;
		}
	}
	
	this.death = function(){
		for(var i=0;i<this.tail.length;i++){
			var pos = this.tail[i];
			var distance = dist(this.x,this.y,pos.x,pos.y);
			
			if(distance < 1){
				this.total = 0;
				this.tail = [];
				score = 0;
			}
		}
	}
	
	this.update = function(){
		if(this.total === this.tail.length){
			for(var i=0;i<this.tail.length-1;i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x,this.y);
		
		this.x += this.xSpeed * square;
		this.y += this.ySpeed * square;
		
		this.x = constrain(this.x,0,width-square);
		this.y = constrain(this.y,0,height-square);
		
	}
	
	this.show = function(){
		fill(255);
		for(var i=0;i<this.tail.length;i++){
			rect(this.tail[i].x,this.tail[i].y,square,square);
		}
		rect(this.x,this.y,square,square);
	}
}
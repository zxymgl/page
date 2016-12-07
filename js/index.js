$(function() {
	var animation = {};
	(function(obj){
		var setId = '';
		clearTimeout(setId);
		obj.page1 = function(){
			var $box = $('.page1');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bid').removeClass('bounceInDown');
			$box.find('.bir').removeClass('bounceInRight');
			$box.find('.fid').removeClass('fadeInDown');
			$box.find('.pl').removeClass('pulse');
			setId = setTimeout(function(){
				$box.find('.fi').addClass('fadeIn');
				$box.find('.biu').addClass('bounceInUp');
				$box.find('.bid').addClass('bounceInDown');
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.bir').addClass('bounceInRight');
				$box.find('.fid').addClass('fadeInDown');
				$box.find('.pl').addClass('pulse');
			},100);
		}
		obj.page2 = function(){
			var $box = $('.page2');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bi').removeClass('bounceIn');
			$box.find('.bid').removeClass('bounceInDown');
			$box.find('.fid').removeClass('fadeInDown');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bi').addClass('bounceIn');
				$box.find('.bid').addClass('bounceInDown');
				$box.find('.fid').addClass('fadeInDown');
			},100);
		}
		obj.page3 = function(){
			var $box = $('.page3');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.fid').removeClass('fadeInDown');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.fid').addClass('fadeInDown');
			},100);
		}
		obj.page4 = function(){
			var $box = $('.page4');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bi').removeClass('bounceIn');
			$box.find('.fix').removeClass('flipInX');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bi').addClass('bounceIn');
				$box.find('.fix').addClass('flipInX');
			},100);
		}
		obj.page5 = function(){
			var $box = $('.page5');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bid').removeClass('bounceInDown');
			$box.find('.fir').removeClass('fadeInRight');
			$box.find('.fil').removeClass('fadeInLeft');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bid').addClass('bounceInDown');
				$box.find('.fir').addClass('fadeInRight');
				$box.find('.fil').addClass('fadeInLeft');
			},100);
		}
		obj.page6 = function(){
			var $box = $('.page6');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bid').removeClass('bounceInDown');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bid').addClass('bounceInDown');
			},100);
		}
		obj.page7 = function(){
			var $box = $('.page7');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bi').removeClass('bounceIn');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bi').addClass('bounceIn');
			},100);
		}
		obj.page8 = function(){
			var $box = $('.page8');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bid').removeClass('bounceInDown');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bid').addClass('bounceInDown');
			},100);
		}
		obj.page9 = function(){
			var $box = $('.page9');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bid').removeClass('bounceInDown');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bid').addClass('bounceInDown');
			},100);
		}
		obj.page10 = function(){
			var $box = $('.page10');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bir').removeClass('bounceInRight');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bir').addClass('bounceInRight');
			},100);
		}
		obj.page11 = function(){
			var $box = $('.page11');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bir').removeClass('bounceInRight');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bir').addClass('bounceInRight');
			},100);
		}
		obj.page12 = function(){
			var $box = $('.page12');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
			},100);
		}
		obj.page13 = function(){
			var $box = $('.page13');
			$box.find('.bil').removeClass('bounceInLeft');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.bid').removeClass('bounceInDown');
			setId = setTimeout(function(){
				$box.find('.bil').addClass('bounceInLeft');
				$box.find('.fi').addClass('fadeIn');
				$box.find('.bid').addClass('bounceInDown');
			},100);
		}
		obj.page14 = function(){
			var $box = $('.page14');
			$box.find('.fi').removeClass('fadeIn');
			$box.find('.fid').removeClass('fadeInDown');
			setId = setTimeout(function(){
				$box.find('.fi').addClass('fadeIn');
				$box.find('.fid').addClass('fadeInDown');
			},100);
		}
	})(animation);
	animation['page1']();
	setTimeout(function(){
		$('.page1').find('.next').addClass('infinite pulse');
	},2000);
	var ismove = false,
		curpage = 1,
		totalpage = $('.page').length,
		startY = 0, endY = 0, differenceY = 0;
	var time = new Date(),
		curtime = 0, pretime = 0;
	curtime = time.getMinutes()*60 + time.getSeconds();
	document.getElementById('wrapper').addEventListener('touchstart', function(e){
		pretime = curtime;
		var time = new Date();
		curtime = time.getMinutes()*60 + time.getSeconds();
		ismove = false;
		startY = e.touches[0].clientY;
	});
	document.getElementById('wrapper').addEventListener('touchmove', function(e){
		e.preventDefault();
		ismove = true;
	});
	document.getElementById('wrapper').addEventListener('touchend', function(e){
		endY = e.changedTouches[0].clientY;
		differenceY = endY - startY;
		if(ismove && (curtime - pretime)>0){
			ismove = false;
			switch(direction(differenceY)){
				case 'pre':
					if(curpage > 1){
						curpage--;
					}else{
						return false;
					}
					break;
				case 'next':
					if(curpage < totalpage){
						curpage++;
					}else{
						return false;
					}
					break;
			}
			jump(curpage);
		}
	});
	function direction(differenceY){
		if(differenceY > 0){
			return 'pre';
		}else if(differenceY < 0){
			return 'next';
		}
	}
	function jump(page){
		$('#container').css('top', -(page-1)*100 + '%');
		if(page===5||page===4||page===3) {
			animation['page4']();
			return
		}

		switch (page) {
			case 6:
				page = 11;
				break;
			case 7:
				page = 12;
				break;
			case 8:
				page = 11;
				break;
			case 9:
				page = 12;
				break;
			case 10:
				page = 11;
				break;
			case 11:
				page = 12;
				break;
		}
		animation['page'+page]();
	}
});



$(document).ready(function(){
	//Main Design




	$('.tools a').hover(function(){
		if($(this).isChildOf('.jcolor'))
		{
			$(this).css('property', 0).stop(true, true).animate({'property':0.1}, {
				'step' : function(value){$(this).css('background', 'rgba(0, 0, 0, '+(value+0.2)+')');}
			});
		}
		else
		{
			$(this).css('property', 0).stop(true, true).animate({'property':0.3}, {
				'step' : function(value){$(this).css('background', 'rgba(200, 200, 200, '+(value+0.5)+')');}
			});
		}
	},
	function(){
		if($(this).isChildOf('.jcolor'))
		{
			$(this).css('property', 0).stop(true, true).animate({'property':0.1}, {
				'step' : function(value){$(this).css('background', 'rgba(0, 0, 0, '+(0.1-value+0.2)+')');}
			});
		}
		else
		{
			$(this).css('property', 0).stop(true, true).animate({'property':0.3}, {
				'step' : function(value){$(this).css('background', 'rgba(200, 200, 200, '+(0.3-value+0.5)+')');}
			});
		}
	});
	$('nav > div').hover(function(){
		if (getViewportWidth()>960)
			$(this).addClass('selected');
		/*$(this).children('.spacer').css('display', 'block');
		$(this).children('.mnlink').css('property', 0).stop(true, true).animate({'property':0.5}, {
			'step' : function(value){$(this).css('background', 'rgba(255, 255, 255, '+value+')');},
			'duration' : 'fast'
		});
		$(this).children('.smn').stop(true, true).fadeIn('fast');
		if($(this).hasClass('_tools')){
			$('header').css({
				'margin-bottom': 500
			}, 'fast');
			repositionSocialButtons();
		}*/
	},
	function(){
		if (getViewportWidth()>960)
			$(this).removeClass('selected');
		/*$(this).children('.spacer').css('display', 'none');
		$(this).children('.mnlink').css('property', 0).stop(true, true).animate({'property':0.5}, {
			'step' : function(value){$(this).css('background', 'rgba(255, 255, 255, '+(0.5-value)+')');}
		});
		$(this).children('.smn').stop(true, true).fadeOut('fast');
		$('header').css({
			'margin-bottom': 0
		}, 'fast');
		repositionSocialButtons();*/
	});
	
	$('.st_block, .st_block_categories, .wd_block, .userBlock').hover(function(){
		$(this).css('property', 0).stop(true, true).animate({'property':12}, {
			'step' : function(value){$(this).borderRadius(15-value, 'top-left').borderRadius(15-value, 'bottom-right');},
			'duration' : 'fast'
		});
	},
	function(){
		$(this).css('property', 0).stop(true, true).animate({'property':12}, {
			'step' : function(value){$(this).borderRadius(3+value, 'top-left').borderRadius(3+value, 'bottom-right');},
			'duration' : 'fast'
		});
	});
	$('article').hover(function(){
		$(this).css('property', 0).stop(true, true).animate({'property':0.3}, {
			'step' : function(value){$(this).boxShadow('#000000', 0, 5, 0.3+value, 'outset', 0, 0);},
			'duration' : 'fast'
		});
	},
	function(){
		$(this).css('property', 0).stop(true, true).animate({'property':0.3}, {
			'step' : function(value){$(this).boxShadow('#000000', 0, 5, 0.6-value, 'outset', 0, 0);},
			'duration' : 'fast'
		});
	});
	$('.jcolor').ySlider().setSlideSize(171).setType('horizontal');
	$('.goback').click(function(){history.back(-1);});
	$('.clickselect').click(function(){$(this).selectContent();});
	
	
	
	
	
	

});



(function($){
$.fn.borderRadius = function(radius, corner){
	if(!corner)
	{
		this.css({
			'border-radius': radius+'px',
			'-moz-border-radius': radius+'px',
			'-webkit-border-radius': radius+'px'
		});
	}
	else if(corner=='top-left')
	{
		this.css({
			'border-top-left-radius': radius+'px',
			'-moz-border-radius-topleft': radius+'px',
			'-webkit-border-top-left-radius': radius+'px'
		});
	}
	else if(corner=='top-right')
	{
		this.css({
			'border-top-right-radius': radius+'px',
			'-moz-border-radius-topright': radius+'px',
			'-webkit-border-top-right-radius': radius+'px'
		});
	}
	else if(corner=='bottom-left')
	{
		this.css({
			'border-bottom-left-radius': radius+'px',
			'-moz-border-radius-bottomleft': radius+'px',
			'-webkit-border-bottom-left-radius': radius+'px'
		});
	}
	else if(corner=='bottom-right')
	{
		this.css({
			'border-bottom-right-radius': radius+'px',
			'-moz-border-radius-bottomright': radius+'px',
			'-webkit-border-bottom-right-radius': radius+'px'
		});
	}
	return this;
};

$.fn.boxShadow = function(color, spread, blur, opacity, type, posX, posY){
	var cssparams = '';
	if(type=='inset'){
		cssparams += 'inset ';
	}
	if(posX!=null){
		cssparams += posX+'px ';
	}
	if(posY!=null){
		cssparams += posY+'px ';
	}
	if(blur!=null){
		cssparams += blur+'px ';
	}
	if(spread!=null){
		cssparams += spread+'px ';
	}
	if(opacity===1){
		cssparams += color;
	}
	else
	{
		var rgb = hex2rgb(color);
		cssparams += 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', '+opacity+')';
	}

	return this;
};

$.fn.boxShadows = function(params){//color, spread, blur, opacity, type, posX, posY
	var cssparams = '';
	var first = true;
	for(line in params)
	{
		line = params[line];
		if(!first)
		{
			cssparams += ', ';
		}
		first = false;
		color = line[0];
		if(typeof line[1] === 'undefined')
		{
			spread = null;
		}
		else
		{
			spread = line[1];
		}
		if(typeof line[2] === 'undefined')
		{
			blur = null;
		}
		else
		{
			blur = line[2];
		}
		if(typeof line[3] === 'undefined')
		{
			opacity = null;
		}
		else
		{
			opacity = line[3];
		}
		if(typeof line[4] === 'undefined')
		{
			type = null;
		}
		else
		{
			type = line[4];
		}
		if(typeof line[5] === 'undefined')
		{
			posX = null;
		}
		else
		{
			posX = line[5];
		}
		if(typeof line[6] === 'undefined')
		{
			posY = null;
		}
		else
		{
			posY = line[6];
		}
		if(type=='inset'){
			cssparams += 'inset ';
		}
		if(posX!=null){
			cssparams += posX+'px ';
		}
		if(posY!=null){
			cssparams += posY+'px ';
		}
		if(blur!=null){
			cssparams += blur+'px ';
		}
		if(spread!=null){
			cssparams += spread+'px ';
		}
		if(opacity===1){
			cssparams += color;
		}
		else
		{
			var rgb = hex2rgb(color);
			cssparams += 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', '+opacity+')';
		}
	}

	return this;
};

$.fn.textShadow = function(color, blur, opacity, posX, posY, repeat){
	var cssparams = '';
	if(posX!=null){
		cssparams += posX+'px ';
	}
	if(posY!=null){
		cssparams += posY+'px ';
	}
	if(blur!=null){
		cssparams += blur+'px ';
	}
	if(opacity===1){
		cssparams += color;
	}
	else
	{
		var rgb = hex2rgb(color);
		cssparams += 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', '+opacity+')';
	}
	if(repeat>1)
	{
		for(var i=1;i<repeat;i++)
		{
			cssparams = cssparams+', '+cssparams;
		}
	}
	this.css({
		'text-shadow': cssparams
	});
	return this;
};

$.fn.unSelectable = function(){
	this.attr('unselectable', 'on');
	this.css({
		'-moz-user-select': '-moz-none',
		'-khtml-user-select': 'none',
		'-webkit-user-select': 'none',
		'-o-user-select': 'none',
		'user-select': 'none',
	});
	this.onselectstart = function() {return false;}
	return this;
};



$.fn.insertAtCursor = function(myValue){
	return this.each(function(i){
		if(document.selection)
		{
			this.focus();
			sel = document.selection.createRange();
			sel.text = myValue;
			this.focus();
		}
		else if(this.selectionStart || this.selectionStart=='0')
		{
			var startPos = this.selectionStart;
			var endPos = this.selectionEnd;
			var scrollTop = this.scrollTop;
			this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
			this.focus();
			this.selectionStart = startPos+myValue.length;
			this.selectionEnd = startPos+myValue.length;
			this.scrollTop = scrollTop;
		}
		else
		{
			this.value += myValue;
			this.focus();
		}
	});
}
$.fn.selectRange = function(start, end){
	return this.each(function(){
		if(this.setSelectionRange)
		{
			this.focus();
			this.setSelectionRange(start, end);
		}
		else if(this.createTextRange)
		{
			var range = this.createTextRange();
			range.collapse(true);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		}
	});
};
$.fn.cursorAt = function(position){
	return this.selectRange(position, position);
};
$.fn.tagSelection = function(start, end){
	return this.each(function(){
		var selectionStart = this.selectionStart;
		var selectionEnd = this.selectionEnd;
		$(this).cursorAt(selectionStart).insertAtCursor(start).cursorAt(selectionEnd+start.length).insertAtCursor(end).selectRange((selectionStart+start.length), (selectionEnd+start.length));
	});
};
$.fn.getSelectionSize = function(){
	var selectionStart = this.get(0).selectionStart;
	var selectionEnd = this.get(0).selectionEnd;
	return selectionEnd-selectionStart;
};


$.fn.isChildOf = function(parent){
	return this.parents().filter(parent).length>0;
};

$.fn.ySlider = function(arg){
	return new ySlider(this, arg);
};

$.fn.JanSelector = function(arg){
	return new JanSelector(this, arg);
};

$.fn.yRating = function(arg){
	return new yRating(this, arg);
};

$.expr[':'].contentIs = function(ele, idx, meta){
    return $(ele).text()===meta[3];
};

})(jQuery);




function isDefined(variable)
{
	if(typeof variable === 'undefined')
	{
		return false;
	}
	else
	{
		return true;
	}
}

function noNaN(nan, val)
{
	if(!val)
	{
		val = 0;
	}
	if(isNaN(nan))
	{
		return val;
	}
	else
	{
		return nan;
	}
}


function ySlider(t, a)
{

	this.slideTo = function(slide){
		this.updateNumberSlides();
		if(slide>this.numberSlides)
	
		this.currentSlide = slide;
		if(this.type=='vertical')
		{
			this.t.children('.Janmausac').animate({'scrollTop': ((slide-1)*this.slideSize)}, 'slow');
		}

	};
	this.updateNumberSlides = function(){
		if(this.type=='vertical')
		{
			this.numberSlides = noNaN(parseInt(this.t.children('.Janmausac')[0].scrollHeight/this.slideSize))-(noNaN(parseInt(this.t.children('.Janmausac').height()/this.slideSize)))+1;
		}
		else
		{
			this.numberSlides = noNaN(parseInt(this.t.children('.Janmausac')[0].scrollWidth/this.slideSize))-(noNaN(parseInt(this.t.children('.Janmausac').width()/this.slideSize)))+1;
		}
		if(this.numberSlides<0)
		{
			this.numberSlides = 1;
		}
		return this;
	};
	this.setSlideSize = function(size){
		this.slideSize = noNaN(parseInt(size));
		if(this.slideSize<0)
		{
			this.slideSize = 1;
		}
		this.updateNumberSlides();
		this.slideTo(this.currentSlide);
		return this;
	};
	this.setType = function(type){
		this.type = type;
		if(this.type!='vertical')
		{
			this.type = 'horizontal';
		}
		this.updateNumberSlides();
		return this;
	};
	this.currentSlide=1;
	this.slideSize=100;
	this.type = 'vertical';
	this.numberSlides=1;
	this.t = t;
	this.slideTo(this.currentSlide);
	this.t.children('.previous').click({th: this}, function(e){
		th = e.data.th;
		th.slidePrevious();
	});
	this.t.children('.next').click({th: this}, function(e){
		th = e.data.th;
		th.slideNext();
	});
	return this;
}

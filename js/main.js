var $backGround = $('.hills')+$(window).height();

$(window).on('scroll',function(){

	if ($backGround>$(window).height())

	{

		$('.hills').scrollTop();
	};

	$('.hero').animate({

		marginLeft:'+=12',

	});

});
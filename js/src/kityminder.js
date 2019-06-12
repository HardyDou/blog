$(document).ready(function() {
	if($('.mindmap').length==0){
		return ;
	}
	var minder = new kityminder.Minder({
            renderTo: '.mindmap'
        });
        var markdownText = $('.mindmap').text().trim();
        $('.mindmap p').each(function(index, element) {
            element.style.display = 'none';
        });
        minder.importData('markdown', markdownText);
        minder.disable();
        minder.execCommand('hand');
    }
)

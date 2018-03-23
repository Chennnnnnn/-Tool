;(function($){
    $.fn.verification = function(){
        document.ondragover = function(ev){
            ev.preventDefault();
        }
        document.ondrop  = function(ev){
            ev.preventDefault();
        }
        var _defaults = {
            title: '拖拽图片',
            imgBox:{
                width: '300px',
                height: '300px',
                'background-color': 'rgb(185, 183, 183)',
                color: 'white',
                'border-radius': '5%',
                border: '4px solid rgb(124, 123, 123)',
                position:'relative',
                overflow: 'hidden',
                'padding-top':'20px'
            },
            img:{
                float:'left',
                width: '100px', 
                margin:'4px'                   
            },
            span:{
                position:'absolute',
                top: '4px',
                left:'4px',
                'font-size':'12px'
            }
        }

        var _html = `<div class='img-box'><span>将图片拖拽到此处</span></div>`;
        var _files = [];
        var result = $(this).append(_html)                       
                    .on('drop',function(e){
                        var that = this;
                        e.preventDefault();
                        var f = e.originalEvent.dataTransfer.files[0];//获取到第一个上传的文件对象
                        _files.push(f);
                        var fr = new FileReader();//实例FileReader对象
                        fr.readAsDataURL(f);//把上传的文件对象转换成url
                        fr.onload = function (e){
                            // var Url=e.target.result;//上传文件的URL
                            var Url= this.result;//上传文件的URL
                           $(that).find('.img-box').append($(`<img src="${Url}">`).css(_defaults.img));
                        } 
                    })
                    .on('dragover',function(e){
                        e.preventDefault();
                    })
                    .find('.img-box').css(_defaults.imgBox)
                    .find('span').css(_defaults.span);
        return { files : _files}
    };               
})(jQuery);
$(document).ready(function() {

    setInterval ('cursorAnimation()', 600);
    
    var text = '[root@Hal9000 ~]# cat asuna.txt<br><br>Hello World,</a><br><br>I am a pagan cyber-security professional who enjoys getting down and dirty with tech projects, I currently work for <a href="https://www.ironwolfsecurity.org" target="new">Ironwolf Security</a> When I\'m not hacking something, I can be found flying my Quadcopter (or Drone) or going for a nice bike ride.<br><br>The first time I discovered my passion for technology was in first grade (late 2010) when we got to use computers for the first time, it was "love at first sight" as they say and it truly was each day I learned something new, sadly this was before the era of Youtube so I really had to rely on my cousin\'s college CS lecture notes to learn from.<br><br>Life has a lot to offer and I am starting to take advantage of that, I am one of the youngest people to attain the CISSP (Certifed Information Systems Security Professional) and the CEH (Certified Ethical Hacker) certifications. I am spending more time on furthering my skills in the cyber-security field. I am currently working on making my home lab better optimized for Windows Server 2019 and beyond..<br><br>Try Harder.<br><br><b>Links</b>: &nbsp; &nbsp; <a href="https://www.twitter.com/xygilfoyle/" target="new">Twitter</a>&nbsp; <a href="mailto:elwood.contessa@gmail.com">Email</a>&nbsp; <a href="agilfoyle_resume.pdf">Resume</a>&nbsp; <a href="https://ko-fi.com/asunagilfoyle" target="new">Buy me a coffee</a>&nbsp;<br><br>\[root@Hal9000 ~]# ';
    type(text);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function erase() {
    caption = $('#caption').html();
    captionLength = caption.length;
    if(captionLength > 0){
        $('#caption').html(caption.substr(0, captionLength-1));
        setTimeout(function(){
            erase();
        }, 1);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function uwu() {
    erase();
    var multiString='LC4tfirCtMKowq/CqGAqwrd+LS7CuC1Bc3VuYSBXYXMgSGVyZS0sLi1+KsK0wqjCr8KoYCrCt34tLsK4';
    type(multiString);
}

function cow() {
    erase();
    var text='<br/>&nbsp;,__,<br/>&nbsp;(oo)____<br/>&nbsp;(__)&nbsp;&nbsp;&nbsp;&nbsp;)\\<br/>&nbsp;&nbsp;&nbsp;&nbsp;||--|| *<br/>Meow';
    type(text);
}

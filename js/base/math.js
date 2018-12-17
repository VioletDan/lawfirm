var imath=importMath();function importMath(){var math={};math.randomRange=function(min,max){var randomNumber;randomNumber=Math.floor(Math.random()*(max-min+1))+min;return randomNumber};math.randomSort=function(ary){if(ary&&ary.length>1){ary.sort(function(){return 0.5-Math.random()})}};math.randomPlus=function(){return Math.random()<0.5?-1:1};math.autoSize=function(aryNum,aryMax){var aryNow=new Array();var aryRate=aryNum[0]/aryNum[1];aryNow[0]=aryMax[0];aryNow[1]=Math.round(aryNow[0]/aryRate);if(aryNow[1]<aryMax[1]){aryNow[1]=aryMax[1];aryNow[0]=Math.round(aryNow[1]*aryRate)}return aryNow};math.ease=function(_now,_tar,_speed,_space){_speed=_speed||10;_space=_space||0.1;var _dis=_tar-_now;if(Math.abs(_dis)>_space){return _dis/_speed+_now}else{return _tar}};math.toRadian=function(degree){return degree*Math.PI/180};math.toDegree=function(radian){return radian/Math.PI*180};math.getDis=function(pos1,pos2){var lineX=pos2[0]-pos1[0];var lineY=pos2[1]-pos1[1];return Math.sqrt(Math.pow(Math.abs(lineX),2)+Math.pow(Math.abs(lineY),2))};math.getDeg=function(pos1,pos2){var deg;if(pos1[0]==pos2[0]&&pos1[1]==pos2[1]){deg=0}else{var dis_y=pos2[1]-pos1[1];var dis_x=pos2[0]-pos1[0];deg=Math.atan(dis_y/dis_x)*180/Math.PI;if(dis_x<0){deg=180+deg}else{if(dis_x>=0&&dis_y<0){deg=360+deg}}}return deg};math.hitTest=function(source,target,scaleX,scaleY){scaleX=scaleX!=null?scaleX:1;scaleY=scaleY!=null?scaleY:1;if(source&&target){var pos1=[source.offset().left+source.outerWidth()*scaleX/2,source.offset().top+source.outerHeight()*scaleY/2];var pos2=[target.offset().left+target.outerWidth()*scaleX/2,target.offset().top+target.outerHeight()*scaleY/2];var disX=Math.abs(pos2[0]-pos1[0]);var disY=Math.abs(pos2[1]-pos1[1]);var disXMin=(source.outerWidth()+target.outerWidth())*scaleX/2;var disYMin=(source.outerHeight()+target.outerHeight())*scaleY/2;if(disX<=disXMin&&disY<=disYMin){return true}}else{return false}};math.hitObject=function(source,target){if(source&&target){var pos1=[source.data().x+source.outerWidth()/2,source.data().y+source.outerHeight()/2];var pos2=[target.data().x+target.outerWidth()/2,target.data().y+target.outerHeight()/2];var disX=Math.abs(pos2[0]-pos1[0]);var disY=Math.abs(pos2[1]-pos1[1]);var disXMin=(source.outerWidth()+target.outerWidth())/2;var disYMin=(source.outerHeight()+target.outerHeight())/2;if(disX<=disXMin&&disY<=disYMin){return true}}else{return false}};math.hitPoint=function(source,target,scaleX,scaleY){scaleX=scaleX!=null?scaleX:1;scaleY=scaleY!=null?scaleY:1;if(source&&target){var area=[target.offset().left,target.offset().left+target.outerWidth()*scaleX,target.offset().top,target.offset().top+target.outerHeight()*scaleY];if(source[0]>=area[0]&&source[0]<=area[1]&&source[1]>=area[2]&&source[1]<=area[3]){return true}else{return false}}else{return false}};math.arrayToInt=function(ary){var num=0;for(var i=0;i<ary.length;i++){num+=ary[i]*Math.pow(10,(ary.length-1-i))}return num};math.deepClone=function(data){var clone;if(toString.apply(data)==="[object Array]"){clone=[]}else{if(toString.apply(data)==="[object Object]"){clone={}}}if(clone){for(var i in data){clone[i]=data[i]}}return clone};math.objectLength=function(obj){return Object.keys(obj).length};return math}Array.prototype.contains=function(obj){var i=this.length;while(i--){if(this[i]===obj){return true}}return false};
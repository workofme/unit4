function music(sound) {
    var obj = document.createElement('audio')
    obj.src = sound
    obj.play();
}
// ham  phat am thanh truyen vao tham so url
function creat_text(text, tag, class_in_append, class_this) {
    var obj = document.createElement(tag)
    obj.classList.add(class_this)
    var textnode = document.createTextNode(text)
    obj.appendChild(textnode)
    var class_in_append = document.getElementsByClassName(class_in_append)[0]
    class_in_append.appendChild(obj);
}
// ham tao ra text truyen vao tham so text , ten the , class cua the can chen vao  , clas cua the 
function creat_div(class_this) {
    var div = document.createElement('div');
    div.classList.add(class_this);
    document.body.appendChild(div);
}

function creat_div_append(class_this, class_append) {
    var div = document.createElement('div');
    div.classList.add(class_this);
    var div_append = document.getElementsByClassName(class_append)[0];
    div_append.appendChild(div);
}

function creat_image(image, class_apped, class_this) {

    var obj = document.createElement('img')
    obj.src = image
    obj.classList.add(class_this);
    var clas = document.getElementsByClassName(class_apped)[0]
    clas.appendChild(obj);

}

function style(time, propertype, value, tag) {
    setTimeout(function() {
        $(tag).css(propertype, value)
    }, time)
}

function delete_element(tag) {
    return tag.remove();
}

function creat_element(tag, class_this, class_apped, postision) {
    var tag = document.createElement(tag);
    tag.classList.add(class_this)
    var class_apped = document.getElementsByClassName(class_apped)[postision];
    class_apped.appendChild(tag);
}

function add_id(tag, id_this, postision) {
    return document.getElementsByTagName(tag)[postision].setAttribute('id', id_this);
}

function add_class(tag, class_this, postision) {
    return document.getElementsByTagName(tag)[postision].classList.add(class_this);
}

function edit_style(tag, propertype, value) {
    return tag.css(propertype, value);
}

function creat_item(time, url, class_apped, class_this) {
    setTimeout(function() {
        creat_image(url, class_apped, class_this);

    }, time)
}
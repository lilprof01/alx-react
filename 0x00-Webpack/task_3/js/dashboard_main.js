import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - ALX School</p>');

$('button').on('click', _.debounce(updateCounter, 500));

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

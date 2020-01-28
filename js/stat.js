'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_BETWEEN_COLUMN = 50;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - BAR_HEIGHT + TEXT_HEIGHT;
var GAP_TEXT = GAP_BETWEEN_COLUMN * 0.5;
var GAP_TEXT_TOP = 35;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_BETWEEN_COLUMN + (GAP_BETWEEN_COLUMN + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BETWEEN_COLUMN + (GAP_BETWEEN_COLUMN + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT * 2 - (barHeight * times[i] / maxTime) - GAP);
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    ctx.fillRect(CLOUD_X + GAP_BETWEEN_COLUMN + (GAP_BETWEEN_COLUMN + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT * 2 - (barHeight * times[i] / maxTime), BAR_WIDTH, (barHeight * times[i] / maxTime));
  }
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили !', CLOUD_X + GAP_TEXT, CLOUD_Y + GAP_TEXT_TOP);
  ctx.fillText('Список результатов :', CLOUD_X + GAP_TEXT, CLOUD_Y + GAP_TEXT_TOP + TEXT_HEIGHT);
};

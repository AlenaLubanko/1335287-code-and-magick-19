var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // координата облака по X
var CLOUD_Y = 10; // координата облака по Y
var GAP = 10; // на сколько смещается тень
var FONT_GAP = -70; // высота строки
var GAP_BETWEEN_COLUMN = 50; // расстояние между столбцами
var TEXT_HEIGHT = 20; //  высота текста
var BAR_HEIGHT = 150; // высота гистограммы
var BAR_WIDTH = 40; // ширина столбца
var barHeight = CLOUD_HEIGHT - 120;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);


  for (var i = 0; i < players.length; i++) {


    ctx.fillText(players[i], CLOUD_X + GAP_BETWEEN_COLUMN + (GAP_BETWEEN_COLUMN + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BETWEEN_COLUMN + (GAP_BETWEEN_COLUMN + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT * 2 - barHeight + (barHeight - (barHeight * times[i]) / maxTime) - GAP);
    ctx.fillRect(CLOUD_X + GAP_BETWEEN_COLUMN + (GAP_BETWEEN_COLUMN + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT * 2 - barHeight + (barHeight - (barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);

  }
ctx.font = '16px PT Mono'
ctx.fillText('Ура вы победили !', CLOUD_X + GAP_BETWEEN_COLUMN * 0.5, CLOUD_Y + TEXT_HEIGHT * 1.5 );
ctx.fillText('Список результатов :', CLOUD_X + GAP_BETWEEN_COLUMN * 0.5, CLOUD_Y + TEXT_HEIGHT * 2.5);



};

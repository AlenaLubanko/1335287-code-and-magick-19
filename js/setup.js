'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [];
for (var i = 0; i < WIZARD_COUNT; i++) {
  var wizardNameIndex = Math.floor (Math.random() * WIZARD_NAMES.length);
  var wizardSurnameIndex = Math.floor (Math.random() * WIZARD_SURNAMES.length);
  var name = WIZARD_NAMES[wizardNameIndex] + ' ' + WIZARD_SURNAMES[wizardSurnameIndex];

  var coatColorIndex = Math.floor (Math.random() * coatColors.length);
  var coatColor = coatColors[coatColorIndex];

  var eyesColorIndex = Math.floor (Math.random() * eyesColors.length);
  var eyesColor = eyesColors[eyesColorIndex];

  wizards[i] = {
    'name': name,
    'coatColor': coatColor,
    'eyesColor': eyesColor,
  };
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

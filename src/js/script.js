const gui = new dat.GUI();

const settings = {
  '--rad1-x': 16,
  '--rad1-y': 22,
  '--rad1-radio': 70,
  '--rad1-hue': 200,
  '--rad2-x': 10,
  '--rad2-y': 56,
  '--rad2-radio': 70,
  '--rad2-hue': 160,
  '--rad3-x': 76,
  '--rad3-y': 65,
  '--rad3-radio': 70,
  '--rad3-hue': 120,
};

const container = document.querySelector('.container');

const setValue = (container) => {
  container.style.setProperty('--rad1-x', settings['--rad1-x'] + '%');
  container.style.setProperty('--rad1-y', settings['--rad1-y'] + '%');
  container.style.setProperty('--rad1-radio', settings['--rad1-radio'] + '%');
  container.style.setProperty('--rad1-hue', settings['--rad1-hue']);
  container.style.setProperty('--rad2-x', settings['--rad2-x'] + '%');
  container.style.setProperty('--rad2-y', settings['--rad2-y'] + '%');
  container.style.setProperty('--rad2-radio', settings['--rad2-radio'] + '%');
  container.style.setProperty('--rad2-hue', settings['--rad2-hue']);
  container.style.setProperty('--rad3-x', settings['--rad3-x'] + '%');
  container.style.setProperty('--rad3-y', settings['--rad3-y'] + '%');
  container.style.setProperty('--rad3-radio', settings['--rad3-radio'] + '%');
  container.style.setProperty('--rad3-hue', settings['--rad3-hue']);
};

const points = gui.addFolder('Geom Points');

const point1 = points.addFolder('Radial 1');
point1
  .add(settings, '--rad1-x', 0, 100, 1)
  .onChange(setValue.bind(null, container));
point1
  .add(settings, '--rad1-y', 0, 100, 1)
  .onChange(setValue.bind(null, container));
point1
  .add(settings, '--rad1-radio', 20, 80, 5)
  .onChange(setValue.bind(null, container));

const point2 = points.addFolder('Radial 2');
point2
  .add(settings, '--rad2-x', 0, 100, 1)
  .onChange(setValue.bind(null, container));
point2
  .add(settings, '--rad2-y', 0, 100, 1)
  .onChange(setValue.bind(null, container));
point2
  .add(settings, '--rad2-radio', 20, 80, 5)
  .onChange(setValue.bind(null, container));

const point3 = points.addFolder('Radial 3');
point3
  .add(settings, '--rad3-x', 0, 100, 1)
  .onChange(setValue.bind(null, container));
point3
  .add(settings, '--rad3-y', 0, 100, 1)
  .onChange(setValue.bind(null, container));
point3
  .add(settings, '--rad3-radio', 20, 80, 5)
  .onChange(setValue.bind(null, container));

const colors = gui.addFolder('Colors Points');

colors
  .add(settings, '--rad1-hue', 1, 255, 1)
  .onChange(setValue.bind(null, container));
colors
  .add(settings, '--rad2-hue', 1, 255, 1)
  .onChange(setValue.bind(null, container));
colors
  .add(settings, '--rad3-hue', 1, 255, 1)
  .onChange(setValue.bind(null, container));
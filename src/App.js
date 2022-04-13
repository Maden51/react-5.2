/* eslint-disable jsx-a11y/anchor-is-valid */
import { nanoid } from 'nanoid';
import './App.css';
import Card from './components/Card'
import Adv from './components/Adv';
import FindInput from './components/FindInput';
import List from './components/List';
import getTime from './time';

const headerTitles = [
  {
    id: nanoid(),
    title: 'Сейчас в СМИ'
  },
  {
    id: nanoid(),
    title: 'в Германии'
  },
  {
    id: nanoid(),
    title: 'Рекомендуем'
  }
];

const headerList = [
  {
    id: nanoid(),
    title: 'Путин упростил получение автомобильных номеров',
    url: '#'
  },
  {
    id: nanoid(),
    title: 'В команде Зеленского раскрыли план реформ В Украине',
    url: '#'
  },
  {
    id: nanoid(),
    title: '<<Турпомощь>> прокомментирова гибель десятков россиян в Анталье',
    url: '#'
  },
  {
    id: nanoid(),
    title: 'Суд закрыл дело Демпартии США против России',
    url: '#'
  },
  {
    id: nanoid(),
    title: 'В Украине призвали создать ракеты для удара по Москве',
    url: '#'
  },
]

const currencies = [
  {
    id:nanoid(),
    title: 'USD MOEX',
    price: '63,62',
    change: '+0,09'
  },
  {
    id:nanoid(),
    title: 'EUR MOEX',
    price: '70,86',
    change: '+0,14'
  },
  {
    id:nanoid(),
    title: 'НЕФТЬ',
    price: '64,90',
    change: '+1,63%'
  }
]

const advImage = {
  id: nanoid(),
  url:"https://i.pravatar.cc/100?u=a042581f4e29026704d"
}

const inputTitles = [
  {
    id: nanoid(),
    title: 'Видео'
  },
  {
    id: nanoid(),
    title: 'Картинки'
  },
  {
    id: nanoid(),
    title: 'Новости'
  },
  {
    id: nanoid(),
    title: 'Карты'
  },
  {
    id: nanoid(),
    title: 'Маркет'
  },
  {
    id: nanoid(),
    title: 'Переводчик'
  },
  {
    id: nanoid(),
    title: 'Эфир'
  },
  {
    id: nanoid(),
    title: 'ещё'
  },
]

const randomFind = {
  id: nanoid(),
  text: 'фаза луны сегодня'
}

const WeatherIcon = () => {
  return <i className="fa-solid fa-cloud-rain"></i>
}

const PlayIcon = () => {
  return <i className="fa-solid fa-play fa-sm"></i>
}

const weather = {
    title: 'Погода',
    icon: WeatherIcon(),
    temp: '+17°',
    forecast: {
      morning: 'утром +17',
      day: 'днём +20'
    }
}

const map = {
  title: 'Карта Германии'
}

const broadCast = {
  title: 'Эфир',
  content: [
    {
      id: nanoid(),
      icon: PlayIcon(),
      subTitle: 'Управление как искусство',
      channel: 'Успех'
    },
    {
      id: nanoid(),
      icon: PlayIcon(),
      subTitle: 'Ночь. Мир в это время',
      channel: 'EarthTV'
    },
    {
      id: nanoid(),
      icon: PlayIcon(),
      subTitle: 'Андрей Вознесенский',
      channel: 'Совершенно секретно'
    }
  ]
};

const visiting = {
  title: 'Посещаемое',
  content: [
    {
      id: nanoid(),
      name: 'Недвижимость',
      description: 'о сталинках'
    },
    {
      id: nanoid(),
      name: 'Маркет',
      description: 'люстры и светильники'
    },
    {
      id: nanoid(),
      name: 'Авто.ру',
      description: 'привод 4х4 до 500000'
    }
  ]
};

const tvProgram = {
  title: 'Телепрограмма',
  content: [
    {
      id: nanoid(),
      time: '02:00',
      name: 'ТНТ. Best',
      channel: 'ТНТ International'
    },
    {
      id: nanoid(),
      time: '03:00',
      name: 'Джинглики',
      channel: 'Карусель Int'
    },
    {
      id: nanoid(),
      time: '04:00',
      name: 'Наедине со всеми',
      channel: 'Первый'
    }
  ]
}; 

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-main">
          <div className="header-titles">
              <List className="titles">
                {headerTitles.map((header) => (
                  <li key={header.id}>{header.title}</li>
                ))}
              </List>
              <span className="date">{getTime(Date())}</span>
            </div>
            <div className="header-content">
              <List className="header-list">
                  {headerList.map((item) => (
                    <li key={item.id}>
                      <i className="fa-solid fa-rss" style={{marginRight: 10}}></i>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
              </List>
              <List className="currency-list">
                  {currencies.map((item) => (
                    <li key={item.id}>
                    <span className="cur-main">{item.title} {item.price}</span>
                    <span className="cur-submain"> {item.change}</span></li>
                  ))}
                  <button className="currency-btn">...</button>
              </List>
            </div>
        </div>
        <div className="header-aside">
          <div className="show-content">
              <Adv img={advImage.url} id={advImage.id} className="header-img">
                <h3 className="header-aside__title">Работа над ошибками</h3>
                <span>Смотрите на яндексе и запоминайте</span>
              </Adv>
            </div>
        </div>
      </div>
      <main className="main">
        <List className="input-titles">
          {inputTitles.map((item) => (
            <li key={item.id} style={{cursor: 'pointer'}}>{item.title}</li>
          ))}
        </List>
        <FindInput className="input-group">
          <span>Найдётся всё. Например, <i className="random-find"> {randomFind.text}</i> </span>
        </FindInput>
        <Adv img={"https://via.placeholder.com/900x100"} alt="баннер" className="main-banner"></Adv>
      </main>
      <footer className="footer">
        <div className="footer-content">
            <Card className="weather-card card" title={weather.title}>
              <div className="weather-left">
                {weather.icon} {weather.temp}
              </div>
              <div className="weather-right">
                  <div>{weather.forecast.morning},</div>
                  <div>{weather.forecast.day}</div>
              </div> 
            </Card>
            <Card className="map-card card" title={map.title}>
              <div>Расписание</div>
            </Card>
            <Card className="broadcast-card card" title = {broadCast.title}>
              <List className="broadcast-list">
                {broadCast.content.map((item) => (
                  <li key={item.id}>{item.icon}<a href="#">{item.subTitle}</a> {item.channel}</li>
                ))}
              </List>
            </Card>
            <Card className="visited-card card" title = {visiting.title}>
              <List className="visited-list">
                {visiting.content.map((item) => (
                  <li key={item.id}><a href="#">{item.name}</a> — {item.description}</li>
                ))}
              </List>
            </Card>
            <Card className="tvProgram-card card" title = {tvProgram.title}>
              <List className="tvProgram-list">
                {tvProgram.content.map((item) => (
                  <li key={item.id}>{item.time} <a href="#">{item.name}</a> {item.channel}</li>
                ))}
              </List>
            </Card>
        </div>
      </footer>
    </div>
  );
}

export default App;

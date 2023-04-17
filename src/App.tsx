import './App.css';
import './index.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Home } from './Pages/Home/Organoids/Home';
import { Header } from './Common/Header/Organoids/Header';
import { Footer } from './Common/Footer/Organoids/Footer';
import { Portfolio } from './Pages/Portfolio/Organoids/Portfolio';
import { Blog } from './Pages/Blog/Organoids/Blog';
import { Snippet } from './Pages/Snippet/Organoids/Snippet';
import { setScreenSizeEvent } from './Common/Size/Size';
import { setCodeItemsOriginal } from './Common/Lists/CodeItemsOriginal';
import { setProjectItemsOriginal } from './Common/Lists/ProjectItemsOriginal';
import { setBlogItemsOriginal } from './Common/Lists/BlogItemsOriginal';


import { $choiseLang, setchoiseLang } from './Common/Header/Logics/Langhook';
import { useStore } from 'effector-react';

import Cepr from "./Common/Projects/Cepr.png"
import OV from "./Common/Projects/OV.png"
import BR from "./Common/Projects/BR.png"
import SRMZHKH from './Common/Projects/SRMZHKH.png'
import CeprDash from './Common/Projects/CeprDash.png'

import BlogOne from "./Common/Blog/1.jpg"
import { ApiGitHub, IApiGitHub } from './Common/ApiGitHub';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Header__Home": "Home",
          "Header__Portfolio": "Portfolio",
          "Header__Snippet": "Snippet",
          "Header__Blog": "Blog",
          "Footer__Title": "Reach me out",
          "Home__Title": "Hi, I'm Cyril Strone, Frontend developer who loves to learn and work with a team.",
          "Bio__Biography__Title": "Biography",
          "Bio__Biography__Description": `I have been studying IT for over 5 years. Commercial experience 2 years. Passionate about React, TypeScript.`,
          "Bio__Connect__Title": "Lets connect",
          "Do__Description__Title": "What I do",
          "Do__Description__Text": "Creation and support of websites, development of the external interface. My motto: Simplicity and functionality are a priority in equal measure.",
          "Do__Cards__One__Title": "Web development",
          "Do__Cards__One__Description": "Layout of web pages according to the layout. Refactoring of the written code. Bug fixes.",
          "Do__Cards__Two__Title": "Modern сomponents",
          "Do__Cards__Two__Description": "Development of the logic of the components.Introduction of new components into existing projects.",
          "Project__Title": "Featured Project",
          "Project__Button": "See More",
          "Code__Title": "Code Snippet",
          "Portfolio__Header__Title": "Projects in which I participated.",
          "Snippet__Title": "Code Snippet",
          "Snippet__SearchBar__Title": "Search code snippet",
          "Snippet__SearchBar__InputBar": "Type your favorite snippet here, hehehe .....",
          "Blog__Header__Title": "This is my Blog",
          "BlogItem__Button": "Show",
          "BlogItem__Button__Text": "Hide",

          "CodeItemsOriginal__One__name": "React-Solutions",
          "CodeItemsOriginal__One__description": "In this project, I collect all the problems that I encounter while learning React.",

          "CodeItemsOriginal__Two__name": "Cyril Strone",
          "CodeItemsOriginal__Two__description": "Code of the website you are currently on.",

          "CodeItemsOriginal__Three__name": "SevenWinds",
          "CodeItemsOriginal__Three__description": "A test task for the guys from SevenWinds.",

          "CodeItemsOriginal__Four__name": "UniSchool",
          "CodeItemsOriginal__Four__description": "Pet-project with articles and teachers with students.",

          "CodeItemsOriginal__Five__name": "My first Website",
          "CodeItemsOriginal__Five__description": "My first pure js and html project.",

          "CodeItemsOriginal__Six__name": "Clock and semicircle",
          "CodeItemsOriginal__Six__description": "Test task, the essence of which is to get a value from api and display it as a clock.",

          "ProjectItemsOriginal__One__name": "Presentation",
          "ProjectItemsOriginal__One__description": "Presentation for the company's clients. 3D models, many libraries and offline version.",
          "ProjectItemsOriginal__One__type": "Web Development",

          "ProjectItemsOriginal__Two__name": "OV",
          "ProjectItemsOriginal__Two__description": "Website catalog of a clothing store.",
          "ProjectItemsOriginal__Two__type": "Web Development",

          "ProjectItemsOriginal__Three__name": "Business Roulette",
          "ProjectItemsOriginal__Three__description": "Social network for lightning-fast search and establishment of business contacts.",
          "ProjectItemsOriginal__Three__type": "Web Development(in work)",

          "ProjectItemsOriginal__Four__name": "CRM System",
          "ProjectItemsOriginal__Four__description": "A system that helps to control all channels of communication with residents of housing and communal services companies.",
          "ProjectItemsOriginal__Four__type": "Web Development",

          "ProjectItemsOriginal__Five__name": "Industrial Dashboard",
          "ProjectItemsOriginal__Five__description": "A site that shows the user detailed statistics and equipment information in real time.",
          "ProjectItemsOriginal__Five__type": "Web Development",

          "BlogItemsOriginal__One__title": "Cat Barsik",
          "BlogItemsOriginal__One__description": "My cat Barsik",
          "BlogItemsOriginal__One__text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales eros sit amet diam euismod, ut dapibus sem sagittis. Nam in velit diam. Nunc porttitor lectus vitae arcu vestibulum consequat. Nam accumsan metus ut ipsum consectetur, a luctus velit ultrices. Nulla eu vulputate augue, id convallis elit. Ut neque arcu, accumsan et leo a, faucibus aliquet diam. Quisque iaculis orci sed accumsan egestas.Nunc nibh orci, rutrum quis finibus et, porta eu est. Sed ligula neque, congue a vestibulum tempus, rhoncus ut metus. Morbi dapibus neque nec justo placerat, sodales vestibulum justo tempus. Mauris ac condimentum augue. Nullam facilisis tincidunt massa vel convallis. Morbi laoreet massa ac sapien rhoncus, vitae iaculis felis luctus. Vivamus ultrices, orci sed feugiat feugiat, quam lectus vulputate nulla, at egestas turpis mauris nec urna. Pellentesque semper neque id viverra accumsan. Phasellus congue tempus sodales. Morbi a accumsan elit. Phasellus sit amet tempus dolor, eu tempus nisi. Donec augue felis, pretium ut cursus non, porta sed lacus. Sed rhoncus dolor et rhoncus elementum. Sed tempor urna arcu, ac aliquam libero pharetra ut. Cras ornare, dolor eu tincidunt efficitur, orci nulla pharetra diam, id porttitor lorem magna nec neque. Fusce orci ligula, viverra id lorem in, commodo ornare magna.",

        }
      },
      ru: {
        translation: {
          "Header__Home": "Главная",
          "Header__Portfolio": "Портфолио",
          "Header__Snippet": "Мой код",
          "Header__Blog": "Блог",
          "Footer__Title": "Связаться со мной",
          "Home__Title": "Привет, я Кирилл, Frontend разработчик, который любит учиться и работать в команде.",
          "Bio__Biography__Title": "Биография",
          "Bio__Biography__Description": 'Я изучаю IT более 5 лет. Коммерческий опыт 2 года. В восторге от React, TypeScript.',
          "Bio__Connect__Title": "Контакты",
          "Do__Description__Title": "Чем я занимаюсь",
          "Do__Description__Text": "Создание и поддержка веб-сайтов, разработка внешнего интерфейса. Мой девиз: простота и функциональность в равной мере являются приоритетом.",
          "Do__Cards__One__Title": "Веб-разработка",
          "Do__Cards__One__Description": "Верстка веб-страниц согласно макету.Рефакторинг написанного кода. Исправление багов.",
          "Do__Cards__Two__Title": "Компоненты",
          "Do__Cards__Two__Description": "Разработка логики работы компонентов.Внедрение новых компонентов в существующие проекты.",
          "Project__Title": "Избранные проекты",
          "Project__Button": "Посмотреть больше",
          "Code__Title": "Мой код",
          "Portfolio__Header__Title": "Проекты, в которых я учавствовал.",
          "Snippet__Title": "Мой код",
          "Snippet__SearchBar__Title": "Поиск code snippet",
          "Snippet__SearchBar__InputBar": "Введите ваш любимый code snippet, хехехе .....",
          "Blog__Header__Title": "Это мой Блог",
          "BlogItem__Button": "Показать полностью",
          "BlogItem__Button__Text": "Скрыть",

          "CodeItemsOriginal__One__name": "React-Solutions",
          "CodeItemsOriginal__One__description": "В этом проекте я собираю все проблемы, с которыми я сталкиваюсь при изучении React.",

          "CodeItemsOriginal__Two__name": "Cyril Strone",
          "CodeItemsOriginal__Two__description": "Код сайта, на котором вы сейчас находитесь.",

          "CodeItemsOriginal__Three__name": "SevenWinds",
          "CodeItemsOriginal__Three__description": "Тестовое задание для ребят из SevenWinds.",

          "CodeItemsOriginal__Four__name": "UniSchool",
          "CodeItemsOriginal__Four__description": " Pet-project сайт со статьями, преподаватели и студентами.",

          "CodeItemsOriginal__Five__name": "Мой первый сайт",
          "CodeItemsOriginal__Five__description": "Мой первый проект на чистом js и html.",

          "CodeItemsOriginal__Six__name": "Часы и полукруг",
          "CodeItemsOriginal__Six__description": "Тестовое задание, суть которого в том, чтобы получить значение из api и отобразить его в виде часов.",

          "ProjectItemsOriginal__One__name": "Презентация",
          "ProjectItemsOriginal__One__description": "Презентация для клиентов компании. 3D-модели, множество библиотек и офлайн-версия.",
          "ProjectItemsOriginal__One__type": "Web Разработка",

          "ProjectItemsOriginal__Two__name": "OV",
          "ProjectItemsOriginal__Two__description": "Сайт каталог магазина одежды.",
          "ProjectItemsOriginal__Two__type": "Web Разработка",

          "ProjectItemsOriginal__Three__name": "Business Roulette",
          "ProjectItemsOriginal__Three__description": "Социальная сеть для молниеносного поиска и установления деловых контактов.",
          "ProjectItemsOriginal__Three__type": "Web Разработка(В работе)",

          "ProjectItemsOriginal__Four__name": "CRM Система ЖКХ",
          "ProjectItemsOriginal__Four__description": "Система, помогающая контролировать все каналы коммуникаций с жильцами домов ЖКХ компаний.",
          "ProjectItemsOriginal__Four__type": "Web Разработка",

          "ProjectItemsOriginal__Five__name": "Промышленный Дашборд",
          "ProjectItemsOriginal__Five__description": "Сайт, который показывает пользователю статистику и информацию оборудования в реальном времени.",
          "ProjectItemsOriginal__Five__type": "Web Разработка",

          "BlogItemsOriginal__One__title": "Кот Барсик",
          "BlogItemsOriginal__One__description": "Мой кот барсик",
          "BlogItemsOriginal__One__text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales eros sit amet diam euismod, ut dapibus sem sagittis. Nam in velit diam. Nunc porttitor lectus vitae arcu vestibulum consequat. Nam accumsan metus ut ipsum consectetur, a luctus velit ultrices. Nulla eu vulputate augue, id convallis elit. Ut neque arcu, accumsan et leo a, faucibus aliquet diam. Quisque iaculis orci sed accumsan egestas.Nunc nibh orci, rutrum quis finibus et, porta eu est. Sed ligula neque, congue a vestibulum tempus, rhoncus ut metus. Morbi dapibus neque nec justo placerat, sodales vestibulum justo tempus. Mauris ac condimentum augue. Nullam facilisis tincidunt massa vel convallis. Morbi laoreet massa ac sapien rhoncus, vitae iaculis felis luctus. Vivamus ultrices, orci sed feugiat feugiat, quam lectus vulputate nulla, at egestas turpis mauris nec urna. Pellentesque semper neque id viverra accumsan. Phasellus congue tempus sodales. Morbi a accumsan elit. Phasellus sit amet tempus dolor, eu tempus nisi. Donec augue felis, pretium ut cursus non, porta sed lacus. Sed rhoncus dolor et rhoncus elementum. Sed tempor urna arcu, ac aliquam libero pharetra ut. Cras ornare, dolor eu tincidunt efficitur, orci nulla pharetra diam, id porttitor lorem magna nec neque. Fusce orci ligula, viverra id lorem in, commodo ornare magna.",
        }
      }
    },
    lng: "ru",
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false
    }
  });
function App() {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { t } = useTranslation()
  const choiseLang = useStore($choiseLang);
  const { i18n } = useTranslation()
  useEffect(() => {
    if (localStorage.getItem("language") == undefined) {
      setchoiseLang("ru")
    } else {
      setchoiseLang(localStorage.getItem("language")?.toString() == "ru" ? "ru" : "en")
    }
  }, [i18n])

  useEffect(() => {
    if (choiseLang !== "") {
      i18n.changeLanguage(choiseLang)
      localStorage.setItem("language", choiseLang);
    }
  }, [choiseLang])



  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setScreenSizeEvent(screenSize)
  }, [screenSize])
 
  useEffect(() => {
    setBlogItemsOriginal([
      {
        title: t('BlogItemsOriginal__One__title'),
        image: BlogOne,
        description: t('BlogItemsOriginal__One__description'),
        text: t('BlogItemsOriginal__One__text'),
        id: "#1"
      }
    ])
    setCodeItemsOriginal([
      {
        name: t('CodeItemsOriginal__One__name'),
        description: t('CodeItemsOriginal__One__description'),
        technology: ["React", "TypeScript"],
        link: "https://github.com/CyrilStrone/React-Solutions",
        stars: "React-Solutions"
      },
      {
        name: t('CodeItemsOriginal__Two__name'),
        description: t('CodeItemsOriginal__Two__description'),
        technology: ["React", "TypeScript", "SASS"],
        link: "https://github.com/CyrilStrone/CyrilStrone",
        stars: "CyrilStrone"
      },
      {
        name: t('CodeItemsOriginal__Three__name'),
        description: t('CodeItemsOriginal__Three__description'),
        technology: ["React", "TypeScript"],
        link: "https://github.com/CyrilStrone/SevenWinds_Test",
        stars: "SevenWinds_Test"
      },
      {
        name: t('CodeItemsOriginal__Four__name'),
        description: t('CodeItemsOriginal__Four__description'),
        technology: ["React", "TypeScript"],
        link: "https://github.com/CyrilStrone/unischool-vite",
        stars: "unischool-vite"
      },
      {
        name: t('CodeItemsOriginal__Five__name'),
        description: t('CodeItemsOriginal__Five__description'),
        technology: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/CyrilStrone/My-First-Website",
        stars: "My-First-Website"
      },
      {
        name: t('CodeItemsOriginal__Six__name'),
        description: t('CodeItemsOriginal__Six__description'),
        technology: ["React", "TypeScript"],
        link: "https://github.com/CyrilStrone/knight-test",
        stars: "knight-test"
      }
    ])
    setProjectItemsOriginal([
      {
        new: true,
        name: t('ProjectItemsOriginal__One__name'),
        description: t('ProjectItemsOriginal__One__description'),
        technology: ["React", "TypeScript", "ThreeJS"],
        link: "",
        type: t('ProjectItemsOriginal__One__type'),
        preview: Cepr
      },
      {
        new: false,
        name: t('ProjectItemsOriginal__Four__name'),
        description: t('ProjectItemsOriginal__Four__description'),
        technology: ["React", "TypeScript"],
        link: "",
        type: t('ProjectItemsOriginal__Four__type'),
        preview: SRMZHKH
      },
      {
        new: false,
        name: t('ProjectItemsOriginal__Five__name'),
        description: t('ProjectItemsOriginal__Five__description'),
        technology: ["React", "TypeScript"],
        link: "",
        type: t('ProjectItemsOriginal__Five__type'),
        preview: CeprDash
      },

      {
        new: false,
        name: t('ProjectItemsOriginal__Two__name'),
        description: t('ProjectItemsOriginal__Two__description'),
        technology: ["React", "TypeScript"],
        link: "https://gamereviewer.ru/",
        type: t('ProjectItemsOriginal__Two__type'),
        preview: OV
      },
      {
        new: false,
        name: t('ProjectItemsOriginal__Three__name'),
        description: t('ProjectItemsOriginal__Three__description'),
        technology: ["React", "TypeScript", "Webpack"],
        link: "https://businessroulette.ru/",
        type: t('ProjectItemsOriginal__Three__type'),
        preview: BR
      }
    ])

  }, [choiseLang, t])
  return (
    <div className="App">
      <div className="App__Languages" onClick={() => choiseLang !== "" && setchoiseLang(choiseLang == "ru" ? "en" : "ru")}>
        {choiseLang == "en" ? ("en") : ("ru")}
      </div>
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Snippet" element={<Snippet />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

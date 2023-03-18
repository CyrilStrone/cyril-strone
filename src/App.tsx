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
import { Snippet } from './Pages/Snippet/Organoids/Snippet';
import { setScreenSizeEvent } from './Common/Size/Size';
import { setCodeItemsOriginal } from './Common/Lists/CodeItemsOriginal';
import { $choiseLang, setchoiseLang } from './Common/Header/Logics/Langhook';
import { useStore } from 'effector-react';
import { setProjectItemsOriginal } from './Common/Lists/ProjectItemsOriginal';

import Cepr from "./Common/Projects/Cepr.png"

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
          "Home__Title": "Hi Im Cyril Strone, a special human with some ability to love learning and working on teamwork. ",
          "Bio__Biography__Title": "Biography",
          "Bio__Biography__Description": `I have been studying IT for over 5 years. Commercial experience 2 years. Passionate about React, UX.`,
          "Bio__Connect__Title": "Lets connect",
          "Do__Description__Title": "What I do",
          "Do__Description__Text": "Creation and support of websites, development of the external interface. My motto: Simplicity and functionality are a priority in equal measure.",
          "Do__Cards__One__Title": "Web Development",
          "Do__Cards__One__Description": "You will receive a customized plan for your fitness journey, and lots of support.",
          "Do__Cards__Two__Title": "UX Research",
          "Do__Cards__Two__Description": "You will receive a customized plan for your fitness journey, and lots of support.",
          "Project__Title": "Featured Project",
          "Project__Button": "See More",
          "Code__Title": "Code Snippet",
          "Portfolio__Header__Title": "Project that i has been done.",
          "Snippet__Title": "Code Snippet",
          "Snippet__SearchBar__Title": "Search code snippet",
          "Snippet__SearchBar__InputBar": "Type your favorite snippet here, hehehe .....",

          "CodeItemsOriginal__One__name": "Nextjs Starter",
          "CodeItemsOriginal__One__description": "A dead simple for nextjs project.",

          "ProjectItemsOriginal__One__name": "CEPR",
          "ProjectItemsOriginal__One__description": "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
          "ProjectItemsOriginal__One__type": "Web Development",
        }
      },
      ru: {
        translation: {
          "Header__Home": "Главная",
          "Header__Portfolio": "Портфолио",
          "Header__Snippet": "Мой код",
          "Header__Blog": "Блог",
          "Footer__Title": "Связаться со мной",
          "Home__Title": "Привет, я Кирилл, особенный человек с некоторой способностью любить учиться и работать в команде.",
          "Bio__Biography__Title": "Биография",
          "Bio__Biography__Description": 'Я изучаю IT более 5 лет. Коммерческий опыт 2 года. В восторге от React, UX',
          "Bio__Connect__Title": "Контакты",
          "Do__Description__Title": "Чем я занимаюсь",
          "Do__Description__Text": "Создание и поддержка веб-сайтов, разработка внешнего интерфейса. Мой девиз: простота и функциональность в равной мере являются приоритетом.",
          "Do__Cards__One__Title": "Веб-разработка",
          "Do__Cards__One__Description": "Вы получите индивидуальный план вашего приложения и большую поддержку.",
          "Do__Cards__Two__Title": "UX-исследование",
          "Do__Cards__Two__Description": "Вы получите индивидуальный план вашего приложения и большую поддержку.",
          "Project__Title": "Избранные проекты",
          "Project__Button": "Посмотреть больше",
          "Code__Title": "Мой код",
          "Portfolio__Header__Title": "Проекты, которые сделал я.",
          "Snippet__Title": "Мой код",
          "Snippet__SearchBar__Title": "Поиск code snippet",
          "Snippet__SearchBar__InputBar": "Введите ваш любимый code snippet, хехехе .....",

          "CodeItemsOriginal__One__name": "Nextjs Starter",
          "CodeItemsOriginal__One__description": "Страшный и опасный проект.",

          "ProjectItemsOriginal__One__name": "ЦЭПР",
          "ProjectItemsOriginal__One__description": "Большой такой ух 3 дээээ крутяяяг.",
          "ProjectItemsOriginal__One__type": "Web Development",

        }
      }
    },
    lng: "en",
    fallbackLng: "en",

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
    i18n.changeLanguage(choiseLang ? ("en") : ("ru"))
    if (localStorage.getItem("language") === undefined) {
      localStorage.setItem("language", "ru");
      i18n.changeLanguage(choiseLang ? ("en") : ("ru"))
    } else {
      i18n.changeLanguage(localStorage.getItem("language")?.toString());
      setchoiseLang(localStorage.getItem("language")?.toString() == "ru" ? false : true)
    }

  }, [i18n])

  useEffect(()=>{
    if (choiseLang) {
      localStorage.setItem("language", "en");
    }else{
      localStorage.setItem("language", "ru");
    }
  },[choiseLang])

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
    console.log("asdasd")
    setCodeItemsOriginal([
      {
        name: t('CodeItemsOriginal__One__name'),
        description: t('CodeItemsOriginal__One__description'),
        technology: ["React"],
        link: "/",
        stars: 2
      },
      {
        name: t('CodeItemsOriginal__One__name'),
        description: t('CodeItemsOriginal__One__description'),
        technology: ["React"],
        link: "/",
        stars: 3
      },
      {
        name: t('CodeItemsOriginal__One__name'),
        description: t('CodeItemsOriginal__One__description'),
        technology: ["React"],
        link: "/",
        stars: 1
      },
      {
        name: t('CodeItemsOriginal__One__name'),
        description: t('CodeItemsOriginal__One__description'),
        technology: ["React"],
        link: "/",
        stars: 1
      }
    ])
    setProjectItemsOriginal([{
      new: true,
      name: t('ProjectItemsOriginal__One__name'),
      description: t('ProjectItemsOriginal__One__description'),
      technology: ["React"],
      link: "https://portal.coolantsatellite.com/presentation/",
      type: t('ProjectItemsOriginal__One__type'),
      preview: Cepr
    },
    {
      new: true,
      name: t('ProjectItemsOriginal__One__name'),
      description: t('ProjectItemsOriginal__One__description'),
      technology: ["React"],
      link: "https://portal.coolantsatellite.com/presentation/",
      type: t('ProjectItemsOriginal__One__type'),
      preview: Cepr
    }])
  }, [choiseLang, t])
  return (
    <div className="App">
      <div className="App__Languages" onClick={() => setchoiseLang(!choiseLang)}>
        {choiseLang ? ("en") : ("ru")}
      </div>
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Snippet" element={<Snippet />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

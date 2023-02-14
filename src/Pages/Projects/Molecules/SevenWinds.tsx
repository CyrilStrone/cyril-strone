import "../Styles/SevenWinds.css";
import Preview from "../Common/SevenWinds.png"
export const SevenWinds = () => {
    return (
        <div className="SevenWinds">

            <div className="SevenWinds__About">
                <a href="https://wakatime.com/badge/user/7f9aaba0-b5dd-4e0d-9f70-cd2b6ba680d1/project/233cd0a9-b675-4704-a643-93499bca52e9">
                    <img src="https://wakatime.com/badge/user/7f9aaba0-b5dd-4e0d-9f70-cd2b6ba680d1/project/233cd0a9-b675-4704-a643-93499bca52e9.svg" alt="wakatime" />
                </a>
                <a href="https://wakatime.com/badge/github/CyrilStrone/SevenWinds_Test"><img src="https://wakatime.com/badge/github/CyrilStrone/SevenWinds_Test.svg" alt="wakatime"/></a>
                <div className="SevenWinds__About__Exercise">
                    Задание
                </div>
                <div className="SevenWinds__About__Exercise__Text">
                    Требуется создать сайт по макету в фигме.
                </div>
                <div className="SevenWinds__About__Summary">
                    Резюме
                </div>
                <div className="SevenWinds__About__Summary__Text">
                    - В самом начале создайте себе общую сущность, и используйте её ID.<br/> 
                    - При отсутствии каких либо данных отображайте строку в режиме редактирования.<br/> 
                    - Блокируйте создание потомков у строки, если она находится в режиме редактирования или ещё не была отправлена на сервер.<br/> 
                    - Запрашивайте все данные с сервера только при первом входе на экран, актуализируйте данные локально.<br/> 
                    - При каких либо взаимодействиях (создание, обновление и удаление строки) сервер будет возвращать вам массив изменённых строк, вы должны актуализировать локальные данные с помощью этих.<br/> 
                    - Вы должны сверстать всё что есть на макете, но всё что не является таблицей - не должно иметь какого либо функционала.
                </div>
            </div>
            <div className="SevenWinds__Pictures">
                <img src={Preview} className="SevenWinds__Pictures__Preview" alt="" />

            </div>
        </div>
    );
};

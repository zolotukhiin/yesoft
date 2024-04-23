import './Aboutme.css';

const elements = [
    {
      id: 1,
      first_name: "Дмитрий",
      second_name: "Золотухин",
      middle_name: "Максимович",
      age: "19",
      photo: "./src/assets/images/react_logo.png",
      telegram_link: "https://t.me/zolotukhin_d"
    }
]
  
export function Aboutme() {

    return (
      <>
        {elements.map((element) => (
            <div className="card" key={element.id}>
                <img src={element.photo} alt="Photo" className="photo"/>
                <div className="container">
                    <h2><b>{element.first_name} {element.middle_name} {element.second_name}</b></h2>
                    <p>{element.age} years old</p>
                </div>
                <a href={element.telegram_link} target="_blank">
                    <button className="button">Telegram!</button>
                </a>
          </div>
        ))}
      </>
    );
}
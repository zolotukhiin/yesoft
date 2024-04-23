import './Competens.css';

const elements = [
    {
        id: "1",
        title: "Python",
        description: "Мощный и простой язык программирования"
    },
    {
        id: "2",
        title: "C++",
        description: "Высокоэффективный язык программирования"
    },
    {
        id: "3",
        title: "JavaScript",
        description: "Язык программирования для веб-приложений"
    },
    {
        id: "4",
        title: "React",
        description: "JavaScript-библиотека с открытым исходным кодом"
    }
]
  
export function Competens() {

    return (
      <>
        <h1>I have some skills in this elements</h1>
        <div className="competency-container">
            {elements.map((element) => (
                <div key={element.id} className="competency-card">
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                </div>
            ))}
        </div>
      </>
    );
}
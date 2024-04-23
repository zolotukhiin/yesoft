import './Featureskills.css';

const technologies = [
    {
        id: "1",
        title: "GraphQL",
        description: "Мощный язык запросов для вашего API. Позволяет клиентам запрашивать только те данные, которые им нужны, и ничего лишнего."
    },
    {
        id: "2",
        title: "Docker",
        description: "Платформа для разработки, доставки и запуска приложений в контейнерах. Упрощает управление инфраструктурой и развертывание приложений."
    },
    {
        id: "3",
        title: "Kubernetes",
        description: "Открытая платформа для автоматизации развертывания, масштабирования и управления контейнеризированными приложениями."
    },
    {
        id: "4",
        title: "Machine Learning",
        description: "Область искусственного интеллекта, позволяющая компьютерам обучаться на основе данных и прогнозировать результаты без явного программирования."
    },
    {
        id: "5",
        title: "AWS",
        description: "Облачная платформа Amazon Web Services, предоставляющая широкий набор услуг для разработки, развертывания и масштабирования приложений."
    },
    {
        id: "6",
        title: "TypeScript",
        description: "Статически типизированный вариант JavaScript, который упрощает разработку сложных приложений, улучшая производительность и читаемость кода."
    },
    {
        id: "7",
        title: "Node.js",
        description: "Среда выполнения JavaScript на стороне сервера, которая позволяет создавать масштабируемые и быстрые сетевые приложения."
    },
    {
        id: "8",
        title: "Vue.js",
        description: "Прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов. Легковесный, быстрый и простой в освоении."
    },
    {
        id: "9",
        title: "Flutter",
        description: "UI-фреймворк от Google для создания кроссплатформенных мобильных приложений. Позволяет использовать один и тот же код для iOS и Android."
    },
    {
        id: "10",
        title: "React",
        description: "JavaScript-библиотека для создания пользовательских интерфейсов. Популярна благодаря своей эффективности и удобству в использовании."
    }
]

export function Featureskills() {
    return (
        <>
            <h1>I wanna to learn this elements</h1>
            <div className="featureskills-container">
                {technologies.map((technology) => (
                    <div key={technology.id} className="featureskills-card">
                        <h2>{technology.title}</h2>
                        <p>{technology.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

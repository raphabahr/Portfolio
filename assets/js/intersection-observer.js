const intersectionObserverOptions = {
    rootMargin: '0px 0px -200px 0px'
};

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            return;
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, intersectionObserverOptions);

const elements = [
    document.querySelector('.conteudo__texto')
];

elements.forEach(element => observer.observe(element));
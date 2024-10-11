

function navbar() {
    return `
    <h1> meu site</h1>
    <nav>
        <a href="/">inicio</a>
        <a href="/sobre">sobre</a>
        <a href="/contato">contato</a>
    </nav>
    <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>`;
}
document.body.insertAdjacentHTML('afterbegin', navbar());
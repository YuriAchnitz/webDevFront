import './titleBar.css'

function TitleBar() {
    return (
        <div className="titleBar">
            <h1 style={{ marginRight: "2rem" }}>BAR DO ZÉ</h1>
            <h3>Simplesmente o melhor para sua barriga!</h3>
            <img className='logo' src='/logo192.png' alt='Zé' />

        </div>
    )
}

export default TitleBar;
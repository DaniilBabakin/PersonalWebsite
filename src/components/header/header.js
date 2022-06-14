import './header.css'
export default function Header(){
  return(
    <header className="header">
      <div className="header_container">
        <nav className="navbar">
          <h1 className='navbar_title'>Daniil Babakin</h1>
          <div className='navbar_links'>
            <p className='navbar_title' style={{marginRight:"60px"}}>Проекты</p>
            <p className='navbar_title'>Контакты</p>
          </div>
        </nav>
      </div>
    </header>
  )
}
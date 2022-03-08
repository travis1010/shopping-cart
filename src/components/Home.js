import '../styles/Home.css'

function Home() {
  const img = require('../assets/cover.jpg');
  return (
    <div className='Home'>
      <h1>This Disc Golf Site</h1>
      <img src={img}></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in semper arcu. Proin suscipit justo eget magna suscipit, 
        nec eleifend metus molestie. Aenean a ornare ligula, vel pretium enim. Duis accumsan eu augue id tincidunt. Quisque vestibulum 
        rhoncus nunc, at hendrerit massa luctus vitae. Nullam bibendum ut tellus ut convallis. Maecenas tincidunt nec turpis non 
        convallis. Nulla tellus quam, laoreet sit amet rutrum et, euismod non lacus. Phasellus malesuada, sem in gravida interdum, 
        neque erat lobortis ante, eu laoreet urna augue non nibh. Donec condimentum in ligula et vestibulum. Fusce facilisis consectetur 
        ipsum et aliquam. Duis dapibus nulla a condimentum fermentum. Aliquam erat volutpat. Morbi efficitur leo id risus vulputate, at 
        venenatis lectus pharetra. Mauris vehicula aliquet pharetra.</p>
    </div>
  )
}

export default Home;
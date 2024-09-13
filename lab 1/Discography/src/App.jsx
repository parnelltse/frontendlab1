

function App() {

  const artist = "https://cdn.hmmagazine.com/wp-content/uploads/2020/06/10074750/neck-deep.jpg"
  

  return (
  <div className="app">
    <section id="content">
      <header>
        <div className="head">
          <h1>Artist Discography</h1>
        </div>
      </header>

        <main>
          <div>
            <img src={artist} alt=" " className="photo"/>
          </div>
          <div>
          <p className="artist">Neck Deep Albums</p>
          </div>

          <div className="album_list">
            <details className="list">
            <summary className="album">Rain in July</summary>
            <ol className="names">
              <li>"Kick It"</li>
              <li>"Silver Lining"</li>
              <li>"What did you expect?"</li>
              <li>"Over and Over"</li>
              <li>"A Part of Me"</li>
              <li>"I couldn't Wait to Leave 6 Months Ago"</li>
              <li>"All Hype No Heart"</li>
            </ol>
            </details>

            <details className="list2">
            <summary className="album">Neck Deep</summary>
            <ol className="names">
              <li>"Dumbstruck Dumbfuck"</li>
              <li>"Sort Yourself Out"</li>
              <li>"This Is All My Fault"</li>
              <li>"We Need More Bricks"</li>
              <li>"Heartbreak of the Century"</li>
              <li>"Go Outside!"</li>
              <li>"Take Me with You"</li>
              <li>They May Not Mean To (But They Do)</li>
              <li>It Won't Be Like This Forever</li>
              <li>Moody Weirdo</li>
            </ol>
            </details>
          </div>

        </main>

          <section>

          </section>
          <footer>

          </footer>
    </section>
  </div>
  )
}

export default App

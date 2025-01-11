import './App.css'

function App() {

     return (
          <div
               style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    backgroundImage: 'url(back.svg)',
                    backgroundSize: "cover",
               }}
          >
               <img src="logo.svg" alt="logo"
                    style={{
                         width: '75%',
                         margin: 'auto',
                         display: 'block',
                         backgroundColor: 'transparent',
                    }}
               />
          </div>
     )
}

export default App
